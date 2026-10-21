import type { Config } from "@netlify/functions";

interface PublishedCycle {
  status?: string;
  deadlineAt?: string;
}

interface SanityQueryResponse {
  result?: PublishedCycle | null;
}

async function readPublishedCycle() {
  const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.PUBLIC_SANITY_DATASET ?? "production";
  const apiVersion = process.env.PUBLIC_SANITY_API_VERSION ?? "2026-07-01";
  if (!projectId) throw new Error("PUBLIC_SANITY_PROJECT_ID is required for scholarship deadline refresh.");

  const query = '*[_id == "scholarshipPage"][0].currentCycle{status,applicationDeadlineAt}';
  const endpoint = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${encodeURIComponent(dataset)}`);
  endpoint.searchParams.set("query", query);
  const response = await fetch(endpoint, { headers: { accept: "application/json" }, cache: "no-store" });
  if (!response.ok) throw new Error(`Sanity deadline lookup failed with HTTP ${response.status}.`);
  return (await response.json()) as SanityQueryResponse;
}

async function readPublishedBuildTime(siteUrl: string) {
  const response = await fetch(new URL("/scholarship", siteUrl), {
    headers: { accept: "text/html", "cache-control": "no-cache" },
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Published scholarship page lookup failed with HTTP ${response.status}.`);
  const html = await response.text();
  const meta = html.match(/<meta\b[^>]*\bname=["']fnbc-build-time["'][^>]*>/i)?.[0];
  const value = meta?.match(/\bcontent=["']([^"']+)["']/i)?.[1];
  return value && Number.isFinite(Date.parse(value)) ? Date.parse(value) : undefined;
}

export default async function scholarshipDeadlineRefresh() {
  const buildHookUrl = process.env.NETLIFY_BUILD_HOOK_URL;
  if (!buildHookUrl) {
    console.warn("Scholarship deadline refresh is inactive: NETLIFY_BUILD_HOOK_URL is not configured.");
    return;
  }

  const siteUrl = process.env.SCHOLARSHIP_SITE_URL ?? process.env.URL ?? "https://firstnagabaptistchurch.org";
  const result = await readPublishedCycle();
  const cycle = result.result;
  if (cycle?.status !== "open" || !cycle.deadlineAt) return;

  const cutoff = Date.parse(cycle.deadlineAt);
  if (!Number.isFinite(cutoff) || Date.now() < cutoff) return;

  const lastBuildAt = await readPublishedBuildTime(siteUrl);
  if (lastBuildAt !== undefined && lastBuildAt >= cutoff) return;

  const response = await fetch(buildHookUrl, { method: "POST", body: "" });
  if (!response.ok) throw new Error(`Netlify deadline refresh build request failed with HTTP ${response.status}.`);
  console.info("Requested one scholarship status refresh after the published application cutoff.");
}

export const config: Config = {
  schedule: "0 * * * *",
};
