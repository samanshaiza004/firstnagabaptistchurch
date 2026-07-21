import { defineField, defineType } from "sanity";

export const objective = defineType({
  name: "objective", title: "Mission Objective", type: "document",
  fields: [
    defineField({ name: "stableId", title: "Stable ID", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "icon", title: "Icon", type: "string", options: { list: ["book", "users", "globe", "service", "connection"] }, validation: (rule) => rule.required() }),
    defineField({ name: "shortTitle", title: "Home-page title", type: "string", validation: (rule) => rule.required().max(80) }),
    defineField({ name: "shortDescription", title: "Home-page description", type: "text", rows: 2, validation: (rule) => rule.required().max(240) }),
    defineField({ name: "title", title: "About-page title", type: "string", validation: (rule) => rule.required().max(140) }),
    defineField({ name: "description", title: "About-page description", type: "text", rows: 5, validation: (rule) => rule.required().max(900) }),
    defineField({ name: "order", title: "Display order", type: "number", validation: (rule) => rule.required().integer().min(0) }),
  ],
  preview: { select: { title: "shortTitle", subtitle: "title" } },
});
