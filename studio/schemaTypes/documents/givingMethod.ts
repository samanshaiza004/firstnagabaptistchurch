import { defineField, defineType } from "sanity";

export const givingMethod = defineType({
  name: "givingMethod", title: "Giving Method", type: "document",
  fields: [
    defineField({ name: "stableId", title: "Stable ID", type: "slug", options: { source: "name" }, validation: (rule) => rule.required() }),
    defineField({ name: "name", title: "Method name", type: "string", validation: (rule) => rule.required().max(50) }),
    defineField({ name: "description", title: "Short description", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "contact", title: "Official payment destination", type: "string", validation: (rule) => rule.required().min(5).max(180) }),
    defineField({ name: "qrCode", title: "Official QR code", type: "image", validation: (rule) => rule.required(), fields: [{ name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required() }] }),
    defineField({ name: "brandColor", title: "Header color", type: "string", description: "Six-digit hexadecimal color.", validation: (rule) => rule.required().regex(/^#[0-9a-fA-F]{6}$/) }),
    defineField({ name: "instructions", title: "Instructions", type: "array", of: [{ type: "string" }], validation: (rule) => rule.required().min(2).max(8) }),
    defineField({ name: "order", title: "Display order", type: "number", validation: (rule) => rule.required().integer().min(0) }),
  ],
  preview: { select: { title: "name", subtitle: "contact", media: "qrCode" } },
});
