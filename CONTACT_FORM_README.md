# Contact form operations

The contact page uses a small project-owned React hook instead of a third-party
form framework. This keeps the contact route smaller and ensures the browser and
server use matching validation rules.

## Request flow

1. `src/contact/contact-form.tsx` renders accessible, controlled fields.
2. `src/hooks/useContactForm.ts` validates and posts JSON to
   `/.netlify/functions/contact-email`.
3. `netlify/functions/contact-email.ts` parses and validates the request again.
4. A hidden honeypot field silently discards basic bot submissions.
5. User-provided content is HTML-escaped before the email template is created.
6. Nodemailer sends through Yahoo SMTP and sets the visitor's address as
   `replyTo`.
7. The browser displays either a confirmed success state or the function's
   delivery error.

## Required environment variables

```text
EMAIL_USER=firstnagabaptistchurch@yahoo.com
EMAIL_APP_PASSWORD=your-yahoo-app-password
CONTACT_EMAIL_TO=recipient@example.com
```

- `EMAIL_APP_PASSWORD` is required and must be a Yahoo app password.
- `EMAIL_USER` defaults to the church Yahoo address.
- `CONTACT_EMAIL_TO` defaults to the recipient currently configured in the
  function, but setting it explicitly in Netlify is recommended.

Never commit `.env`; it is ignored by Git.

## Testing

Run `bun dev`, submit invalid data to verify field errors, and test one real
message only in an environment with the intended recipient and SMTP credentials.
Netlify function logs should be checked after a production test.

The function enforces request size and field length limits and returns `503`
when email credentials are absent. Production-grade abuse protection such as
Netlify rate limiting or Cloudflare Turnstile can be added later if spam becomes
a problem.
