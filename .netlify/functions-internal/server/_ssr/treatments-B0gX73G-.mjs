import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Phone, Pt as ArrowRight, St as ChevronRight, dt as Droplets, et as HeartPulse, f as Syringe, p as Stethoscope } from "../_libs/lucide-react.mjs";
import { i as openBookingModal } from "./services-data-CLOj8zB_.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Reveal, t as Navbar } from "./Navbar-BM-BbmIn.mjs";
import { t as about_surgery_default } from "./about-surgery-DfwoFKko.mjs";
import { t as Footer } from "./Footer-CN1lV9Wq.mjs";
import { t as SubBanner } from "./SubBanner-DKGa-SKN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/treatments-B0gX73G-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	{
		id: "arterial",
		title: "Arterial diseases",
		icon: HeartPulse,
		short: "Complete care for blocked, narrowed or diseased arteries affecting limbs and organs.",
		items: [
			"Acute limb ischemia",
			"Chronic limb ischemia",
			"Gangrene",
			"Non healing ulcer",
			"Diabetic foot ulcers",
			"Thrombolysis",
			"Thrombectomy",
			"Hybrid procedures",
			"Angioplasty and stenting",
			"Vasculitis",
			"Aneurysms",
			"Pseudo aneurysms",
			"Ruptured pseudo aneurysms"
		]
	},
	{
		id: "venous",
		title: "Venous diseases",
		icon: Droplets,
		short: "Modern minimally invasive solutions for varicose veins, clots and venous ulcers.",
		items: [
			"Varicose veins",
			"Venous ulcers",
			"Dvt",
			"Catheter directed Thrombolysis",
			"Venous Thrombectomy",
			"Post thrombotic syndrome",
			"Venoplasty and stenting",
			"May thurner syndrome",
			"Ivc filter",
			"Aneurysms"
		]
	},
	{
		id: "av-access",
		title: "AV access and dialysis related",
		icon: Stethoscope,
		short: "Creation, maintenance and salvage of vascular access for long-term dialysis care.",
		items: [
			"Radio cephalic fistula",
			"Brachio cephalic fistula",
			"Brachio basilic fistula",
			"Upper limb AV graft",
			"Chest loop AV graft",
			"Lower limb AV graft",
			"Complicated av access",
			"Fistula salvage",
			"Fistuloplasty",
			"Central vein stenosis",
			"Fistula ligation",
			"Ruptured fistula"
		]
	},
	{
		id: "central-line",
		title: "Central line access",
		icon: Syringe,
		short: "Safe insertion and management of central venous catheters and ports for therapy.",
		items: [
			"Hickman line",
			"Picc line",
			"Chemoport insertion"
		]
	}
];
function CategoryRow({ category, isActive, onActivate }) {
	const Icon = category.icon;
	if (isActive) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl shadow-secondary/10 ring-1 ring-secondary/5 transition-all duration-500",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onActivate,
			className: "flex w-full items-center justify-between bg-gradient-brand p-5 text-left sm:px-6",
			"aria-expanded": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-5 w-5",
						strokeWidth: 1.75
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "truncate font-display text-lg font-bold text-primary-foreground sm:text-xl",
					children: category.title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/20 text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 rotate-90" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card p-5 sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-x-8 gap-y-3 sm:grid-cols-2",
				children: category.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "group flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium leading-snug text-secondary sm:text-[15px]",
						children: item
					})]
				}, item))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "mt-6 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-secondary/10 py-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary transition-colors duration-300 hover:bg-secondary/5",
				children: [
					"View all ",
					category.title.toLowerCase(),
					" services",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })
				]
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onActivate,
		onMouseEnter: onActivate,
		onFocus: onActivate,
		className: "group flex w-full items-center justify-between rounded-2xl border border-border/60 bg-card p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/25 hover:shadow-soft sm:px-6",
		"aria-expanded": "false",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand-soft text-secondary transition-colors duration-300 group-hover:text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-5 w-5",
					strokeWidth: 1.75
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "truncate font-display text-lg font-semibold text-secondary transition-colors duration-300 group-hover:text-primary",
					children: category.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 truncate text-xs text-muted-foreground",
					children: category.short
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" })]
	});
}
function TreatmentsGrid() {
	const [activeId, setActiveId] = (0, import_react.useState)("arterial");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "up",
					className: "mb-10 text-center sm:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-bold uppercase tracking-[0.28em] text-primary",
							children: "Specialized Care"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-secondary sm:text-4xl lg:text-5xl",
							children: [
								"What We",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Treat"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mx-0 sm:text-base",
							children: "Comprehensive vascular and endovascular services tailored to your health and recovery."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: CATEGORIES.map((category, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "up",
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryRow, {
							category,
							isActive: activeId === category.id,
							onActivate: () => setActiveId(category.id)
						})
					}, category.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "up",
					delay: .2,
					className: "mt-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",
						children: "Not seeing your condition?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-secondary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "Contact Specialist"]
					})]
				})
			]
		})
	});
}
function CtaBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-10 lg:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				variant: "zoom",
				className: "rounded-[5px] bg-gradient-cta p-8 text-center text-primary-foreground shadow-lift sm:p-12 lg:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl",
						children: "Not Sure Which Treatment You Need?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base",
						children: "Our vascular specialists will evaluate your condition and recommend the most effective, minimally invasive approach for your recovery."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => openBookingModal(),
							className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-secondary shadow-soft transition-transform duration-300 hover:scale-105",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "Book an Appointment"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10",
							children: ["Get a Second Opinion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})
				]
			})
		})
	});
}
function TreatmentsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubBanner, {
			title: "Our Treatments",
			crumb: "Our Treatments",
			image: about_surgery_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreatmentsGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { TreatmentsPage as component };
