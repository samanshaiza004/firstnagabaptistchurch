# Lungpeola Sayai Scholarship — publishing workflow

The scholarship page is a permanent `/scholarship` route with one Sanity singleton for program content and the current annual cycle. Annual information is not rolled forward automatically; staff must review and explicitly update each new cycle.

## Current 2026 application

The supplied 2026 application and website brief are the temporary source of truth. The page displays their date, award facts, eligibility, preferences, application steps, contact details, and memorial account. Since the application says November 8, 2026 but gives no cutoff hour or timezone, the page shows the date only and does not claim an exact cutoff time.

The website embeds the original four-page printable PDF at `public/documents/lungpeola-sayai-scholarship-application.pdf`. It has no interactive fillable fields. The page tells applicants to print, complete, sign, and email the application with one professor recommendation letter. A descriptive download link is provided before the embedded preview for mobile devices and PDF viewers that do not display the iframe.

The memorial narrative and remembered words are attributed to the supplied scholarship information sheet. No photograph is used. If church leadership or the family provides corrected or approved wording, update the Sanity singleton and replace the temporary copy.

## Sanity editing and cycle status

In Sanity, edit **Lungpeola Sayai Scholarship**. The web page can display a complete set of current application details while its status is **Draft**, labeling them **Current application information** rather than claiming the cycle is open. Set the status to **Applications open** only when the church is ready to accept applications.

- **Draft:** if year, deadline date, award facts, eligibility, steps, submission email, and subject are present, the current information and application actions are displayed. Incomplete drafts remain hidden.
- **Applications open:** displays the explicit open status and current application details.
- **Applications closed:** keeps cycle facts and eligibility visible but removes application and submission actions.
- **Selection underway:** keeps cycle information available without application actions.
- **Cycle concluded:** preserves the past cycle information on the permanent page.
- **Awaiting next cycle:** shows the no-cycle message. Staff must enter and explicitly publish a new cycle; dates never recur automatically.

The original PDF is included with the Astro site as a fallback. An optional PDF uploaded to the Sanity `Application PDF` or `Additional printable application PDF` field replaces it on the page.

## Deadline behavior

When an exact cutoff timestamp and timezone are confirmed, Astro derives the closed state from that timestamp. The Netlify Scheduled Function can then request a rebuild after the cutoff so the static page refreshes. If only a calendar date is known, the website displays that date without inventing a time and does not auto-close; staff must change the status to **Applications closed** after the deadline. The supplied 2026 materials provide no exact cutoff, so manually close that cycle.

For automatic refresh after a future timestamped cutoff, create a Netlify Build Hook for the production branch and save its URL as the secret environment variable `NETLIFY_BUILD_HOOK_URL`. The scheduled function also needs the existing public Sanity project and dataset values. `SCHOLARSHIP_SITE_URL` is optional; by default it checks `https://firstnagabaptistchurch.org`. The hook URL is secret and must not be committed.

## Applicant information and privacy

The application requests contact information, financial-need details, and a professor recommendation. The current page follows the PDF's email-submission instructions and does not make a promise about confidentiality or record retention. Before the next cycle, confirm who may access submissions, how they are shared with reviewers, when they are deleted, and how applicants can ask questions. Keep the application mailbox secured and monitored.

## Initial content migration

The CMS migration creates the scholarship singleton only when it does not already exist, so rerunning the import will not replace scholarship edits made in Sanity. The initial cycle remains in Draft status; its supplied application facts are shown as current information. The operations and privacy details above should be reviewed and updated when church staff confirms them.
