export type IconKey = "book" | "users" | "globe" | "service" | "connection" | "house" | "heart";

export interface PortableSpan {
  _key: string;
  _type: "span";
  text: string;
  marks?: string[];
}

export interface PortableBlock {
  _key: string;
  _type: "block";
  style?: "normal" | "h3";
  listItem?: "bullet" | "number";
  level?: number;
  children: PortableSpan[];
  markDefs?: Array<{ _key: string; _type: "link"; href: string }>;
}

export type CmsImage =
  | { source: "local"; key: string; alt: string }
  | { source: "sanity"; url: string; width: number; height: number; alt: string; lqip?: string };

export interface SeoContent { title: string; description: string; socialImage?: CmsImage }
export interface CallToAction { label: string; href: string }
export interface HeroContent { eyebrow: string; title: string; description: string; image: CmsImage }

export interface SiteSettings {
  name: string;
  shortName: string;
  domain: string;
  description: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  venue: string;
  address: string;
  region: string;
  mapEmbedUrl: string;
  footerDescription: string;
  serviceTime: { daylight: string; standard: string; timeZone: "America/Chicago" };
}

export interface HomePageContent {
  seo: SeoContent; hero: HeroContent; heroNote: string; primaryCta: CallToAction; secondaryCta: CallToAction;
  serviceEyebrow: string; serviceTitle: string; serviceDescription: string;
  serviceCards: Array<{ kind: "worship" | "location" | "fellowship"; title: string; value: string; description: string }>;
  seasonalNote: string; leadershipEyebrow: string; leadershipTitle: string; leadershipDescription: string; trusteesTitle: string; trusteesDescription: string;
  objectivesEyebrow: string; objectivesTitle: string; objectivesDescription: string;
  storyEyebrow: string; storyTitle: string; storyBody: PortableBlock[]; storyImage: CmsImage; storyCta: CallToAction;
  eventsEyebrow: string; eventsTitle: string; eventsCta: CallToAction;
}

export interface AboutPageContent {
  seo: SeoContent; hero: HeroContent; historyEyebrow: string; historyTitle: string; historyLead: PortableBlock[]; historyImage: CmsImage;
  quote: string; quoteAttribution: string; historyMiddle: PortableBlock[];
  founding: { year: string; title: string; date: string; body: string };
  historyFinal: PortableBlock[];
  inauguration: { title: string; body: string; guestSpeakers: string[]; historyDate: string };
  founders: { eyebrow: string; title: string; description: string; image: CmsImage; caption: string; names: string[] };
  objectivesEyebrow: string; objectivesTitle: string; objectivesDescription: string; objectivesCta: CallToAction;
}

export interface EventsPageContent { seo: SeoContent; hero: HeroContent; regularTitle: string; specialTitle: string; calendarLabel: string; undatedTitle: string; undatedDescription: string }
export interface GalleryPageContent { seo: SeoContent; hero: HeroContent; introEyebrow: string; introTitle: string; introDescription: string; shareEyebrow: string; shareTitle: string; shareDescription: string; shareButtonLabel: string }
export interface GivingPageContent { seo: SeoContent; hero: HeroContent; waysEyebrow: string; waysTitle: string; waysDescription: string; verificationNotice: string; impactEyebrow: string; impactTitle: string; impactDescription: string; scripture: string; scriptureCitation: string; thanksTitle: string; thanksDescription: string; lastReviewedAt?: string; lastReviewedBy?: string }
export interface ContactPageContent { seo: SeoContent; hero: HeroContent; formTitle: string; formDescription: string; privacyNotice: string; successTitle: string; successDescription: string; infoTitle: string; infoDescription: string; locationNote: string; fellowshipNote: string; joinTitle: string; fellowshipLabel: string; mapTitle: string; mapRegionLabel: string }

export type ScholarshipCycleStatus = "draft" | "open" | "closed" | "selection" | "concluded" | "awaiting";
export interface ScholarshipPdf { url: string; filename: string; label?: string; size?: number }
export interface ScholarshipCycleContent {
  status: ScholarshipCycleStatus;
  year?: number;
  applicationDeadlineDate?: string;
  applicationDeadlineAt?: string;
  deadlineTimeZone?: string;
  awardDate?: string;
  awardCount?: number;
  awardAmount?: number;
  eligibilityRequirements: string[];
  selectionPreferences: string[];
  applicationSteps: string[];
  applicationFile?: ScholarshipPdf;
  printableFile?: ScholarshipPdf;
  submissionEmail?: string;
  submissionSubject?: string;
  professorRecommendationInstructions?: string;
  privacyStatement?: string;
}
export interface ScholarshipMemorialContent {
  approvalStatus: "draft" | "approved";
  heading: string;
  story: PortableBlock[];
  storyAttribution?: string;
  photograph?: CmsImage;
  photographCaption?: string;
  personalWords?: string;
  personalWordsAttribution?: string;
  personalWordsContext?: string;
}
export interface ScholarshipPastCycleContent {
  _key?: string;
  year: number;
  awardDate?: string;
  awardCount?: number;
  awardAmount?: number;
  note?: string;
}
export interface ScholarshipPageContent {
  seo: SeoContent;
  eyebrow: string;
  title: string;
  summary: string;
  cyclePendingMessage: string;
  currentCycle: ScholarshipCycleContent;
  pastCycles: ScholarshipPastCycleContent[];
  memorial: ScholarshipMemorialContent;
}

export interface EventContent { id: string; title: string; dateLabel: string; timeKind: "seasonal" | "label" | "none"; timeLabel?: string; location: string; description: string; recurring: boolean; month?: number | null; day?: number | null; year?: number; order: number }
export interface PersonContent { id: string; name: string; role: string; category: string; bio: string; image: CmsImage; group: "leadership" | "trustee" | "ministry"; order: number }
export interface MinistryContent { id: string; name: string; icon: "music" | "heart"; leaderId: string; members: string[]; order: number }
export interface ObjectiveContent { id: string; icon: IconKey; shortTitle: string; shortDescription: string; title: string; description: string; order: number }
export interface GalleryEventContent { id: string; title: string; dateLabel: string; location: string }
export interface GalleryPhotoContent { id: string; title: string; caption: string; image: CmsImage; category: "Baptism" | "Church Family" | "Church History" | "Culture" | "Worship"; event: GalleryEventContent; order: number }
export interface GivingMethodContent { id: string; name: string; description: string; contact: string; qrCode: CmsImage; brandColor: string; instructions: string[]; order: number }
export interface ImpactAreaContent { id: string; icon: IconKey; title: string; description: string; order: number }

export interface CmsContent {
  settings: SiteSettings;
  pages: { home: HomePageContent; about: AboutPageContent; events: EventsPageContent; gallery: GalleryPageContent; giving: GivingPageContent; contact: ContactPageContent };
  scholarship: ScholarshipPageContent;
  events: EventContent[]; people: PersonContent[]; ministries: MinistryContent[]; objectives: ObjectiveContent[];
  gallery: GalleryPhotoContent[]; givingMethods: GivingMethodContent[]; impactAreas: ImpactAreaContent[];
}
