import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";

const worker = (await import(path.resolve("dist/server/index.mjs"))).default;
const routes = ["/", "/about", "/contact", "/treatments", "/gallery", "/case-studies", "/second-opinion", "/admin", "/home-2", "/home-3"];
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
for (const route of all) {
  const res = await worker.fetch(new Request(`https://ignitevascularcenter.com${route}`), env, { waitUntil() {} });
  const html = await res.text();
  if (res.status !== 200) { console.error(`FAIL ${route} ${res.status}`); process.exitCode = 1; continue; }
  const out = route === "/" ? "dist/client/index.html" : `dist/client${route}/index.html`;
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, html);
  console.log(`prerendered ${route} -> ${out} (${html.length} bytes)`);
}
// SPA fallback: 404.html serves the homepage shell so deep links still hydrate
await writeFile("dist/client/404.html", await readFile("dist/client/index.html"));
