import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    base: process.env.VITE_BASE_PATH || "https://ignitevascularcenter.com/",
    build: {
      outDir: "dist/client",
    }
  },
  nitro: {
    preset: process.env.NITRO_PRESET || "netlify",
  },
});
