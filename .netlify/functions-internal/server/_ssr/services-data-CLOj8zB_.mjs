import { i as __toESM } from "../_runtime.mjs";
import { t as addSubmission } from "./admin-store-BIWFGTqR.mjs";
import { t as resolveAssetUrl } from "./asset-url-OiRCJEiB.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Phone, Et as Calendar, Ft as Activity, I as MessageSquare, U as Mail, _ as Siren, dt as Droplets, et as HeartPulse, f as Syringe, ht as Clock, n as X, o as User, ot as Footprints, r as Waves, v as ShieldPlus, xt as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose$1, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-data-CLOj8zB_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogClose = DialogClose$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose$1, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var BOOKING_EVENT = "ignite:open-booking";
function openBookingModal() {
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(BOOKING_EVENT));
}
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your full name").max(100),
	email: stringType().trim().email("Please enter a valid email").max(255),
	phone: stringType().trim().min(7, "Please enter a valid phone number").max(20).regex(/^[+\d\s()-]+$/i, "Only digits, spaces and + ( ) - are allowed"),
	date: stringType().min(1, "Please select a date"),
	time: stringType().min(1, "Please select a time"),
	message: stringType().trim().max(1e3).optional().or(literalType(""))
});
var EMPTY = {
	name: "",
	email: "",
	phone: "",
	date: "",
	time: "",
	message: ""
};
var TIME_SLOTS = [
	"09:00 AM",
	"10:00 AM",
	"11:00 AM",
	"12:00 PM",
	"02:00 PM",
	"03:00 PM",
	"04:00 PM",
	"05:00 PM",
	"06:00 PM"
];
function BookingModal() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)(EMPTY);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handler = () => {
			setSubmitted(false);
			setErrors({});
			setForm(EMPTY);
			setOpen(true);
		};
		window.addEventListener(BOOKING_EVENT, handler);
		return () => window.removeEventListener(BOOKING_EVENT, handler);
	}, []);
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const setField = (k, v) => {
		setForm((f) => ({
			...f,
			[k]: v
		}));
		if (errors[k]) setErrors((e) => ({
			...e,
			[k]: void 0
		}));
	};
	const onSubmit = (e) => {
		e.preventDefault();
		const parsed = schema.safeParse(form);
		if (!parsed.success) {
			const errs = {};
			for (const issue of parsed.error.issues) {
				const k = issue.path[0];
				if (!errs[k]) errs[k] = issue.message;
			}
			setErrors(errs);
			return;
		}
		addSubmission("booking", parsed.data);
		setSubmitted(true);
	};
	const inputBase = "w-full rounded-xl border bg-white px-11 py-3 text-sm text-secondary placeholder:text-muted-foreground/70 outline-none transition-all duration-200 focus:ring-4";
	const inputOk = "border-border/70 focus:border-primary focus:ring-primary/15";
	const inputErr = "border-red-400 focus:border-red-500 focus:ring-red-500/15";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "left-0 top-0 grid h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 overflow-y-auto overscroll-contain rounded-none border-0 bg-white p-0 sm:left-1/2 sm:top-1/2 sm:h-auto sm:max-h-[88vh] sm:w-full sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:text-[13px] [&>button.absolute]:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden bg-gradient-brand px-6 pb-8 pt-7 text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/15 blur-2xl",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-white/10 blur-2xl",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						"aria-label": "Close",
						className: "absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
						className: "relative space-y-1.5 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }), " Appointment"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "font-display text-2xl font-black tracking-tight text-white sm:text-[26px]",
								children: "Book Your Consultation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "text-sm text-white/85",
								children: "Fill in your details and we'll confirm your slot with Dr. G. Narasimha Sai."
							})
						]
					})
				]
			}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-3 px-6 py-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-14 w-14 place-items-center rounded-full bg-green-100 text-green-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold text-secondary",
						children: "Appointment request sent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-sm text-sm text-muted-foreground",
						children: [
							"Thank you, ",
							form.name.split(" ")[0],
							". Our team will call you shortly on",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-secondary",
								children: form.phone
							}),
							" to confirm your visit on",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-secondary",
								children: new Date(form.date).toLocaleDateString(void 0, {
									day: "numeric",
									month: "long",
									year: "numeric"
								})
							}),
							" ",
							"at ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-secondary",
								children: form.time
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(false),
						className: "mt-3 rounded-full bg-secondary px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]",
						children: "Close"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				noValidate: true,
				className: "space-y-4 px-6 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full Name",
						htmlFor: "bk-name",
						error: errors.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "bk-name",
								type: "text",
								autoComplete: "name",
								maxLength: 100,
								placeholder: "John Doe",
								value: form.name,
								onChange: (e) => setField("name", e.target.value),
								className: `${inputBase} ${errors.name ? inputErr : inputOk}`,
								"aria-invalid": !!errors.name
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email Address",
						htmlFor: "bk-email",
						error: errors.email,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "bk-email",
								type: "email",
								autoComplete: "email",
								inputMode: "email",
								maxLength: 255,
								placeholder: "you@email.com",
								value: form.email,
								onChange: (e) => setField("email", e.target.value),
								className: `${inputBase} ${errors.email ? inputErr : inputOk}`,
								"aria-invalid": !!errors.email
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone Number",
						htmlFor: "bk-phone",
						error: errors.phone,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "bk-phone",
								type: "tel",
								autoComplete: "tel",
								inputMode: "tel",
								maxLength: 20,
								placeholder: "+91 98765 43210",
								value: form.phone,
								onChange: (e) => setField("phone", e.target.value),
								className: `${inputBase} ${errors.phone ? inputErr : inputOk}`,
								"aria-invalid": !!errors.phone
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Preferred Date",
							htmlFor: "bk-date",
							error: errors.date,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "bk-date",
									type: "date",
									min: today,
									value: form.date,
									onChange: (e) => setField("date", e.target.value),
									className: `${inputBase} ${errors.date ? inputErr : inputOk}`,
									"aria-invalid": !!errors.date
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Preferred Time",
							htmlFor: "bk-time",
							error: errors.time,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "bk-time",
									value: form.time,
									onChange: (e) => setField("time", e.target.value),
									className: `${inputBase} appearance-none pr-9 ${errors.time ? inputErr : inputOk}`,
									"aria-invalid": !!errors.time,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select time"
									}), TIME_SLOTS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: t,
										children: t
									}, t))]
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Message (optional)",
						htmlFor: "bk-message",
						error: errors.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "pointer-events-none absolute left-3.5 top-4 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "bk-message",
								rows: 3,
								maxLength: 1e3,
								placeholder: "Briefly describe your concern (varicose veins, leg pain, diabetic foot, etc.)",
								value: form.message,
								onChange: (e) => setField("message", e.target.value),
								className: `${inputBase} min-h-[92px] resize-y py-3 ${errors.message ? inputErr : inputOk}`
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-glow-red transition-transform duration-300 hover:scale-[1.02]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }), " Confirm Appointment"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-[11px] text-muted-foreground",
						children: "By submitting, you agree to be contacted regarding your appointment."
					})
				]
			})]
		})
	});
}
function Field({ label, htmlFor, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor,
			className: "mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-secondary/70",
			children: label
		}),
		children,
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs font-medium text-red-600",
			children: error
		})
	] });
}
var service_avfistula_jpg_asset_default = {
	version: 1,
	asset_id: "7e271a6d-110e-44ed-a8b1-1f46cba80aaa",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/7e271a6d-110e-44ed-a8b1-1f46cba80aaa/service-avfistula.jpg",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/7e271a6d-110e-44ed-a8b1-1f46cba80aaa/service-avfistula.jpg",
	original_filename: "service-avfistula.jpg",
	size: 166815,
	content_type: "image/jpeg",
	created_at: "2026-07-22T10:57:19Z"
};
var service_varicose_png_asset_default = {
	version: 1,
	asset_id: "ad75f1f4-3360-4511-951d-4db67337ee78",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/ad75f1f4-3360-4511-951d-4db67337ee78/service-varicose.png",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/ad75f1f4-3360-4511-951d-4db67337ee78/service-varicose.png",
	original_filename: "service-varicose.png",
	size: 526989,
	content_type: "image/png",
	created_at: "2026-07-15T09:10:56Z"
};
var service_pad_png_asset_default = {
	version: 1,
	asset_id: "34ac88fd-593c-4a91-8a65-a5052e3f6166",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/34ac88fd-593c-4a91-8a65-a5052e3f6166/service-pad.png",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/34ac88fd-593c-4a91-8a65-a5052e3f6166/service-pad.png",
	original_filename: "service-pad.png",
	size: 171630,
	content_type: "image/png",
	created_at: "2026-07-15T09:19:51Z"
};
var service_endo_webp_asset_default = {
	version: 1,
	asset_id: "386b2840-655f-4091-9f7e-847ad92eb7bd",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/386b2840-655f-4091-9f7e-847ad92eb7bd/service-endo.webp",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/386b2840-655f-4091-9f7e-847ad92eb7bd/service-endo.webp",
	original_filename: "service-endo.webp",
	size: 220116,
	content_type: "image/webp",
	created_at: "2026-07-21T13:49:23Z"
};
var service_dvt_png_asset_default = {
	version: 1,
	asset_id: "62798908-a35e-4e87-b152-327a46dd2112",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/62798908-a35e-4e87-b152-327a46dd2112/service-dvt.png",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/62798908-a35e-4e87-b152-327a46dd2112/service-dvt.png",
	original_filename: "service-dvt.png",
	size: 170985,
	content_type: "image/png",
	created_at: "2026-07-15T09:19:51Z"
};
var service_diabetic_png_asset_default = {
	version: 1,
	asset_id: "fb8c5e82-6c6d-473f-9116-4d04d527915f",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/fb8c5e82-6c6d-473f-9116-4d04d527915f/service-diabetic.png",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/fb8c5e82-6c6d-473f-9116-4d04d527915f/service-diabetic.png",
	original_filename: "service-diabetic.png",
	size: 693769,
	content_type: "image/png",
	created_at: "2026-07-15T09:19:51Z"
};
var service_limb_png_asset_default = {
	version: 1,
	asset_id: "ba38476d-ab46-495b-a494-47a5f11d9ba4",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/ba38476d-ab46-495b-a494-47a5f11d9ba4/service-limb.png",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/ba38476d-ab46-495b-a494-47a5f11d9ba4/service-limb.png",
	original_filename: "service-limb.png",
	size: 554796,
	content_type: "image/png",
	created_at: "2026-07-15T09:19:51Z"
};
var service_trauma_emergency_webp_asset_default = {
	version: 1,
	asset_id: "e2b2d6a4-320f-42de-9056-b7422e803662",
	project_id: "d45358fe-d96c-4335-a82c-94158683e95d",
	url: "/__l5e/assets-v1/e2b2d6a4-320f-42de-9056-b7422e803662/service-trauma-emergency.webp",
	r2_key: "a/v1/d45358fe-d96c-4335-a82c-94158683e95d/e2b2d6a4-320f-42de-9056-b7422e803662/service-trauma-emergency.webp",
	original_filename: "service-trauma-emergency.webp",
	size: 424356,
	content_type: "image/webp",
	created_at: "2026-07-22T12:52:47Z"
};
var varicoseImg = resolveAssetUrl(service_varicose_png_asset_default.url);
var padImg = resolveAssetUrl(service_pad_png_asset_default.url);
var endoImg = resolveAssetUrl(service_endo_webp_asset_default.url);
var dvtImg = resolveAssetUrl(service_dvt_png_asset_default.url);
var diabeticImg = resolveAssetUrl(service_diabetic_png_asset_default.url);
var limbImg = resolveAssetUrl(service_limb_png_asset_default.url);
var avFistulaImg = resolveAssetUrl(service_avfistula_jpg_asset_default.url);
var traumaImg = resolveAssetUrl(service_trauma_emergency_webp_asset_default.url);
var SERVICES = [
	{
		slug: "varicose-veins-treatment",
		title: "Varicose Veins Treatment",
		short: "Advanced laser & radiofrequency techniques for lasting relief.",
		icon: Waves,
		image: varicoseImg,
		cat: "treatments",
		overview: "Varicose veins are swollen, twisted veins visible under the skin, typically in the legs. Our advanced endovenous laser ablation (EVLA) and radiofrequency ablation (RFA) offer a walk-in walk-out solution with minimal downtime and excellent cosmetic outcomes.",
		symptoms: [
			"Bulging, rope-like veins in the legs",
			"Leg heaviness, aching or throbbing",
			"Swelling around the ankles",
			"Skin discoloration or itching",
			"Night cramps and restless legs"
		],
		procedure: [
			"Detailed duplex ultrasound mapping",
			"Local anesthesia with tumescent technique",
			"Endovenous laser / RF ablation of faulty veins",
			"Foam sclerotherapy for tributaries",
			"Same-day discharge with compression stockings"
		],
		benefits: [
			"No surgical cuts or scars",
			"Same-day discharge",
			"Immediate return to daily activities",
			"Long-lasting relief with < 5% recurrence"
		],
		recovery: "Most patients resume work within 24–48 hours. Compression stockings for 2 weeks and follow-up at 1 month.",
		quickFacts: {
			duration: "45–90 minutes per leg",
			anesthesia: "Local with tumescent",
			hospitalStay: "Day-care (walk-in / walk-out)",
			recoveryTime: "24–48 hours to routine activity",
			suitability: "Adults with symptomatic varicose veins, venous reflux on duplex, or skin changes",
			whatToExpect: "Ultrasound mapping, gentle numbing, laser/RF ablation through a pinhole, and same-day discharge with compression stockings."
		},
		faqs: [
			{
				q: "Is laser treatment painful?",
				a: "The procedure is done under local anaesthesia; most patients only feel mild pressure. Post-procedure soreness is minimal and controlled with paracetamol."
			},
			{
				q: "Will the veins come back?",
				a: "Recurrence with modern EVLA / RFA is under 5% at 5 years, significantly lower than with older stripping surgery."
			},
			{
				q: "How soon can I go back to work?",
				a: "Most patients return to office work the next day and to full activity within 3–5 days."
			},
			{
				q: "Do I need to wear stockings after treatment?",
				a: "Yes, medical-grade compression stockings for about 2 weeks help healing and improve comfort."
			},
			{
				q: "Is the treatment covered by insurance?",
				a: "Symptomatic varicose vein treatment is covered by most health insurance policies. Our team helps with pre-authorisation."
			}
		]
	},
	{
		slug: "simple-and-complex-av-fistula",
		title: "Simple and Complex AV Fistula",
		short: "Simple and complex AV fistula creation and fistula salvage for kidney dialysis patients.",
		icon: Droplets,
		image: avFistulaImg,
		cat: "treatments",
		overview: "An arteriovenous (AV) fistula is the lifeline for kidney patients needing long-term haemodialysis. We specialise in creating simple and complex AV fistulas — including radiocephalic, brachiocephalic and brachiobasilic types — and perform fistula salvage procedures such as balloon angioplasty for stenosis, thrombectomy for clotted access, and banding for high-flow fistulas, so dialysis continues without interruption.",
		symptoms: [
			"Chronic kidney disease (CKD) requiring dialysis access",
			"Weak or absent fistula thrill / bruit",
			"Fistula not maturing for needle cannulation",
			"Swollen or painful arm after fistula creation",
			"Repeated cannulation failure or clotting episodes"
		],
		procedure: [
			"Pre-operative vein and artery mapping with duplex ultrasound",
			"Selection of optimal fistula site for kidney dialysis patients",
			"Microsurgical creation of artery-vein anastomosis",
			"Fistula maturation monitoring at 4–6 weeks",
			"Fistula salvage: angioplasty, thrombectomy, stenting or banding"
		],
		benefits: [
			"Reliable, long-lasting dialysis access for kidney patients",
			"Lower infection risk compared to dialysis catheters",
			"Fistula salvage procedures extend access life",
			"High flow rates for efficient haemodialysis sessions"
		],
		recovery: "Simple AV fistula creation is day-care; complex fistulas may require an overnight stay. Maturation takes 4–8 weeks before cannulation, with regular duplex monitoring.",
		quickFacts: {
			duration: "1–2 hours",
			anesthesia: "Local / regional / general",
			hospitalStay: "Day-care to 1 night",
			recoveryTime: "4–8 weeks for fistula maturation",
			suitability: "CKD stage 5 patients planned for haemodialysis, or those needing fistula salvage",
			whatToExpect: "Ultrasound vessel mapping, gentle fistula creation, post-operative hand exercises, maturation checks and salvage options if needed."
		},
		faqs: [
			{
				q: "What is an AV fistula procedure in kidney patients?",
				a: "An AV fistula connects an artery to a vein in the arm, making the vein stronger and larger so it can be used repeatedly for haemodialysis needles. It is the safest and most durable dialysis access for kidney patients."
			},
			{
				q: "What are fistula salvage procedures?",
				a: "Fistula salvage includes angioplasty to widen narrowing, thrombectomy to remove clots, stent placement and banding for high-flow fistulas. These procedures restore or prolong dialysis access without creating a new fistula."
			},
			{
				q: "How long does an AV fistula take to mature?",
				a: "Most simple fistulas mature in 4–6 weeks; complex fistulas may take 8–12 weeks. We monitor with duplex scans before starting cannulation."
			},
			{
				q: "Is AV fistula creation painful?",
				a: "The procedure is performed under anaesthesia, so it is painless. Mild soreness for a few days is common and controlled with simple medication."
			},
			{
				q: "Who creates the best AV fistulas?",
				a: "Vascular surgeons are specifically trained in vessel anatomy, ultrasound mapping and microsurgical techniques that produce durable, well-functioning fistulas for dialysis patients."
			}
		]
	},
	{
		slug: "peripheral-arterial-disease",
		title: "Peripheral Arterial Disease (PAD)",
		short: "Effective solutions for blocked arteries and poor circulation.",
		icon: HeartPulse,
		image: padImg,
		cat: "treatments",
		overview: "PAD occurs when narrowed arteries reduce blood flow to the limbs. Left untreated it can cause severe pain, ulcers and even limb loss. We offer angioplasty, stenting and bypass options tailored to each patient.",
		symptoms: [
			"Leg pain while walking (claudication)",
			"Cold or numb feet",
			"Non-healing wounds on toes or feet",
			"Weak or absent pulses",
			"Colour changes in the skin"
		],
		procedure: [
			"Arterial doppler and CT angiogram",
			"Balloon angioplasty of the blocked segment",
			"Drug-eluting stent placement if required",
			"Bypass surgery for long occlusions",
			"Risk factor optimization (diabetes, BP, lipids)"
		],
		benefits: [
			"Restored blood flow and pain relief",
			"Wound healing and limb salvage",
			"Improved walking distance",
			"Reduced cardiovascular events"
		],
		recovery: "Angioplasty patients go home the next day; walking typically improves within a week.",
		quickFacts: {
			duration: "1–2 hours (angioplasty)",
			anesthesia: "Local sedation; general for bypass",
			hospitalStay: "1 night (endovascular) / 3–5 days (bypass)",
			recoveryTime: "1–2 weeks for endovascular",
			suitability: "Adults with claudication, rest pain, non-healing wounds, or diagnosed arterial blockage",
			whatToExpect: "Doppler and angiogram, catheter access through the groin, balloon and/or stent to reopen the artery, and next-day discharge."
		},
		faqs: [
			{
				q: "How do I know if I have PAD?",
				a: "Pain while walking that goes away with rest, cold feet, or non-healing wounds are classic clues. A simple ankle-brachial index test confirms it."
			},
			{
				q: "Is angioplasty a permanent fix?",
				a: "Modern drug-eluting stents and balloons have excellent long-term patency, but controlling diabetes, BP and cholesterol is essential."
			},
			{
				q: "Will I need a stent?",
				a: "Not always. Balloon angioplasty alone works in many cases; stents are used only when needed for optimal results."
			},
			{
				q: "Can PAD lead to amputation?",
				a: "Untreated advanced PAD can cause gangrene and limb loss, which is why early diagnosis and revascularisation are critical."
			},
			{
				q: "How long is the recovery?",
				a: "Most endovascular patients walk the same evening and go home the next morning; bypass patients recover over 4–6 weeks."
			}
		]
	},
	{
		slug: "endovascular-procedures",
		title: "Endovascular Procedures",
		short: "Stent placement, angioplasty & minimally invasive care.",
		icon: Syringe,
		image: endoImg,
		cat: "surgeries",
		overview: "Endovascular procedures treat vascular disease from inside the blood vessel using catheters guided by imaging. They replace many traditional open surgeries with pinhole access, less pain and quicker recovery.",
		symptoms: [
			"Diagnosed arterial or venous blockage",
			"Aortic or peripheral aneurysm",
			"Recurrent DVT / venous stenosis",
			"Failing dialysis access",
			"Vascular malformations"
		],
		procedure: [
			"High-resolution imaging with C-arm / DSA",
			"Micro-puncture arterial or venous access",
			"Angioplasty, stenting or embolization",
			"EVAR / TEVAR for aneurysms",
			"Closure device — no stitches"
		],
		benefits: [
			"Pinhole access instead of large incisions",
			"Shorter hospital stay (1–2 days)",
			"Reduced blood loss and complications",
			"Faster return to normal life"
		],
		recovery: "Overnight observation is usually sufficient. Normal activity resumes within 3–5 days.",
		quickFacts: {
			duration: "1–3 hours (varies by procedure)",
			anesthesia: "Local + sedation",
			hospitalStay: "1–2 nights",
			recoveryTime: "3–5 days to routine activity",
			suitability: "Patients needing aneurysm repair, blockage treatment, malformation embolisation, or failing dialysis access",
			whatToExpect: "Pinhole catheter access under imaging, targeted stent/angioplasty/embolisation, and closure without stitches."
		},
		faqs: [
			{
				q: "How is this different from open surgery?",
				a: "Endovascular procedures use tiny catheter access instead of large cuts, meaning less pain, lower blood loss and a much faster recovery."
			},
			{
				q: "Am I awake during the procedure?",
				a: "Most cases are done under local anaesthesia with light sedation; you're comfortable but not asleep unless required."
			},
			{
				q: "Are the results as durable as open surgery?",
				a: "For most vascular problems today, endovascular results match or exceed open surgery when performed by an experienced team."
			},
			{
				q: "Is there radiation exposure?",
				a: "Modern C-arm systems deliver a very low, ALARA-optimised dose. The clinical benefit far outweighs the minimal exposure."
			},
			{
				q: "When can I fly or travel?",
				a: "Short-haul travel is usually safe after 1 week; long-haul flights after 2–4 weeks depending on the procedure."
			}
		]
	},
	{
		slug: "deep-vein-thrombosis",
		title: "Deep Vein Thrombosis (DVT)",
		short: "Diagnosis, treatment & follow-up care.",
		icon: Activity,
		image: dvtImg,
		cat: "diagnostics",
		overview: "DVT is a blood clot in the deep veins of the leg that can travel to the lungs (pulmonary embolism). Prompt diagnosis with duplex ultrasound and modern catheter-directed treatment prevents long-term damage.",
		symptoms: [
			"Sudden leg swelling, usually one side",
			"Calf pain or tenderness",
			"Warmth and redness over the leg",
			"Bluish or discoloured skin",
			"Breathlessness (if PE develops)"
		],
		procedure: [
			"Duplex ultrasound & D-dimer",
			"Anticoagulation therapy",
			"Catheter-directed thrombolysis for extensive clots",
			"Mechanical thrombectomy",
			"IVC filter in selected cases"
		],
		benefits: [
			"Prevents pulmonary embolism",
			"Reduces post-thrombotic syndrome",
			"Preserves valve function in veins",
			"Structured long-term follow-up"
		],
		recovery: "Most patients recover fully within weeks with continued anticoagulation for 3–6 months.",
		quickFacts: {
			duration: "30–120 minutes (imaging + intervention)",
			anesthesia: "Local, sedation if thrombolysis",
			hospitalStay: "1–3 nights",
			recoveryTime: "1–2 weeks; anticoagulants for 3–6 months",
			suitability: "Sudden leg swelling, calf pain, post-surgery / long-immobility patients, or confirmed DVT on ultrasound",
			whatToExpect: "Fast-track duplex scan, blood-thinner start, and — for extensive clots — catheter-directed clot removal in the cath-lab."
		},
		faqs: [
			{
				q: "Is DVT life-threatening?",
				a: "Untreated DVT can cause a pulmonary embolism which is potentially fatal. Prompt treatment nearly eliminates this risk."
			},
			{
				q: "How long will I need blood thinners?",
				a: "Typically 3–6 months; longer if the clot recurs or an underlying risk factor persists."
			},
			{
				q: "Can I fly with DVT?",
				a: "Avoid flights until treatment is established and your doctor clears you, usually after 2–4 weeks of stable anticoagulation."
			},
			{
				q: "Will the swelling go away?",
				a: "Most swelling settles within weeks. Compression stockings and staying active help prevent post-thrombotic syndrome."
			},
			{
				q: "Can DVT come back?",
				a: "Recurrence risk exists, especially with genetic clotting disorders. Regular follow-up and lifestyle changes reduce it significantly."
			}
		]
	},
	{
		slug: "diabetic-foot-care",
		title: "Diabetic Foot Care",
		short: "Wound care, infection control & prevention.",
		icon: Footprints,
		image: diabeticImg,
		cat: "care",
		overview: "Diabetes affects blood flow and nerves in the feet, leading to ulcers and infections. Our multi-disciplinary programme combines revascularization, wound care and offloading to save feet and restore mobility.",
		symptoms: [
			"Non-healing foot ulcer",
			"Numbness or tingling in the feet",
			"Foot deformity or callus",
			"Infection, pus or foul smell",
			"Colour or temperature changes"
		],
		procedure: [
			"Arterial assessment and revascularization",
			"Debridement of dead tissue",
			"Advanced dressings & VAC therapy",
			"Targeted antibiotics for infection",
			"Custom footwear and offloading"
		],
		benefits: [
			"Wound healing without amputation",
			"Preserved mobility and independence",
			"Lower risk of recurrence",
			"Improved quality of life"
		],
		recovery: "Wounds usually heal in 4–12 weeks depending on severity, with lifelong foot-care follow-up.",
		quickFacts: {
			duration: "Ongoing programme (weekly reviews)",
			anesthesia: "As required for debridement / revascularisation",
			hospitalStay: "OPD-based; admission if severe infection",
			recoveryTime: "4–12 weeks to full wound healing",
			suitability: "Diabetic patients with foot ulcers, infections, numbness, or previous amputation risk",
			whatToExpect: "Circulation check, wound cleaning and dressings, targeted antibiotics, offloading footwear, and structured follow-up."
		},
		faqs: [
			{
				q: "Can amputation always be avoided?",
				a: "Early treatment saves the vast majority of feet. Success depends on how early you present and control of blood sugar."
			},
			{
				q: "How often should I visit for dressings?",
				a: "In the active phase, weekly reviews are common. As the wound heals, visits reduce to fortnightly or monthly."
			},
			{
				q: "Do I need special footwear?",
				a: "Yes, customised offloading footwear protects the wound and prevents recurrence — it is a key part of the treatment."
			},
			{
				q: "Will insurance cover diabetic foot care?",
				a: "Most policies cover admissions for infection, debridement and revascularisation. Our team assists with claims."
			},
			{
				q: "How do I prevent future ulcers?",
				a: "Daily foot inspection, well-fitting shoes, tight glucose control and periodic vascular review are the four pillars of prevention."
			}
		]
	},
	{
		slug: "limb-salvage-procedures",
		title: "Limb Salvage Procedures",
		short: "Advanced revascularization to save limbs.",
		icon: ShieldPlus,
		image: limbImg,
		cat: "surgeries",
		overview: "For patients facing amputation due to critical limb ischemia, our limb salvage team combines endovascular and open bypass techniques to restore circulation and save the limb whenever possible.",
		symptoms: [
			"Rest pain in the foot or toes",
			"Gangrene or blackening of the toes",
			"Ulcers that don't heal",
			"Threat of amputation",
			"Prior failed vascular treatment"
		],
		procedure: [
			"Detailed CT/MR angiography",
			"Hybrid endovascular + open bypass",
			"Distal target bypass surgery",
			"Wound reconstruction & plastic input",
			"Rehabilitation and gait training"
		],
		benefits: [
			"Limb preserved and mobility restored",
			"Pain relief and wound healing",
			"Reduced dependence on caregivers",
			"Better long-term survival"
		],
		recovery: "Hospital stay 3–7 days; wound healing and walking rehab over 6–12 weeks.",
		quickFacts: {
			duration: "2–5 hours (hybrid procedure)",
			anesthesia: "General or regional",
			hospitalStay: "3–7 nights",
			recoveryTime: "6–12 weeks with rehabilitation",
			suitability: "Critical limb ischemia, gangrene, non-healing ulcers, or failed prior vascular treatment",
			whatToExpect: "Detailed angiography, combined endovascular + open bypass to restore flow, wound reconstruction and structured rehab."
		},
		faqs: [
			{
				q: "What is the success rate of limb salvage?",
				a: "In experienced centres, limb salvage rates exceed 85% at 1 year for critical limb ischemia patients presenting in time."
			},
			{
				q: "Will I be able to walk normally again?",
				a: "With successful revascularisation, wound healing and rehab, most patients regain independent walking within 3 months."
			},
			{
				q: "Is bypass surgery risky?",
				a: "Modern bypass surgery is very safe in specialised centres. Risks are individualised and discussed thoroughly before consent."
			},
			{
				q: "How long is the hospital stay?",
				a: "Typically 3–7 days, depending on wound status, infection control and mobilisation."
			},
			{
				q: "What happens if the bypass blocks later?",
				a: "Regular duplex surveillance detects narrowing early so angioplasty or a redo can maintain the graft long-term."
			}
		]
	},
	{
		slug: "trauma-and-emergency-procedures",
		title: "Trauma & Emergency Procedures",
		short: "24/7 rapid response for vascular trauma and life-threatening emergencies.",
		icon: Siren,
		image: traumaImg,
		cat: "surgeries",
		overview: "Vascular trauma and emergencies — from road accidents to ruptured aneurysms and acute limb ischemia — need immediate expert intervention. Our team offers round-the-clock rapid response with hybrid endovascular and open surgical capabilities to save lives and limbs.",
		symptoms: [
			"Severe bleeding from an injury",
			"Sudden cold, pale or painful limb",
			"Pulsatile swelling after trauma",
			"Penetrating neck, chest or limb injury",
			"Suspected ruptured aneurysm (severe back/abdominal pain, collapse)"
		],
		procedure: [
			"Rapid triage and imaging (CT angiogram / doppler)",
			"Damage control resuscitation",
			"Emergency embolization for active bleeding",
			"Open vascular repair or interposition graft",
			"Endovascular stent-graft for ruptured aneurysms",
			"Fasciotomy for compartment syndrome when needed"
		],
		benefits: [
			"Rapid bleeding control and hemodynamic stabilization",
			"Higher limb salvage rates after trauma",
			"Reduced mortality in ruptured aneurysms",
			"Hybrid theatre — endovascular + open in one setting"
		],
		recovery: "ICU stay of 1–3 days is common; overall hospital stay depends on injury severity. Rehab and follow-up are structured after discharge.",
		quickFacts: {
			duration: "1–4 hours (emergency setting)",
			anesthesia: "General or regional",
			hospitalStay: "3–10 nights depending on severity",
			recoveryTime: "2–8 weeks with rehabilitation",
			suitability: "Vascular trauma, active bleeding, acute limb ischemia, ruptured aneurysms, iatrogenic vessel injury",
			whatToExpect: "Immediate assessment, urgent imaging, and emergency endovascular or open repair to stop bleeding and restore blood flow."
		},
		faqs: [
			{
				q: "Do you offer 24/7 emergency vascular care?",
				a: "Yes. Our vascular team is available round-the-clock for trauma, acute limb ischemia and ruptured aneurysm emergencies."
			},
			{
				q: "What should I do if there is severe bleeding after an injury?",
				a: "Apply firm direct pressure with a clean cloth, elevate the limb if possible, and call emergency services immediately. Do not remove any impaled objects."
			},
			{
				q: "Can a ruptured aneurysm be treated without open surgery?",
				a: "In many cases yes — an emergency endovascular stent-graft (EVAR/TEVAR) can seal the rupture with much lower risk than open repair."
			},
			{
				q: "How is acute limb ischemia treated?",
				a: "Time is critical. Depending on the cause we perform urgent thrombectomy, thrombolysis, embolectomy or bypass to restore flow within hours."
			},
			{
				q: "What is compartment syndrome and why does it need surgery?",
				a: "Swelling inside a limb after trauma or reperfusion can cut off circulation. A fasciotomy releases the pressure and prevents permanent muscle and nerve damage."
			}
		]
	}
];
var getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
//#endregion
export { service_avfistula_jpg_asset_default as a, openBookingModal as i, SERVICES as n, getServiceBySlug as r, BookingModal as t };
