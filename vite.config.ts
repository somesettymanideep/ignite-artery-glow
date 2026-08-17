import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Use cloudflare preset for Nitro so it correctly processes the server entry.
  // We use 404.html redirection for static hosting on GitHub Pages.
  nitro: {
    preset: "cloudflare",
  },
});