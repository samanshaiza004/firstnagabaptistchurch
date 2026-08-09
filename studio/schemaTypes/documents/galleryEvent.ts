import { defineField, defineType } from "sanity";

export const galleryEvent = defineType({
  name: "galleryEvent",
  title: "Gallery Event",
  type: "document",
  fields: [
    defineField({ name: "stableId", title: "Stable ID", type: "slug", description: "Permanent technical identifier. Do not change after publishing.", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "title", title: "Event name", type: "string", validation: (rule) => rule.required().min(3).max(120) }),
    defineField({ name: "dateLabel", title: "Displayed date", type: "string", validation: (rule) => rule.required().max(80) }),
    defineField({ name: "location", title: "Location", type: "string", validation: (rule) => rule.required().max(160) }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (rule) => rule.required().min(10).max(600) }),
    defineField({ name: "order", title: "Display order", type: "number", initialValue: 100, validation: (rule) => rule.required().integer().min(0) }),
  ],
  orderings: [{ title: "Event order", name: "eventOrder", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "dateLabel" } },
});
