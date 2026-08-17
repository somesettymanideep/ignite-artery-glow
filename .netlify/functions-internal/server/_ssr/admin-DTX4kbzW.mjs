import { i as __toESM } from "../_runtime.mjs";
import { a as getAll, c as logout, d as replaceAll, f as toCSV, i as downloadCSV, l as parseCSV, o as isLoggedIn, r as clearAll, s as login, t as addSubmission, u as removeSubmission } from "./admin-store-BIWFGTqR.mjs";
import { t as resolveAssetUrl } from "./asset-url-OiRCJEiB.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { Ot as CalendarCheck, U as Mail, W as LogOut, X as LayoutDashboard, ft as Download, l as Upload, p as Stethoscope, u as Trash2, x as Search } from "../_libs/lucide-react.mjs";
import { t as ignite_logo_png_asset_default } from "./ignite-logo.png.asset-U8I6PM2C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DTX4kbzW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logoUrl = resolveAssetUrl(ignite_logo_png_asset_default.url);
function AdminPage() {
	const [authed, setAuthed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setAuthed(isLoggedIn());
	}, []);
	return authed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, { onLogout: () => {
		logout();
		setAuthed(false);
	} }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginScreen, { onSuccess: () => setAuthed(true) });
}
function LoginScreen({ onSuccess }) {
	const [u, setU] = (0, import_react.useState)("");
	const [p, setP] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-gradient-to-br from-[#f5f2fb] via-white to-[#ffe9ea] px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-3xl border border-border/60 bg-white/90 p-8 shadow-2xl backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-col items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logoUrl,
					alt: "Ignite Vascular Center",
					className: "h-14 w-auto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-black text-secondary",
						children: "Admin Login"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Sign in to manage submissions"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					if (login(u.trim(), p)) {
						setErr("");
						onSuccess();
					} else setErr("Invalid username or password");
				},
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-secondary/70",
							children: "Username"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: u,
							onChange: (e) => setU(e.target.value),
							autoComplete: "username",
							className: "w-full rounded-xl border border-border/70 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-secondary/70",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: p,
							onChange: (e) => setP(e.target.value),
							autoComplete: "current-password",
							className: "w-full rounded-xl border border-border/70 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
						})]
					}),
					err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-red-600",
						children: err
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-glow-red transition-transform hover:scale-[1.02]",
						children: "Sign In"
					})
				]
			})]
		})
	});
}
var TABS = [
	{
		key: "all",
		label: "All",
		icon: LayoutDashboard
	},
	{
		key: "contact",
		label: "Contact",
		icon: Mail
	},
	{
		key: "booking",
		label: "Appointments",
		icon: CalendarCheck
	},
	{
		key: "second-opinion",
		label: "Second Opinion",
		icon: Stethoscope
	}
];
function Dashboard({ onLogout }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [tab, setTab] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const fileRef = (0, import_react.useRef)(null);
	const refresh = () => setItems(getAll());
	(0, import_react.useEffect)(() => {
		refresh();
		const h = () => refresh();
		window.addEventListener("ignite:submissions-updated", h);
		return () => window.removeEventListener("ignite:submissions-updated", h);
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		return items.filter((s) => tab === "all" ? true : s.kind === tab).filter((s) => {
			if (!q.trim()) return true;
			return [
				s.kind,
				s.createdAt,
				...Object.values(s.data)
			].join(" ").toLowerCase().includes(q.trim().toLowerCase());
		});
	}, [
		items,
		tab,
		q
	]);
	const counts = (0, import_react.useMemo)(() => ({
		all: items.length,
		contact: items.filter((s) => s.kind === "contact").length,
		booking: items.filter((s) => s.kind === "booking").length,
		"second-opinion": items.filter((s) => s.kind === "second-opinion").length
	}), [items]);
	const columns = (0, import_react.useMemo)(() => {
		const cols = /* @__PURE__ */ new Set();
		filtered.forEach((r) => Object.keys(r.data).forEach((k) => cols.add(k)));
		return Array.from(cols);
	}, [filtered]);
	function handleExport() {
		const csv = toCSV(filtered);
		downloadCSV(`ignite-${tab}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, csv);
	}
	function handleImport(file) {
		const reader = new FileReader();
		reader.onload = () => {
			const parsed = parseCSV(String(reader.result || ""));
			if (!parsed.length) {
				alert("No rows found in CSV");
				return;
			}
			const existing = getAll();
			const ids = new Set(existing.map((s) => s.id));
			replaceAll([...parsed.filter((s) => !ids.has(s.id)), ...existing]);
			alert(`Imported ${parsed.length} rows`);
		};
		reader.readAsText(file);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f6f7fb]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-40 border-b border-border/60 bg-white/95 backdrop-blur",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logoUrl,
						alt: "Ignite Vascular Center",
						className: "h-10 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-bold uppercase tracking-widest text-primary",
							children: "Admin Panel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-bold text-secondary",
							children: "Submissions Dashboard"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onLogout,
					className: "inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-white transition hover:opacity-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Logout"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-7xl px-5 py-8 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 md:grid-cols-4",
					children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setTab(t.key),
						className: `group flex items-center justify-between rounded-2xl border p-4 text-left transition ${tab === t.key ? "border-primary bg-white shadow-glow-red" : "border-border/60 bg-white hover:border-primary/40"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: t.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-2xl font-black text-secondary",
							children: counts[t.key]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-5 w-5" })
						})]
					}, t.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 rounded-2xl border border-border/60 bg-white p-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search name, email, phone, message…",
							className: "w-full rounded-xl border border-border/70 bg-white px-4 py-2.5 pl-10 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleExport,
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Export CSV"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => fileRef.current?.click(),
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-secondary transition hover:border-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), " Import CSV"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileRef,
								type: "file",
								accept: ".csv,text/csv",
								className: "hidden",
								onChange: (e) => {
									const f = e.target.files?.[0];
									if (f) handleImport(f);
									e.target.value = "";
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									if (confirm(`Delete all ${tab === "all" ? "" : tab + " "}submissions?`)) clearAll(tab === "all" ? void 0 : tab);
								},
								className: "inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), " Clear"]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-hidden rounded-2xl border border-border/60 bg-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-secondary/5 text-left",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "whitespace-nowrap px-4 py-3 text-xs font-bold uppercase tracking-wider text-secondary/70",
										children: "Date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "whitespace-nowrap px-4 py-3 text-xs font-bold uppercase tracking-wider text-secondary/70",
										children: "Type"
									}),
									columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "whitespace-nowrap px-4 py-3 text-xs font-bold uppercase tracking-wider text-secondary/70",
										children: c
									}, c)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-4 py-3" })
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 3 + columns.length,
								className: "px-4 py-12 text-center text-sm text-muted-foreground",
								children: "No submissions yet."
							}) }), filtered.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border/60 align-top hover:bg-secondary/[0.02]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "whitespace-nowrap px-4 py-3 text-xs text-muted-foreground",
										children: new Date(r.createdAt).toLocaleString()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "whitespace-nowrap px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${badge(r.kind)}`,
											children: r.kind
										})
									}),
									columns.map((c) => {
										const value = r.data[c];
										const isImage = typeof value === "string" && value.startsWith("data:image/");
										const isPDF = typeof value === "string" && value.startsWith("data:application/pdf");
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "max-w-xs px-4 py-3 text-secondary",
											children: isImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: value,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "group relative block h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border/50 bg-muted transition-transform hover:scale-110 active:scale-95",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: value,
														alt: "Attachment",
														className: "h-full w-full object-cover"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] font-bold text-white",
															children: "VIEW"
														})
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: value,
													download: `attachment-${r.id.substring(0, 4)}`,
													className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-white text-muted-foreground transition-all hover:bg-secondary/5 hover:text-[#311261] hover:border-[#311261]/30 active:scale-95",
													title: "Download image",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" })
												})]
											}) : isPDF ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: value,
												download: `report-${r.id.substring(0, 4)}.pdf`,
												className: "inline-flex items-center gap-2 rounded-lg border border-border/50 bg-muted/50 px-3 py-1.5 text-[12px] font-semibold text-[#311261] transition-all hover:bg-muted hover:border-[#311261]/20",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), "Download PDF"]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "line-clamp-3 whitespace-pre-wrap break-words text-[13px]",
												children: value || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground/60",
													children: "—"
												})
											})
										}, c);
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "whitespace-nowrap px-4 py-3 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												if (confirm("Delete this submission?")) removeSubmission(r.id);
											},
											className: "rounded-full p-2 text-red-500 transition hover:bg-red-50",
											"aria-label": "Delete",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
										})
									})
								]
							}, r.id))] })]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-xs text-muted-foreground",
					children: "Data is stored locally in your browser. Export regularly to keep a backup."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => addSubmission("contact", {
							name: "Sample",
							email: "sample@test.com",
							phone: "0000",
							message: "Demo entry"
						}),
						className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 hover:text-primary",
						children: "+ Add sample row"
					})
				})
			]
		})]
	});
}
function badge(kind) {
	switch (kind) {
		case "contact": return "bg-blue-100 text-blue-700";
		case "booking": return "bg-red-100 text-red-700";
		case "second-opinion": return "bg-purple-100 text-purple-700";
	}
}
//#endregion
export { AdminPage as component };
