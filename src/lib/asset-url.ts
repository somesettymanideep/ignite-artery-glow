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

  // We are in the browser if window is defined
  const isBrowser = typeof window !== "undefined";
  
  // Detect if we are in a Lovable preview environment (internal or .lovable.app)
  const isLovablePreview = isBrowser && 
    (window.location.hostname.includes("lovableproject.com") || 
     window.location.hostname.includes("lovable.app") ||
     window.location.hostname.includes("localhost"));

  // 1. Lovable Managed Assets (Vite proxy paths)
  // These usually start with /__l5e/ or contain /assets/ but are managed by Lovable Cloud
  if (url.startsWith("/__l5e/assets-v1/")) {
    // In preview, use relative paths so the platform's proxy works.
    // In production, point to the stable cloud origin.
    return isLovablePreview ? url : `${LOVABLE_MANAGED_ORIGIN}${url}`;
  }
  
  // 2. Local Public Assets (e.g. /reels/, /favicon.png)
  // These are in the public/ folder.
  if (url.startsWith("/")) {
    // In preview, relative to current origin.
    // In production, force the custom domain.
    return isLovablePreview ? url : `${PRODUCTION_DOMAIN}${url}`;
  }
  
  // Default fallback
  return isLovablePreview ? `/${url}` : `${PRODUCTION_DOMAIN}/${url}`;
}

export function toAbsoluteUrl(url: string | undefined | null) {
  return resolveAssetUrl(url);
}
