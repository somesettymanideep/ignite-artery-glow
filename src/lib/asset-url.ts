const LOVABLE_ASSET_ORIGIN = "https://ignite-artery-glow.lovable.app";

const ABSOLUTE_URL_RE = /^[a-z][a-z\d+.-]*:/i;

export function resolveAssetUrl(url: string) {
  if (!url || ABSOLUTE_URL_RE.test(url)) return url;
  if (url.startsWith("/__l5e/assets-v1/")) return `${LOVABLE_ASSET_ORIGIN}${url}`;
  return url;
}

export function toAbsoluteUrl(url: string) {
  const resolved = resolveAssetUrl(url);
  if (!resolved || ABSOLUTE_URL_RE.test(resolved)) return resolved;
  return `${LOVABLE_ASSET_ORIGIN}${resolved.startsWith("/") ? resolved : `/${resolved}`}`;
}