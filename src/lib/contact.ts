export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
}

export type ContactField = keyof ContactPayload;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const contactFields: ContactField[] = ["firstName", "lastName", "email", "phone", "subject", "message", "website"];

export function normalizeContactPayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object") return null;
  const input = value as Partial<Record<ContactField, unknown>>;
  const required: ContactField[] = ["firstName", "lastName", "email", "phone", "subject", "message"];
  if (required.some((field) => typeof input[field] !== "string")) return null;

  return Object.fromEntries(contactFields.map((field) => [field, typeof input[field] === "string" ? input[field].trim() : ""])) as unknown as ContactPayload;
}

/** Rendered in the form markup and reused as the client-side custom validity message. */
export const contactMessages = {
  firstName: "Please enter a valid first name.",
  lastName: "Please enter a valid last name.",
  email: "Please enter a valid email address.",
  phone: "Please enter a valid phone number.",
  subject: "The subject must be between 5 and 150 characters.",
  message: "The message must be between 10 and 5,000 characters.",
} as const satisfies Record<Exclude<ContactField, "website">, string>;

export const contactErrorFields = Object.keys(contactMessages) as (keyof typeof contactMessages)[];

export function validateContact(payload: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};
  if (payload.firstName.length < 2 || payload.firstName.length > 80) errors.firstName = contactMessages.firstName;
  if (payload.lastName.length < 2 || payload.lastName.length > 80) errors.lastName = contactMessages.lastName;
  if (payload.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.email = contactMessages.email;
  const phone = payload.phone.replace(/[\s\-().]/g, "");
  if (phone && !/^\+?[1-9]\d{6,14}$/.test(phone)) errors.phone = contactMessages.phone;
  if (payload.subject.length < 5 || payload.subject.length > 150) errors.subject = contactMessages.subject;
  if (payload.message.length < 10 || payload.message.length > 5000) errors.message = contactMessages.message;
  return errors;
}
