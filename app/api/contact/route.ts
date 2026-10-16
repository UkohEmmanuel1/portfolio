import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const maxDuration = 30;

const recipient = "emmanuelukoh08@gmail.com";
const unavailable = "Email is temporarily unavailable. Please email me directly at emmanuelukoh08@gmail.com.";
const limits = { name: 120, email: 254, subject: 200, message: 8000 };

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[char] || char));
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) {
        return Response.json({ error: "Please send your message from the contact form." }, { status: 403 });
      }
    } catch {
      return Response.json({ error: "Invalid request." }, { status: 400 });
    }
  }

  if (Number(request.headers.get("content-length")) > 20000) {
    return Response.json({ error: "Your message is too long." }, { status: 413 });
  }

  let input: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw, "utf8") > 20000) {
      return Response.json({ error: "Your message is too long." }, { status: 413 });
    }
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    input = parsed as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Please provide a valid message." }, { status: 400 });
  }

  if (input.website !== undefined && input.website !== "") {
    return Response.json({ error: "Unable to send this message." }, { status: 400 });
  }

  const fields: Record<string, string> = {};
  for (const [field, maximum] of Object.entries(limits)) {
    const value = input[field];
    if (typeof value !== "string" || !value.trim() || value.trim().length > maximum) {
      return Response.json({ error: `Please enter a valid ${field}.` }, { status: 400 });
    }
    fields[field] = value.trim();
  }

  const { name, email, subject, message } = fields;
  if (!/^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(email) || /[\r\n]/.test(name + subject)) {
    return Response.json({ error: "Please check your name, email address, and subject." }, { status: 400 });
  }

  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASS;
  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || "465");
  if (!user || !password || !Number.isInteger(port) || port < 1 || port > 65535) {
    console.error("Contact email requires valid SMTP_USER, SMTP_PASS, and SMTP_PORT configuration.");
    return Response.json({ error: unavailable }, { status: 503 });
  }

  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user, pass: password },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 15000,
    dnsTimeout: 8000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  try {
    const result = await transport.sendMail({
      from: process.env.SMTP_FROM?.trim() || { name: "Portfolio contact", address: user },
      to: recipient,
      replyTo: { name, address: email },
      subject: `Portfolio message: ${subject}`,
      text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      html: `<h2>New portfolio inquiry</h2><p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p><p><strong>Subject:</strong> ${escapeHtml(subject)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });

    if (!result.accepted?.length || result.rejected?.length) {
      console.error("Contact email was not accepted by the receiving server.");
      return Response.json({ error: unavailable }, { status: 502 });
    }
    return Response.json({ success: true });
  } catch (error) {
    const details = error as { code?: string; responseCode?: number };
    console.error("Contact email delivery failed.", { code: details.code, responseCode: details.responseCode });
    return Response.json({ error: unavailable }, { status: 502 });
  } finally {
    transport.close();
  }
}
