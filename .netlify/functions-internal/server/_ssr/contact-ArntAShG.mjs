import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Phone, B as MessageCircleHeart, H as MapPin, St as ChevronRight, U as Mail, b as Send, ht as Clock, o as User, z as MessageCircle } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Reveal, t as Navbar } from "./Navbar-BM-BbmIn.mjs";
import { t as Footer } from "./Footer-CN1lV9Wq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-ArntAShG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var contact_services_default = "https://ignitevascularcenter.com/assets/contact-services-D4kI8M6Y.jpg";
var INFO = [
	{
		icon: MapPin,
		title: "Address",
		lines: [
			"Opp. Brahmanandam Orthopaedic Center,",
			"Bellapu Sobhanadri Street,",
			"Kasturibai Peta, Vijayawada,",
			"Andhra Pradesh – 520002"
		]
	},
	{
		icon: Phone,
		title: "Phone",
		lines: ["+91 99661 17292", "+91 89779 84567"]
	},
	{
		icon: Mail,
		title: "Email",
		lines: ["ignitevascularcenter@gmail.com"]
	},
	{
		icon: Clock,
		title: "Working Hours",
		lines: ["Mon – Sat  :  9:00 AM – 8:00 PM", "Sunday       :  By Appointment"]
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[420px] items-center overflow-hidden pt-24 sm:min-h-[460px] lg:min-h-[520px] lg:pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: contact_services_default,
						alt: "Advanced vascular and endovascular care at Ignite Vascular Center",
						width: 1600,
						height: 900,
						loading: "lazy",
						decoding: "async",
						className: "h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/75 to-secondary/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-secondary/30" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-px left-0 right-0",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "block h-12 w-full text-background sm:h-16 lg:h-20",
					viewBox: "0 0 1440 120",
					preserveAspectRatio: "none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						fill: "currentColor",
						d: "M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center sm:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "up",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								"aria-label": "Breadcrumb",
								className: "inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										className: "rounded-full text-white/75 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
										children: "Home"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
										className: "h-3.5 w-3.5 text-white/50",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary-foreground",
										"aria-current": "page",
										children: "Contact Us"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "up",
							delay: .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl",
								children: "Contact Us"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "up",
							delay: .16,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mx-0 sm:text-lg",
								children: "Have questions or need expert vascular care? Our team in Vijayawada is ready to assist you with appointments and consultations."
							})
						})
					]
				})
			})
		]
	});
}
function ContactForm() {
	const [status, setStatus] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		subject: "",
		message: "",
		agree: false
	});
	function submit(e) {
		e.preventDefault();
		if (!form.name.trim() || !form.email.trim() || !form.message.trim() || !form.agree) return;
		import("./admin-store-BIWFGTqR.mjs").then((n) => n.n).then((n) => n.n).then((m) => m.addSubmission("contact", form));
		setStatus("ok");
		setForm({
			name: "",
			phone: "",
			email: "",
			subject: "",
			message: "",
			agree: false
		});
	}
	const input = "w-full rounded-2xl border border-border/70 bg-card px-4 py-3.5 pl-11 text-sm font-medium text-secondary placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-6 sm:py-10 lg:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-start gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 sm:space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "left",
					className: "rounded-[2rem] border border-border/70 bg-card p-6 shadow-soft sm:p-8 lg:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-extrabold text-secondary sm:text-3xl",
								children: "Send Us a Message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-0.5 w-14 rounded-full bg-gradient-brand" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[14px] text-muted-foreground",
								children: "Fill out the form below and our team will get back to you shortly."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "mt-7 space-y-4",
						"aria-label": "Contact form",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									{
										icon: User,
										key: "name",
										type: "text",
										placeholder: "Your Name",
										label: "Your name",
										required: true
									},
									{
										icon: Phone,
										key: "phone",
										type: "tel",
										placeholder: "Phone Number",
										label: "Phone number",
										required: false
									},
									{
										icon: Mail,
										key: "email",
										type: "email",
										placeholder: "Email Address",
										label: "Email address",
										required: true
									},
									{
										icon: MessageCircle,
										key: "subject",
										type: "text",
										placeholder: "Subject",
										label: "Subject",
										required: false
									}
								].map((field, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									variant: "up",
									delay: .06 + i * .05,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.icon, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: field.type,
											required: field.required,
											maxLength: field.key === "email" ? 255 : field.key === "message" ? 1e3 : field.key === "subject" ? 150 : 100,
											value: form[field.key],
											onChange: (e) => setForm({
												...form,
												[field.key]: e.target.value
											}),
											className: input,
											placeholder: field.placeholder,
											"aria-label": field.label
										})]
									})
								}, field.key))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								variant: "up",
								delay: .26,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleHeart, { className: "pointer-events-none absolute left-3.5 top-4 h-4.5 w-4.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										required: true,
										maxLength: 1e3,
										rows: 5,
										value: form.message,
										onChange: (e) => setForm({
											...form,
											message: e.target.value
										}),
										className: `${input} min-h-32 resize-y pt-4`,
										placeholder: "Your Message",
										"aria-label": "Your message"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								variant: "up",
								delay: .32,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-start gap-3 rounded-2xl border border-border/60 bg-surface/60 p-3.5 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										required: true,
										checked: form.agree,
										onChange: (e) => setForm({
											...form,
											agree: e.target.checked
										}),
										className: "mt-0.5 h-4 w-4 accent-primary"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[13px] font-medium text-muted-foreground",
										children: "I confirm the information above is correct and consent to be contacted by Ignite Vascular Center."
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								variant: "up",
								delay: .38,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-brand px-6 py-4 font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-[1.02]",
									children: ["Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-7 w-7 place-items-center rounded-full bg-white/25 transition-transform duration-300 group-hover:translate-x-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" })
									})]
								})
							}),
							status === "ok" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								variant: "zoom",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rounded-2xl bg-primary/10 px-4 py-3 text-sm font-semibold text-primary",
									role: "status",
									children: "Thank you — your message has been received. We'll be in touch shortly."
								})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					delay: .1,
					className: "relative overflow-hidden rounded-[2rem] border border-border/70 shadow-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Ignite Vascular Center — Kasturibai Peta, Vijayawada",
							src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2889068739205!2d80.63596327490121!3d16.51150598423397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb000b57ad75%3A0xe27905b07ec0904e!2sIgnite%20vascular%20center!5e0!3m2!1sen!2sin!4v1783746453912!5m2!1sen!2sin",
							className: "absolute inset-0 h-full w-full border-0",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							allowFullScreen: true
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "right",
				delay: .12,
				className: "lg:sticky lg:top-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[2rem] border border-border/70 bg-card p-6 shadow-soft sm:p-7 lg:p-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							variant: "up",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-extrabold text-secondary sm:text-2xl",
									children: "Contact Information"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-0.5 w-14 rounded-full bg-gradient-brand" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[14px] text-muted-foreground",
									children: "Reach us directly through any of the channels below."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 space-y-5",
							children: INFO.map((info, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								variant: "right",
								delay: .08 + i * .07,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow-red",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info.icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-display text-[15px] font-bold text-secondary",
											children: info.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1.5 space-y-0.5 text-[13px] leading-relaxed text-muted-foreground break-words [overflow-wrap:anywhere]",
											children: info.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l }, l))
										})]
									})]
								})
							}, info.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "zoom",
							delay: .4,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 rounded-2xl bg-gradient-to-br from-primary/10 to-indigo-500/10 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm font-extrabold text-secondary",
										children: "Emergency Contact"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[13px] text-muted-foreground",
										children: "For urgent vascular care, call us directly."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "tel:+919966117292",
										className: "mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +91 99661 17292"]
									})
								]
							})
						})
					]
				})
			})]
		})
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen [overflow-x:clip] bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ContactPage as component };
