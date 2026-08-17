import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Phone, _ as Siren, n as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FloatingEmergency-B717BN6m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FloatingEmergency() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `w-72 origin-bottom-right overflow-hidden rounded-3xl glass-dark shadow-lift transition-all duration-500 ease-out ${open ? "pointer-events-auto scale-100 opacity-100 translate-y-0" : "pointer-events-none scale-90 opacity-0 translate-y-4"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand animate-pulse-glow text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-bold text-primary-foreground",
							children: "24/7 Emergency"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-secondary-foreground/70",
							children: "Immediate care for vascular emergencies. Call us anytime."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+919966117292",
						className: "mt-4 block font-display text-2xl font-extrabold text-primary-foreground transition-colors hover:text-red-soft",
						children: "+91 99661 17292"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+919966117292",
						className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call Now"]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setOpen((o) => !o),
			"aria-expanded": open,
			"aria-label": open ? "Close emergency contact" : "Open emergency contact",
			className: "pointer-events-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "h-6 w-6" })
		})]
	});
}
//#endregion
export { FloatingEmergency as t };
