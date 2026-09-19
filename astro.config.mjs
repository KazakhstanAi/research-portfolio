import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL || undefined,
  output: "static",
  trailingSlash: "never",
  devToolbar: { enabled: false },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
