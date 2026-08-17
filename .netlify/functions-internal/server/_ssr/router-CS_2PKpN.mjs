import { i as __toESM } from "../_runtime.mjs";
import { n as toAbsoluteUrl } from "./asset-url-OiRCJEiB.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { Ft as Activity, Mt as ArrowUp, Z as Instagram, ct as Facebook, dt as Droplets, et as HeartPulse, f as Syringe, p as Stethoscope, q as Linkedin, r as Waves } from "../_libs/lucide-react.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
import { t as BookingModal } from "./services-data-CLOj8zB_.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as FloatingEmergency } from "./FloatingEmergency-B717BN6m.mjs";
import { t as hero_section_image_webp_asset_default } from "./hero-section-image.webp.asset-Citw3B_W.mjs";
import { t as Route$12 } from "./services._slug-BTqCW3g5.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CS_2PKpN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "https://ignitevascularcenter.com/assets/styles-DGaaHUqx.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var SERVICES = [
	{
		icon: Activity,
		label: "Arterial Diseases",
		to: "/treatments"
	},
	{
		icon: Waves,
		label: "Venous Diseases",
		to: "/treatments"
	},
	{
		icon: Droplets,
		label: "AV Access & Dialysis",
		to: "/treatments"
	},
	{
		icon: Syringe,
		label: "Central Line Access",
		to: "/treatments"
	},
	{
		icon: HeartPulse,
		label: "Second Opinion",
		to: "/second-opinion"
	},
	{
		icon: Stethoscope,
		label: "All Treatments",
		to: "/treatments"
	}
];
function ScrollToTop() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setVisible(window.scrollY > 320);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const toTop = () => window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `w-72 origin-bottom-right overflow-hidden rounded-3xl border border-border/60 bg-white shadow-lift transition-all duration-300 ease-out ${open ? "pointer-events-auto scale-100 opacity-100 translate-y-0" : "pointer-events-none scale-90 opacity-0 translate-y-4"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-gradient-brand px-5 py-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground/80",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-base font-extrabold text-primary-foreground",
					children: "Our Services"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "p-2",
				children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: s.to,
					onClick: () => setOpen(false),
					className: "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-primary/5 hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate",
						children: s.label
					})]
				}) }, s.label))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setOpen((o) => !o),
				"aria-expanded": open,
				"aria-label": "Quick services menu",
				className: "grid h-11 w-11 place-items-center rounded-full border border-border/60 bg-white text-primary shadow-soft transition-all duration-300 hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: toTop,
				"aria-label": "Scroll to top",
				className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red transition-all duration-300 hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
			})]
		})]
	});
}
var socials = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/people/Ignite-Vascular-Center/61578279247712/",
		icon: Facebook,
		bg: "#1877F2"
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/ignite_vascular_center/?hl=en",
		icon: Instagram,
		bg: "linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)"
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com",
		icon: Linkedin,
		bg: "#0A66C2"
	}
];
function FloatingSocials() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const threshold = Math.max(window.innerHeight * .7, 500);
			setVisible(window.scrollY > threshold);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": !visible,
		className: `fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 transition-all duration-500 md:flex ${visible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0 pointer-events-none"}`,
		children: socials.map(({ name, href, icon: Icon, bg }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": name,
			className: "group relative flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110",
			style: { background: bg },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 20,
				strokeWidth: 2.2
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1",
				children: name
			})]
		}, name))
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-6 left-6 z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `https://wa.me/919966117292?text=${encodeURIComponent("Hello! I would like to inquire about vascular treatments at Ignite Vascular Center.")}`,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "Chat with us on WhatsApp",
			className: "group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-110 active:scale-95",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 24 24",
					className: "h-8 w-8 fill-current",
					xmlns: "http://www.w3.org/2000/svg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:mb-4 group-hover:opacity-100",
					children: ["Chat with us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-neutral-900" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30 group-hover:hidden" })
			]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Ignite Vascular Center | Vascular Surgery in Vijayawada" },
			{
				name: "description",
				content: "Advanced vascular surgery & endovascular care in Kasturibai Peta, Vijayawada. Varicose veins, PAD, diabetic foot care & dialysis access by expert specialists."
			},
			{
				name: "author",
				content: "Ignite Vascular Center"
			},
			{
				property: "og:title",
				content: "Ignite Vascular Center | Vascular Surgery in Vijayawada"
			},
			{
				property: "og:description",
				content: "Advanced vascular surgery & endovascular care in Kasturibai Peta, Vijayawada. Varicose veins, PAD, diabetic foot care & dialysis access by expert specialists."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Ignite Vascular Center | Vascular Surgery in Vijayawada"
			},
			{
				name: "twitter:description",
				content: "Advanced vascular surgery & endovascular care in Kasturibai Peta, Vijayawada. Varicose veins, PAD, diabetic foot care & dialysis access by expert specialists."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
		let raf = 0;
		let active = false;
		let stopAt = 0;
		const forceTop = () => {
			window.scrollTo(0, 0);
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		};
		const loop = () => {
			forceTop();
			if (performance.now() < stopAt) raf = requestAnimationFrame(loop);
			else active = false;
		};
		const start = () => {
			stopAt = performance.now() + 400;
			if (!active) {
				active = true;
				raf = requestAnimationFrame(loop);
			}
		};
		const unsub = router.subscribe("onResolved", ({ toLocation, fromLocation }) => {
			if (toLocation.hash) return;
			if (fromLocation && fromLocation.pathname === toLocation.pathname && !fromLocation.hash) return;
			start();
		});
		return () => {
			unsub();
			cancelAnimationFrame(raf);
		};
	}, [router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollToTop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingEmergency, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingSocials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
		]
	});
}
var $$splitComponentImporter$9 = () => import("./treatments-B0gX73G-.mjs");
var Route$10 = createFileRoute("/treatments")({
	head: () => ({ meta: [
		{ title: "Our Treatments — Ignite Vascular Center, Vijayawada" },
		{
			name: "description",
			content: "Explore advanced vascular treatments at Ignite Vascular Center in Vijayawada. Arterial & venous diseases, dialysis access, central line access and more."
		},
		{
			property: "og:title",
			content: "Our Treatments — Ignite Vascular Center"
		},
		{
			property: "og:description",
			content: "Advanced vascular surgery and endovascular treatments in Vijayawada."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var BASE_URL = "https://ignitevascularcenter.com";
var Route$9 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		}].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$8 = () => import("./second-opinion-Crq2NENe.mjs");
objectType({
	name: stringType().trim().min(2, "Full name is required").max(100, "Name is too long"),
	phone: stringType().trim().min(6, "Phone number is required").max(20, "Phone number is too long"),
	email: stringType().trim().email("Please enter a valid email address").max(255, "Email is too long"),
	age: stringType().refine((val) => !val || Number(val) >= 0 && Number(val) <= 120, { message: "Age must be between 0 and 120" }),
	gender: stringType().optional(),
	concern: stringType().min(1, "Please select a concern"),
	message: stringType().max(1e3, "Message must be less than 1000 characters").optional(),
	file: stringType().optional()
});
var Route$8 = createFileRoute("/second-opinion")({
	head: () => ({ meta: [
		{ title: "Second Opinion — Ignite Vascular Center, Vijayawada" },
		{
			name: "description",
			content: "Request an expert vascular second opinion. Confidential review of your diagnosis and treatment plan by senior vascular specialists in Vijayawada."
		},
		{
			property: "og:title",
			content: "Get a Second Opinion — Ignite Vascular Center"
		},
		{
			property: "og:description",
			content: "Clarity and confidence for your vascular care. Confidential expert review by senior specialists."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./home-3-D1oEpaAs.mjs");
var homeOgImage$1 = toAbsoluteUrl(hero_section_image_webp_asset_default.url);
var Route$7 = createFileRoute("/home-3")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({
		meta: [
			{ title: "Home Hero — Ignite Vascular Center" },
			{
				name: "description",
				content: "Ignite Vascular Center in Vijayawada — advanced vascular and endovascular care by Dr. G. Narasimha Sai."
			},
			{
				property: "og:title",
				content: "Home Hero — Ignite Vascular Center"
			},
			{
				property: "og:description",
				content: "Advanced vascular and endovascular care in Vijayawada by Dr. G. Narasimha Sai."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: homeOgImage$1
			},
			{
				name: "twitter:image",
				content: homeOgImage$1
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ignite-artery-glow.lovable.app/home-3"
		}]
	})
});
var $$splitComponentImporter$6 = () => import("./home-2-DgsydFd6.mjs");
var Route$6 = createFileRoute("/home-2")({
	head: () => ({ meta: [
		{ title: "Ignite Vascular Center — Expert Vascular Care in Vijayawada" },
		{
			name: "description",
			content: "Specialized vascular surgery and endovascular care in Kasturibai Peta, Vijayawada. Minimally invasive procedures, advanced diagnostics, and compassionate patient care."
		},
		{
			property: "og:title",
			content: "Ignite Vascular Center — Expert Vascular Care in Vijayawada"
		},
		{
			property: "og:description",
			content: "Advanced vascular surgery and endovascular procedures with compassion and precision."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./gallery-DihoTTp2.mjs");
var Route$5 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Ignite Vascular Center, Vijayawada" },
		{
			name: "description",
			content: "Explore our facilities, team, procedures and moments of care at Ignite Vascular Center."
		},
		{
			property: "og:title",
			content: "Gallery — Ignite Vascular Center"
		},
		{
			property: "og:description",
			content: "A glimpse into our center, our team, and the care we provide every day."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-ArntAShG.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — Ignite Vascular Center, Vijayawada" },
		{
			name: "description",
			content: "Get in touch with Ignite Vascular Center in Kasturibai Peta, Vijayawada. Book appointments, consultations, or ask questions about vascular care."
		},
		{
			property: "og:title",
			content: "Contact Ignite Vascular Center — Vijayawada"
		},
		{
			property: "og:description",
			content: "Reach our vascular specialists for appointments, consultations and expert care."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./case-studies-CagstKUa.mjs");
var Route$3 = createFileRoute("/case-studies")({
	head: () => ({ meta: [
		{ title: "Case Studies — Real Patients, Real Results | Ignite Vascular Center" },
		{
			name: "description",
			content: "Explore real vascular surgery case studies from Ignite Vascular Center, Vijayawada — varicose veins, PAD, DVT, aneurysm repair, diabetic foot care and more."
		},
		{
			property: "og:title",
			content: "Case Studies — Ignite Vascular Center"
		},
		{
			property: "og:description",
			content: "Real patients. Real results. See how advanced vascular care transformed lives."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./admin-DTX4kbzW.mjs");
var Route$2 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Admin • Ignite Vascular Center" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-vLh-rEeH.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Ignite Vascular Center, Vijayawada" },
		{
			name: "description",
			content: "Learn about Ignite Vascular Center — a specialized vascular surgery & endovascular care center in Kasturibai Peta, Vijayawada. Advanced vascular care with compassionate hearts."
		},
		{
			property: "og:title",
			content: "About Ignite Vascular Center — Vijayawada"
		},
		{
			property: "og:description",
			content: "Advanced vascular surgery and endovascular care center dedicated to excellence, innovation and compassionate patient care."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var hero_varicose_legs_v3_webp_asset_default = {
	version: 1,
	asset_id: "cb2b7886-9389-423a-af58-d5b358147862",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/cb2b7886-9389-423a-af58-d5b358147862/hero-varicose-legs-v3.webp",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/cb2b7886-9389-423a-af58-d5b358147862/hero-varicose-legs-v3.webp",
	original_filename: "hero-varicose-legs-v3.webp",
	size: 220046,
	content_type: "image/webp",
	created_at: "2026-07-15T10:17:44Z"
};
var $$splitComponentImporter = () => import("./routes-CkRZKPpj.mjs");
var homeOgImage = toAbsoluteUrl(hero_varicose_legs_v3_webp_asset_default.url);
var Route = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: "Best Vascular Surgeon in Vijayawada | Best Endovascular Surgeon — Ignite Vascular Center" },
			{
				name: "description",
				content: "Ignite Vascular Center, Vijayawada — led by Dr. G. Narasimha Sai, one of the best vascular & endovascular surgeons in Vijayawada. Advanced treatment for varicose veins, DVT, PAD, diabetic foot & limb salvage."
			},
			{
				name: "keywords",
				content: "best vascular surgeon in Vijayawada, best endovascular surgeon, vascular surgeon Vijayawada, endovascular surgery Vijayawada, varicose veins treatment Vijayawada, DVT treatment, PAD treatment, diabetic foot care, limb salvage, Ignite Vascular Center"
			},
			{
				property: "og:title",
				content: "Best Vascular & Endovascular Surgeon in Vijayawada — Ignite Vascular Center"
			},
			{
				property: "og:description",
				content: "Advanced vascular & endovascular care in Vijayawada by Dr. G. Narasimha Sai (DrNB Vascular Surgery, NIMS). Book a consultation today."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://ignite-artery-glow.lovable.app/"
			},
			{
				property: "og:image",
				content: homeOgImage
			},
			{
				name: "twitter:image",
				content: homeOgImage
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ignite-artery-glow.lovable.app/"
		}, {
			rel: "preload",
			as: "image",
			href: homeOgImage,
			fetchpriority: "high"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "MedicalBusiness",
				name: "Ignite Vascular Center",
				description: "Home to one of the best vascular and endovascular surgeons in Vijayawada, offering advanced treatment for varicose veins, DVT, PAD, diabetic foot and limb salvage.",
				url: "https://ignite-artery-glow.lovable.app/",
				telephone: "+91-00000-00000",
				medicalSpecialty: ["VascularSurgery", "Endovascular Surgery"],
				address: {
					"@type": "PostalAddress",
					streetAddress: "Kasturibai Peta",
					addressLocality: "Vijayawada",
					addressRegion: "Andhra Pradesh",
					addressCountry: "IN"
				},
				physician: {
					"@type": "Physician",
					name: "Dr. G. Narasimha Sai",
					medicalSpecialty: "Vascular and Endovascular Surgery",
					qualifications: "MBBS, DNB (Gen Surg), DrNB (Vascular Surgery) [NIMS]"
				}
			})
		}]
	})
});
var TreatmentsRoute = Route$10.update({
	id: "/treatments",
	path: "/treatments",
	getParentRoute: () => Route$11
});
var SitemapDotxmlRoute = Route$9.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$11
});
var SecondOpinionRoute = Route$8.update({
	id: "/second-opinion",
	path: "/second-opinion",
	getParentRoute: () => Route$11
});
var Home3Route = Route$7.update({
	id: "/home-3",
	path: "/home-3",
	getParentRoute: () => Route$11
});
var Home2Route = Route$6.update({
	id: "/home-2",
	path: "/home-2",
	getParentRoute: () => Route$11
});
var GalleryRoute = Route$5.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var CaseStudiesRoute = Route$3.update({
	id: "/case-studies",
	path: "/case-studies",
	getParentRoute: () => Route$11
});
var AdminRoute = Route$2.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AboutRoute,
	AdminRoute,
	CaseStudiesRoute,
	ContactRoute,
	GalleryRoute,
	Home2Route,
	Home3Route,
	SecondOpinionRoute,
	SitemapDotxmlRoute,
	TreatmentsRoute,
	ServicesSlugRoute: Route$12.update({
		id: "/services/$slug",
		path: "/services/$slug",
		getParentRoute: () => Route$11
	})
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		basepath: "https://ignitevascularcenter.com/",
		scrollRestoration: false,
		scrollRestorationBehavior: "instant",
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
