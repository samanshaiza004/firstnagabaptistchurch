# First Naga Baptist Church website

The public website for First Naga Baptist Church in the Dallas–Fort Worth area. It is a statically generated Astro site containing the church story, leadership, service schedule, events, giving instructions, contact information, and a Netlify-powered contact form.

## Stack

- Astro 7 with strict TypeScript
- Tailwind CSS 4
- Astro content collections backed by JSON
- Astro's responsive image pipeline
- Netlify static hosting and Netlify Functions
- Nodemailer with Yahoo SMTP for contact delivery

The public site ships no React runtime and requires no database, authentication, CMS, or SSR server.

## Local development

Use Node.js 22.21.1 (see `.nvmrc`) and Bun:

```bash
bun install
bun run dev
```

For the static site and Netlify contact function together:

```bash
bun run dev:netlify
```

## Quality checks

```bash
bun run test
bun run lint
bun run check
bun run build
bun run preview
```

## Content updates

- Events: `src/data/events.json`
- Leadership and trustees: `src/data/people.json`
- Ministry teams: `src/data/ministries.json`
- Shared church details: `src/site-config.ts`
- Service-time policy: `src/lib/service-time.ts`
- Active photographs: `src/assets/images/`
- QR codes and public metadata: `public/`
- Original/unused photographs: `source-assets/originals/`

Content data is validated during type checking and builds. Each entry needs a stable, unique `id`. Service time is updated in the browser for the `America/Chicago` time zone: 3:30 PM during daylight saving time and 3:00 PM during standard time.

## Deployment

`netlify.toml` configures the production build and publish directory. Keep these environment variables in Netlify:

```text
EMAIL_USER=firstnagabaptistchurch@yahoo.com
EMAIL_APP_PASSWORD=your-yahoo-app-password
CONTACT_EMAIL_TO=recipient@example.com
```

The production domain is `https://firstnagabaptistchurch.org`.
