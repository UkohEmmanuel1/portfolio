# Emmanuel David — Portfolio

Next.js portfolio for software engineering, machine learning, applied AI, and creative work.

## Local development

Run these commands from the repository root:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The resume is at `/resume`.

## Production build

```sh
npm run build
npm start
```

## Vercel

The Next.js app lives at the repository root, alongside `package.json`, `app/`, and `next.config.ts`.

- Framework preset: Next.js
- Root Directory: repository root (leave blank or use `.`)
- Install command: default, or `npm ci`
- Build command: default, or `npm run build`
- Output directory: default
- Production branch: `main`

Branch deployments preview changes. Merge the UI branch into `main` to deploy those changes to production.

## Contact email

The contact form posts to `/api/contact`. The server sends through SMTP to
`emmanuelukoh08@gmail.com`, with the visitor's email as the Reply-To address.
SMTP credentials stay on the server. The old external Render relay is no longer used.

Set these environment variables in Vercel for Production (and Preview if needed):

- `SMTP_USER`: the account used to send mail.
- `SMTP_PASS`: its SMTP password. For Gmail, use a Google App Password, not the normal account password.

Gmail defaults to `smtp.gmail.com`, port `465`, with TLS. For another provider,
set `SMTP_HOST` and `SMTP_PORT` as well. Port `587` requires STARTTLS. Optional
`SMTP_FROM` sets a sender address authorised by your provider; otherwise the sender
is `SMTP_USER`.

After setting variables in Vercel, redeploy so the deployment receives the new values.
For local development, copy `.env.example` to `.env.local` and fill in your credentials.
Never commit `.env.local` or paste passwords into chat.

Run contact-route tests without sending any real email:

```sh
npm run test:contact
```

These tests cover validation, fixed recipients, HTML escaping, missing configuration,
SMTP rejection, authentication failure, and TLS configuration. They do not establish
that a real mailbox received a message; check delivery after configuring SMTP.
