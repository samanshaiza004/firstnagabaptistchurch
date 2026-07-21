import { defineField, defineType } from "sanity";

export const person = defineType({
  name: "person", title: "Person", type: "document",
  fields: [
    defineField({ name: "stableId", title: "Stable ID", type: "slug", options: { source: "name", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required().min(2).max(100) }),
    defineField({ name: "role", title: "Role", type: "string", validation: (rule) => rule.required().max(100) }),
    defineField({ name: "category", title: "Category label", type: "string", validation: (rule) => rule.required().max(80) }),
    defineField({ name: "bio", title: "Biography", type: "text", rows: 7, validation: (rule) => rule.required().min(10).max(1600) }),
    defineField({ name: "image", title: "Portrait", type: "image", options: { hotspot: true }, validation: (rule) => rule.required(), fields: [{ name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required().min(8).max(180) }] }),
    defineField({ name: "group", title: "Website group", type: "string", options: { list: [{ title: "Leadership", value: "leadership" }, { title: "Trustees", value: "trustee" }, { title: "Ministry leader", value: "ministry" }] }, validation: (rule) => rule.required() }),
    defineField({ name: "order", title: "Display order", type: "number", validation: (rule) => rule.required().integer().min(0) }),
  ],
  orderings: [{ title: "Display order", name: "displayOrder", by: [{ field: "group", direction: "asc" }, { field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
});
