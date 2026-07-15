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

export function validateContact(payload: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};
  if (payload.firstName.length < 2 || payload.firstName.length > 80) errors.firstName = "Please enter a valid first name.";
  if (payload.lastName.length < 2 || payload.lastName.length > 80) errors.lastName = "Please enter a valid last name.";
  if (payload.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.email = "Please enter a valid email address.";
  const phone = payload.phone.replace(/[\s\-().]/g, "");
  if (phone && !/^\+?[1-9]\d{6,14}$/.test(phone)) errors.phone = "Please enter a valid phone number.";
  if (payload.subject.length < 5 || payload.subject.length > 150) errors.subject = "The subject must be between 5 and 150 characters.";
  if (payload.message.length < 10 || payload.message.length > 5000) errors.message = "The message must be between 10 and 5,000 characters.";
  return errors;
}

export function firstContactError(errors: ContactErrors): string | null {
  return contactFields.find((field) => errors[field]) ?? null;
}
