import { i as __toESM } from "../_runtime.mjs";
import { t as resolveAssetUrl } from "./asset-url-OiRCJEiB.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Phone, O as Plus, P as Minus, Pt as ArrowRight, Tt as Check, a as Users, dt as Droplets, et as HeartPulse, ft as Download, h as Sparkles, ht as Clock, i as WandSparkles, j as PhoneCall, jt as Award, m as Star, vt as CircleQuestionMark, xt as CircleCheck, y as ShieldCheck } from "../_libs/lucide-react.mjs";
import { a as service_avfistula_jpg_asset_default, i as openBookingModal, n as SERVICES } from "./services-data-CLOj8zB_.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Reveal, t as Navbar } from "./Navbar-BM-BbmIn.mjs";
import { t as Footer } from "./Footer-CN1lV9Wq.mjs";
import { t as SubBanner } from "./SubBanner-DKGa-SKN.mjs";
import { t as Route } from "./services._slug-BTqCW3g5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-DDEjSIFd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var avFistulaImg = resolveAssetUrl(service_avfistula_jpg_asset_default.url);
var FEATURES = [
	{
		icon: WandSparkles,
		title: "Minimally Invasive",
		desc: "Advanced techniques with minimal pain"
	},
	{
		icon: Clock,
		title: "Quick Recovery",
		desc: "Get back to your routine faster"
	},
	{
		icon: ShieldCheck,
		title: "Safe & Effective",
		desc: "Proven treatments with great results"
	},
	{
		icon: HeartPulse,
		title: "Better Quality of Life",
		desc: "Relieve pain, improve circulation & comfort"
	}
];
var WHY_CHOOSE = [
	"Expert Vascular Surgeons",
	"Advanced Technology",
	"Minimally Invasive Treatments",
	"Personalized Patient Care",
	"Proven Track Record"
];
function splitSymptom(s) {
	const commaIdx = s.indexOf(",");
	if (commaIdx > 0 && commaIdx < 22) return {
		title: s.slice(0, commaIdx).trim(),
		desc: s.slice(commaIdx + 1).trim()
	};
	const words = s.split(" ");
	return {
		title: words.slice(0, 2).join(" "),
		desc: words.slice(2).join(" ") || s
	};
}
function ServiceDetail() {
	const { service } = Route.useLoaderData();
	const related = SERVICES;
	const titleWords = service.title.split(" ");
	const titleHead = titleWords.slice(0, -1).join(" ");
	const titleAccent = titleWords.slice(-1)[0];
	const symptomCards = service.symptoms.slice(0, 4).map(splitSymptom);
	const bullets = service.benefits.slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "bg-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubBanner, {
					title: service.title,
					crumb: service.title,
					image: service.image
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden pt-16 lg:pt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-0 -z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-40 right-[-120px] h-[380px] w-[380px] rounded-full bg-[hsl(258,90%,66%)]/15 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(1200px_500px_at_50%_-10%,hsl(15,90%,97%),transparent)]" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-7xl px-5 lg:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 lg:grid-cols-12 lg:gap-14",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								variant: "up",
								className: "lg:col-span-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3 py-1.5 shadow-soft backdrop-blur",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-5 w-5 place-items-center rounded-full bg-gradient-brand text-primary-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10.5px] font-black uppercase tracking-[0.24em] text-primary",
											children: "Our Service"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-4 font-display text-4xl font-black leading-[1.02] tracking-tight text-secondary sm:text-5xl lg:text-6xl",
										children: [
											titleHead,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "relative inline-block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "bg-gradient-brand bg-clip-text text-transparent",
													children: titleAccent
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"aria-hidden": true,
													className: "absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-gradient-brand opacity-20"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground",
										children: service.overview
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex flex-wrap items-center gap-x-6 gap-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex",
														children: [
															0,
															1,
															2,
															3,
															4
														].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-amber-400 text-amber-400" }, i))
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[13px] font-bold text-secondary",
														children: "4.9/5"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[12px] text-muted-foreground",
														children: "· 500+ patients"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-px bg-border" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-[13px] font-semibold text-secondary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4 text-primary" }), "NABH-aligned care"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4",
										children: FEATURES.map(({ icon: I, title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
											variant: "up",
											delay: .05 * (i + 1),
											as: "li",
											className: "group text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-primary shadow-soft ring-1 ring-primary/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-glow-red group-hover:ring-primary/40",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-6 w-6" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-[13px] font-bold text-secondary",
													children: title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-[11.5px] leading-snug text-muted-foreground",
													children: desc
												})
											]
										}, title))
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								variant: "zoom",
								className: "lg:col-span-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											"aria-hidden": true,
											className: "absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-brand opacity-20 blur-2xl"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative overflow-hidden rounded-[2rem] shadow-glow-red ring-1 ring-black/5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: service.image,
												alt: service.title,
												decoding: "async",
												fetchPriority: "high",
												className: "h-[420px] w-full object-cover sm:h-[500px]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												"aria-hidden": true,
												className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/25 via-transparent to-transparent"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute -top-4 right-4 hidden rounded-2xl border border-white/60 bg-white/95 p-4 shadow-soft backdrop-blur sm:block",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow-red",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-lg font-black leading-none text-secondary",
													children: "500+"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
													children: "Patients treated"
												})] })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute -bottom-5 left-4 hidden items-center gap-3 rounded-2xl border border-white/60 bg-white/95 p-3 pr-5 shadow-soft backdrop-blur sm:flex",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-bold uppercase tracking-wider text-primary",
												children: "Day-care"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[13px] font-bold text-secondary",
												children: "Walk-in · Walk-out"
											})] })]
										})
									]
								})
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative py-16 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_0%_20%,hsl(15,90%,97%),transparent)]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-16 lg:col-span-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									variant: "up",
									as: "section",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-black uppercase tracking-[0.24em] text-primary",
											children: "01 · Overview"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "mt-2 font-display text-3xl font-extrabold text-secondary sm:text-4xl",
											children: ["About ", service.title.replace(/ Treatment$/i, "")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-[15px] leading-relaxed text-muted-foreground",
											children: service.overview
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
											children: symptomCards.map(({ title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
												variant: "up",
												delay: .05 * i,
												as: "li",
												className: "group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-red",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														"aria-hidden": true,
														className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow-red",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-5 w-5" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "relative mt-4 text-[15px] font-bold text-secondary",
														children: title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "relative mt-1.5 text-[12.5px] leading-snug text-muted-foreground",
														children: desc
													})
												]
											}, title + i))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									variant: "up",
									as: "section",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-black uppercase tracking-[0.24em] text-primary",
										children: "02 · Treatment"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 grid items-center gap-10 lg:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
												className: "font-display text-3xl font-extrabold text-secondary sm:text-4xl",
												children: [
													"How We Treat",
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "bg-gradient-brand bg-clip-text text-transparent",
														children: service.title.replace(/ Treatment$/i, "")
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-[14.5px] leading-relaxed text-muted-foreground",
												children: "We provide state-of-the-art treatments customized to your condition for lasting relief and improved vascular health."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-6 space-y-3",
												children: bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-primary/5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red transition-transform group-hover:scale-110",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[14.5px] font-semibold text-secondary",
														children: b
													})]
												}, b))
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													"aria-hidden": true,
													className: "absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-brand-soft"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													"aria-hidden": true,
													className: "absolute -right-4 -bottom-4 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: service.image,
													alt: `${service.title} procedure`,
													loading: "lazy",
													decoding: "async",
													className: "h-[340px] w-full rounded-[1.75rem] object-cover shadow-soft ring-1 ring-black/5 sm:h-[400px]"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "absolute -left-4 -top-4 hidden rounded-2xl bg-secondary p-3 pr-4 shadow-glow-red sm:flex sm:items-center sm:gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[11px] font-black uppercase tracking-wider text-white",
														children: "Advanced Care"
													})]
												})
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									variant: "up",
									as: "section",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-black uppercase tracking-[0.24em] text-primary",
											children: "03 · Method"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-2 font-display text-3xl font-extrabold text-secondary sm:text-4xl",
											children: "Our Approach"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
											className: "mt-6 grid gap-4 sm:grid-cols-2",
											children: service.procedure.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-red",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														"aria-hidden": true,
														className: "absolute right-3 top-3 font-display text-6xl font-black text-primary/5 transition-colors group-hover:text-primary/10",
														children: String(i + 1).padStart(2, "0")
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "relative grid h-10 w-10 place-items-center rounded-full bg-gradient-brand font-display text-sm font-black text-primary-foreground shadow-glow-red",
														children: i + 1
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "relative mt-4 text-[14px] font-semibold text-secondary",
														children: p
													})
												]
											}, p))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									variant: "up",
									as: "section",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative overflow-hidden rounded-3xl bg-secondary p-6 text-primary-foreground shadow-soft sm:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												"aria-hidden": true,
												className: "absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/25 blur-3xl"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												"aria-hidden": true,
												className: "absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-[hsl(258,90%,66%)]/25 blur-3xl"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow-red",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "font-display text-2xl font-extrabold sm:text-3xl",
													children: "Recovery & Follow-up"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "relative mt-4 max-w-2xl text-[15px] leading-relaxed text-white/85",
												children: service.recovery
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative mt-6 flex flex-wrap gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => openBookingModal(),
													className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-[13.5px] font-bold text-primary-foreground shadow-glow-red",
													children: ["Book a Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "tel:+919966117292",
													className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-[13.5px] font-bold text-white backdrop-blur transition hover:bg-white/20",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +91 99661 17292"]
												})]
											})
										]
									})
								}),
								service.slug !== "simple-and-complex-av-fistula" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									variant: "up",
									as: "section",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 via-white to-primary/[0.02] p-6 shadow-soft sm:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												"aria-hidden": true,
												className: "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												"aria-hidden": true,
												className: "pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[hsl(258,90%,66%)]/10 blur-3xl"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative flex flex-col gap-6 lg:flex-row lg:items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1.5 text-[10.5px] font-black uppercase tracking-[0.22em] text-primary shadow-soft",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "h-3.5 w-3.5" }), " Dialysis Access"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "mt-3 font-display text-2xl font-extrabold text-secondary sm:text-3xl",
															children: "AV Fistula Procedure in Kidney Patients for Dialysis and Fistula Salvage Procedures"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-3 text-[15px] leading-relaxed text-muted-foreground",
															children: "An arteriovenous (AV) fistula is the preferred, longest-lasting access for haemodialysis. Our vascular team creates simple and complex AV fistulas for kidney patients and performs fistula salvage procedures — including angioplasty, thrombectomy and banding — to keep dialysis running smoothly."
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
															className: "mt-4 grid gap-2 sm:grid-cols-2",
															children: [
																"Simple & complex fistula creation",
																"Fistula maturation monitoring",
																"Balloon angioplasty for stenosis",
																"Thrombectomy for clotted fistulas"
															].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
																className: "flex items-center gap-2 text-[13.5px] font-semibold text-secondary",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "grid h-5 w-5 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
																}), item]
															}, item))
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
															to: "/services/$slug",
															params: { slug: "simple-and-complex-av-fistula" },
															className: "mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-[13.5px] font-bold text-primary-foreground shadow-glow-red transition hover:-translate-y-0.5",
															children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative shrink-0 lg:w-[320px]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														"aria-hidden": true,
														className: "absolute -inset-2 -z-10 rounded-[1.5rem] bg-gradient-brand opacity-15 blur-xl"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: avFistulaImg,
														alt: "AV fistula procedure in kidney patients for dialysis and fistula salvage procedures",
														loading: "lazy",
														decoding: "async",
														className: "h-[220px] w-full rounded-[1.5rem] object-cover shadow-soft ring-1 ring-black/5"
													})]
												})]
											})
										]
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "space-y-6 lg:col-span-4 lg:sticky lg:top-28 lg:self-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									variant: "up",
									className: "relative overflow-hidden rounded-3xl border border-border/60 bg-white p-6 shadow-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											"aria-hidden": true,
											className: "absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative flex items-center gap-2 text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10.5px] font-black uppercase tracking-[0.22em]",
												children: "Explore More"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "relative mt-2 font-display text-xl font-extrabold text-secondary",
											children: "Other Treatments"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "relative mt-5 space-y-1",
											children: related.map((r) => {
												const I = r.icon;
												const isActive = r.slug === service.slug;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/services/$slug",
													params: { slug: r.slug },
													"aria-current": isActive ? "page" : void 0,
													className: isActive ? "flex items-center gap-3 rounded-xl bg-gradient-brand px-3 py-2.5 text-[14px] font-bold text-primary-foreground shadow-glow-red" : "group flex items-center gap-3 rounded-xl px-2 py-2.5 text-[14px] font-semibold text-secondary transition-all hover:bg-gradient-brand-soft hover:pl-3",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: isActive ? "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/20 text-white ring-1 ring-white/40" : "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-gradient-brand group-hover:text-primary-foreground group-hover:shadow-glow-red",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "min-w-0 flex-1 leading-snug",
															children: r.title
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: isActive ? "h-4 w-4 shrink-0 text-white" : "h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" })
													]
												}) }, r.slug);
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									variant: "up",
									className: "relative overflow-hidden rounded-3xl p-6 text-white shadow-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											"aria-hidden": true,
											className: "absolute inset-0 -z-10 bg-[#41305c]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											"aria-hidden": true,
											className: "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-3xl"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											"aria-hidden": true,
											className: "pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative flex items-center gap-2 text-white/80",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10.5px] font-black uppercase tracking-[0.22em]",
												children: "24/7 Support"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "relative mt-2 font-display text-2xl font-extrabold",
											children: "Need Help?"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "relative mt-2 text-[13.5px] text-white/85",
											children: "Speak with our vascular care experts today."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "tel:+919966117292",
											className: "relative mt-5 flex items-center gap-3 text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-10 w-10 place-items-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-lg font-black tracking-wide",
												children: "+91 99661 17292"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											className: "relative mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13.5px] font-bold text-secondary shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow-red",
											children: ["Talk to Specialist ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									variant: "up",
									className: "relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-white to-primary/5 p-6 shadow-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10.5px] font-black uppercase tracking-[0.22em]",
												children: "Trusted Care"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-xl font-extrabold text-secondary",
											children: "Why Choose Us?"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-5 space-y-3",
											children: WHY_CHOOSE.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-3 text-[14px] font-semibold text-secondary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
												}), w]
											}, w))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									variant: "up",
									className: "relative overflow-hidden rounded-3xl border border-primary/15 bg-[hsl(15,90%,97%)] p-6 shadow-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											"aria-hidden": true,
											className: "absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-brand opacity-10 blur-2xl"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative flex items-center gap-2 text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10.5px] font-black uppercase tracking-[0.22em]",
												children: "Free Guide"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "relative mt-2 font-display text-xl font-extrabold text-secondary",
											children: "Download Brochure"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "relative mt-2 text-[13.5px] text-muted-foreground",
											children: "Get detailed information about our vascular treatments."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#",
											className: "relative mt-5 flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-[13.5px] font-bold text-primary-foreground shadow-glow-red transition hover:-translate-y-0.5",
											children: ["Download Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" })]
										})
									]
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQSection, {
					faqs: service.faqs,
					title: service.title
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
function FAQSection({ faqs, title }) {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-t border-border/60 bg-gradient-to-b from-white via-primary/5 to-white py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "up",
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-primary shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-3.5 w-3.5" }), " FAQ"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-black tracking-tight text-secondary sm:text-4xl",
							children: "Frequently Asked Questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-[15px] text-muted-foreground",
							children: [
								"Common patient questions about ",
								title.toLowerCase(),
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-3",
					children: faqs.map((f, i) => {
						const isOpen = open === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							variant: "up",
							className: "overflow-hidden rounded-2xl border border-border/60 bg-white shadow-soft transition hover:border-primary/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-expanded": isOpen,
								"aria-controls": `faq-panel-${i}`,
								id: `faq-trigger-${i}`,
								onClick: () => setOpen(isOpen ? null : i),
								className: "flex w-full items-start justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:px-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pr-2 text-[15px] font-bold text-secondary sm:text-base",
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`,
									children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
								})]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								id: `faq-panel-${i}`,
								role: "region",
								"aria-labelledby": `faq-trigger-${i}`,
								className: `grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-h-0 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "border-t border-border/50 px-5 py-4 text-[14.5px] leading-relaxed text-muted-foreground sm:px-6",
										children: f.a
									})
								})
							})]
						}, f.q);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "up",
					className: "mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl bg-secondary p-6 text-center text-white sm:flex-row sm:text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-extrabold",
						children: "Still have questions?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-white/80",
						children: "Talk to our vascular specialist for a personalised answer."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => openBookingModal(),
						className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-bold text-primary-foreground shadow-glow-red",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Book a Consultation"]
					})]
				})
			]
		})
	});
}
//#endregion
export { ServiceDetail as component };
