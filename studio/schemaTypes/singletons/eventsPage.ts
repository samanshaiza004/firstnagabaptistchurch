import { defineField, defineType } from "sanity";

export const eventsPage = defineType({
  name: "eventsPage", title: "Events Page", type: "document",
  fields: [
    defineField({ name: "seo", title: "Search and sharing", type: "seo", validation: (rule) => rule.required() }),
    defineField({ name: "hero", title: "Page introduction", type: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "regularTitle", title: "Regular services heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "specialTitle", title: "Special events heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "calendarLabel", title: "Calendar navigation label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "undatedTitle", title: "Undated events heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "undatedDescription", title: "Undated events description", type: "text", rows: 2, validation: (rule) => rule.required() }),
  ],
  preview: { prepare: () => ({ title: "Events Page", subtitle: "Calendar headings and introduction" }) },
});
