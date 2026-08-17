import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // GitHub Pages is a static host. TanStack Start/Nitro needs to be configured 
  // to emit a static SPA build. In this environment, we use cloudflare-pages 
  // to get a clean dist/client output, and we rely on public/index.html as a 
  // template for the SPA entry point.
  nitro: {
    preset: "cloudflare-pages",
  },
});