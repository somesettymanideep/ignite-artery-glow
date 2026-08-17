import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { Pt as ArrowRight } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Navbar } from "./Navbar-BM-BbmIn.mjs";
import { t as Footer } from "./Footer-CN1lV9Wq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-gr7xtMUz.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-5 py-32 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-black text-secondary",
					children: "Service not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "The treatment you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/treatments",
					className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-primary-foreground",
					children: ["Browse all treatments ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { ServiceNotFound as notFoundComponent };
