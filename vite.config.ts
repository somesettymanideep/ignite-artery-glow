import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // For GitHub Pages, we want a fully static build.
  // We use the static preset to generate HTML files for each route.
  nitro: {
    preset: "static",
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
});