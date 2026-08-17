/**
 * The primary origin for Lovable-managed assets. 
 * Since GitHub Pages doesn't proxy /__l5e/, we MUST use the full Lovable URL for these.
 */
const LOVABLE_MANAGED_ORIGIN = "https://ignite-artery-glow.lovable.app";

/**
 * The production domain for local /public assets.
 */
const PRODUCTION_DOMAIN = "https://ignitevascularcenter.com";

const ABSOLUTE_URL_RE = /^[a-z][a-z\d+.-]*:/i;

/**
 * Resolves a URL to its absolute form.
 */
export function resolveAssetUrl(url: string | undefined | null) {
  if (!url) return "";
  
  // If it's already an absolute URL (e.g. data: or https://), return as is
  if (ABSOLUTE_URL_RE.test(url)) return url;
  
  // 1. Lovable Managed Assets (Vite proxy paths)
  // These usually start with /__l5e/ or contain /assets/ but are managed by Lovable Cloud
  if (url.startsWith("/__l5e/assets-v1/")) {
    return `${LOVABLE_MANAGED_ORIGIN}${url}`;
  }
  
  // 2. Local Public Assets (e.g. /reels/, /favicon.png)
  // These are in the public/ folder and should be served from the production domain
  if (url.startsWith("/reels/") || url.startsWith("/favicon.png") || url.startsWith("/logo.png")) {
    return `${PRODUCTION_DOMAIN}${url}`;
  }

  // 3. Bundled Assets (e.g. /assets/index-*.js)
  // These are relative to the domain root
  if (url.startsWith("/")) {
    return `${PRODUCTION_DOMAIN}${url}`;
  }
  
  // Default fallback for relative paths
  return `${PRODUCTION_DOMAIN}/${url}`;
}

export function toAbsoluteUrl(url: string | undefined | null) {
  return resolveAssetUrl(url);
}
