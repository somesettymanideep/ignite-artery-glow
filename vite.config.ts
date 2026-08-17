import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // We use standard Vite build for GitHub Pages.
  // TanStack Start with Vite generates an index.html if we don't force a complex Nitro preset.
  // Removing nitro config to let the default TanStack Start Vite plugin handle the entry point.
});