// For local assets (imported images), we let Vite handle them normally.
// Only Lovable-managed assets or explicit public paths need the origin prefix
// to resolve correctly across different environments.
const LOVABLE_ASSET_ORIGIN = "https://ignitevascularcenter.com";

const ABSOLUTE_URL_RE = /^[a-z][a-z\d+.-]*:/i;

export function resolveAssetUrl(url: string) {
  if (!url) return url;
  
  // If it's already an absolute URL, return it
  if (ABSOLUTE_URL_RE.test(url)) return url;
  
  // If it's a Lovable managed asset path, make it absolute using the production origin
  if (url.startsWith("/__l5e/assets-v1/")) {
    return `${LOVABLE_ASSET_ORIGIN}${url}`;
  }
  
  // If it's a Vite-processed asset path (starts with /assets/ or contains /src/assets/),
  // do NOT prepend the origin, as the browser should resolve it relative to the current host
  // during development or via the build's relative path logic.
  if (url.startsWith("/assets/") || url.includes("/src/assets/")) {
    return url;
  }
  
  // For local public assets (like /favicon.png or /reels/...), prepend the origin
  // only if we are in a production-like environment where they might be hosted elsewhere.
  if (url.startsWith("/")) {
    return `${LOVABLE_ASSET_ORIGIN}${url}`;
  }
  
  return url;
}

export function toAbsoluteUrl(url: string) {
  return resolveAssetUrl(url);
}