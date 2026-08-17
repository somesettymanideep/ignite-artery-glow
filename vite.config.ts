import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    base: process.env.VITE_BASE_PATH || "/",
    build: {
      outDir: "dist/client",
      rollupOptions: {
        input: {
          main: 'index.html',
        },
      },
    }
  },
  nitro: {
    preset: process.env.NITRO_PRESET || "netlify",
  },
});
