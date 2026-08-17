// Simple client-side submission store (localStorage). Not for production security.

export type SubmissionKind = "contact" | "booking" | "second-opinion";

export interface Submission {
  id: string;
  kind: SubmissionKind;
  createdAt: string; // ISO
  data: Record<string, string>;
}

const KEY = "ignite:submissions";

function read(): Submission[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function write(list: Submission[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("ignite:submissions-updated"));
}

export function addSubmission(kind: SubmissionKind, data: Record<string, unknown>) {
  const clean: Record<string, string> = {};
  Object.entries(data).forEach(([k, v]) => {
    clean[k] = v == null ? "" : String(v);
  });
  const list = read();
  list.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    kind,
    createdAt: new Date().toISOString(),
    data: clean,
  });
  write(list);
}

export function getAll(): Submission[] {
  return read();
}

export function removeSubmission(id: string) {
  write(read().filter((s) => s.id !== id));
}

export function clearAll(kind?: SubmissionKind) {
  write(kind ? read().filter((s) => s.kind !== kind) : []);
}

export function replaceAll(list: Submission[]) {
  write(list);
}

// CSV helpers
function esc(v: string) {
  if (/[",\n]/.test(v)) return `"${v.replace(/"/g, '""')}"`;
  return v;
}

export function toCSV(rows: Submission[]): string {
  const cols = new Set<string>();
  rows.forEach((r) => Object.keys(r.data).forEach((k) => cols.add(k)));
  const headers = ["id", "kind", "createdAt", ...Array.from(cols)];
  const lines = [headers.join(",")];
  rows.forEach((r) => {
    lines.push(
      headers
        .map((h) => {
          if (h === "id" || h === "kind" || h === "createdAt") return esc((r as any)[h]);
          return esc(r.data[h] ?? "");
        })
        .join(","),
    );
  });
  return lines.join("\n");
}

export function parseCSV(text: string): Submission[] {
  const rows: string[][] = [];
  let cur: string[] = [];
  let field = "";
  let inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQ = false;
      else field += c;
    } else {
      if (c === '"') inQ = true;
      else if (c === ",") { cur.push(field); field = ""; }
      else if (c === "\n") { cur.push(field); rows.push(cur); cur = []; field = ""; }
      else if (c === "\r") { /* skip */ }
      else field += c;
    }
  }
  if (field.length || cur.length) { cur.push(field); rows.push(cur); }
  if (!rows.length) return [];
  const headers = rows.shift()!;
  return rows.filter((r) => r.some((v) => v.length)).map((r, idx) => {
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => (obj[h] = r[i] ?? ""));
    const { id, kind, createdAt, ...data } = obj;
    return {
      id: id || `${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 6)}`,
      kind: (kind as SubmissionKind) || "contact",
      createdAt: createdAt || new Date().toISOString(),
      data,
    };
  });
}

export function downloadCSV(filename: string, csv: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Auth (hardcoded, client-side only — demo)
const AUTH_KEY = "ignite:admin-auth";
export const ADMIN_USER = "admin";
export const ADMIN_PASS = "123456";

export function login(u: string, p: string): boolean {
  if (u === ADMIN_USER && p === ADMIN_PASS) {
    localStorage.setItem(AUTH_KEY, "1");
    return true;
  }
  return false;
}
export function logout() { localStorage.removeItem(AUTH_KEY); }
export function isLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUTH_KEY) === "1";
}
