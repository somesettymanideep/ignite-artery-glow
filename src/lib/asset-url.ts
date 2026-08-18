const LOVABLE_ASSET_ORIGIN = "https://ignite-artery-glow.lovable.app";

const ABSOLUTE_URL_RE = /^[a-z][a-z\d+.-]*:/i;

export function resolveAssetUrl(url: string) {
  if (!url) return url;
  
  // If it's already an absolute URL (like http://... or https://...), return it
  if (ABSOLUTE_URL_RE.test(url)) return url;
  
  // If it's a Lovable managed asset path, make it absolute using the production origin
  if (url.startsWith("/__l5e/assets-v1/")) {
    return `${LOVABLE_ASSET_ORIGIN}${url}`;
  }
  
  // For local public assets (like /favicon.png or /reels/...), also make them absolute
  // This ensures they resolve correctly on static hosting like GitHub Pages
  if (url.startsWith("/")) {
    return `${LOVABLE_ASSET_ORIGIN}${url}`;
  }
  
  return url;
}

export function toAbsoluteUrl(url: string) {
  return resolveAssetUrl(url);
}