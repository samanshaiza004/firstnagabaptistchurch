import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const plugins = [react(), tsconfigPaths()];

  // Only add Netlify plugins when building for production/Netlify to avoid dev issues
  if (mode === "production" || process.env.NETLIFY === "true") {
    try {
      const netlifyReactRouter = require("@netlify/vite-plugin-react-router");
      const netlify = require("@netlify/vite-plugin");

      plugins.push(netlifyReactRouter.default());
      plugins.push(netlify.default());
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(String(error));
      }
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
