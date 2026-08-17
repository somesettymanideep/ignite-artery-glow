import { n as __exportAll$1 } from "../_runtime.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-store-BIWFGTqR.js
var admin_store_BIWFGTqR_exports = /* @__PURE__ */ __exportAll$1({
	a: () => getAll,
	c: () => logout,
	d: () => replaceAll,
	f: () => toCSV,
	i: () => downloadCSV,
	l: () => parseCSV,
	n: () => admin_store_exports,
	o: () => isLoggedIn,
	r: () => clearAll,
	s: () => login,
	t: () => addSubmission,
	u: () => removeSubmission
});
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var admin_store_exports = /* @__PURE__ */ __exportAll({
	ADMIN_PASS: () => ADMIN_PASS,
	ADMIN_USER: () => ADMIN_USER,
	addSubmission: () => addSubmission,
	clearAll: () => clearAll,
	downloadCSV: () => downloadCSV,
	getAll: () => getAll,
	isLoggedIn: () => isLoggedIn,
	login: () => login,
	logout: () => logout,
	parseCSV: () => parseCSV,
	removeSubmission: () => removeSubmission,
	replaceAll: () => replaceAll,
	toCSV: () => toCSV
});
var KEY = "ignite:submissions";
function read() {
	if (typeof window === "undefined") return [];
	try {
		return JSON.parse(localStorage.getItem(KEY) || "[]");
	} catch {
		return [];
	}
}
function write(list) {
	if (typeof window === "undefined") return;
	localStorage.setItem(KEY, JSON.stringify(list));
	window.dispatchEvent(new Event("ignite:submissions-updated"));
}
function addSubmission(kind, data) {
	const clean = {};
	Object.entries(data).forEach(([k, v]) => {
		clean[k] = v == null ? "" : String(v);
	});
	const list = read();
	list.unshift({
		id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
		kind,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		data: clean
	});
	write(list);
}
function getAll() {
	return read();
}
function removeSubmission(id) {
	write(read().filter((s) => s.id !== id));
}
function clearAll(kind) {
	write(kind ? read().filter((s) => s.kind !== kind) : []);
}
function replaceAll(list) {
	write(list);
}
function esc(v) {
	if (/[",\n]/.test(v)) return `"${v.replace(/"/g, "\"\"")}"`;
	return v;
}
function toCSV(rows) {
	const cols = /* @__PURE__ */ new Set();
	rows.forEach((r) => Object.keys(r.data).forEach((k) => cols.add(k)));
	const headers = [
		"id",
		"kind",
		"createdAt",
		...Array.from(cols)
	];
	const lines = [headers.join(",")];
	rows.forEach((r) => {
		lines.push(headers.map((h) => {
			if (h === "id" || h === "kind" || h === "createdAt") return esc(r[h]);
			return esc(r.data[h] ?? "");
		}).join(","));
	});
	return lines.join("\n");
}
function parseCSV(text) {
	const rows = [];
	let cur = [];
	let field = "";
	let inQ = false;
	for (let i = 0; i < text.length; i++) {
		const c = text[i];
		if (inQ) if (c === "\"" && text[i + 1] === "\"") {
			field += "\"";
			i++;
		} else if (c === "\"") inQ = false;
		else field += c;
		else if (c === "\"") inQ = true;
		else if (c === ",") {
			cur.push(field);
			field = "";
		} else if (c === "\n") {
			cur.push(field);
			rows.push(cur);
			cur = [];
			field = "";
		} else if (c === "\r") {} else field += c;
	}
	if (field.length || cur.length) {
		cur.push(field);
		rows.push(cur);
	}
	if (!rows.length) return [];
	const headers = rows.shift();
	return rows.filter((r) => r.some((v) => v.length)).map((r, idx) => {
		const obj = {};
		headers.forEach((h, i) => obj[h] = r[i] ?? "");
		const { id, kind, createdAt, ...data } = obj;
		return {
			id: id || `${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 6)}`,
			kind: kind || "contact",
			createdAt: createdAt || (/* @__PURE__ */ new Date()).toISOString(),
			data
		};
	});
}
function downloadCSV(filename, csv) {
	const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
var AUTH_KEY = "ignite:admin-auth";
var ADMIN_USER = "admin";
var ADMIN_PASS = "123456";
function login(u, p) {
	if (u === "admin" && p === "123456") {
		localStorage.setItem(AUTH_KEY, "1");
		return true;
	}
	return false;
}
function logout() {
	localStorage.removeItem(AUTH_KEY);
}
function isLoggedIn() {
	if (typeof window === "undefined") return false;
	return localStorage.getItem(AUTH_KEY) === "1";
}
//#endregion
export { getAll as a, logout as c, replaceAll as d, toCSV as f, downloadCSV as i, parseCSV as l, admin_store_BIWFGTqR_exports as n, isLoggedIn as o, clearAll as r, login as s, addSubmission as t, removeSubmission as u };
