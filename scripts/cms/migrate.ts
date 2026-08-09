import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import { basename, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { localContent } from "../../src/lib/cms/local-content";
import type { CmsImage, HeroContent, SeoContent } from "../../src/lib/cms/types";

const environment = process.env;
const projectId = environment.PUBLIC_SANITY_PROJECT_ID;
const dataset = environment.PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = environment.PUBLIC_SANITY_API_VERSION ?? "2026-07-01";
const token = environment.SANITY_WRITE_TOKEN ?? environment.SANITY_AUTH_TOKEN;
if (!projectId || !token) throw new Error("Set PUBLIC_SANITY_PROJECT_ID and SANITY_WRITE_TOKEN, or run this script through sanity exec --with-user-token.");

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });
const assetFiles: Record<string, string> = {
  achan: "../../src/assets/images/achan.jpg", chishi: "../../src/assets/images/chishis.jpeg",
  churchFamily: "../../src/assets/images/bgoption.webp", churchFamilyShirts: "../../src/assets/images/bgoption2.webp",
  lakesideBaptism: "../../src/assets/images/bgoption3.webp", worshipChoir: "../../src/assets/images/bgoption5.jpg",
  churchLeaders: "../../src/assets/images/bgoption6.jpg", foundingMembers: "../../src/assets/images/foundingmembers.jpg",
  culturalDay: "../../src/assets/images/fundraider.jpg", hosea: "../../src/assets/images/hosea.jpg",
  joseph: "../../src/assets/images/joseph.jpg", katensangla: "../../src/assets/images/katensangla2.jpg",
  kinoto: "../../src/assets/images/kinoto2.jpg", "keyilungdaule-hieme": "../../src/assets/images/keyilungdaule-hieme.jpeg",
  kumar: "../../src/assets/images/kumar-optimized.jpg",
  lanu: "../../src/assets/images/lanu.jpg", livi: "../../src/assets/images/Livi.jpg",
  mathingmi: "../../src/assets/images/mathingmi-optimized.jpg", peraly: "../../src/assets/images/peraly.jpg",
  prayingHands: "../../src/assets/images/praying hands.jpg", rhite: "../../src/assets/images/rhite.png",
  saman: "../../src/assets/images/saman-optimized.jpg", "senti-aier": "../../src/assets/images/senti-aier.jpeg",
  theishing: "../../src/assets/images/theishing.jpg",
  paypalQr: "../../public/paypal.jpg", zelleQr: "../../public/zelle.jpg",
};
const assetCache = new Map<string, string>();

async function imageReference(image: CmsImage) {
  if (image.source !== "local") throw new Error("The migration source must use local images.");
  const relativePath = assetFiles[image.key];
  if (!relativePath) throw new Error(`No migration file is configured for image key '${image.key}'.`);
  const path = fileURLToPath(new URL(relativePath, import.meta.url));
  const filename = `fnbc-${image.key}${extname(path).toLowerCase()}`;
  let assetId = assetCache.get(filename) ?? await client.fetch<string | null>(`*[_type == "sanity.imageAsset" && originalFilename == $filename][0]._id`, { filename });
  if (!assetId) {
    const asset = await client.assets.upload("image", createReadStream(path), { filename, title: basename(filename) });
    assetId = asset._id;
  }
  assetCache.set(filename, assetId);
  return { _type: "image", asset: { _type: "reference", _ref: assetId }, alt: image.alt };
}

async function hero(value: HeroContent) {
  return { eyebrow: value.eyebrow, title: value.title, description: value.description, image: await imageReference(value.image) };
}

async function seo(value: SeoContent) {
  return { title: value.title, description: value.description, ...(value.socialImage ? { socialImage: await imageReference(value.socialImage) } : {}) };
}

