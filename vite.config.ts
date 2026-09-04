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

// Emit a real index.html for every URL in the sitemap so GitHub Pages
// serves HTTP 200 (not the 404.html fallback) for deep links like /blogs/<slug>.
function emitRouteShells() {
  return {
    name: "emit-route-shells",
    async closeBundle() {
      const buildDir = path.resolve(__dirname, "dist");
      try {
        const html = await fs.readFile(path.join(buildDir, "index.html"), "utf8");
        const sitemap = await fs.readFile(
          path.resolve(__dirname, "public/sitemap.xml"),
          "utf8",
        );
        const paths = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g))
          .map((m) => new URL(m[1]).pathname.replace(/^\/|\/$/g, ""))
          .filter(Boolean);
        for (const p of Array.from(new Set(paths))) {
          const dir = path.join(buildDir, p);
          await fs.mkdir(dir, { recursive: true });
          await fs.writeFile(path.join(dir, "index.html"), html);
        }
        console.log(`✓ Emitted ${new Set(paths).size} static route shells for GitHub Pages.`);
      } catch (err) {
        console.error("Error emitting route shells:", err);
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
