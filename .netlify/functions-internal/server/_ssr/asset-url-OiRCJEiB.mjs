//#region node_modules/.nitro/vite/services/ssr/assets/asset-url-OiRCJEiB.js
var LOVABLE_ASSET_ORIGIN = "https://ignite-artery-glow.lovable.app";
var ABSOLUTE_URL_RE = /^[a-z][a-z\d+.-]*:/i;
/**
* Resolves a URL to its absolute form.
* If it's a relative asset path (like /assets/...), it keeps it relative for local hosting.
* If it's a Lovable proxy path, it points it to the Lovable origin.
*/
function resolveAssetUrl(url) {
	if (!url) return "";
	if (ABSOLUTE_URL_RE.test(url)) return url;
	if (url.startsWith("/__l5e/assets-v1/")) return `${LOVABLE_ASSET_ORIGIN}${url}`;
	if (url.startsWith("/") || url.startsWith("http")) return url;
	return `/${url}`;
}
function toAbsoluteUrl(url) {
	const resolved = resolveAssetUrl(url);
	if (!resolved || ABSOLUTE_URL_RE.test(resolved)) return resolved;
	return `${LOVABLE_ASSET_ORIGIN}${resolved.startsWith("/") ? resolved : `/${resolved}`}`;
}
//#endregion
export { toAbsoluteUrl as n, resolveAssetUrl as t };
