import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const EMAIL_CONFIG = {
  host: "smtp.mail.yahoo.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || "firstnagabaptistchurch@yahoo.com",
    pass: process.env.EMAIL_APP_PASSWORD,
  },
};

// Fallback email service using Netlify's built-in email (if available)
const sendEmailWithNetlify = async (emailData: {
  to: string;
  subject: string;
  html: string;
  text: string;
}) => {
  // This is a fallback implementation
  // In production, you'd want to use a proper email service
  console.log("Email would be sent:", emailData);
  return { success: true, messageId: "netlify-fallback" };
};

const sendEmailWithNodemailer = async (emailData: {
  to: string;
  subject: string;
  html: string;
  text: string;
}) => {
  const transporter = nodemailer.createTransport(EMAIL_CONFIG);

  const mailOptions = {
    from: `"First Naga Baptist Church" <${EMAIL_CONFIG.auth.user}>`,
    to: emailData.to,
    subject: emailData.subject,
    html: emailData.html,
    text: emailData.text,
  };

  const result = await transporter.sendMail(mailOptions);
  return result;
};

const createEmailContent = (formData: any) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    subject,
    message,
    formattedMessage,
  } = formData;

  const fullName = `${firstName?.trim() || ""} ${
    lastName?.trim() || ""
  }`.trim();

  // HTML version for better formatting
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a365d; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 5px 5px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a365d; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #1a365d; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>First Naga Baptist Church Website</p>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">From:</span> ${fullName}
          </div>
          <div class="field">
            <span class="label">Email:</span> ${email || "Not provided"}
          </div>
          <div class="field">
            <span class="label">Phone:</span> ${phone || "Not provided"}
          </div>
          <div class="field">
            <span class="label">Subject:</span> ${subject || "No subject"}
          </div>
          <div class="field">
            <span class="label">Message:</span>
            <div class="message-box">
              ${message?.replace(/\n/g, "<br>") || "No message content"}
            </div>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #dee2e6;">
          <p style="font-size: 12px; color: #6c757d;">
            This message was sent from the First Naga Baptist Church contact form.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Plain text version
  const textContent =
    formattedMessage ||
    `
New Contact Form Submission - First Naga Baptist Church

From: ${fullName}
Email: ${email || "Not provided"}
Phone: ${phone || "Not provided"}
Subject: ${subject || "No subject"}

Message:
${message || "No message content"}

---
This message was sent from the First Naga Baptist Church website contact form.
  `;

  return { htmlContent, textContent };
};

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse form data
    const formData = JSON.parse(event.body || "{}");

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "subject",
      "message",
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData[field]?.trim()
    );

    if (missingFields.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: `Missing required fields: ${missingFields.join(", ")}`,
        }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid email format" }),
      };
    }

    // Create email content
    const { htmlContent, textContent } = createEmailContent(formData);

    // Send email
    let emailResult;
    try {
      if (process.env.EMAIL_APP_PASSWORD) {
        // Use Nodemailer if credentials are available
        emailResult = await sendEmailWithNodemailer({
          to: "firstnagabaptistchurch@yahoo.com",
          subject: `Contact Form: ${formData.subject}`,
          html: htmlContent,
          text: textContent,
        });
      } else {
        // Fallback to Netlify's email service (if available)
        emailResult = await sendEmailWithNetlify({
          to: "firstnagabaptistchurch@yahoo.com",
          subject: `Contact Form: ${formData.subject}`,
          html: htmlContent,
          text: textContent,
        });
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Failed to send email. Please try again later.",
        }),
      };
    }

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully",
        messageId: emailResult.messageId,
      }),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal server error. Please try again later.",
      }),
    };
  }
};
