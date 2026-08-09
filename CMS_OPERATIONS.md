# CMS setup and church handoff

This runbook covers the external account work that cannot be completed from the repository. Perform it with church-owned accounts, not a developer’s personal account.

## 1. Establish ownership

1. Confirm Sanity project `6h6upd33` is owned by a durable church-controlled account.
2. Keep the production dataset named `production`.
3. Add two named church leaders as Sanity Administrators and require two-factor authentication.
4. Invite each approved media staff member with an individual Editor account. Do not share logins.
5. Create or transfer the GitHub repository and Netlify project so the same two leaders have owner-level recovery access.
6. Apply for Sanity’s nonprofit plan after the project ID exists. If it is declined, activate Growth before handoff; do not make editors Administrators merely to stay on the ordinary free plan.

## 2. Seed and deploy the CMS

1. Create a temporary Sanity token with write access. Store it only as `SANITY_WRITE_TOKEN` in a local `.env` file.
2. Set `PUBLIC_SANITY_PROJECT_ID=6h6upd33`, `PUBLIC_SANITY_DATASET=production`, and `PUBLIC_SANITY_API_VERSION=2026-07-01`.
3. Deploy the schema with `cd ../studio-first-naga-baptist-church-website && npx sanity schema deploy`, then return to the app folder.
4. Run `bun run cms:migrate`. Re-running the command updates the same stable documents and reuses imported assets.
5. Review events, people, ministries, photographs, page copy, and giving details in Studio. Specifically confirm the Half Yearly GBM is July 19, 2026.
6. In Sanity project settings, add the final `*.sanity.studio` origin with authenticated requests allowed. Add `http://localhost:3333` only while developing Studio locally.
7. Run `bun run studio:deploy`, note the hosted URL, and set `PUBLIC_SANITY_STUDIO_URL` in Netlify.
8. Delete the temporary migration token after seeding unless another controlled migration is planned.

## 3. Connect publishing to Netlify

1. In Netlify, create a production build hook named `Sanity publish`.
2. In Sanity project settings under API → Webhooks, create a document webhook using that build-hook URL.
3. Trigger it on create, update, and delete with this filter:

```groq
!(_id in path("drafts.**")) && _type in [
  "siteSettings", "homePage", "aboutPage", "eventsPage", "galleryPage",
  "givingPage", "contactPage", "event", "person", "ministry", "objective",
  "galleryPhoto", "galleryEvent", "givingMethod", "impactArea"
]
```

4. Treat the Netlify build-hook URL as a secret. Do not put it in the repository or public Sanity documents.
5. Add deploy-failure email notifications in Netlify for both church Administrators.
6. Configure Netlify’s production environment with `CMS_SOURCE=sanity` and the public Sanity values listed in the README. Do not set `CMS_SOURCE=sanity` until the migration and staging build pass.

## 4. Validate the cutover

Use a Netlify branch deploy first. Publish and verify:

- one harmless page-text change;
- one event date change and restoration;
- one test gallery photo with alternative text and caption, then remove it;
- one non-financial giving-copy change without altering a real payment destination.

Confirm the webhook starts a single build, the new deployment becomes live only after success, `/admin` opens the correct Studio, and the public HTML contains no React runtime. Then promote the configuration to production.

## 5. Editor operating rules

- Preview fields, check spelling, and publish only complete records. Changes normally appear after the Netlify build finishes.
- Verify names, dates, locations, image captions, and alternative text before publishing.
- Confirm photographs are appropriate for public use, especially photographs containing children. Do not store private consent records in Sanity.
- Giving details are sensitive. The custom publish action requires confirmation and records the reviewing editor and time. Always compare payment contacts and QR codes with official church records.
- If a build fails, do not repeatedly republish. The existing live deployment remains available. Open the latest Netlify deploy log, correct the validation/content problem, and publish once more.

## 6. Recovery and backups

- Sanity document history can restore recent content changes from the document menu.
- Run the GitHub `CMS backup` workflow manually after major batches of changes; it also runs monthly. Download important export artifacts before their 90-day retention expires.
- To restore an export, use Sanity’s dataset import command in a new temporary dataset first, verify it, then coordinate the production restore.
- If an Administrator loses access, the second Administrator uses the church-owned email and provider recovery procedures. Account recovery must never depend on the original developer.
- Remove staff accounts immediately when their media responsibilities end. Review Sanity, GitHub, Netlify, email, and domain access at least twice a year.
