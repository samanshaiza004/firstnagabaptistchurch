import { defineField, defineType } from "sanity";

const text = (name: string, title: string, rows = 2) => defineField({ name, title, type: "text", rows, validation: (rule) => rule.required().min(2).max(3000) });

export const aboutPage = defineType({
  name: "aboutPage", title: "About Page", type: "document",
  fields: [
    defineField({ name: "seo", title: "Search and sharing", type: "seo", validation: (rule) => rule.required() }),
    defineField({ name: "hero", title: "Page introduction", type: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "historyEyebrow", title: "History eyebrow", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "historyTitle", title: "History heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "historyLead", title: "Opening history", type: "richText", validation: (rule) => rule.required().min(1) }),
    defineField({ name: "historyImage", title: "History image", type: "image", options: { hotspot: true }, validation: (rule) => rule.required(), fields: [{ name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required() }] }),
    text("quote", "Historic quotation", 3),
    defineField({ name: "quoteAttribution", title: "Quotation attribution", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "historyMiddle", title: "Middle history", type: "richText", validation: (rule) => rule.required().min(1) }),
    defineField({ name: "founding", title: "Founding milestone", type: "object", fields: [
      defineField({ name: "year", title: "Year", type: "string", validation: (rule) => rule.required().regex(/^\d{4}$/) }),
      defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "date", title: "Date label", type: "string", validation: (rule) => rule.required() }),
      text("body", "Description", 5),
    ], validation: (rule) => rule.required() }),
    defineField({ name: "historyFinal", title: "Later history", type: "richText", validation: (rule) => rule.required().min(1) }),
    defineField({ name: "inauguration", title: "Inauguration", type: "object", fields: [
      defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
      text("body", "Description", 3),
      defineField({ name: "guestSpeakers", title: "Guest speakers", type: "array", of: [{ type: "string" }], validation: (rule) => rule.required().min(1) }),
      defineField({ name: "historyDate", title: "History record date", type: "string", validation: (rule) => rule.required() }),
    ], validation: (rule) => rule.required() }),
    defineField({ name: "founders", title: "Founders section", type: "object", fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "title", title: "Heading", type: "string", validation: (rule) => rule.required() }),
      text("description", "Description", 2),
      defineField({ name: "image", title: "Founders image", type: "image", options: { hotspot: true }, validation: (rule) => rule.required(), fields: [{ name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required() }] }),
      text("caption", "Image caption", 2),
      defineField({ name: "names", title: "Founding members", type: "array", of: [{ type: "string" }], validation: (rule) => rule.required().min(1) }),
    ], validation: (rule) => rule.required() }),
    defineField({ name: "objectivesEyebrow", title: "Objectives eyebrow", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "objectivesTitle", title: "Objectives heading", type: "string", validation: (rule) => rule.required() }),
    text("objectivesDescription", "Objectives description", 2),
    defineField({ name: "objectivesCta", title: "Objectives link", type: "callToAction", validation: (rule) => rule.required() }),
  ],
  preview: { prepare: () => ({ title: "About Page", subtitle: "History, founders, and mission" }) },
});
