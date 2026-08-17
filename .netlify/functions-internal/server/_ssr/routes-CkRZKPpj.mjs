import { i as __toESM } from "../_runtime.mjs";
import { t as resolveAssetUrl } from "./asset-url-OiRCJEiB.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { $ as Heart, A as Phone, At as BadgeCheck, C as Scissors, Ct as ChevronLeft, D as Quote, E as ScanLine, Et as Calendar, Ft as Activity, H as MapPin, I as MessageSquare, Nt as ArrowUpRight, O as Plus, Ot as CalendarCheck, P as Minus, Pt as ArrowRight, St as ChevronRight, T as ScanSearch, Tt as Check, Y as LayoutGrid, _t as ClipboardCheck, a as Users, et as HeartPulse, f as Syringe, gt as ClipboardList, jt as Award, m as Star, nt as Headphones, p as Stethoscope, pt as Cpu, tt as HeartHandshake, y as ShieldCheck } from "../_libs/lucide-react.mjs";
import { i as openBookingModal, n as SERVICES } from "./services-data-CLOj8zB_.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Reveal, t as Navbar } from "./Navbar-BM-BbmIn.mjs";
import { t as Footer } from "./Footer-CN1lV9Wq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CkRZKPpj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImg = resolveAssetUrl({
	version: 1,
	asset_id: "f1cf530c-e30a-4528-b75d-887a90c55ac5",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/f1cf530c-e30a-4528-b75d-887a90c55ac5/hero-avfistula-v5.png",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/f1cf530c-e30a-4528-b75d-887a90c55ac5/hero-avfistula-v5.png",
	original_filename: "hero-avfistula-v5.png",
	size: 2870131,
	content_type: "image/png",
	created_at: "2026-08-04T12:23:24Z"
}.url);
var trust = [
	"Experienced Vascular Specialist",
	"Minimally Invasive Procedures",
	"Expertise in Non-healing ulcers and Limb salvage",
	"simple and complex AV Fistula Surgeries",
	"Personalized Patient Care"
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-secondary/15 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-sm font-semibold text-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-primary text-primary" }), "Advanced Vascular & Endovascular Care"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[2.5rem] xl:text-[2.75rem]",
							children: [
								"Advanced Vascular Surgery with",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Compassion & Precision"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
							children: "Ignite Vascular Center provides comprehensive diagnosis and treatment for diseases affecting arteries, veins, and blood vessels using advanced minimally invasive endovascular procedures, conventional vascular surgery, and simple and complex AV Fistula surgeries."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => openBookingModal(),
								className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-bold text-primary-foreground shadow-glow-red transition-all duration-300 hover:scale-105 hover:shadow-glow-indigo animate-pulse-glow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-5 w-5" }), " Book Appointment"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#services",
								className: "inline-flex items-center gap-2 rounded-full border-2 border-secondary/25 bg-card px-7 py-3.5 font-bold text-secondary transition-all duration-300 hover:border-secondary hover:bg-accent",
								children: ["Our Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 grid gap-3 sm:grid-cols-2",
							children: trust.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
								}), t]
							}, t))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "right",
					className: "relative lg:-mt-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto w-full max-w-[620px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "absolute -inset-6 -z-10 rounded-[40px] opacity-70",
							style: { background: "radial-gradient(ellipse 60% 55% at 55% 45%, rgba(65,48,92,0.10), transparent 70%)" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: heroImg,
							alt: "Medical illustration showing varicose veins and AV fistula anatomy at Ignite Vascular Center",
							width: 1071,
							height: 1568,
							fetchPriority: "high",
							decoding: "async",
							className: "mx-auto block h-auto w-full max-w-[560px] object-contain lg:mt-24"
						})]
					})
				})]
			})
		]
	});
}
var doctorImg = resolveAssetUrl({
	version: 1,
	asset_id: "92c1b473-f848-4c06-a16c-a74c318d5130",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/92c1b473-f848-4c06-a16c-a74c318d5130/doctor-portrait-new.webp",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/92c1b473-f848-4c06-a16c-a74c318d5130/doctor-portrait-new.webp",
	original_filename: "doctor-portrait-new.webp",
	size: 38148,
	content_type: "image/webp",
	created_at: "2026-07-29T12:14:18Z"
}.url);
var DOCTOR_POINTS = [
	{
		icon: Award,
		text: "10+ Years of Experience"
	},
	{
		icon: Stethoscope,
		text: "Expert in Endovascular Procedures"
	},
	{
		icon: Users,
		text: "More than 400+ Simple and Complex AV Fistula Surgeries"
	},
	{
		icon: Activity,
		text: "More than 100+ Laser Surgeries for Varicose Veins"
	},
	{
		icon: Heart,
		text: "Patient-Centered Approach"
	}
];
function VascularSpecialist() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative overflow-hidden py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_1fr_1fr] lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-bold uppercase tracking-[0.25em] text-primary",
							children: "Expert Care You Can Trust"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-[2.75rem]",
							children: [
								"Meet Our",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Vascular ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Specialist"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1 w-16 rounded-full bg-gradient-brand" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-[15px] leading-relaxed text-muted-foreground",
							children: "Our experienced vascular surgeon is dedicated to providing world-class care with expertise, precision, and compassion."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 space-y-3.5",
							children: DOCTOR_POINTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								as: "li",
								variant: "up",
								delay: i * .1,
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-secondary",
									children: p.text
								})]
							}, p.text))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#cta",
							className: "mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105",
							children: ["Know More About Doctor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-6 w-6 place-items-center rounded-full bg-white/25",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "zoom",
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary/10 to-secondary/10 p-3 shadow-lift",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: doctorImg,
							alt: "Dr. G. Narasimha Sai — Vascular & Endovascular Surgeon",
							width: 900,
							height: 1100,
							loading: "lazy",
							decoding: "async",
							className: "w-full rounded-[1.5rem] object-cover"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[2rem] bg-secondary p-8 text-secondary-foreground shadow-lift lg:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-extrabold",
								children: "Dr. G. Narasimha Sai"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-1 text-sm text-secondary-foreground/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "MBBS, DNB (Gen Surg)," }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "DrNB (Vascular Surgery) [NIMS]" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider",
								children: "Vascular & Endovascular Surgeon"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-6 h-px bg-white/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-secondary-foreground/85",
								children: "Specialized in treating complex vascular conditions with minimally invasive and advanced surgical techniques."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 font-display text-2xl italic text-primary-foreground/90",
								style: { fontFamily: "cursive" },
								children: "G. N. Sai"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 border-t border-white/15 pt-4 text-xs font-semibold text-secondary-foreground/70",
								children: "DrNB Vascular Surgery — NIMS"
							})
						]
					})
				})
			]
		})
	});
}
var CATEGORIES = [
	{
		key: "all",
		label: "All Services",
		icon: LayoutGrid
	},
	{
		key: "treatments",
		label: "Treatments",
		icon: Stethoscope
	},
	{
		key: "diagnostics",
		label: "Diagnostics",
		icon: ScanSearch
	},
	{
		key: "surgeries",
		label: "Surgeries",
		icon: Scissors
	},
	{
		key: "care",
		label: "Care Programs",
		icon: HeartHandshake
	}
];
function Services() {
	const [active, setActive] = (0, import_react.useState)("all");
	const visible = active === "all" ? SERVICES : SERVICES.filter((s) => s.cat === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "relative overflow-hidden py-20 lg:py-28",
		style: { background: "#f0f3f6" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-40 bottom-10 h-[28rem] w-[28rem] rounded-full bg-secondary/15 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-5 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "up",
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-black uppercase tracking-[0.28em] text-primary",
								children: "Our Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl",
								children: [
									"Complete Vascular Care",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Under One Roof"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[15px] text-muted-foreground",
								children: "Expert care. Advanced technology. Better outcomes."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "up",
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "tablist",
							"aria-label": "Service categories",
							className: "mt-10 flex flex-wrap items-center justify-center gap-3",
							children: CATEGORIES.map((c) => {
								const selected = active === c.key;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									role: "tab",
									"aria-selected": selected,
									onClick: () => setActive(c.key),
									className: `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${selected ? "text-primary-foreground shadow-glow-red" : "bg-white text-secondary hover:bg-white/80"}`,
									style: selected ? { background: "var(--gradient-brand)" } : { boxShadow: "0 6px 16px -10px rgba(69,54,96,0.35)" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
										className: "h-4 w-4",
										"aria-hidden": true
									}), c.label]
								}, c.key);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: visible.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "zoom",
							delay: i % 3 * .12,
							className: "group relative overflow-hidden rounded-3xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/$slug",
								params: { slug: s.slug },
								className: "relative block h-[320px] overflow-hidden rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: s.image,
										alt: "",
										loading: "lazy",
										width: 800,
										height: 640,
										className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-focus-visible:scale-110"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0",
										style: { background: "linear-gradient(180deg, rgba(20,10,40,0.15) 0%, rgba(20,10,40,0.55) 55%, rgba(15,5,35,0.9) 100%)" },
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1400ms] ease-out group-hover:translate-x-full",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-primary shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110",
										"aria-hidden": true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-x-0 bottom-0 p-6 text-white",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl font-extrabold leading-tight",
												children: s.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-[13px] leading-relaxed text-white/80",
												children: s.short
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-white transition-all duration-300 group-hover:gap-3",
												children: ["Learn More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
													className: "h-4 w-4",
													"aria-hidden": true
												})]
											})
										]
									})
								]
							})
						}, s.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "up",
						delay: .2,
						className: "mt-12 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/treatments",
							className: "group inline-flex items-center gap-3 rounded-full border-2 border-secondary/25 bg-white px-8 py-3.5 font-bold text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:shadow-glow-indigo",
							children: ["View All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-primary-foreground transition-transform duration-300 group-hover:rotate-45",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
							})]
						})
					})
				]
			})
		]
	});
}
var why_choose_default = "https://ignitevascularcenter.com/assets/why-choose-DVMdzAo-.jpg";
var points = [
	{
		icon: BadgeCheck,
		text: "Highly Experienced Specialist"
	},
	{
		icon: Cpu,
		text: "Modern Endovascular Techniques"
	},
	{
		icon: Scissors,
		text: "Minimally Invasive Procedures"
	},
	{
		icon: ClipboardList,
		text: "Personalized Treatment Plans"
	},
	{
		icon: Activity,
		text: "More than 400+ AV Fistula Surgeries"
	},
	{
		icon: HeartHandshake,
		text: "Compassionate Care"
	}
];
function WhyChoose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why-us",
		className: "relative overflow-hidden py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				variant: "left",
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -inset-5 rounded-[2.5rem] bg-gradient-brand opacity-10 blur-2xl",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: why_choose_default,
						alt: "Advanced 3D visualization of the human vascular system in red and indigo",
						width: 1024,
						height: 1024,
						loading: "lazy",
						className: "relative w-full rounded-[2rem] object-cover shadow-lift"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card animate-float absolute -bottom-6 left-6 rounded-2xl px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-extrabold text-gradient",
							children: "Precision First"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-muted-foreground",
							children: "Image-guided vascular care"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				variant: "right",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-bold uppercase tracking-[0.2em] text-primary",
						children: "Why Choose Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#41305c]",
							children: "Ignite Vascular Center"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-muted-foreground",
						children: "We combine surgical expertise, cutting-edge endovascular technology and genuine compassion to deliver the best possible outcomes for every patient."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-4 sm:grid-cols-2",
						children: points.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							as: "li",
							variant: "up",
							delay: i * .1,
							className: "glass-card hover-lift group flex items-center gap-3.5 rounded-2xl px-4 py-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold",
								children: p.text
							})]
						}, p.text))
					})
				]
			})]
		})
	});
}
var steps = [
	{
		icon: MessageSquare,
		title: "Consultation",
		desc: "Detailed evaluation of your symptoms and history."
	},
	{
		icon: ScanLine,
		title: "Diagnosis",
		desc: "Advanced doppler, CT and angiographic imaging."
	},
	{
		icon: ClipboardList,
		title: "Personalized Treatment",
		desc: "A plan tailored to your condition and lifestyle."
	},
	{
		icon: Syringe,
		title: "Procedure",
		desc: "Minimally invasive or surgical intervention."
	},
	{
		icon: HeartPulse,
		title: "Recovery",
		desc: "Comfortable, closely monitored healing."
	},
	{
		icon: CalendarCheck,
		title: "Follow-Up Care",
		desc: "Long-term monitoring for lasting vascular health."
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-surface py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				variant: "up",
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-bold uppercase tracking-[0.2em] text-primary",
					children: "How It Works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl",
					children: ["Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Treatment Journey"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "pointer-events-none absolute left-0 top-10 hidden h-2 w-full lg:block",
					"aria-hidden": true,
					preserveAspectRatio: "none",
					viewBox: "0 0 100 2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "8",
						y1: "1",
						x2: "92",
						y2: "1",
						stroke: "var(--red-brand)",
						strokeOpacity: "0.35",
						strokeWidth: "2",
						strokeDasharray: "2 2",
						className: "vein-line",
						vectorEffect: "non-scaling-stroke"
					})
				}), steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					variant: "zoom",
					delay: i * .15,
					className: "relative text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto grid h-20 w-20 place-items-center rounded-full glass-card shadow-glow-indigo transition-transform duration-500 hover:scale-110",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1.5 -right-1.5 grid h-7 w-7 place-items-center rounded-full bg-secondary text-xs font-extrabold text-secondary-foreground",
								children: i + 1
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-sm font-bold",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
							children: s.desc
						})
					]
				}, s.title))]
			})]
		})
	});
}
var TESTIMONIALS = [
	{
		name: "Bhuvana G",
		location: "Vijayawada",
		treatment: "Patient Review",
		text: "Excellent doctor with great knowledge and patience. The doctor listened carefully to all my concerns and explained the problem and treatment very clearly. I felt comfortable and well cared for throughout the consultation. The staff was also polite and supportive. Highly recommend this doctor for anyone looking for honest and effective treatment.",
		color: "#c5221f"
	},
	{
		name: "Kudipudi Anandkumar",
		location: "Vijayawada",
		treatment: "Patient Review",
		text: "Dr. Narasimha Sai garu ma papa surgery chala care theskoni chesaru, staff kuda chala baga receive cheskunnaru. Varicose veins treatment ki best place edhi. Reasonable price loney surgery chesaru. Thanks to Dr. Narasimha Sai sir and staff.",
		color: "#41305c"
	},
	{
		name: "Naveen Dharanikota",
		location: "Vijayawada",
		treatment: "Patient Review",
		text: "Best vascular surgeon I have ever seen. Some doctors are very commercial and always think of money, but Dr. Narasimha Sai garu is definitely not one of them. Whatever the problem related to vascular, he doesn’t make you panic or overthink it; he will give you hope. He has vast experience in surgeries. Hope this review helps someone recognise this as one of the best doctors in Vijayawada.",
		color: "#1a73e8"
	},
	{
		name: "Balaji Bathala",
		location: "Vijayawada",
		treatment: "Patient Review",
		text: "Excellent doctors and caring staff. My aunty’s surgery was successful. Thank you for the great support and treatment.",
		color: "#188038"
	},
	{
		name: "Smiley Smiley",
		location: "Vijayawada",
		treatment: "Patient Review",
		text: "Treatment was so good. I'm so happy that I got cured very soon. And the doctor's interaction is so friendly.",
		color: "#b06000"
	},
	{
		name: "Ch. Pratap",
		location: "Vijayawada",
		treatment: "Patient Review",
		text: "Doctor chala bhaga chustunnaru. Manchiga recovery aindi. Very satisfied with the care and treatment.",
		color: "#7c4dff"
	}
];
function useSlidesPerView() {
	const [n, setN] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		const compute = () => {
			const w = window.innerWidth;
			setN(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
		};
		compute();
		window.addEventListener("resize", compute);
		return () => window.removeEventListener("resize", compute);
	}, []);
	return n;
}
function Testimonials() {
	const perView = useSlidesPerView();
	const total = TESTIMONIALS.length;
	const [index, setIndex] = (0, import_react.useState)(0);
	const [animate, setAnimate] = (0, import_react.useState)(true);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const regionRef = (0, import_react.useRef)(null);
	const next = (0, import_react.useCallback)(() => setIndex((i) => i + 1), []);
	const prev = (0, import_react.useCallback)(() => {
		setIndex((i) => {
			if (i <= 0) {
				setAnimate(false);
				return total;
			}
			return i - 1;
		});
	}, [total]);
	(0, import_react.useEffect)(() => {
		if (animate) return;
		if (index === total) {
			const raf = requestAnimationFrame(() => {
				setAnimate(true);
				setIndex(total - 1);
			});
			return () => cancelAnimationFrame(raf);
		}
		const raf = requestAnimationFrame(() => setAnimate(true));
		return () => cancelAnimationFrame(raf);
	}, [
		animate,
		index,
		total
	]);
	const onTransitionEnd = () => {
		if (index >= total) {
			setAnimate(false);
			setIndex(0);
		}
	};
	(0, import_react.useEffect)(() => {
		if (paused) return;
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = setInterval(next, 5e3);
		return () => clearInterval(id);
	}, [next, paused]);
	const onKeyDown = (e) => {
		if (e.key === "ArrowRight") {
			e.preventDefault();
			next();
		} else if (e.key === "ArrowLeft") {
			e.preventDefault();
			prev();
		} else if (e.key === "Home") {
			e.preventDefault();
			setAnimate(true);
			setIndex(0);
		} else if (e.key === "End") {
			e.preventDefault();
			setAnimate(true);
			setIndex(total - 1);
		}
	};
	const slideBasis = `${100 / perView}%`;
	const rendered = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, perView)];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "testimonials",
		"aria-labelledby": "testimonials-heading",
		className: "relative overflow-hidden bg-gradient-to-b from-surface via-background to-surface py-20 lg:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-5 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "up",
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
								className: "h-4 w-4",
								"aria-hidden": true
							}), " Patient Stories"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "testimonials-heading",
							className: "mt-4 font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl lg:text-5xl",
							children: ["What Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Patients Say"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-brand" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-sm text-foreground/75 sm:text-base",
							children: "Real experiences from patients who trusted us with their vascular health journey."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "up",
					delay: .1,
					className: "relative mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: regionRef,
						className: "relative",
						role: "region",
						"aria-roledescription": "carousel",
						"aria-label": "Patient testimonials",
						tabIndex: 0,
						onKeyDown,
						onMouseEnter: () => setPaused(true),
						onMouseLeave: () => setPaused(false),
						onFocus: () => setPaused(true),
						onBlur: () => setPaused(false),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-3xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: `flex ${animate ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`,
									style: { transform: `translateX(-${index * (100 / perView)}%)` },
									"aria-live": "polite",
									onTransitionEnd,
									children: rendered.map((t, i) => {
										const realIndex = i % total;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "shrink-0 px-3 py-2",
											style: { flexBasis: slideBasis },
											role: "group",
											"aria-roledescription": "slide",
											"aria-label": `${realIndex + 1} of ${total}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
												className: "group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift focus-within:-translate-y-1.5 focus-within:border-primary/40 focus-within:shadow-lift sm:p-7",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
														className: "h-9 w-9 text-primary/25 transition-transform duration-500 group-hover:scale-110",
														"aria-hidden": true
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-3 flex gap-0.5",
														role: "img",
														"aria-label": "Rated 5 out of 5 stars",
														children: Array.from({ length: 5 }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
															className: "h-4 w-4 fill-[#F9A825] text-[#F9A825]",
															"aria-hidden": true
														}, s))
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
														className: "mt-4 flex-1 text-[15px] leading-relaxed text-foreground/85 line-clamp-5",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
															"“",
															t.text,
															"”"
														] })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
														className: "mt-6 flex items-center gap-3 border-t border-border/60 pt-5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-base font-extrabold text-white shadow-soft",
															style: { backgroundColor: t.color },
															"aria-hidden": true,
															children: t.name.charAt(0)
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																	className: "flex items-center gap-1.5 truncate font-display text-sm font-bold text-secondary",
																	children: [t.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
																		className: "h-4 w-4 shrink-0 text-primary",
																		"aria-label": "Verified patient"
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																	className: "flex items-center gap-1 truncate text-xs font-semibold text-foreground/70",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
																		className: "h-3 w-3 shrink-0",
																		"aria-hidden": true
																	}), t.location]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-1 inline-flex max-w-full truncate rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary",
																	children: t.treatment
																})
															]
														})]
													})
												]
											})
										}, `${t.name}-${i}`);
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: prev,
								"aria-label": "Previous testimonial",
								className: "absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-secondary shadow-soft ring-1 ring-border/70 transition-all duration-300 hover:scale-110 hover:ring-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:grid lg:-left-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
									className: "h-5 w-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: next,
								"aria-label": "Next testimonial",
								className: "absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-secondary shadow-soft ring-1 ring-border/70 transition-all duration-300 hover:scale-110 hover:ring-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:grid lg:-right-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "h-5 w-5",
									"aria-hidden": true
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-center gap-4 sm:gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: prev,
								"aria-label": "Previous testimonial",
								className: "grid h-11 w-11 place-items-center rounded-full bg-white text-secondary shadow-soft ring-1 ring-border/70 transition-all duration-300 hover:scale-110 hover:ring-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
									className: "h-5 w-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								role: "tablist",
								"aria-label": "Select testimonial slide",
								children: TESTIMONIALS.map((_, i) => {
									const active = i === index % total;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										role: "tab",
										"aria-selected": active,
										"aria-label": `Go to slide ${i + 1} of ${total}`,
										onClick: () => {
											setAnimate(true);
											setIndex(i);
										},
										className: `h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${active ? "w-8 bg-gradient-brand" : "w-2.5 bg-border hover:bg-primary/40"}`
									}, i);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: next,
								"aria-label": "Next testimonial",
								className: "grid h-11 w-11 place-items-center rounded-full bg-white text-secondary shadow-soft ring-1 ring-border/70 transition-all duration-300 hover:scale-110 hover:ring-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "h-5 w-5",
									"aria-hidden": true
								})
							})
						]
					})]
				})]
			})
		]
	});
}
var FAQS = [
	{
		q: "What conditions does a vascular surgeon treat?",
		a: "We treat varicose veins, deep vein thrombosis (DVT), peripheral arterial disease (PAD), diabetic foot ulcers, AV Fistula surgeries, aneurysms and critical limb ischemia — using both minimally invasive endovascular and open surgical techniques."
	},
	{
		q: "Are your treatments minimally invasive?",
		a: "Yes. Most procedures — laser ablation for varicose veins and angioplasty for blocked arteries — are performed through needle access under local anesthesia, allowing same-day discharge and rapid recovery."
	},
	{
		q: "How do I know if I need to see a vascular specialist?",
		a: "Leg pain while walking, non-healing wounds, sudden swelling, bulging veins, numbness or discoloration of the feet warrant a vascular evaluation. Early diagnosis prevents serious complications."
	},
	{
		q: "Best AV fistulas are created by vascular surgeons?",
		a: "Yes. Vascular surgeons are uniquely trained in vessel mapping, ultrasound-guided cannulation and long-term fistula surveillance — which is why the best AV fistulas for dialysis access are created by vascular surgeons."
	}
];
var FLOATING_CARDS = [
	{
		icon: Activity,
		title: "What are varicose veins?",
		desc: "Understand the basics of varicose veins and how they affect your health.",
		pos: "lg:top-0 lg:left-0"
	},
	{
		icon: HeartPulse,
		title: "What causes varicose veins?",
		desc: "Explore the common causes and risk factors behind varicose veins.",
		pos: "lg:top-0 lg:right-0"
	},
	{
		icon: ClipboardCheck,
		title: "What are the treatment options?",
		desc: "Learn about the advanced and minimally invasive treatment options.",
		pos: "lg:bottom-0 lg:left-0"
	},
	{
		icon: ShieldCheck,
		title: "Is the treatment painful?",
		desc: "Know what to expect during treatment and recovery.",
		pos: "lg:bottom-0 lg:right-0"
	}
];
function FAQs() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-20 lg:py-28",
		style: { backgroundColor: "#f8f9fc" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-32 bottom-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold uppercase tracking-[0.25em] text-primary",
									children: "FAQs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-primary" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-6xl",
								children: [
									"Frequently Asked",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "Questions"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-muted-foreground",
								children: "We're here to help you with answers to common questions."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-3",
						children: FAQS.map((item, i) => {
							const isOpen = open === i;
							const num = String(i + 1).padStart(2, "0");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								variant: "up",
								delay: i * .05,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `rounded-2xl border transition-all ${isOpen ? "faq-accordion-open border-primary/30 bg-red-soft/15 shadow-lg shadow-primary/10" : "border-border bg-card hover:border-primary/30 hover:shadow-md"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setOpen(isOpen ? null : i),
										"aria-expanded": isOpen,
										className: "flex w-full items-center gap-4 px-5 py-4 text-left",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-lg font-extrabold tabular-nums ${isOpen ? "text-primary" : "text-secondary/70"}`,
												children: num
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex-1 text-base font-semibold text-secondary",
												children: item.q
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all ${isOpen ? "border-primary bg-primary text-white" : "border-primary/40 text-primary"}`,
												children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `faq-accordion-body grid overflow-hidden px-5 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "min-h-0 pl-9",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm leading-relaxed text-muted-foreground",
												children: item.a
											})
										})
									})]
								})
							}, item.q);
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "fade",
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto w-full max-w-xl lg:h-[560px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									className: "faq-orbit pointer-events-none absolute inset-0 hidden h-full w-full lg:block",
									viewBox: "0 0 500 560",
									fill: "none",
									"aria-hidden": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M120 130 Q 250 260 380 130",
											stroke: "currentColor",
											strokeDasharray: "4 6",
											className: "text-secondary/20",
											strokeWidth: "1.5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M120 430 Q 250 300 380 430",
											stroke: "currentColor",
											strokeDasharray: "4 6",
											className: "text-secondary/20",
											strokeWidth: "1.5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M120 130 L 120 430",
											stroke: "currentColor",
											strokeDasharray: "4 6",
											className: "text-secondary/20",
											strokeWidth: "1.5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M380 130 L 380 430",
											stroke: "currentColor",
											strokeDasharray: "4 6",
											className: "text-secondary/20",
											strokeWidth: "1.5"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-32 w-32 place-items-center rounded-3xl rounded-br-sm bg-secondary text-3xl font-extrabold tracking-wide text-white shadow-2xl shadow-secondary/40 sm:h-36 sm:w-36 sm:text-4xl",
											children: "FAQ"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute -bottom-6 -right-6 grid h-16 w-16 place-items-center rounded-2xl rounded-tl-sm bg-primary text-white shadow-xl shadow-primary/40",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white" })
												]
											})
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-full grid-cols-2 gap-4 lg:gap-0",
									children: FLOATING_CARDS.map((card, i) => {
										const Icon = card.icon;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `relative lg:absolute lg:w-[210px] ${card.pos} animate-[floaty_6s_ease-in-out_infinite]`,
											style: { animationDelay: `${i * .4}s` },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "group rounded-2xl bg-card p-5 text-center shadow-xl shadow-secondary/10 ring-1 ring-border/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary text-white shadow-md",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "mt-3 text-sm font-bold leading-snug text-secondary",
														children: card.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-xs leading-relaxed text-muted-foreground",
														children: card.desc
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 h-0.5 w-8 rounded-full bg-primary" })
												]
											})
										}, card.title);
									})
								})
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 grid gap-4 bg-gradient-cta p-6 shadow-lift sm:grid-cols-2 sm:p-8",
						style: { borderRadius: "7px" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-secondary shadow-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-bold text-white",
								children: "Still have questions?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/80",
								children: "Our experts are just a call away."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+919966117292",
							className: "flex items-center gap-4 sm:justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-primary shadow-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-white/70",
								children: "Call Us Today"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-extrabold text-white",
								children: "+91 99661 17292"
							})] })]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes orbit-dash {
          to { stroke-dashoffset: -80; }
        }
        .faq-orbit path {
          stroke-dasharray: 4 6;
          animation: orbit-dash 12s linear infinite;
        }
        .faq-accordion-body {
          transition: grid-template-rows 500ms cubic-bezier(0.22, 1, 0.36, 1),
                      padding 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .faq-accordion-body > div > p {
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 400ms ease 80ms, transform 400ms ease 80ms;
        }
        .faq-accordion-open .faq-accordion-body > div > p {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[floaty_6s_ease-in-out_infinite\\] { animation: none !important; }
          .faq-orbit path { animation: none !important; }
          .faq-accordion-body,
          .faq-accordion-body > div > p {
            transition: none !important;
          }
        }
      ` })
		]
	});
}
var InstagramFeed = (0, import_react.lazy)(() => import("./InstagramFeed-DiGul4LF.mjs").then((m) => ({ default: m.InstagramFeed })));
/**
* Defers mounting (and therefore code-splitting + video asset loading) of the
* Instagram Reels section until the user scrolls near it. Keeps the initial
* home-page bundle small and avoids fetching any reel videos on first paint.
*/
function LazyInstagramFeed() {
	const sentinelRef = (0, import_react.useRef)(null);
	const [mount, setMount] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = sentinelRef.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setMount(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setMount(true);
				io.disconnect();
				break;
			}
		}, { rootMargin: "600px 0px" });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	if (!mount) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: sentinelRef,
		"aria-hidden": true,
		className: "min-h-[520px] w-full bg-white"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "min-h-[520px] w-full bg-white"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramFeed, {})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "up",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VascularSpecialist, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "fade",
			delay: .05,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "up",
			delay: .05,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChoose, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "left",
			delay: .05,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "up",
			delay: .05,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQs, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "up",
			delay: .05,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "zoom",
			delay: .05,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyInstagramFeed, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
