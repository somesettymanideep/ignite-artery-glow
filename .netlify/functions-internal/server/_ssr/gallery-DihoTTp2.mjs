import { i as __toESM } from "../_runtime.mjs";
import { t as resolveAssetUrl } from "./asset-url-OiRCJEiB.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { Ct as ChevronLeft, Et as Calendar, Pt as ArrowRight, Q as Image$1, R as MessageSquareHeart, St as ChevronRight, a as Users, ft as Download, n as X, t as ZoomIn, y as ShieldCheck } from "../_libs/lucide-react.mjs";
import { i as openBookingModal } from "./services-data-CLOj8zB_.mjs";
import { n as Reveal, t as Navbar } from "./Navbar-BM-BbmIn.mjs";
import { t as Footer } from "./Footer-CN1lV9Wq.mjs";
import { t as FloatingEmergency } from "./FloatingEmergency-B717BN6m.mjs";
import { t as SubBanner } from "./SubBanner-DKGa-SKN.mjs";
import { i as team_surgeon_default, n as procedure_angio_default, r as procedure_surgery_default, t as facility_cathlab_default } from "./team-surgeon-CKbopyHo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DihoTTp2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var gallery_hero_png_asset_default = {
	version: 1,
	asset_id: "43375c4d-8318-48df-a051-c14098730140",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/43375c4d-8318-48df-a051-c14098730140/gallery-hero.png",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/43375c4d-8318-48df-a051-c14098730140/gallery-hero.png",
	original_filename: "gallery-hero.png",
	size: 1806887,
	content_type: "image/png",
	created_at: "2026-07-13T06:51:43Z"
};
var facility_exterior_default = "https://ignitevascularcenter.com/assets/facility-exterior-BQZ3z4dV.jpg";
var facility_reception_default = "https://ignitevascularcenter.com/assets/facility-reception-5zOhrH8a.jpg";
var facility_room_default = "https://ignitevascularcenter.com/assets/facility-room-B4iQgbuR.jpg";
var team_group_default = "https://ignitevascularcenter.com/assets/team-group-Vzqt1kB8.jpg";
var event_camp_default = "https://ignitevascularcenter.com/assets/event-camp-gXffva08.jpg";
var event_inauguration_default = "https://ignitevascularcenter.com/assets/event-inauguration-gSR66COR.jpg";
var patient_consult_default = "https://ignitevascularcenter.com/assets/patient-consult-Djz3R1GT.jpg";
var patient_care_default = "https://ignitevascularcenter.com/assets/patient-care-DXPEy75b.jpg";
var heroReception = resolveAssetUrl(gallery_hero_png_asset_default.url);
var galleryBanner = resolveAssetUrl(gallery_hero_png_asset_default.url);
var FEATURES = [
	{
		icon: Image$1,
		title: "Modern Facilities",
		desc: "State-of-the-art infrastructure"
	},
	{
		icon: Users,
		title: "Expert Team",
		desc: "Experienced & dedicated specialists"
	},
	{
		icon: MessageSquareHeart,
		title: "Patient Comfort",
		desc: "Designed for your care and convenience"
	},
	{
		icon: ShieldCheck,
		title: "Trusted Care",
		desc: "Compassionate care you can rely on"
	}
];
var CATEGORIES = [
	"All",
	"Center & Facilities",
	"Our Team",
	"Procedures",
	"Events & Camps",
	"Patient Care"
];
var IMAGES = [
	{
		src: facility_exterior_default,
		alt: "Hospital Exterior",
		cat: "Center & Facilities"
	},
	{
		src: facility_reception_default,
		alt: "Reception & Waiting Lounge",
		cat: "Center & Facilities"
	},
	{
		src: facility_cathlab_default,
		alt: "Advanced Cath Lab",
		cat: "Center & Facilities"
	},
	{
		src: facility_room_default,
		alt: "Patient Recovery Room",
		cat: "Center & Facilities"
	},
	{
		src: team_group_default,
		alt: "Our Medical Team",
		cat: "Our Team"
	},
	{
		src: team_surgeon_default,
		alt: "Vascular Surgeon",
		cat: "Our Team"
	},
	{
		src: procedure_surgery_default,
		alt: "Endovascular Surgery",
		cat: "Procedures"
	},
	{
		src: procedure_angio_default,
		alt: "Angiography Procedure",
		cat: "Procedures"
	},
	{
		src: event_camp_default,
		alt: "Free Health Check-up Camp",
		cat: "Events & Camps"
	},
	{
		src: event_inauguration_default,
		alt: "Hospital Inauguration",
		cat: "Events & Camps"
	},
	{
		src: patient_consult_default,
		alt: "Doctor Consultation",
		cat: "Patient Care"
	},
	{
		src: patient_care_default,
		alt: "Compassionate Bedside Care",
		cat: "Patient Care"
	}
];
function GalleryTwoPage() {
	const [active, setActive] = (0, import_react.useState)("All");
	const filtered = active === "All" ? IMAGES : IMAGES.filter((i) => i.cat === active);
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const triggerRefs = (0, import_react.useRef)([]);
	const dialogRef = (0, import_react.useRef)(null);
	const closeBtnRef = (0, import_react.useRef)(null);
	const lastTriggerIndex = (0, import_react.useRef)(null);
	const open = (0, import_react.useCallback)((i) => {
		lastTriggerIndex.current = i;
		setLightbox(i);
	}, []);
	const close = (0, import_react.useCallback)(() => setLightbox(null), []);
	const next = (0, import_react.useCallback)(() => setLightbox((i) => i === null ? i : (i + 1) % filtered.length), [filtered.length]);
	const prev = (0, import_react.useCallback)(() => setLightbox((i) => i === null ? i : (i - 1 + filtered.length) % filtered.length), [filtered.length]);
	(0, import_react.useEffect)(() => {
		if (lightbox === null) return;
		const previouslyFocused = document.activeElement;
		const getFocusable = () => {
			const root = dialogRef.current;
			if (!root) return [];
			return Array.from(root.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])")).filter((el) => !el.hasAttribute("disabled"));
		};
		const onKey = (e) => {
			if (e.key === "Escape") {
				e.preventDefault();
				close();
			} else if (e.key === "ArrowRight") next();
			else if (e.key === "ArrowLeft") prev();
			else if (e.key === "Tab") {
				const focusables = getFocusable();
				if (focusables.length === 0) return;
				const first = focusables[0];
				const last = focusables[focusables.length - 1];
				const activeEl = document.activeElement;
				if (e.shiftKey && activeEl === first) {
					e.preventDefault();
					last.focus();
				} else if (!e.shiftKey && activeEl === last) {
					e.preventDefault();
					first.focus();
				}
			}
		};
		window.addEventListener("keydown", onKey);
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const raf = requestAnimationFrame(() => {
			closeBtnRef.current?.focus();
		});
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prevOverflow;
			const idx = lastTriggerIndex.current;
			((idx !== null ? triggerRefs.current[idx] : null) ?? previouslyFocused)?.focus?.();
		};
	}, [
		lightbox,
		close,
		next,
		prev
	]);
	(0, import_react.useEffect)(() => {
		if (lightbox === null || filtered.length === 0) return;
		[(lightbox + 1) % filtered.length, (lightbox - 1 + filtered.length) % filtered.length].forEach((i) => {
			const img = new Image();
			img.decoding = "async";
			img.src = filtered[i].src;
		});
	}, [lightbox, filtered]);
	(0, import_react.useEffect)(() => {
		setLightbox(null);
		triggerRefs.current = [];
	}, [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubBanner, {
				title: "Gallery",
				crumb: "Gallery",
				image: galleryBanner
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative pt-12 lg:pt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-5 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-[20px] bg-[#f5f6f8]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-0 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								variant: "left",
								className: "relative z-10 px-8 py-14 lg:px-14 lg:py-20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-extrabold uppercase tracking-[0.3em] text-primary",
										children: "Gallery"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-5xl",
										children: [
											"Moments of Care ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: "That Inspire Trust"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-[3px] w-24 rounded-full bg-secondary/60" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground",
										children: "A glimpse into our center, our team, and the care we provide every day."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								variant: "right",
								className: "relative h-[320px] lg:h-[420px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									className: "absolute inset-0 h-full w-full",
									viewBox: "0 0 600 500",
									preserveAspectRatio: "none",
									"aria-hidden": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "arc-grad",
											x1: "0",
											y1: "0",
											x2: "1",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "0%",
												stopColor: "#5A2D91"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "100%",
												stopColor: "#E53935"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
											id: "arc-clip",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120,0 C60,120 60,380 120,500 L600,500 L600,0 Z" })
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M120,0 C60,120 60,380 120,500",
											stroke: "url(#arc-grad)",
											strokeWidth: "6",
											fill: "none"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("foreignObject", {
											x: "0",
											y: "0",
											width: "600",
											height: "500",
											clipPath: "url(#arc-clip)",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: heroReception,
												alt: "Ignite Vascular Center reception",
												decoding: "async",
												fetchPriority: "high",
												className: "h-full w-full object-cover",
												style: {
													height: "500px",
													width: "600px"
												}
											})
										})
									]
								})
							})]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative -mt-8 pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 rounded-[16px] border border-border/70 bg-white p-5 shadow-soft sm:grid-cols-2 lg:grid-cols-4",
						children: FEATURES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "up",
							delay: i * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-sm font-bold text-secondary",
									children: f.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs leading-relaxed text-muted-foreground",
									children: f.desc
								})] })]
							})
						}, f.title))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-5 pt-12 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-nowrap items-center gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0",
							children: CATEGORIES.map((c) => {
								const on = c === active;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActive(c),
									"aria-pressed": on,
									className: `relative shrink-0 rounded-[8px] px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${on ? "bg-primary text-primary-foreground shadow-glow-red ring-2 ring-primary/40 ring-offset-2 ring-offset-background scale-[1.03]" : "bg-transparent text-secondary hover:bg-primary/10 hover:text-primary"}`,
									children: [c, on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute -bottom-1.5 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-primary" })]
								}, c);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-2 rounded-[8px] border-2 border-secondary/30 px-5 py-2.5 text-sm font-bold text-secondary transition-all hover:border-secondary hover:bg-secondary hover:text-secondary-foreground",
							children: ["Download Brochure ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" })]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-5 py-10 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "up",
						delay: i % 3 * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							ref: (el) => {
								triggerRefs.current[i] = el;
							},
							onClick: () => open(i),
							"aria-label": `Open image: ${img.alt}`,
							"aria-haspopup": "dialog",
							className: "group relative block h-56 w-full cursor-zoom-in overflow-hidden rounded-[14px] text-left shadow-soft outline-none ring-primary/60 transition focus-visible:ring-2 focus-visible:ring-offset-2 sm:h-60 lg:h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "contents",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img.src,
										alt: img.alt,
										loading: i < 3 ? "eager" : "lazy",
										decoding: "async",
										className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "pointer-events-none absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full bg-white/95 text-primary opacity-0 shadow-lift ring-1 ring-white/60 backdrop-blur transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
										className: "absolute bottom-0 left-0 right-0 translate-y-4 p-5 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-semibold uppercase tracking-widest text-white/70",
											children: img.cat
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-display text-base font-bold",
											children: img.alt
										})]
									})
								]
							})
						})
					}, `${img.alt}-${i}`))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-5 py-14 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "zoom",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-[16px] p-6 shadow-lift sm:p-10",
						style: { background: "linear-gradient(90deg, #5A2D91 0%, #E53935 100%)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "pointer-events-none absolute -right-6 top-0 h-full w-1/2 opacity-20",
							viewBox: "0 0 400 400",
							fill: "none",
							"aria-hidden": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M20 200 C 100 100, 200 300, 300 180 S 500 220, 580 120",
									stroke: "white",
									strokeWidth: "2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M20 260 C 120 200, 220 360, 320 240 S 500 300, 580 200",
									stroke: "white",
									strokeWidth: "2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M20 320 C 140 260, 240 400, 340 300 S 500 360, 580 260",
									stroke: "white",
									strokeWidth: "2"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-6 w-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-extrabold text-white sm:text-3xl",
									children: "Experience World-Class Vascular Care"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-xl text-sm text-white/85",
									children: "Book an appointment with our experts today."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => openBookingModal(),
								className: "inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-secondary shadow-lift transition-transform duration-300 hover:scale-105",
								children: ["Book an Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingEmergency, {}),
			lightbox !== null && filtered[lightbox] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: dialogRef,
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "lightbox-title",
				"aria-describedby": "lightbox-desc",
				onClick: close,
				className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						ref: closeBtnRef,
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							close();
						},
						"aria-label": "Close image viewer",
						className: "absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white outline-none transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/70",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "h-5 w-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							prev();
						},
						"aria-label": "Previous image",
						className: "absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white outline-none transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/70 sm:left-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
							className: "h-6 w-6",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							next();
						},
						"aria-label": "Next image",
						className: "absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white outline-none transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/70 sm:right-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							className: "h-6 w-6",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						onClick: (e) => e.stopPropagation(),
						className: "relative flex max-h-[90vh] max-w-[92vw] flex-col items-center gap-4 animate-scale-in",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: filtered[lightbox].src,
							alt: filtered[lightbox].alt,
							loading: "eager",
							decoding: "async",
							fetchpriority: "high",
							className: "max-h-[78vh] max-w-full rounded-[10px] object-contain shadow-lift"
						}, filtered[lightbox].src), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							id: "lightbox-desc",
							className: "w-full max-w-2xl text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold uppercase tracking-widest text-white/60",
									children: filtered[lightbox].cat
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "lightbox-title",
									className: "mt-1 font-display text-lg font-bold text-white",
									children: filtered[lightbox].alt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-white/50",
									"aria-live": "polite",
									children: [
										lightbox + 1,
										" / ",
										filtered.length
									]
								})
							]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { GalleryTwoPage as component };
