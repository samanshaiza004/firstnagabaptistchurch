import { createClient } from "@sanity/client";
import { localContent } from "./local-content";
import { contentQuery } from "./query";
import type { CmsContent, CmsImage } from "./types";

export type CmsSource = "local" | "sanity";

export function getCmsSource(environment: Record<string, string | undefined> = process.env): CmsSource {
  const source = environment.CMS_SOURCE ?? "local";
  if (source !== "local" && source !== "sanity") throw new Error("CMS_SOURCE must be either 'local' or 'sanity'.");
  return source;
}

function requireEnvironment(name: string, environment: Record<string, string | undefined>) {
  const value = environment[name];
  if (!value) throw new Error(`${name} is required when CMS_SOURCE=sanity.`);
  return value;
}

function isImage(value: unknown): value is CmsImage {
  if (!value || typeof value !== "object") return false;
  const image = value as Partial<CmsImage>;
  return image.source === "local" || (image.source === "sanity" && typeof image.url === "string" && typeof image.width === "number" && typeof image.height === "number" && typeof image.alt === "string");
}

export function assertCmsContent(value: unknown): asserts value is CmsContent {
  if (!value || typeof value !== "object") throw new Error("Sanity returned no content.");
  const content = value as Partial<CmsContent>;
  const missing = ["settings", "pages", "events", "people", "ministries", "objectives", "gallery", "givingMethods", "impactAreas"].filter((key) => !(key in content));
  if (missing.length) throw new Error(`Sanity content is incomplete: missing ${missing.join(", ")}.`);
  const pages = content.pages as CmsContent["pages"] | undefined;
  const missingPages = ["home", "about", "events", "gallery", "giving", "contact"].filter((key) => !pages?.[key as keyof CmsContent["pages"]]);
  if (missingPages.length) throw new Error(`Sanity singleton documents are missing: ${missingPages.join(", ")}. Run the CMS migration before cutover.`);
  const heroImages = pages ? Object.values(pages).map((page) => page.hero.image) : [];
  if (heroImages.some((image) => !isImage(image))) throw new Error("One or more page hero images are missing required image metadata or alternative text.");
  if (!content.settings?.name || !content.settings?.serviceTime) throw new Error("Church settings are incomplete.");
}

let contentPromise: Promise<CmsContent> | undefined;

export function getCmsContent(environment: Record<string, string | undefined> = process.env): Promise<CmsContent> {
  const source = getCmsSource(environment);
  if (source === "local") return Promise.resolve(localContent);
  if (contentPromise) return contentPromise;

  const projectId = requireEnvironment("PUBLIC_SANITY_PROJECT_ID", environment);
  const dataset = requireEnvironment("PUBLIC_SANITY_DATASET", environment);
  const apiVersion = environment.PUBLIC_SANITY_API_VERSION ?? "2026-07-01";
  const client = createClient({ projectId, dataset, apiVersion, useCdn: false, perspective: "published" });
  contentPromise = client.fetch<unknown>(contentQuery).then((content) => {
    assertCmsContent(content);
    return content;
  });
  return contentPromise;
}

export function resetCmsContentCache() {
  contentPromise = undefined;
}