const documents: Record<string, unknown>[] = [];
const { settings, pages } = localContent;
documents.push({ _id: "siteSettings", _type: "siteSettings", ...settings });
documents.push({ _id: "homePage", _type: "homePage", ...pages.home, seo: await seo(pages.home.seo), hero: await hero(pages.home.hero), storyImage: await imageReference(pages.home.storyImage) });
documents.push({ _id: "aboutPage", _type: "aboutPage", ...pages.about, seo: await seo(pages.about.seo), hero: await hero(pages.about.hero), historyImage: await imageReference(pages.about.historyImage), founders: { ...pages.about.founders, image: await imageReference(pages.about.founders.image) } });
documents.push({ _id: "eventsPage", _type: "eventsPage", ...pages.events, seo: await seo(pages.events.seo), hero: await hero(pages.events.hero) });
documents.push({ _id: "galleryPage", _type: "galleryPage", ...pages.gallery, seo: await seo(pages.gallery.seo), hero: await hero(pages.gallery.hero) });
documents.push({ _id: "givingPage", _type: "givingPage", securityNotice: "Verify every payment contact and QR code against official church records before publishing.", ...pages.giving, seo: await seo(pages.giving.seo), hero: await hero(pages.giving.hero) });
documents.push({ _id: "contactPage", _type: "contactPage", ...pages.contact, seo: await seo(pages.contact.seo), hero: await hero(pages.contact.hero) });

for (const item of localContent.events) documents.push({ _id: `event-${item.id}`, _type: "event", stableId: { _type: "slug", current: item.id }, title: item.title, dateLabel: item.dateLabel, timeKind: item.timeKind, ...(item.timeLabel ? { timeLabel: item.timeLabel } : {}), location: item.location, description: item.description, recurring: item.recurring, ...(!item.recurring ? { calendarDate: { month: item.month, day: item.day, year: item.year } } : {}), order: item.order });
for (const item of localContent.people) documents.push({ _id: `person-${item.id}`, _type: "person", stableId: { _type: "slug", current: item.id }, name: item.name, role: item.role, category: item.category, bio: item.bio, image: await imageReference(item.image), group: item.group, order: item.order });
for (const item of localContent.ministries) documents.push({ _id: `ministry-${item.id}`, _type: "ministry", stableId: { _type: "slug", current: item.id }, name: item.name, icon: item.icon, leader: { _type: "reference", _ref: `person-${item.leaderId}` }, members: item.members, order: item.order });
for (const { id, ...item } of localContent.objectives) documents.push({ _id: `objective-${id}`, _type: "objective", stableId: { _type: "slug", current: id }, ...item });
const galleryEvents = [...new Map(localContent.gallery.map((item) => [item.event.id, item.event])).values()];
for (const item of galleryEvents) documents.push({ _id: `gallery-event-${item.id}`, _type: "galleryEvent", stableId: { _type: "slug", current: item.id }, title: item.title, dateLabel: item.dateLabel, location: item.location, description: `${item.title} photo collection from First Naga Baptist Church.`, order: localContent.gallery.find((photo) => photo.event.id === item.id)?.order ?? 100 });
for (const item of localContent.gallery) documents.push({ _id: `gallery-${item.id}`, _type: "galleryPhoto", permissionReminder: "Confirm this photograph is appropriate for public use. Take particular care with children and vulnerable people; do not store private consent records here.", stableId: { _type: "slug", current: item.id }, title: item.title, caption: item.caption, image: await imageReference(item.image), category: item.category, event: { _type: "reference", _ref: `gallery-event-${item.event.id}` }, order: item.order });
for (const item of localContent.givingMethods) documents.push({ _id: `giving-method-${item.id}`, _type: "givingMethod", stableId: { _type: "slug", current: item.id }, name: item.name, description: item.description, contact: item.contact, qrCode: await imageReference(item.qrCode), brandColor: item.brandColor, instructions: item.instructions, order: item.order });
for (const { id, ...item } of localContent.impactAreas) documents.push({ _id: `impact-${id}`, _type: "impactArea", stableId: { _type: "slug", current: id }, ...item });

let transaction = client.transaction();
for (const document of documents) transaction = transaction.createOrReplace(document as Parameters<typeof transaction.createOrReplace>[0]);
await transaction.commit({ autoGenerateArrayKeys: true });
console.log(`Migrated ${documents.length} documents and ${assetCache.size} unique images to ${projectId}/${dataset}.`);
