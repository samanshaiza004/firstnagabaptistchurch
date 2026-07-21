import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { singletonActions, singletonTypes, studioStructure } from "./studioStructure";
import { GivingPublishAction } from "./workflows/GivingPublishAction";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET ?? process.env.PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "first_naga_baptist_church",
  title: "First Naga Baptist Church",
  projectId: projectId || "replace-with-church-project-id",
  dataset,
  plugins: [structureTool({ structure: studioStructure }), visionTool()],
  schema: { types: schemaTypes },
  document: {
    actions: (previous, context) => {
      const actions = singletonTypes.has(context.schemaType)
        ? previous.filter((action) => singletonActions.has(action.action ?? ""))
        : previous;
      return context.schemaType === "givingPage"
        ? actions.map((action) => action.action === "publish" ? GivingPublishAction : action)
        : actions;
    },
  },
});
