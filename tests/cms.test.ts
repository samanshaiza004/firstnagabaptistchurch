import { describe, expect, test } from "bun:test";
import { assertCmsContent, getCmsSource } from "../src/lib/cms/content";
import { localContent } from "../src/lib/cms/local-content";

describe("CMS content contract", () => {
  test("defaults to the explicit local migration source", () => {
    expect(getCmsSource({})).toBe("local");
    expect(getCmsSource({ CMS_SOURCE: "sanity" })).toBe("sanity");
    expect(() => getCmsSource({ CMS_SOURCE: "unexpected" })).toThrow();
  });

  test("contains every required singleton and valid hero image", () => {
    expect(() => assertCmsContent(localContent)).not.toThrow();
    expect(Object.keys(localContent.pages).sort()).toEqual(["about", "contact", "events", "gallery", "giving", "home"]);
    for (const page of Object.values(localContent.pages)) expect(page.hero.image.alt.length).toBeGreaterThan(7);
  });

  test("preserves the July 19 Half Yearly GBM date", () => {
    const event = localContent.events.find((item) => item.id === "half-yearly-gbm-2026");
    expect(event).toMatchObject({ dateLabel: "July 19th", month: 7, day: 19, year: 2026 });
  });

  test("uses unique stable IDs and resolvable ministry leaders", () => {
    const collections = [localContent.events, localContent.people, localContent.ministries, localContent.objectives, localContent.gallery, localContent.givingMethods, localContent.impactAreas];
    for (const collection of collections) expect(new Set(collection.map((item) => item.id)).size).toBe(collection.length);
    const people = new Set(localContent.people.map((person) => person.id));
    for (const ministry of localContent.ministries) expect(people.has(ministry.leaderId)).toBe(true);
  });

  test("requires accessible gallery and payment images", () => {
    for (const photo of localContent.gallery) expect(photo.image.alt.length).toBeGreaterThan(11);
    for (const photo of localContent.gallery) {
      expect(photo.tags.length).toBeGreaterThan(0);
      expect(new Set(photo.tags).size).toBe(photo.tags.length);
    }
    for (const method of localContent.givingMethods) {
      expect(method.qrCode.alt).toContain(method.name);
      expect(method.contact.length).toBeGreaterThan(4);
    }
  });
});
