import type { APIRoute } from "astro";
import { getCmsContent } from "../lib/cms/content";

export const GET: APIRoute = async () => {
  const { settings } = await getCmsContent();
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${settings.domain}/sitemap-index.xml\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
