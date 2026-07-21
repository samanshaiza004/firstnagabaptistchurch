import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings", title: "Church Settings", type: "document",
  groups: [{ name: "identity", title: "Identity", default: true }, { name: "contact", title: "Contact" }, { name: "schedule", title: "Service schedule" }],
  fields: [
    defineField({ name: "name", title: "Church name", type: "string", group: "identity", validation: (rule) => rule.required().min(3).max(100) }),
    defineField({ name: "shortName", title: "Short name", type: "string", group: "identity", validation: (rule) => rule.required().max(12) }),
    defineField({ name: "domain", title: "Website domain", type: "url", group: "identity", validation: (rule) => rule.required().uri({ scheme: ["https"] }) }),
    defineField({ name: "description", title: "Default site description", type: "text", rows: 3, group: "identity", validation: (rule) => rule.required().min(40).max(170) }),
    defineField({ name: "region", title: "Region label", type: "string", group: "identity", validation: (rule) => rule.required().max(60) }),
    defineField({ name: "footerDescription", title: "Footer description", type: "text", rows: 3, group: "identity", validation: (rule) => rule.required().min(20).max(300) }),
    defineField({ name: "email", title: "Public email", type: "email", group: "contact", validation: (rule) => rule.required() }),
    defineField({ name: "phoneDisplay", title: "Displayed phone", type: "string", group: "contact", validation: (rule) => rule.required().regex(/^[0-9()+.\-\s]+$/, "Enter a valid phone number") }),
    defineField({ name: "phoneHref", title: "Phone link", type: "string", description: "International format, for example +14692367545", group: "contact", validation: (rule) => rule.required().regex(/^\+[1-9]\d{7,14}$/, "Use international +number format") }),
    defineField({ name: "venue", title: "Worship venue", type: "string", group: "contact", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "address", title: "Street address", type: "string", group: "contact", validation: (rule) => rule.required().max(180) }),
    defineField({ name: "mapEmbedUrl", title: "Google Maps embed URL", type: "url", group: "contact", validation: (rule) => rule.required().uri({ scheme: ["https"] }).custom((value) => { try { return !value || new URL(value).hostname.endsWith("google.com") || "Use an official google.com Maps embed URL"; } catch { return "Enter a valid URL"; } }) }),
    defineField({ name: "serviceTime", title: "Sunday worship times", type: "object", group: "schedule", fields: [
      defineField({ name: "standard", title: "Standard-time start", type: "string", validation: (rule) => rule.required().regex(/^\d{1,2}:\d{2}\s(?:AM|PM)$/) }),
      defineField({ name: "daylight", title: "Daylight-time start", type: "string", validation: (rule) => rule.required().regex(/^\d{1,2}:\d{2}\s(?:AM|PM)$/) }),
      defineField({ name: "timeZone", title: "IANA time zone", type: "string", readOnly: true, initialValue: "America/Chicago", validation: (rule) => rule.required().custom((value) => value === "America/Chicago" || "The website currently supports America/Chicago only") }),
    ] }),
  ],
  preview: { select: { title: "name", subtitle: "region" } },
});
