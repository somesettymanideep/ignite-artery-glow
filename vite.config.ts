import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // We use Nitro's static preset for a complete static export.
  // This generates an index.html and other static assets in dist/client.
  nitro: {
    preset: "static",
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
});