import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // We use standard Vite output for static hosting.
  // GitHub Pages needs an index.html at the root of the deployment.
});