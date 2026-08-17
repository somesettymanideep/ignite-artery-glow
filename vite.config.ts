import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Reverting to a basic cloudflare preset that we know works with the underlying platform.
  // We'll rely on the 404.html for GitHub Pages SPA routing since Nitro's prerendering is failing in this environment.
  nitro: {
    preset: "cloudflare-pages",
  },
});