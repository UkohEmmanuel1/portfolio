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

The contact form uses the existing external mail relay configured in `components/Contact.tsx`.
