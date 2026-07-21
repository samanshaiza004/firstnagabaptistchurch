import { aboutPage } from "./singletons/aboutPage";
import { contactPage } from "./singletons/contactPage";
import { eventsPage } from "./singletons/eventsPage";
import { galleryPage } from "./singletons/galleryPage";
import { givingPage } from "./singletons/givingPage";
import { homePage } from "./singletons/homePage";
import { siteSettings } from "./singletons/siteSettings";
import { event } from "./documents/event";
import { galleryPhoto } from "./documents/galleryPhoto";
import { givingMethod } from "./documents/givingMethod";
import { impactArea } from "./documents/impactArea";
import { ministry } from "./documents/ministry";
import { objective } from "./documents/objective";
import { person } from "./documents/person";
import { callToAction, hero, richText, seo } from "./objects";

export const schemaTypes = [
  seo, callToAction, hero, richText,
  siteSettings, homePage, aboutPage, eventsPage, galleryPage, givingPage, contactPage,
  event, person, ministry, objective, galleryPhoto, givingMethod, impactArea,
];
