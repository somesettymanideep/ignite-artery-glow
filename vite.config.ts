import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // We use the cloudflare-pages preset for GitHub Pages static hosting.
  // This generates the client-side index.html in the output directory.
  nitro: {
    preset: "cloudflare-pages",
  },
});