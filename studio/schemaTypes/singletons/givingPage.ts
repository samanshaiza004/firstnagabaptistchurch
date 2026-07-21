import { defineField, defineType } from "sanity";

export const givingPage = defineType({
  name: "givingPage", title: "Giving Page", type: "document",
  fields: [
    defineField({ name: "securityNotice", title: "Sensitive information", type: "string", readOnly: true, initialValue: "Verify every payment contact and QR code against official church records before publishing." }),
    defineField({ name: "seo", title: "Search and sharing", type: "seo", validation: (rule) => rule.required() }),
    defineField({ name: "hero", title: "Page introduction", type: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "waysEyebrow", title: "Giving methods eyebrow", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "waysTitle", title: "Giving methods heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "waysDescription", title: "Giving methods description", type: "text", rows: 2, validation: (rule) => rule.required() }),
    defineField({ name: "verificationNotice", title: "Recipient verification notice", type: "text", rows: 2, validation: (rule) => rule.required() }),
    defineField({ name: "impactEyebrow", title: "Impact eyebrow", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "impactTitle", title: "Impact heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "impactDescription", title: "Impact description", type: "text", rows: 2, validation: (rule) => rule.required() }),
    defineField({ name: "scripture", title: "Scripture quotation", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "scriptureCitation", title: "Scripture citation", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "thanksTitle", title: "Thank-you heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "thanksDescription", title: "Thank-you message", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "lastReviewedAt", title: "Payment details last reviewed", type: "datetime", readOnly: true }),
    defineField({ name: "lastReviewedBy", title: "Reviewed by", type: "string", readOnly: true }),
  ],
  preview: { select: { reviewedAt: "lastReviewedAt", reviewedBy: "lastReviewedBy" }, prepare: ({ reviewedAt, reviewedBy }) => ({ title: "Giving Page", subtitle: reviewedAt ? `Reviewed ${new Date(reviewedAt).toLocaleDateString()}${reviewedBy ? ` by ${reviewedBy}` : ""}` : "Payment details have not been reviewed" }) },
});
