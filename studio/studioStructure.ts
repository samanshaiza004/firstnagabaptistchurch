import type { StructureBuilder, StructureResolver } from "sanity/structure";

const singletons = [
  ["siteSettings", "Church Settings"],
  ["homePage", "Home Page"],
  ["aboutPage", "About Page"],
  ["eventsPage", "Events Page"],
  ["galleryPage", "Gallery Page"],
  ["givingPage", "Giving Page"],
  ["contactPage", "Contact Page"],
] as const;

export const singletonTypes = new Set<string>(singletons.map(([type]) => type));
export const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonItem = (S: StructureBuilder, type: string, title: string) =>
  S.listItem().title(title).id(type).child(S.document().schemaType(type).documentId(type));

export const studioStructure: StructureResolver = (S) => S.list()
  .title("Church Website")
  .items([
    ...singletons.map(([type, title]) => singletonItem(S, type, title)),
    S.divider(),
    S.documentTypeListItem("event").title("Events"),
    S.documentTypeListItem("person").title("People"),
    S.documentTypeListItem("ministry").title("Ministries"),
    S.documentTypeListItem("objective").title("Mission Objectives"),
    S.documentTypeListItem("galleryPhoto").title("Gallery Photos"),
    S.documentTypeListItem("galleryEvent").title("Gallery Events"),
    S.documentTypeListItem("givingMethod").title("Giving Methods"),
    S.documentTypeListItem("impactArea").title("Giving Impact Areas"),
  ]);
