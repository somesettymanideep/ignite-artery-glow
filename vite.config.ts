import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Default cloudflare preset for Nitro.
  // We handle static hosting via public/index.html and 404.html.
  nitro: {
    preset: "cloudflare",
  },
});