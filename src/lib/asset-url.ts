const LOVABLE_ASSET_ORIGIN = "https://ignitevascularcenter.com";

const ABSOLUTE_URL_RE = /^[a-z][a-z\d+.-]*:/i;

/**
 * Resolves a URL to its absolute form.
 * If it's a relative asset path (like /assets/...), it keeps it relative for local hosting.
 * If it's a Lovable proxy path, it points it to the Lovable origin.
 */
export function resolveAssetUrl(url: string | undefined | null) {
  if (!url) return "";
  if (ABSOLUTE_URL_RE.test(url)) return url;
  
  // If it's a Lovable asset proxy path, force it to the origin
  if (url.startsWith("/__l5e/assets-v1/")) {
    return `${LOVABLE_ASSET_ORIGIN}${url}`;
  }
  
  // Ensure absolute path for local assets
  if (url.startsWith("/") || url.startsWith("http")) {
    return url;
  }
  
  return `/${url}`;
}

export function toAbsoluteUrl(url: string | undefined | null) {
  const resolved = resolveAssetUrl(url);
  if (!resolved || ABSOLUTE_URL_RE.test(resolved)) return resolved;
  return `${LOVABLE_ASSET_ORIGIN}${resolved.startsWith("/") ? resolved : `/${resolved}`}`;
}