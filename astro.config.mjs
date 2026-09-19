import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL || "https://vaislabs.com",
  output: "static",
  trailingSlash: "never",
  devToolbar: { enabled: false },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
