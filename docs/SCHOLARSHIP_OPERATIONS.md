# Lungpeola Sayai Scholarship — publishing workflow

The scholarship page is a permanent `/scholarship` route with one Sanity singleton for program content and the current annual cycle. Annual information is not rolled forward automatically; staff must review and explicitly publish each new cycle.

## Before opening an application cycle

In Sanity, edit **Lungpeola Sayai Scholarship** and complete the current cycle. Leave its status at **Draft — not announced** until all of the following are confirmed:

- The eligibility and selection wording is approved for that cycle.
- The exact deadline time, date, and timezone are known. A calendar date alone is not enough to open applications.
- The approved fillable PDF is ready. Confirm that controls have accessible labels and logical reading/tab order, and resolve the recommendation-letter page before uploading. A printable companion PDF is optional.
- The submission address and exact email subject are correct, and the application mailbox is secured and monitored.
- The professor recommendation instructions say whether the applicant attaches the letter and whether a professor may send it separately and confidentially.
- The privacy statement reflects actual committee access, handling/sharing, retention, deletion, and a contact for questions.

Once complete, set the status to **Applications open** and publish. The Studio prevents an incomplete cycle from being marked open. The open state displays the application instructions/download and adds the compact homepage announcement. The footer link remains available at all times; scholarship is intentionally not added to the crowded primary navigation.

## Cycle status behavior

- **Draft — not announced:** the page remains available, but no cycle facts, application requirements, or application links are shown.
- **Applications open:** shows approved cycle details and the fillable PDF. The homepage announcement appears.
- **Applications closed:** shows the published cycle facts and requirements, but removes application and submission actions.
- **Selection underway:** keeps the cycle information available without an application action.
- **Cycle concluded:** preserves the past cycle information on the permanent page.
- **Awaiting next cycle:** shows the no-cycle message. Staff must enter and explicitly publish a new cycle; dates never recur automatically.

If an open cycle's exact cutoff passes, the Astro page derives a closed state from the deadline timestamp. A Netlify Scheduled Function checks the published Sanity cycle hourly and asks Netlify to rebuild the static site once the old page build predates the cutoff. This keeps the static HTML from advertising an expired application while preserving an explicit staff-controlled transition to **Selection underway**.

## Netlify requirement for automatic deadline refresh

Create a Netlify Build Hook for the production branch and set its URL as the secret environment variable `NETLIFY_BUILD_HOOK_URL`. The scheduled function also needs the existing public Sanity project and dataset environment values. `SCHOLARSHIP_SITE_URL` is optional; by default it checks `https://firstnagabaptistchurch.org`.

The build-hook URL is a secret and must not be committed. Without it, ordinary publishing still works, but the hourly function cannot refresh the static page at a deadline. Netlify schedules functions in UTC and only runs them for published deploys; the code compares the actual ISO deadline, so the schedule's timezone does not change the cutoff calculation.

## Memorial story

Keep the memorial story in Draft until the Sayai family approves its wording and any photograph. Attribute the biography as a family account. If adding Lungpeola's remembered words, attribute them as remembered or recorded by the family and explain any related scripture as context, not as a direct Bible quotation. The page does not show memorial copy or photography before family approval.

## Initial content migration

The CMS migration creates the scholarship singleton only when it does not already exist, so rerunning the import will not replace scholarship edits made in Sanity. The initial cycle remains a draft and has no application file or privacy statement; it is intentionally not launch-ready.
