import { createClient } from "@sanity/client";
import { localContent } from "./local-content";
import { contentQuery } from "./query";
import type { CmsContent, CmsImage, ScholarshipPageContent } from "./types";

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
  const missing = ["settings", "pages", "scholarship", "events", "people", "ministries", "objectives", "gallery", "givingMethods", "impactAreas"].filter((key) => !(key in content));
  if (missing.length) throw new Error(`Sanity content is incomplete: missing ${missing.join(", ")}.`);
  const pages = content.pages as CmsContent["pages"] | undefined;
  const missingPages = ["home", "about", "events", "gallery", "giving", "contact"].filter((key) => !pages?.[key as keyof CmsContent["pages"]]);
  if (missingPages.length) throw new Error(`Sanity singleton documents are missing: ${missingPages.join(", ")}. Run the CMS migration before cutover.`);
  const heroImages = pages ? Object.values(pages).map((page) => page.hero.image) : [];
  if (heroImages.some((image) => !isImage(image))) throw new Error("One or more page hero images are missing required image metadata or alternative text.");
  if (!content.settings?.name || !content.settings?.serviceTime) throw new Error("Church settings are incomplete.");
  assertScholarshipContent(content.scholarship);
}

export function assertScholarshipContent(value: unknown): asserts value is ScholarshipPageContent {
  if (!value || typeof value !== "object") throw new Error("Scholarship page content is missing.");
  const page = value as Partial<ScholarshipPageContent>;
  const cycle = page.currentCycle;
  const memorial = page.memorial;
  if (!page.title || !page.summary || !cycle || !memorial || !Array.isArray(page.pastCycles)) throw new Error("Scholarship page content is incomplete.");
  if (!["draft", "open", "closed", "selection", "concluded", "awaiting"].includes(cycle.status)) {
    throw new Error("Scholarship cycle status is invalid.");
  }
  if (cycle.status === "open") {
    const hasValidCutoff = typeof cycle.applicationDeadlineAt === "string" && Number.isFinite(Date.parse(cycle.applicationDeadlineAt));
    const hasFillablePdf = typeof cycle.applicationFile?.url === "string" && /\.pdf(?:$|\?)/i.test(cycle.applicationFile.filename);
    const hasValidEmail = typeof cycle.submissionEmail === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cycle.submissionEmail);
    if (
      !cycle.year || !cycle.applicationDeadlineDate || !hasValidCutoff || !cycle.deadlineTimeZone ||
      !cycle.awardDate || !cycle.awardCount || !cycle.awardAmount || !hasFillablePdf || !hasValidEmail ||
      !cycle.submissionSubject || !cycle.professorRecommendationInstructions || !cycle.privacyStatement ||
      !cycle.eligibilityRequirements?.length || !cycle.applicationSteps?.length
    ) {
      throw new Error("A scholarship cycle cannot be open until its cutoff, fillable PDF, instructions, contact, and privacy statement are complete.");
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: cycle.deadlineTimeZone });
    } catch {
      throw new Error("The scholarship deadline timezone is invalid.");
    }
  }
  if (memorial.approvalStatus === "approved" && (!memorial.story?.length || !memorial.storyAttribution)) {
    throw new Error("A family-approved memorial story needs its narrative and attribution.");
  }
  if (memorial.personalWords && (!memorial.personalWordsAttribution || !memorial.personalWordsContext)) {
    throw new Error("Lungpeola Sayai's personal words need family attribution and context.");
  }
  if (memorial.photograph && !isImage(memorial.photograph)) {
    throw new Error("The memorial photograph needs image metadata and alternative text.");
  }
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
    const response = content && typeof content === "object" ? content as Record<string, unknown> : {};
    const cmsScholarship = response.scholarship;
    const scholarship = cmsScholarship && typeof cmsScholarship === "object"
      ? { ...(cmsScholarship as Record<string, unknown>), pastCycles: Array.isArray((cmsScholarship as Record<string, unknown>).pastCycles) ? (cmsScholarship as Record<string, unknown>).pastCycles : [] }
      : localContent.scholarship;
    const normalized = { ...response, scholarship };
    assertCmsContent(normalized);
    return normalized;
  });
  return contentPromise;
}

export function resetCmsContentCache() {
  contentPromise = undefined;
}
