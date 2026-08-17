import { n as toAbsoluteUrl } from "./asset-url-OiRCJEiB.mjs";
import { r as getServiceBySlug } from "./services-data-CLOj8zB_.mjs";
import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-BTqCW3g5.js
var $$splitComponentImporter = () => import("./services._slug-DDEjSIFd.mjs");
var $$splitErrorComponentImporter = () => import("./services._slug-DXf6Yww3.mjs");
var $$splitNotFoundComponentImporter = () => import("./services._slug-gr7xtMUz.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = getServiceBySlug(params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Service not found — Ignite Vascular Center" }, {
			name: "robots",
			content: "noindex"
		}] };
		const s = loaderData.service;
		return { meta: [
			{ title: `${s.title} — Ignite Vascular Center, Vijayawada` },
			{
				name: "description",
				content: s.short
			},
			{
				property: "og:title",
				content: `${s.title} — Ignite Vascular Center`
			},
			{
				property: "og:description",
				content: s.short
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: toAbsoluteUrl(s.image)
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
