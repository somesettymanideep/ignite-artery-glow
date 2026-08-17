import { t as resolveAssetUrl } from "./asset-url-OiRCJEiB.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Phone, H as MapPin, U as Mail, ht as Clock } from "../_libs/lucide-react.mjs";
import { t as ignite_logo_png_asset_default } from "./ignite-logo.png.asset-U8I6PM2C.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Reveal } from "./Navbar-BM-BbmIn.mjs";
import { i as FaYoutube, n as FaInstagram, r as FaWhatsapp, t as FaFacebook } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-CN1lV9Wq.js
var import_jsx_runtime = require_jsx_runtime();
var logoUrl = resolveAssetUrl(ignite_logo_png_asset_default.url);
var quickLinks = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Our Treatments",
		to: "/treatments"
	},
	{
		label: "Second Opinion",
		to: "/second-opinion"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var serviceLinks = [
	"Varicose Veins Treatment",
	"Endovascular Procedures",
	"Peripheral Arterial Disease (PAD)",
	"Deep Vein Thrombosis (DVT)",
	"Diabetic Foot Care",
	"Vascular Ultrasound & Diagnosis",
	"Balloon Angioplasty",
	"Arterial Bypass Surgery"
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-secondary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.8fr_1fr_1.1fr] lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "reveal",
					variant: "up",
					delay: 0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "inline-flex items-center",
							"aria-label": "Ignite Vascular Center — Home",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center bg-white px-5 py-4 shadow-sm",
								style: { borderRadius: 8 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logoUrl,
									alt: "Ignite Vascular Center",
									className: "h-20 w-auto",
									width: 320,
									height: 120
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-primary-foreground/75",
							children: "Ignite Vascular Center is a specialized vascular surgery and endovascular care center in Vijayawada, providing advanced treatment with compassion and excellence."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex items-center gap-3",
							children: [
								{
									Icon: FaFacebook,
									label: "Facebook",
									href: "#",
									color: "#1877F2"
								},
								{
									Icon: FaInstagram,
									label: "Instagram",
									href: "#",
									color: "#E4405F",
									gradient: "linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)"
								},
								{
									Icon: FaYoutube,
									label: "YouTube",
									href: "#",
									color: "#FF0000"
								},
								{
									Icon: FaWhatsapp,
									label: "WhatsApp",
									href: "#",
									color: "#25D366"
								}
							].map(({ Icon, label, href, color, gradient }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								"aria-label": label,
								className: "grid h-10 w-10 place-items-center rounded-full bg-white shadow-sm transition-transform hover:scale-110",
								style: gradient ? { background: gradient } : void 0,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5",
									style: { color: gradient ? "#ffffff" : color }
								})
							}, label))
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "reveal",
					variant: "up",
					delay: .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-base font-bold",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5 text-sm text-primary-foreground/75",
						children: quickLinks.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: q.to,
							className: "hover:text-primary-foreground",
							children: q.label
						}) }, q.label))
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "reveal",
					variant: "up",
					delay: .16,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-base font-bold",
						children: "Our Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5 text-sm text-primary-foreground/75",
						children: serviceLinks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "services",
							className: "hover:text-primary-foreground",
							children: s
						}) }, s))
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "reveal",
					variant: "up",
					delay: .24,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-base font-bold",
						children: "Contact Information"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-4 text-sm text-primary-foreground/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Opp. Brahmanandam Orthopaedic Center,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Bellapu Sobhanadri Street, Kasturibai Peta,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Vijayawada, Andhra Pradesh – 520002"
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+919966117292",
									className: "hover:text-primary-foreground",
									children: "+91 99661 17292"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:ignitevascularcenter@gmail.com",
									className: "hover:text-primary-foreground",
									children: "ignitevascularcenter@gmail.com"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Mon – Sat : 9:00 AM – 8:00 PM",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Sunday: By Appointment"
								] })]
							})
						]
					})] })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			style: { backgroundColor: "#d92c2d" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/90 sm:flex-row lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Ignite Vascular Center. All Rights Reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Designed & Developed by",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.ayrondigitalsolutions.com",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "font-semibold underline underline-offset-2 transition-colors hover:text-white",
						children: "Ayron Digital Solutions"
					})
				] })]
			})
		})]
	});
}
//#endregion
export { Footer as t };
