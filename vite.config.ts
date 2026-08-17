import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // We use the cloudflare-pages preset for GitHub Pages static hosting.
  // This ensures the client-side index.html is generated correctly in dist/client.
  nitro: {
    preset: "cloudflare-pages",
  },
});