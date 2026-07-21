# First Naga Baptist Church website

The public website for First Naga Baptist Church in the Dallas–Fort Worth area. It is a statically generated Astro site with a separately hosted Sanity Studio for church media staff.

## Architecture

- Astro 7, strict TypeScript, and Tailwind CSS 4
- Sanity Content Lake for published website content and media
- Separately deployed Sanity Studio; React is not shipped by the public site
- Netlify static hosting and a Netlify Function for contact email
- Browser-side `America/Chicago` service-time selection so static builds do not freeze DST

Publishing content in Sanity calls a Netlify build hook. Astro fetches published content during the build and Netlify replaces the live deployment only after that build succeeds.

## Local development

Use Node.js 22.21.1 and Bun. Copy `.env.example` to `.env`, then keep `CMS_SOURCE=local` until the production dataset has been migrated and verified.

```bash
bun install
bun run dev
```

Run the site and Netlify contact function together with `bun run dev:netlify`.

The local source is an explicit migration fixture made from `src/data/`, `src/lib/cms/local-content.ts`, and the active local images. It is not a production fallback. Production must set `CMS_SOURCE=sanity` after the initial migration.

## Sanity Studio

The Studio is a standalone sibling project at `../studio-first-naga-baptist-church-website`, connected to Sanity project `6h6upd33` and the `production` dataset. From this app folder, run:

```bash
bun run studio:dev
bun run studio:build
bun run studio:deploy
```

The public `/admin` page links authorized staff to the hosted Studio and is excluded from the sitemap and search indexing.

## Migration and backups

Set `PUBLIC_SANITY_PROJECT_ID` and a temporary `SANITY_WRITE_TOKEN`, then run `bun run cms:migrate`. The importer is idempotent: stable document IDs are replaced in place and previously uploaded migration assets are reused by filename.

Create a complete dataset and asset export with `bun run cms:export`. The monthly GitHub Actions workflow retains rolling export artifacts for 90 days and requires `PUBLIC_SANITY_PROJECT_ID` and `SANITY_BACKUP_TOKEN` repository secrets.

## Quality checks

```bash
bun run test
bun run lint
bun run check
bun run build
bun run studio:build
```

## Deployment configuration

Netlify needs:

```text
CMS_SOURCE=sanity
PUBLIC_SANITY_PROJECT_ID=6h6upd33
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2026-07-01
PUBLIC_SANITY_STUDIO_URL=https://your-studio.sanity.studio
EMAIL_USER=firstnagabaptistchurch@yahoo.com
EMAIL_APP_PASSWORD=your-yahoo-app-password
CONTACT_EMAIL_TO=recipient@example.com
```

Never expose `SANITY_WRITE_TOKEN`, `SANITY_BACKUP_TOKEN`, or SMTP credentials with a `PUBLIC_` prefix. See [CMS_OPERATIONS.md](./CMS_OPERATIONS.md) for project creation, webhook, access, recovery, and handoff instructions.
