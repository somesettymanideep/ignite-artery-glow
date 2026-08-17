import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/contact" },
      { path: "/treatments" },
      { path: "/gallery" },
      { path: "/case-studies" },
      { path: "/second-opinion" },
      { path: "/admin" },
    ],
  },
  nitro: { preset: "static" },
});
