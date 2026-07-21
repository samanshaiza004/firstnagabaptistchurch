import { defineField, defineType } from "sanity";

export const impactArea = defineType({
  name: "impactArea", title: "Giving Impact Area", type: "document",
  fields: [
    defineField({ name: "stableId", title: "Stable ID", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "icon", title: "Icon", type: "string", options: { list: ["book", "users", "house", "globe", "heart", "service"] }, validation: (rule) => rule.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required().max(100) }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (rule) => rule.required().max(500) }),
    defineField({ name: "order", title: "Display order", type: "number", validation: (rule) => rule.required().integer().min(0) }),
  ],
  preview: { select: { title: "title", subtitle: "description" } },
});
