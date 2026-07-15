import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";
import {
  normalizeContactPayload,
  validateContact,
  type ContactPayload,
} from "../../src/lib/contact";

const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

function response(statusCode: number, body: Record<string, unknown>) {
  return {
    statusCode,
    headers: jsonHeaders,
    body: JSON.stringify(body),
  };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function parsePayload(body: string | null): ContactPayload | null {
  if (!body || body.length > 20_000) return null;

  try {
    return normalizeContactPayload(JSON.parse(body));
  } catch {
    return null;
  }
}

function createEmailContent(payload: ContactPayload) {
  const fullName = `${payload.firstName} ${payload.lastName}`;
  const safe = {
    fullName: escapeHtml(fullName),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone || "Not provided"),
    subject: escapeHtml(payload.subject),
    message: escapeHtml(payload.message).replace(/\n/g, "<br>"),
  };

  const html = `
    <!doctype html>
    <html lang="en">
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #29231f;">
        <main style="max-width: 640px; margin: 0 auto; padding: 24px;">
          <h1 style="font-size: 24px;">New website message</h1>
          <p><strong>From:</strong> ${safe.fullName}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Phone:</strong> ${safe.phone}</p>
          <p><strong>Subject:</strong> ${safe.subject}</p>
          <div style="margin-top: 24px; padding: 16px; background: #f8f3e9; border-left: 4px solid #55483c;">
            ${safe.message}
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #6b625c;">
            Sent from the First Naga Baptist Church website contact form.
          </p>
        </main>
      </body>
    </html>`;

  const text = `New website message

From: ${fullName}
Email: ${payload.email}
Phone: ${payload.phone || "Not provided"}
Subject: ${payload.subject}

${payload.message}

Sent from the First Naga Baptist Church website contact form.`;

  return { html, text };
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return response(405, { error: "Method not allowed." });
  }

  const payload = parsePayload(event.body);
  if (!payload) {
    return response(400, { error: "Invalid request." });
  }

  // Honeypot fields should be invisible to people but are commonly filled by bots.
  if (payload.website) {
    return response(200, { success: true });
  }

  const errors = validateContact(payload);
  const error = Object.values(errors)[0];
  if (error) {
    return response(400, { error });
  }

  const user = process.env.EMAIL_USER || "firstnagabaptistchurch@yahoo.com";
  const password = process.env.EMAIL_APP_PASSWORD;
  const recipient = process.env.CONTACT_EMAIL_TO || "mathinghong@yahoo.com";

  if (!password) {
    console.error("EMAIL_APP_PASSWORD is not configured.");
    return response(503, {
      error:
        "Email delivery is temporarily unavailable. Please email us directly.",
    });
  }

  const { html, text } = createEmailContent(payload);
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true,
    auth: { user, pass: password },
  });

  try {
    const result = await transporter.sendMail({
      from: `"First Naga Baptist Church" <${user}>`,
      to: recipient,
      replyTo: payload.email,
      subject: `Website contact: ${payload.subject.replace(/[\r\n]/g, " ")}`,
      html,
      text,
    });

    return response(200, {
      success: true,
      messageId: result.messageId,
    });
  } catch (emailError) {
    console.error("Contact email delivery failed:", emailError);
    return response(502, {
      error: "We could not send your message. Please try again later.",
    });
  }
};
