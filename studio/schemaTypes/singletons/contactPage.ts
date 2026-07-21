import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage", title: "Contact Page", type: "document",
  fields: [
    defineField({ name: "seo", title: "Search and sharing", type: "seo", validation: (rule) => rule.required() }),
    defineField({ name: "hero", title: "Page introduction", type: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "formTitle", title: "Form heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "formDescription", title: "Form introduction", type: "text", rows: 2, validation: (rule) => rule.required() }),
    defineField({ name: "privacyNotice", title: "Form privacy notice", type: "text", rows: 2, validation: (rule) => rule.required() }),
    defineField({ name: "successTitle", title: "Success heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "successDescription", title: "Success message", type: "text", rows: 2, validation: (rule) => rule.required() }),
    defineField({ name: "infoTitle", title: "Contact information heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "infoDescription", title: "Contact information introduction", type: "text", rows: 2, validation: (rule) => rule.required() }),
    defineField({ name: "locationNote", title: "Location note", type: "text", rows: 2, validation: (rule) => rule.required() }),
    defineField({ name: "fellowshipNote", title: "Service fellowship note", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "joinTitle", title: "Sunday invitation heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "fellowshipLabel", title: "Fellowship schedule value", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "mapTitle", title: "Map heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "mapRegionLabel", title: "Map region label", type: "string", validation: (rule) => rule.required() }),
  ],
  preview: { prepare: () => ({ title: "Contact Page", subtitle: "Contact copy; form behavior remains developer-controlled" }) },
});
