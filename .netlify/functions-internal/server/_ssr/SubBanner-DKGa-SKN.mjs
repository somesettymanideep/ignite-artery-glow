import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { St as ChevronRight } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Reveal } from "./Navbar-BM-BbmIn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SubBanner-DKGa-SKN.js
var import_jsx_runtime = require_jsx_runtime();
function SubBanner({ title, image, crumb }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[300px] overflow-hidden pt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: title,
				loading: "lazy",
				decoding: "async",
				className: "h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/75 to-secondary/50" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl",
					children: title
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "up",
				delay: .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Breadcrumb",
					className: "mt-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rounded-full text-white/75 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							className: "h-3.5 w-3.5 text-white/50",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary-foreground",
							"aria-current": "page",
							children: crumb
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { SubBanner as t };
