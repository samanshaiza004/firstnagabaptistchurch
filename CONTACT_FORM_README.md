# Contact Form Email Setup Guide

This guide explains how to set up the robust email-sending functionality for the First Naga Baptist Church contact form.

## Overview

The contact form uses a hybrid approach combining:
- **Netlify Forms** for basic form handling and spam protection
- **Netlify Functions** for advanced email processing and formatting
- **Custom validation** and user feedback
- **Professional email templates**

## Features

✅ **Comprehensive Form Validation**
- Required field validation
- Email format validation
- Phone number validation (optional)
- Real-time error feedback

✅ **Professional Email Formatting**
- HTML and plain text versions
- Structured contact information
- Custom email templates

✅ **User Experience**
- Loading states during submission
- Success/error feedback
- Form reset after successful submission
- Accessibility features

✅ **Security & Spam Protection**
- Netlify Forms built-in spam filtering
- Honeypot field for bot detection
- Input sanitization

## Setup Instructions

### 1. Netlify Configuration

The contact form is already configured to work with Netlify. No additional setup is required for basic functionality.

### 2. Email Service Setup (Optional - For Advanced Features)

For custom email sending with professional formatting, set up environment variables in Netlify:

#### Using Gmail (Recommended for simplicity):

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Add Environment Variables** in Netlify Dashboard:
   ```
   EMAIL_USER=firstnagabaptist@yahoo.com
   EMAIL_APP_PASSWORD=your-16-character-app-password
   ```

#### Alternative Email Services

You can modify the Netlify function to use other services like:
- SendGrid
- Mailgun
- AWS SES
- Postmark

### 3. Netlify Forms Setup

The form is already configured with Netlify Forms. To view submissions in Netlify:

1. Go to your Netlify site dashboard
2. Navigate to **Forms** tab
3. You'll see submissions under the "contact" form

## File Structure

```
src/
├── contact/
│   └── contact-form.tsx          # Main contact form component
├── hooks/
│   └── useContactForm.ts         # Form logic and validation hook
└── routes.tsx                    # Route configuration

netlify/
└── functions/
    └── contact-email.ts          # Serverless email function

public/
└── _redirects                    # SPA routing configuration
```

## How It Works

### Form Submission Flow

1. **User fills out form** → Client-side validation runs
2. **Form validates** → If invalid, show errors; if valid, proceed
3. **Submit to Netlify Function** → Custom email processing
4. **Function processes data** → Formats email and sends to destination
5. **User gets feedback** → Success message or error details

### Email Content Structure

Emails sent to `firstnagabaptist@yahoo.com` include:

```
Subject: [User's Subject Line]

From: [Full Name]
Email: [User's Email]
Phone: [User's Phone or "Not provided"]

Message:
[User's Message Content]

---
This message was sent from the First Naga Baptist Church website contact form.
```

## Customization Options

### Email Templates

Modify the email template in `netlify/functions/contact-email.ts`:

```typescript
const createEmailContent = (formData: any) => {
  // Customize HTML and text content here
  const htmlContent = `...`;
  const textContent = `...`;
  return { htmlContent, textContent };
};
```

### Validation Rules

Adjust validation in `src/hooks/useContactForm.ts`:

```typescript
const validateForm = useCallback((): boolean => {
  // Modify validation logic here
  const newErrors: ContactFormErrors = {};
  // ... validation rules
  return Object.keys(newErrors).length === 0;
}, [formData]);
```

### Email Recipients

Change the recipient in `netlify/functions/contact-email.ts`:

```typescript
emailResult = await sendEmailWithNodemailer({
  to: 'your-email@example.com', // Change this
  subject: `Contact Form: ${formData.subject}`,
  // ...
});
```

## Testing

### Local Development

1. Start the development server: `bun dev`
2. Fill out the contact form
3. Submit the form
4. Check browser console for any errors
5. Form should show success message

### Production Testing

1. Deploy to Netlify
2. Test the contact form on the live site
3. Check Netlify Functions logs for any errors
4. Verify emails are received

## Troubleshooting

### Common Issues

**"Failed to send email" error:**
- Check environment variables in Netlify
- Verify email credentials are correct
- Check Netlify Functions logs

**Form not submitting:**
- Ensure all required fields are filled
- Check browser console for validation errors
- Verify Netlify site is properly configured

**Emails not received:**
- Check spam/junk folder
- Verify email address is correct
- Check Netlify Functions logs for delivery status

### Netlify Functions Logs

View function logs in Netlify Dashboard:
1. Go to **Functions** tab
2. Click on `contact-email` function
3. View logs for debugging

## Security Considerations

- **Input Validation**: All inputs are validated client and server-side
- **Spam Protection**: Honeypot field and Netlify Forms spam filtering
- **Environment Variables**: Sensitive credentials stored securely
- **CORS**: Function configured for cross-origin requests

## Performance

- **Client-side validation** prevents unnecessary network requests
- **Lazy loading** of validation feedback
- **Optimistic UI** with loading states
- **Error boundaries** for graceful failure handling

## Future Enhancements

Potential improvements you could add:

- **Email templates** with church branding
- **Auto-responses** to form submitters
- **Database storage** of submissions
- **Admin dashboard** for managing contacts
- **File attachments** support
- **Multi-language** support

## Support

If you encounter issues:

1. Check Netlify Functions logs
2. Verify environment variables
3. Test email credentials independently
4. Review browser console errors
5. Check Netlify site deployment status

The contact form is designed to be robust and user-friendly while maintaining professional email delivery standards.
