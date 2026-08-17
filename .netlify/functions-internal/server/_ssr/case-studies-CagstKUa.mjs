import { i as __toESM } from "../_runtime.mjs";
import { t as resolveAssetUrl } from "./asset-url-OiRCJEiB.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { Dt as CalendarDays, Et as Calendar, Ft as Activity, Pt as ArrowRight, Y as LayoutGrid, a as Users, at as Funnel, ht as Clock, jt as Award, p as Stethoscope } from "../_libs/lucide-react.mjs";
import { i as openBookingModal } from "./services-data-CLOj8zB_.mjs";
import { n as Reveal, t as Navbar } from "./Navbar-BM-BbmIn.mjs";
import { t as Footer } from "./Footer-CN1lV9Wq.mjs";
import { t as FloatingEmergency } from "./FloatingEmergency-B717BN6m.mjs";
import { t as SubBanner } from "./SubBanner-DKGa-SKN.mjs";
import { i as team_surgeon_default, n as procedure_angio_default, r as procedure_surgery_default, t as facility_cathlab_default } from "./team-surgeon-CKbopyHo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case-studies-CagstKUa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var case_studies_banner_webp_asset_default = {
	version: 1,
	asset_id: "ecbb7b49-6afb-43f2-a1f7-056a05d4a93f",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/ecbb7b49-6afb-43f2-a1f7-056a05d4a93f/case-studies-banner.webp",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/ecbb7b49-6afb-43f2-a1f7-056a05d4a93f/case-studies-banner.webp",
	original_filename: "case-studies-banner.webp",
	size: 70733,
	content_type: "image/jpeg",
	created_at: "2026-07-13T07:44:49Z"
};
var case_hero_1_jpg_asset_default = {
	version: 1,
	asset_id: "3e9f3427-d201-4755-8060-06a58352820a",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/3e9f3427-d201-4755-8060-06a58352820a/case-hero-1.jpg",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/3e9f3427-d201-4755-8060-06a58352820a/case-hero-1.jpg",
	original_filename: "case-hero-1.jpg",
	size: 65866,
	content_type: "image/jpeg",
	created_at: "2026-07-14T05:08:29Z"
};
var case_hero_2_jpg_asset_default = {
	version: 1,
	asset_id: "a90a2375-e2a7-48b5-96a0-edfbb686a47f",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/a90a2375-e2a7-48b5-96a0-edfbb686a47f/case-hero-2.jpg",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/a90a2375-e2a7-48b5-96a0-edfbb686a47f/case-hero-2.jpg",
	original_filename: "case-hero-2.jpg",
	size: 76430,
	content_type: "image/jpeg",
	created_at: "2026-07-14T05:08:29Z"
};
var caseBannerUrl = resolveAssetUrl(case_studies_banner_webp_asset_default.url);
var heroSlide1Url = resolveAssetUrl(case_hero_1_jpg_asset_default.url);
var heroSlide2Url = resolveAssetUrl(case_hero_2_jpg_asset_default.url);
var CASES = [
	{
		category: "Varicose Veins",
		title: "Endovenous Laser Treatment for Severe Varicose Veins",
		description: "A 45-year-old female patient suffering from painful varicose veins and swelling in both legs. Underwent Endovenous Laser Treatment (EVLT) with excellent results.",
		image: procedure_surgery_default,
		treatmentTime: "45 mins",
		recovery: "2 days",
		outcome: "Excellent",
		badgeColor: "indigo"
	},
	{
		category: "Peripheral Artery Disease (PAD)",
		title: "Angioplasty for Blocked Leg Artery",
		description: "A 62-year-old male with walking pain due to blocked artery in the leg. Treated successfully with peripheral angioplasty and stent placement.",
		image: procedure_angio_default,
		treatmentTime: "60 mins",
		recovery: "3 days",
		outcome: "Great",
		badgeColor: "red"
	},
	{
		category: "Deep Vein Thrombosis (DVT)",
		title: "DVT Management & Recovery",
		description: "A 38-year-old male diagnosed with DVT in the left leg. Treated with advanced anticoagulation therapy and compression management.",
		image: facility_cathlab_default,
		treatmentTime: "—",
		recovery: "7 days",
		outcome: "Stable",
		badgeColor: "indigo"
	},
	{
		category: "AV Fistula Surgeries",
		title: "Brachiocephalic AV Fistula Creation for Dialysis Access",
		description: "A 55-year-old patient with end-stage renal disease required durable hemodialysis access. A radiocephalic AV fistula was created using microsurgical technique with excellent thrill and flow.",
		image: team_surgeon_default,
		treatmentTime: "90 mins",
		recovery: "14 days",
		outcome: "Functional",
		badgeColor: "red"
	}
];
var CATEGORIES = [
	{
		label: "All Cases",
		short: "All",
		icon: LayoutGrid
	},
	{
		label: "Varicose Veins",
		short: "Varicose Veins",
		icon: Activity
	},
	{
		label: "Peripheral Artery Disease (PAD)",
		short: "PAD",
		icon: Stethoscope
	},
	{
		label: "Deep Vein Thrombosis (DVT)",
		short: "DVT",
		icon: Activity
	},
	{
		label: "AV Fistula Surgeries",
		short: "AV Fistula",
		icon: Activity
	}
];
var STATS = [
	{
		icon: Award,
		value: "2000+",
		label: "Successful Procedures"
	},
	{
		icon: Users,
		value: "1500+",
		label: "Happy Patients"
	},
	{
		icon: Stethoscope,
		value: "100+",
		label: "Advanced Treatments"
	},
	{
		icon: Activity,
		value: "10+",
		label: "Years of Experience"
	}
];
function CaseStudiesPage() {
	const [active, setActive] = (0, import_react.useState)("All Cases");
	const filtered = (0, import_react.useMemo)(() => active === "All Cases" ? CASES : CASES.filter((c) => c.category === active), [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background [overflow-x:clip]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubBanner, {
				title: "Case Studies",
				image: caseBannerUrl,
				crumb: "Case Studies"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden bg-[#f5f6f8] pt-24 lg:pt-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-14 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:pb-16 lg:pl-8 lg:pr-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								variant: "left",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-extrabold uppercase tracking-[0.3em] text-primary",
									children: "Case Studies"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								variant: "up",
								delay: .06,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-4 font-display text-[40px] font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-[56px]",
									children: [
										"Real Patients.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "Real Results."
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								variant: "left",
								delay: .14,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-[3px] w-20 rounded-full bg-primary/80" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								variant: "up",
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground",
									children: "Explore our case studies to see how advanced vascular care and personalized treatment have transformed lives."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4",
								children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									variant: "up",
									delay: .28 + i * .06,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
												className: "h-4 w-4",
												strokeWidth: 1.75
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-lg font-extrabold leading-none text-secondary",
											children: s.value
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
											children: s.label
										})] })]
									})
								}, s.label))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "right",
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative -mr-5 lg:mr-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCarousel, {})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-white border-y border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 py-4 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2 overflow-x-auto flex-nowrap snap-x snap-mandatory scroll-px-1 pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
										role: "tablist",
										"aria-label": "Case study categories",
										children: CATEGORIES.map((c) => {
											const isActive = c.label === active;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												role: "tab",
												"aria-selected": isActive,
												onClick: () => setActive(c.label),
												className: `snap-start inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${isActive ? "bg-gradient-brand text-primary-foreground shadow-glow-red" : "bg-accent/60 text-secondary/80 hover:bg-accent"}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
														className: "h-4 w-4 shrink-0",
														strokeWidth: 1.75
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "sm:hidden",
														children: c.short
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "hidden sm:inline",
														children: c.label
													})
												]
											}, c.label);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "shrink-0 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border/70 bg-white px-4 py-2 text-[13px] font-semibold text-secondary/80 hover:bg-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, {
									className: "h-4 w-4",
									strokeWidth: 1.75
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Filter"
								})]
							})]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 lg:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
						children: filtered.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "up",
							delay: i * .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group flex h-full flex-col overflow-hidden rounded-[7px] bg-white shadow-soft ring-1 ring-border/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative aspect-[16/10] overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										variant: "zoom",
										delay: .06 + i * .1,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: c.image,
											alt: c.title,
											loading: "lazy",
											decoding: "async",
											className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											variant: "left",
											delay: .12 + i * .1,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `inline-flex w-fit items-center rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground ${c.badgeColor === "red" ? "bg-primary" : "bg-secondary"}`,
												children: c.category
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											variant: "up",
											delay: .17 + i * .1,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 font-display text-[17px] font-extrabold leading-snug text-secondary",
												children: c.title
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											variant: "up",
											delay: .22 + i * .1,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2.5 text-[13.5px] leading-relaxed text-muted-foreground",
												children: c.description
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-5 grid grid-cols-3 gap-2 border-t border-border/60 pt-4",
											children: [
												{
													icon: Clock,
													label: "Treatment Time",
													value: c.treatmentTime
												},
												{
													icon: CalendarDays,
													label: "Recovery Time",
													value: c.recovery
												},
												{
													icon: Award,
													label: "Outcome",
													value: c.outcome
												}
											].map((m, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
												variant: "up",
												delay: .28 + i * .1 + j * .05,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaCell, {
													icon: m.icon,
													label: m.label,
													value: m.value
												})
											}, m.label))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											variant: "left",
											delay: .44 + i * .1,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: "mt-4 inline-flex w-fit items-center gap-1.5 text-[13px] font-bold text-primary transition-transform hover:translate-x-0.5",
												children: ["Read More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
											})
										})
									]
								})]
							})
						}, c.title))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-16 lg:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "zoom",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[7px] bg-gradient-cta p-6 sm:p-8 lg:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											variant: "left",
											delay: .1,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-secondary shadow-lift",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
													className: "h-6 w-6",
													strokeWidth: 1.75
												})
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											variant: "up",
											delay: .16,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl font-extrabold text-white sm:text-2xl",
												children: "Need Expert Care for Vascular Conditions?"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											variant: "up",
											delay: .22,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-white/85",
												children: "Our specialists are here to help you every step of the way."
											})
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										variant: "right",
										delay: .28,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => openBookingModal(),
											className: "group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-secondary transition-transform hover:scale-105",
											children: ["Book an Appointment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-6 w-6 place-items-center rounded-full bg-primary text-white transition-transform group-hover:translate-x-0.5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })
											})]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-14 right-24 h-40 w-40 rounded-full bg-primary/40 blur-3xl" })
							]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingEmergency, {})
		]
	});
}
function MetaCell({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "bg-gradient-brand mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full text-white ring-1 ring-white/60 shadow-[0_6px_16px_-4px_rgba(217,44,45,0.45)]",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "h-[18px] w-[18px]",
				strokeWidth: 2.25
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 text-[13px] font-bold text-secondary",
				children: value
			})]
		})]
	});
}
function HeroCarousel() {
	const slides = [{
		src: heroSlide1Url,
		alt: "Healthcare professional examining varicose veins on an elderly patient's legs"
	}, {
		src: heroSlide2Url,
		alt: "Close-up of leg with varicose vein disease"
	}];
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setI((n) => (n + 1) % slides.length), 5500);
		return () => clearInterval(id);
	}, [slides.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative ml-auto w-full max-w-[560px] lg:max-w-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden rounded-[14px] shadow-lift ring-1 ring-border/50",
			children: [slides.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: s.src,
				alt: s.alt,
				loading: idx === 0 ? "eager" : "lazy",
				className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${i === idx ? "opacity-100" : "opacity-0"}`
			}, s.src)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-transparent" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex justify-center gap-2",
			children: slides.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setI(idx),
				"aria-label": `Show slide ${idx + 1}`,
				className: `h-2 rounded-full transition-all duration-500 ${i === idx ? "w-8 bg-gradient-brand" : "w-2 bg-border"}`
			}, idx))
		})]
	});
}
//#endregion
export { CaseStudiesPage as component };
