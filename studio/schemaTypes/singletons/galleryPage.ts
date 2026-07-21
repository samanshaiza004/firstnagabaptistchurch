import { defineField, defineType } from "sanity";

export const galleryPage = defineType({
  name: "galleryPage", title: "Gallery Page", type: "document",
  fields: [
    defineField({ name: "seo", title: "Search and sharing", type: "seo", validation: (rule) => rule.required() }),
    defineField({ name: "hero", title: "Page introduction", type: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "introEyebrow", title: "Gallery eyebrow", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "introTitle", title: "Gallery heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "introDescription", title: "Gallery description", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "shareEyebrow", title: "Photo-sharing eyebrow", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "shareTitle", title: "Photo-sharing heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "shareDescription", title: "Photo-sharing description", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "shareButtonLabel", title: "Photo-sharing button", type: "string", validation: (rule) => rule.required() }),
  ],
  preview: { prepare: () => ({ title: "Gallery Page", subtitle: "Gallery introduction and photo-sharing prompt" }) },
});
