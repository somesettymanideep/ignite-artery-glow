import { i as __toESM } from "../_runtime.mjs";
import { t as resolveAssetUrl } from "./asset-url-OiRCJEiB.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Phone, V as Menu, n as X, wt as ChevronDown } from "../_libs/lucide-react.mjs";
import { i as openBookingModal, n as SERVICES } from "./services-data-CLOj8zB_.mjs";
import { t as ignite_logo_png_asset_default } from "./ignite-logo.png.asset-U8I6PM2C.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Navbar-BM-BbmIn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var variantClass = {
	up: "reveal-up",
	left: "reveal-left",
	right: "reveal-right",
	zoom: "reveal-zoom",
	fade: "reveal-fade"
};
function prefersReducedMotion() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Reveal({ children, variant = "up", delay = 0, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (prefersReducedMotion()) {
			setVisible(true);
			return;
		}
		const rect = el.getBoundingClientRect();
		const vh = window.innerHeight || document.documentElement.clientHeight;
		if (rect.top < vh * .95) {
			setVisible(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setVisible(true);
				io.disconnect();
				break;
			}
		}, {
			rootMargin: "0px 0px -12% 0px",
			threshold: .08
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: `reveal ${variantClass[variant]} ${visible ? "reveal-visible" : ""} ${className}`,
		style: { "--reveal-delay": `${delay}s` },
		children
	});
}
function useCountUp(target, duration = 1800) {
	const ref = (0, import_react.useRef)(null);
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			io.disconnect();
			const start = performance.now();
			const tick = (now) => {
				const p = Math.min((now - start) / duration, 1);
				const eased = 1 - Math.pow(1 - p, 3);
				setValue(Math.round(target * eased));
				if (p < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [target, duration]);
	return {
		ref,
		value
	};
}
var logoUrl = resolveAssetUrl(ignite_logo_png_asset_default.url);
var NAV = [
	{
		label: "Home",
		route: "/"
	},
	{
		label: "About",
		route: "/about"
	},
	{
		label: "Our Treatments",
		route: "/treatments"
	},
	{
		label: "Second Opinion",
		route: "/second-opinion"
	},
	{
		label: "Case Studies",
		route: "/case-studies"
	},
	{
		label: "Gallery",
		route: "/gallery"
	},
	{
		label: "Contact",
		route: "/contact"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [treatOpen, setTreatOpen] = (0, import_react.useState)(false);
	const [mobileTreatOpen, setMobileTreatOpen] = (0, import_react.useState)(false);
	const closeTimer = (0, import_react.useRef)(null);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(max > 0 ? window.scrollY / max * 100 : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const openTreat = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setTreatOpen(true);
	};
	const scheduleCloseTreat = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		closeTimer.current = setTimeout(() => setTreatOpen(false), 140);
	};
	const linkBase = "relative text-[13px] font-semibold transition-colors";
	const renderLink = (item, closeOnClick = true) => {
		const active = pathname === item.route || item.route === "/treatments" && pathname.startsWith("/services/");
		const cls = `${linkBase} ${active ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary" : "text-secondary/80 hover:text-primary"}`;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: item.route,
			className: cls,
			onClick: closeOnClick ? () => setOpen(false) : void 0,
			children: item.label
		}, item.label);
	};
	const renderDesktopItem = (item) => {
		if (item.route === "/treatments") {
			const active = pathname === "/treatments" || pathname.startsWith("/services/");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative",
				onMouseEnter: openTreat,
				onMouseLeave: scheduleCloseTreat,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/treatments",
					className: `${linkBase} inline-flex items-center gap-1 ${active ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-[calc(100%-16px)] after:rounded-full after:bg-primary" : "text-secondary/80 hover:text-primary"}`,
					"aria-haspopup": "menu",
					"aria-expanded": treatOpen,
					children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
						className: `h-3.5 w-3.5 transition-transform duration-300 ${treatOpen ? "rotate-180" : ""}`,
						"aria-hidden": true
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "menu",
					className: `absolute left-1/2 top-full z-50 mt-3 w-[320px] -translate-x-1/2 rounded-2xl border border-border/60 bg-white p-2 shadow-xl transition-all duration-200 ${treatOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`,
					onMouseEnter: openTreat,
					onMouseLeave: scheduleCloseTreat,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3 pb-2 pt-2 text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground",
							children: "Featured Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-1",
							children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/$slug",
								params: { slug: s.slug },
								role: "menuitem",
								className: "group flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-secondary",
								onClick: () => setTreatOpen(false),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-brand-soft text-primary transition group-hover:bg-white/10 group-hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[13px] font-bold leading-tight text-secondary group-hover:text-white",
										children: s.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block text-[11px] leading-snug text-muted-foreground group-hover:text-white/75",
										children: s.short
									})]
								})]
							}) }, s.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/treatments",
							onClick: () => setTreatOpen(false),
							className: "mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-secondary/5 py-2.5 text-[12px] font-bold uppercase tracking-[0.18em] text-secondary hover:bg-secondary/10",
							children: "View all treatments"
						})
					]
				})]
			}, item.label);
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: renderLink(item, false) }, item.label);
	};
	const cta = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => {
			setOpen(false);
			openBookingModal();
		},
		className: "hidden items-center gap-1.5 rounded-full bg-gradient-brand px-3.5 py-2 text-xs font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105 sm:inline-flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), " Book Appointment"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 bg-white shadow-soft transition-all duration-500",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-0 h-0.5 bg-gradient-brand transition-[width] duration-150",
				style: { width: `${progress}%` },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-3",
						"aria-label": "Ignite Vascular Center — Home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logoUrl,
							alt: "Ignite Vascular Center",
							className: "h-14 w-auto shrink-0 sm:h-24",
							width: 320,
							height: 120,
							decoding: "async",
							fetchPriority: "high"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-7 lg:flex",
						children: NAV.map(renderDesktopItem)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 sm:gap-3",
						children: [
							cta,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+919966117292",
								className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red transition-transform hover:scale-105 lg:hidden",
								"aria-label": "Call us",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "relative grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-white text-secondary transition hover:border-primary/40 hover:text-primary lg:hidden",
								onClick: () => setOpen(!open),
								"aria-label": "Toggle menu",
								"aria-expanded": open,
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `fixed inset-0 z-40 bg-secondary/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
				onClick: () => setOpen(false),
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `fixed right-0 top-0 z-50 flex h-[100dvh] w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`,
				"aria-hidden": !open,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border/60 px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logoUrl,
							alt: "Ignite Vascular Center",
							className: "h-14 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid h-10 w-10 place-items-center rounded-xl border border-border/60 text-secondary hover:text-primary",
							onClick: () => setOpen(false),
							"aria-label": "Close menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 overflow-y-auto px-3 py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1",
							children: NAV.map((item) => {
								const active = pathname === item.route || item.route === "/treatments" && pathname.startsWith("/services/");
								if (item.route === "/treatments") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `flex items-center justify-between rounded-xl px-3 ${active ? "bg-gradient-brand-soft" : ""}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/treatments",
											onClick: () => setOpen(false),
											className: `flex-1 py-3 text-[15px] font-semibold ${active ? "text-primary" : "text-secondary"}`,
											children: item.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "grid h-9 w-9 place-items-center rounded-lg text-secondary/70 hover:bg-white",
											onClick: () => setMobileTreatOpen((v) => !v),
											"aria-label": "Toggle treatments",
											"aria-expanded": mobileTreatOpen,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform ${mobileTreatOpen ? "rotate-180" : ""}` })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `grid overflow-hidden transition-all duration-300 ${mobileTreatOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "min-h-0 space-y-1 border-l border-primary/20 pl-3 ml-4 mt-1",
											children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/services/$slug",
												params: { slug: s.slug },
												onClick: () => setOpen(false),
												className: "flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-semibold text-secondary/80 hover:bg-secondary/5 hover:text-primary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-7 w-7 shrink-0 place-items-center rounded-md bg-gradient-brand-soft text-primary",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-3.5 w-3.5" })
												}), s.title]
											}) }, s.slug))
										})
									})]
								}, item.label);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.route,
									onClick: () => setOpen(false),
									className: `flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-semibold transition ${active ? "bg-gradient-brand-soft text-primary" : "text-secondary hover:bg-secondary/5"}`,
									children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 -rotate-90 opacity-40" })]
								}) }, item.label);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border/60 p-4 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setOpen(false);
								openBookingModal();
							},
							className: "flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand py-2.5 text-xs font-bold text-primary-foreground shadow-glow-red",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), " Book Appointment"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+919966117292",
							className: "flex w-full items-center justify-center gap-2 rounded-full border border-border/60 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-secondary hover:border-primary/40 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), " +91 99661 17292"]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Reveal as n, useCountUp as r, Navbar as t };
