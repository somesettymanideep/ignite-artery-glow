import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // We use standard cloudflare preset.
  // We handle GitHub Pages static serving by providing a 404.html for SPA routing.
  nitro: {
    preset: "cloudflare",
  },
});