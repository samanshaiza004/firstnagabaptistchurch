import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  "",
);

export default defineConfig({
  site: "https://firstnagabaptistchurch.org",
  output: "static",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID || "6h6upd33",
      dataset: PUBLIC_SANITY_DATASET || "production",
      useCdn: false,
    }),
    sitemap({
      filter: (page) => new URL(page).pathname.replace(/\/$/, "") !== "/admin",
      serialize(item) {
        const url = new URL(item.url);
        if (url.pathname !== "/") url.pathname = url.pathname.replace(/\/$/, "");
        item.url = url.href;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
