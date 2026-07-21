import type { CmsImage } from "./types";

export function sanityImageUrl(image: Extract<CmsImage, { source: "sanity" }>, width: number, quality = 86) {
  const url = new URL(image.url);
  url.searchParams.set("w", String(Math.min(width, image.width)));
  url.searchParams.set("q", String(quality));
  url.searchParams.set("fit", "max");
  url.searchParams.set("auto", "format");
  return url.href;
}
