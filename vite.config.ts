import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // We use the cloudflare-pages preset because it consistently generates the index.html
  // and asset structure required for a static SPA host like GitHub Pages.
  nitro: {
    preset: "cloudflare-pages",
  },
});