const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const source = fs.readFileSync(path.join(__dirname, '../app/api/contact/route.ts'), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText;

const recipient = 'emmanuelukoh08@gmail.com';
const validMessage = { name: 'Jane & Co', email: 'jane@example.com', subject: 'New project', message: 'A project inquiry.', website: '' };

function loadRoute({ env = { SMTP_USER: 'sender@example.com', SMTP_PASS: 'test-only' }, send } = {}) {
  const calls = [];
  const transports = [];
  const logs = [];
  let closed = false;
  const exports = {};
  vm.runInNewContext(compiled, {
    exports,
    require(name) {
      assert.equal(name, 'nodemailer');
      return { createTransport(options) {
        transports.push(options);
        return {
          async sendMail(mail) { calls.push(mail); return send ? send(mail) : { accepted: [recipient], rejected: [] }; },
          close() { closed = true; },
        };
      } };
    },
    Request, Response, URL, Buffer,
    process: { env },
    console: { error: (...args) => logs.push(args) },
  });
  return { POST: exports.POST, calls, transports, logs, get closed() { return closed; } };
}

function request(body = validMessage, options = {}) {
  return new Request('https://portfolio.example/api/contact', {
    method: 'POST', headers: { 'content-type': 'application/json', ...options.headers },
    body: options.raw ?? JSON.stringify(body),
  });
}

test('sends to the owner, uses the visitor as reply-to, and escapes HTML', async () => {
  const route = loadRoute();
  const response = await route.POST(request({ ...validMessage, mail: 'other@example.com', message: '<script>alert("x")</script>' }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(route.calls.length, 1);
  const mail = route.calls[0];
  assert.equal(mail.to, recipient);
  assert.equal(mail.from.address, 'sender@example.com');
  assert.equal(mail.replyTo.address, 'jane@example.com');
  assert.ok(mail.html.includes('Jane &amp; Co'));
  assert.ok(mail.html.includes('&lt;script&gt;'));
  assert.ok(!mail.html.includes('<script>'));
  assert.ok(mail.text.includes('<script>'));
  assert.equal(route.transports[0].secure, true);
  assert.equal(route.closed, true);
});

test('rejects invalid input before attempting delivery', async () => {
  for (const body of [null, [], {}, { ...validMessage, email: 'not-an-email' }, { ...validMessage, subject: 'Hello\r\nBcc: other@example.com' }, { ...validMessage, message: '' }, { ...validMessage, name: 42 }]) {
    const route = loadRoute();
    assert.equal((await route.POST(request(body))).status, 400);
    assert.equal(route.calls.length, 0);
    assert.equal(route.transports.length, 0);
  }
});

test('rejects malformed JSON and oversized requests without sending', async () => {
  const route = loadRoute();
  assert.equal((await route.POST(request(null, { raw: '{' }))).status, 400);
  assert.equal((await route.POST(request(validMessage, { headers: { 'content-length': '30000' } }))).status, 413);
  assert.equal((await route.POST(request({ ...validMessage, message: 'x'.repeat(21000) }))).status, 413);
  assert.equal(route.calls.length, 0);
});

test('rejects another site and honeypot submissions', async () => {
  const route = loadRoute();
  assert.equal((await route.POST(request(validMessage, { headers: { origin: 'https://another.example' } }))).status, 403);
  assert.equal((await route.POST(request({ ...validMessage, website: 'https://spam.example' }))).status, 400);
  assert.equal(route.calls.length, 0);
});

test('reports missing credentials without attempting a send or claiming success', async () => {
  const route = loadRoute({ env: {} });
  const response = await route.POST(request());
  assert.equal(response.status, 503);
  assert.equal((await response.json()).success, undefined);
  assert.equal(route.transports.length, 0);
});

test('does not report success when SMTP rejects the recipient', async () => {
  const route = loadRoute({ send: async () => ({ accepted: [], rejected: [recipient] }) });
  const response = await route.POST(request());
  assert.equal(response.status, 502);
  assert.equal((await response.json()).success, undefined);
  assert.equal(route.closed, true);
});

test('handles authentication failure without disclosing secrets', async () => {
  const route = loadRoute({ send: async () => { throw Object.assign(new Error('private-password'), { code: 'EAUTH', responseCode: 535 }); } });
  const response = await route.POST(request());
  assert.equal(response.status, 502);
  assert.ok(!(await response.text()).includes('private-password'));
  assert.ok(!JSON.stringify(route.logs).includes('private-password'));
  assert.equal(route.calls.length, 1);
  assert.equal(route.closed, true);
});

test('requires STARTTLS on a configured submission port', async () => {
  const route = loadRoute({ env: { SMTP_USER: 'user', SMTP_PASS: 'test-only', SMTP_HOST: 'smtp.example.com', SMTP_PORT: '587' } });
  assert.equal((await route.POST(request())).status, 200);
  assert.equal(route.transports[0].host, 'smtp.example.com');
  assert.equal(route.transports[0].secure, false);
  assert.equal(route.transports[0].requireTLS, true);
});
