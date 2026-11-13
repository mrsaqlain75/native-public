// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// TODO: replace with the real domain (custom or vercel.app) at launch,
// then update the Sitemap line in public/robots.txt to match.
const SITE = "https://native-public.vercel.app";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
