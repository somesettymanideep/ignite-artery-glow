import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // We use standard cloudflare preset.
  // We handle GitHub Pages static serving by providing a 404.html for SPA routing.
  nitro: {
    preset: "cloudflare",
    // Prerender to ensure index.html and other static files are generated.
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },
});