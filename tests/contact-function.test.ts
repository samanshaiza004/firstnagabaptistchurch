import { afterEach, describe, expect, test } from "bun:test";
import { handler } from "../netlify/functions/contact-email";

const originalPassword = process.env.EMAIL_APP_PASSWORD;
const invoke = handler as unknown as (event: { httpMethod: string; body: string | null }) => Promise<{ statusCode: number; body: string }>;
const validPayload = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@example.com",
  phone: "",
  subject: "Prayer request",
  message: "Please pray for our family.",
  website: "",
};

afterEach(() => {
  if (originalPassword === undefined) delete process.env.EMAIL_APP_PASSWORD;
  else process.env.EMAIL_APP_PASSWORD = originalPassword;
});

describe("contact Netlify function", () => {
  test("rejects unsupported methods", async () => {
    expect((await invoke({ httpMethod: "GET", body: null })).statusCode).toBe(405);
  });

  test("rejects malformed payloads", async () => {
    expect((await invoke({ httpMethod: "POST", body: "{}" })).statusCode).toBe(400);
  });

  test("silently accepts honeypot submissions without sending", async () => {
    const result = await invoke({ httpMethod: "POST", body: JSON.stringify({ ...validPayload, website: "bot.example" }) });
    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body)).toEqual({ success: true });
  });

  test("returns an honest service error when SMTP is unavailable", async () => {
    delete process.env.EMAIL_APP_PASSWORD;
    const result = await invoke({ httpMethod: "POST", body: JSON.stringify(validPayload) });
    expect(result.statusCode).toBe(503);
    expect(JSON.parse(result.body).error).toContain("temporarily unavailable");
  });
});
