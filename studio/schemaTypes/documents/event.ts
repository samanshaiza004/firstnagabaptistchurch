import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event", title: "Event", type: "document",
  fields: [
    defineField({ name: "stableId", title: "Stable ID", type: "slug", description: "Permanent technical identifier. Do not change after publishing.", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "title", title: "Event name", type: "string", validation: (rule) => rule.required().min(3).max(120) }),
    defineField({ name: "dateLabel", title: "Displayed date", type: "string", validation: (rule) => rule.required().max(80) }),
    defineField({ name: "timeKind", title: "Time type", type: "string", options: { layout: "radio", list: [{ title: "Seasonal Sunday worship time", value: "seasonal" }, { title: "Custom label", value: "label" }, { title: "Do not show a time", value: "none" }] }, validation: (rule) => rule.required() }),
    defineField({ name: "timeLabel", title: "Displayed time", type: "string", hidden: ({ parent }) => parent?.timeKind !== "label", validation: (rule) => rule.custom((value, context) => context.parent && (context.parent as { timeKind?: string }).timeKind === "label" && !value ? "A time label is required" : true) }),
    defineField({ name: "location", title: "Location", type: "string", validation: (rule) => rule.required().max(140) }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4, validation: (rule) => rule.required().min(10).max(800) }),
    defineField({ name: "recurring", title: "Regular recurring service", type: "boolean", initialValue: false, validation: (rule) => rule.required() }),
    defineField({ name: "calendarDate", title: "Calendar date", type: "object", description: "For special events. Leave month empty only when the date is entirely unannounced.", hidden: ({ parent }) => Boolean(parent?.recurring), fields: [
      defineField({ name: "month", title: "Month", type: "number", validation: (rule) => rule.integer().min(1).max(12) }),
      defineField({ name: "day", title: "Day", type: "number", validation: (rule) => rule.integer().min(1).max(31) }),
      defineField({ name: "year", title: "Year", type: "number", validation: (rule) => rule.integer().min(2018).max(2100) }),
    ] }),
    defineField({ name: "order", title: "Display order", type: "number", initialValue: 100, validation: (rule) => rule.required().integer().min(0) }),
  ],
  orderings: [{ title: "Calendar order", name: "calendarOrder", by: [{ field: "calendarDate.year", direction: "asc" }, { field: "calendarDate.month", direction: "asc" }, { field: "calendarDate.day", direction: "asc" }, { field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", date: "dateLabel", recurring: "recurring" }, prepare: ({ title, date, recurring }) => ({ title, subtitle: recurring ? `Regular · ${date}` : date }) },
});
