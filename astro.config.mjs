import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://research.kazakhstan.ai",
  output: "static",
  trailingSlash: "never",
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
