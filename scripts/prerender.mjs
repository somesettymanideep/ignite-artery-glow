import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";

const worker = (await import(path.resolve("dist/server/index.mjs"))).default;
const routes = [
  "/", 
  "/about", 
  "/contact", 
  "/treatments", 
  "/gallery", 
  "/case-studies", 
  "/second-opinion", 
  "/admin", 
  "/home-2", 
  "/home-3"
];

// Slugs must match exactly with src/lib/services-data.ts
const services = [
  "/services/varicose-veins-treatment",
  "/services/simple-and-complex-av-fistula",
  "/services/peripheral-arterial-disease",
  "/services/endovascular-procedures",
  "/services/deep-vein-thrombosis",
  "/services/diabetic-foot-care",
  "/services/limb-salvage-procedures",
  "/services/trauma-and-emergency-procedures",
];

const all = [...routes, ...services];
const env = { ASSETS: undefined };

console.log(`Starting prerender for ${all.length} routes...`);

for (const route of all) {
  try {
    const res = await worker.fetch(new Request(`https://ignitevascularcenter.com${route}`), env, { waitUntil() {} });
    const html = await res.text();
    
    if (res.status !== 200) { 
      console.error(`FAIL ${route} Status: ${res.status}`);
      // Log the first few chars of error body if possible
      console.error(`Body snippet: ${html.slice(0, 200)}`);
      process.exitCode = 1; 
      continue; 
    }
    
    // For GitHub Pages, we need a directory structure with index.html for each route
    // /about -> /about/index.html
    const out = route === "/" ? "dist/client/index.html" : `dist/client${route}/index.html`;
    
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, html);
    console.log(`✓ ${route} -> ${out} (${html.length} bytes)`);
  } catch (err) {
    console.error(`ERROR prerendering ${route}:`, err);
    process.exitCode = 1;
  }
}

// 1. CNAME for custom domain
await writeFile("dist/client/CNAME", "ignitevascularcenter.com");

// 2. .nojekyll to prevent GitHub Pages from ignoring files starting with underscores
await writeFile("dist/client/.nojekyll", "");

// 3. SPA fallback: 404.html serves the homepage shell so deep links still hydrate
// This is critical for routes that weren't explicitly prerendered or for client-side routing
try {
  const indexHtml = await readFile("dist/client/index.html");
  await writeFile("dist/client/404.html", indexHtml);
  console.log("✓ Created 404.html from index.html");
} catch (err) {
  console.error("CRITICAL ERROR: Could not create 404.html because index.html is missing!");
  process.exitCode = 1;
}

console.log("Prerender complete.");
