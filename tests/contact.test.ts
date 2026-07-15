import { describe, expect, test } from "bun:test";
import { normalizeContactPayload, validateContact } from "../src/lib/contact";

const valid = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@example.com",
  phone: "+1 (469) 236-7545",
  subject: "Prayer request",
  message: "Please pray for our family.",
  website: "",
};

describe("contact validation", () => {
  test("normalizes a complete payload", () => {
    expect(normalizeContactPayload({ ...valid, firstName: "  Jane " })?.firstName).toBe("Jane");
  });

  test("accepts valid contact details", () => {
    expect(validateContact(valid)).toEqual({});
  });

  test("rejects malformed fields", () => {
    const errors = validateContact({ ...valid, email: "invalid", message: "short" });
    expect(errors.email).toBeTruthy();
    expect(errors.message).toBeTruthy();
  });
});
