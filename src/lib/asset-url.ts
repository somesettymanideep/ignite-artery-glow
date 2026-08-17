const LOVABLE_ASSET_ORIGIN = "https://ignite-artery-glow.lovable.app";

const ABSOLUTE_URL_RE = /^[a-z][a-z\d+.-]*:/i;

/**
 * Ensures an asset URL is absolute and correctly formatted.
 * In production/Netlify, it points to the stable Lovable asset origin
 * to bypass potential path resolution issues on GitHub Pages/custom domains.
 */
export function resolveAssetUrl(url: string | undefined | null): string {
  if (!url) return "";
  
  // If it's already an absolute URL (http/https), return it
  if (ABSOLUTE_URL_RE.test(url)) return url;
  
  // Handle Lovable-specific internal asset paths
  if (url.startsWith("/__l5e/assets-v1/")) {
    return `${LOVABLE_ASSET_ORIGIN}${url}`;
  }

  // Handle local relative paths (like /reels/...)
  if (url.startsWith("/")) {
    return `${LOVABLE_ASSET_ORIGIN}${url}`;
  }

  return url;
}

export function toAbsoluteUrl(url: string | undefined | null): string {
  return resolveAssetUrl(url);
}