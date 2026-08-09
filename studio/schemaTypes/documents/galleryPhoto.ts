import { defineArrayMember, defineField, defineType } from "sanity";

export const galleryPhoto = defineType({
  name: "galleryPhoto", title: "Gallery Photo", type: "document",
  fields: [
    defineField({ name: "permissionReminder", title: "Before publishing", type: "string", readOnly: true, initialValue: "Confirm this photograph is appropriate for public use. Take particular care with children and vulnerable people; do not store private consent records here." }),
    defineField({ name: "stableId", title: "Stable ID", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "title", title: "Photo title", type: "string", validation: (rule) => rule.required().min(3).max(120) }),
    defineField({ name: "caption", title: "Caption", type: "text", rows: 3, validation: (rule) => rule.required().min(10).max(600) }),
    defineField({ name: "image", title: "Photograph", type: "image", options: { hotspot: true }, validation: (rule) => rule.required(), fields: [{ name: "alt", title: "Alternative text", type: "string", description: "Describe what is visible for someone who cannot see the image.", validation: (rule) => rule.required().min(12).max(220) }] }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Baptism", "Church Family", "Church History", "Culture", "Worship"] }, validation: (rule) => rule.required() }),
    defineField({ name: "event", title: "Gallery event", type: "reference", to: [{ type: "galleryEvent" }], description: "Choose the past event this photograph belongs to. Visitors use this to find the event's full photo collection.", validation: (rule) => rule.required() }),
    defineField({ name: "tags", title: "Tags (deprecated)", type: "array", of: [defineArrayMember({ type: "string" })], deprecated: { reason: "Use Gallery event instead. The gallery is organized by past events, not image attributes." }, readOnly: true, hidden: true }),
    defineField({ name: "dateLabel", title: "Date label (deprecated)", type: "string", deprecated: { reason: "Use the related Gallery event's displayed date." }, readOnly: true, hidden: true }),
    defineField({ name: "order", title: "Display order", type: "number", validation: (rule) => rule.required().integer().min(0) }),
  ],
  orderings: [{ title: "Gallery order", name: "galleryOrder", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "image" } },
});
