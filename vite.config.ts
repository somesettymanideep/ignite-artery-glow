import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "static",
    prerender: {
      routes: [
        "/",
        "/about",
        "/contact",
        "/gallery",
        "/case-studies",
        "/treatments",
        "/second-opinion",
        "/admin"
      ],
      crawlLinks: true
    }
  },
});
