import { defineField, defineType } from "sanity";

export const ministry = defineType({
  name: "ministry", title: "Ministry", type: "document",
  fields: [
    defineField({ name: "stableId", title: "Stable ID", type: "slug", options: { source: "name", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "name", title: "Ministry name", type: "string", validation: (rule) => rule.required().min(3).max(100) }),
    defineField({ name: "icon", title: "Icon", type: "string", options: { list: [{ title: "Music", value: "music" }, { title: "Heart", value: "heart" }] }, validation: (rule) => rule.required() }),
    defineField({ name: "leader", title: "Ministry leader", type: "reference", to: [{ type: "person" }], validation: (rule) => rule.required() }),
    defineField({ name: "members", title: "Team members", type: "array", of: [{ type: "string" }], validation: (rule) => rule.required().min(1) }),
    defineField({ name: "order", title: "Display order", type: "number", validation: (rule) => rule.required().integer().min(0) }),
  ],
  preview: { select: { title: "name", leader: "leader.name" }, prepare: ({ title, leader }) => ({ title, subtitle: leader ? `Led by ${leader}` : "Leader required" }) },
});
