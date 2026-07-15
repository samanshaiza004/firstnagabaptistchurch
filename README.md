# First Naga Baptist Church website

The public website for First Naga Baptist Church in the Dallas–Fort Worth area.
It contains the church story, leadership, service schedule, events, giving
instructions, contact information, and a Netlify-powered contact form.

## Stack

- React 19 and TypeScript
- React Router 7 with route-level code splitting
- Vite 8
- Tailwind CSS 3
- Netlify Vite plugin and Netlify Functions
- Nodemailer with Yahoo SMTP for contact-form delivery

The site is intentionally content-first and has no database, authentication, or
CMS. Most content is maintained directly in typed React files.

## Local development

Vite 8 requires Node.js 20.19+ or 22.12+. This repository uses Bun for package
management and scripts.

```bash
bun install
bun dev
```

The Netlify Vite plugin emulates redirects, headers, and functions during local
development.

## Quality checks

```bash
bun run test
bun run lint
bun run build
bun run preview
```

## Contact email configuration

Configure these environment variables locally in `.env` and in Netlify:

```text
EMAIL_USER=firstnagabaptistchurch@yahoo.com
EMAIL_APP_PASSWORD=your-yahoo-app-password
CONTACT_EMAIL_TO=recipient@example.com
```

`EMAIL_APP_PASSWORD` is required. The function returns an honest service error
when delivery is not configured; it never reports a successful delivery after
only logging the message. See [CONTACT_FORM_README.md](./CONTACT_FORM_README.md)
for the full flow.

## Common content updates

- Events: `src/events/events-data.tsx`
- Leadership and ministry teams: `src/home/meet-members.tsx`
- Service-time policy: `src/lib/utils.ts`
- Giving methods: `src/give/donation-options.tsx`
- Shared contact information: `src/contact/contact-info.tsx` and
  `src/components/Footer.tsx`
- Public photographs and QR codes: `public/`
- Original and currently unused photographs: `source-assets/originals/` (kept
  outside `public/` so they are not included in production deployments)

Service time is calculated in the `America/Chicago` time zone: 3:30 PM during
daylight saving time and 3:00 PM during standard time.

## Deployment

Netlify should use:

```text
Build command: bun run build
Publish directory: dist
```

`public/_redirects` provides the SPA fallback, and `public/_headers` provides
baseline security headers and long-lived caching for hashed build assets.
