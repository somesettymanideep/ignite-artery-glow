import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // We use the cloudflare-pages preset.
  // We also try to enable prerendering which should generate the static HTML files.
  nitro: {
    preset: "cloudflare-pages",
    prerender: {
      routes: ["/"],
    }
  },
});