import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { promises as fs } from "fs";
import path from "path";

// A custom plugin to copy index.html to 404.html for GitHub Pages routing fallback
function copyIndexTo404() {
  return {
    name: "copy-index-to-404",
    async closeBundle() {
      const buildDir = path.resolve(__dirname, "dist");
      const indexPath = path.join(buildDir, "index.html");
      const destPath = path.join(buildDir, "404.html");
      try {
        await fs.copyFile(indexPath, destPath);
        console.log("✓ Successfully copied index.html to 404.html for GitHub Pages routing.");
      } catch (err) {
        console.error("Error copying index.html to 404.html:", err);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    copyIndexTo404(),
  ],
  build: {
    outDir: "dist",
  },
});
