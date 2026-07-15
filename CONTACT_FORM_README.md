# Contact form operations

The contact page uses semantic HTML and a small browser TypeScript module. Client and server import the same payload normalization and validation rules from `src/lib/contact.ts`.

## Request flow

1. `src/pages/contact.astro` validates the visitor's fields and posts JSON to `/.netlify/functions/contact-email`.
2. The Netlify function limits the request size, parses it, and validates it again.
3. A hidden `website` honeypot silently accepts basic bot submissions without sending email.
4. User content is escaped before the HTML email is built.
5. Nodemailer sends through Yahoo SMTP and uses the visitor's email as `replyTo`.
6. The browser shows a confirmed delivery state or the function's actual error.

## Environment

```text
EMAIL_USER=firstnagabaptistchurch@yahoo.com
EMAIL_APP_PASSWORD=your-yahoo-app-password
CONTACT_EMAIL_TO=recipient@example.com
```

`EMAIL_APP_PASSWORD` must be a Yahoo app password. Never commit `.env`. Without the password the function returns `503`; it does not claim the message was sent.

Run `bun run dev:netlify` to exercise local validation and failure states. Send one controlled real message only after deployment with the intended recipient and SMTP credentials, then confirm the corresponding Netlify function log.
