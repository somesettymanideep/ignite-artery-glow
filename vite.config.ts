import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // We use the nitro 'static' preset to ensure Nitro generates the HTML files for each route.
  // This is required for GitHub Pages since it doesn't have a dynamic server to handle SSR.
  nitro: {
    preset: "static",
    // Force prerendering of the root to ensure index.html is generated.
    prerender: {
      routes: ["/"],
      crawlLinks: true
    }
  },
});