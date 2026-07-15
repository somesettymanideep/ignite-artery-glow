import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Download, Upload, LogOut, Trash2, Search, LayoutDashboard, Mail, CalendarCheck, Stethoscope } from "lucide-react";
import logoAsset from "@/assets/ignite-logo.png.asset.json";
import {
  addSubmission,
  clearAll,
  downloadCSV,
  getAll,
  isLoggedIn,
  login,
  logout,
  parseCSV,
  removeSubmission,
  replaceAll,
  toCSV,
  type Submission,
  type SubmissionKind,
} from "@/lib/admin-store";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin • Ignite Vascular Center" }, { name: "robots", content: "noindex, nofollow" }] }),
  component: AdminPage,
});

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  useEffect(() => { setAuthed(isLoggedIn()); }, []);
  return authed ? <Dashboard onLogout={() => { logout(); setAuthed(false); }} /> : <LoginScreen onSuccess={() => setAuthed(true)} />;
}

function LoginScreen({ onSuccess }: { onSuccess: () => void }) {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState("");
  return (
    <div className="grid min-h-screen place-items-center bg-gradient-to-br from-[#f5f2fb] via-white to-[#ffe9ea] px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-border/60 bg-white/90 p-8 shadow-2xl backdrop-blur">
        <div className="mb-6 flex flex-col items-center gap-3">
          <img src={logoAsset.url} alt="Ignite Vascular Center" className="h-14 w-auto" />
          <div className="text-center">
            <h1 className="font-display text-2xl font-black text-secondary">Admin Login</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to manage submissions</p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (login(u.trim(), p)) { setErr(""); onSuccess(); }
            else setErr("Invalid username or password");
          }}
          className="space-y-4"
        >
          <label className="block">
            <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-secondary/70">Username</span>
            <input value={u} onChange={(e) => setU(e.target.value)} autoComplete="username"
              className="w-full rounded-xl border border-border/70 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-secondary/70">Password</span>
            <input type="password" value={p} onChange={(e) => setP(e.target.value)} autoComplete="current-password"
              className="w-full rounded-xl border border-border/70 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15" />
          </label>
          {err && <p className="text-sm font-medium text-red-600">{err}</p>}
          <button type="submit" className="w-full rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-glow-red transition-transform hover:scale-[1.02]">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

const TABS: { key: SubmissionKind | "all"; label: string; icon: any }[] = [
  { key: "all", label: "All", icon: LayoutDashboard },
  { key: "contact", label: "Contact", icon: Mail },
  { key: "booking", label: "Appointments", icon: CalendarCheck },
  { key: "second-opinion", label: "Second Opinion", icon: Stethoscope },
];

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [items, setItems] = useState<Submission[]>([]);
  const [tab, setTab] = useState<SubmissionKind | "all">("all");
  const [q, setQ] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const refresh = () => setItems(getAll());
  useEffect(() => {
    refresh();
    const h = () => refresh();
    window.addEventListener("ignite:submissions-updated", h);
    return () => window.removeEventListener("ignite:submissions-updated", h);
  }, []);

  const filtered = useMemo(() => {
    return items
      .filter((s) => (tab === "all" ? true : s.kind === tab))
      .filter((s) => {
        if (!q.trim()) return true;
        const hay = [s.kind, s.createdAt, ...Object.values(s.data)].join(" ").toLowerCase();
        return hay.includes(q.trim().toLowerCase());
      });
  }, [items, tab, q]);

  const counts = useMemo(() => ({
    all: items.length,
    contact: items.filter((s) => s.kind === "contact").length,
    booking: items.filter((s) => s.kind === "booking").length,
    "second-opinion": items.filter((s) => s.kind === "second-opinion").length,
  }), [items]);

  const columns = useMemo(() => {
    const cols = new Set<string>();
    filtered.forEach((r) => Object.keys(r.data).forEach((k) => cols.add(k)));
    return Array.from(cols);
  }, [filtered]);

  function handleExport() {
    const csv = toCSV(filtered);
    downloadCSV(`ignite-${tab}-${new Date().toISOString().slice(0, 10)}.csv`, csv);
  }

  function handleImport(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result || "");
      const parsed = parseCSV(text);
      if (!parsed.length) { alert("No rows found in CSV"); return; }
      // Merge with existing (avoid duplicate ids)
      const existing = getAll();
      const ids = new Set(existing.map((s) => s.id));
      const merged = [...parsed.filter((s) => !ids.has(s.id)), ...existing];
      replaceAll(merged);
      alert(`Imported ${parsed.length} rows`);
    };
    reader.readAsText(file);
  }

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Ignite Vascular Center" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary">Admin Panel</p>
              <p className="font-display text-sm font-bold text-secondary">Submissions Dashboard</p>
            </div>
          </div>
          <button onClick={onLogout} className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-white transition hover:opacity-90">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`group flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                tab === t.key ? "border-primary bg-white shadow-glow-red" : "border-border/60 bg-white hover:border-primary/40"
              }`}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.label}</p>
                <p className="mt-1 font-display text-2xl font-black text-secondary">{counts[t.key]}</p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white">
                <t.icon className="h-5 w-5" />
              </span>
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border/60 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search name, email, phone, message…"
              className="w-full rounded-xl border border-border/70 bg-white px-4 py-2.5 pl-10 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={handleExport} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition hover:opacity-90">
              <Download className="h-4 w-4" /> Export CSV
            </button>
            <button onClick={() => fileRef.current?.click()} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-secondary transition hover:border-primary">
              <Upload className="h-4 w-4" /> Import CSV
            </button>
            <input
              ref={fileRef}
              type="file"
              accept=".csv,text/csv"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleImport(f);
                e.target.value = "";
              }}
            />
            <button
              onClick={() => {
                if (confirm(`Delete all ${tab === "all" ? "" : tab + " "}submissions?`)) {
                  clearAll(tab === "all" ? undefined : tab);
                }
              }}
              className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100"
            >
              <Trash2 className="h-4 w-4" /> Clear
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-border/60 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/5 text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-3 text-xs font-bold uppercase tracking-wider text-secondary/70">Date</th>
                  <th className="whitespace-nowrap px-4 py-3 text-xs font-bold uppercase tracking-wider text-secondary/70">Type</th>
                  {columns.map((c) => (
                    <th key={c} className="whitespace-nowrap px-4 py-3 text-xs font-bold uppercase tracking-wider text-secondary/70">{c}</th>
                  ))}
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={3 + columns.length} className="px-4 py-12 text-center text-sm text-muted-foreground">
                      No submissions yet.
                    </td>
                  </tr>
                )}
                {filtered.map((r) => (
                  <tr key={r.id} className="border-t border-border/60 align-top hover:bg-secondary/[0.02]">
                    <td className="whitespace-nowrap px-4 py-3 text-xs text-muted-foreground">
                      {new Date(r.createdAt).toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${badge(r.kind)}`}>
                        {r.kind}
                      </span>
                    </td>
                    {columns.map((c) => (
                      <td key={c} className="max-w-xs px-4 py-3 text-secondary">
                        <div className="line-clamp-3 whitespace-pre-wrap break-words">{r.data[c] || <span className="text-muted-foreground/60">—</span>}</div>
                      </td>
                    ))}
                    <td className="whitespace-nowrap px-4 py-3 text-right">
                      <button
                        onClick={() => { if (confirm("Delete this submission?")) removeSubmission(r.id); }}
                        className="rounded-full p-2 text-red-500 transition hover:bg-red-50"
                        aria-label="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Data is stored locally in your browser. Export regularly to keep a backup.
        </p>

        {/* Demo: add sample */}
        <div className="mt-2 text-center">
          <button
            onClick={() => addSubmission("contact", { name: "Sample", email: "sample@test.com", phone: "0000", message: "Demo entry" })}
            className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 hover:text-primary"
          >
            + Add sample row
          </button>
        </div>
      </main>
    </div>
  );
}

function badge(kind: SubmissionKind) {
  switch (kind) {
    case "contact": return "bg-blue-100 text-blue-700";
    case "booking": return "bg-red-100 text-red-700";
    case "second-opinion": return "bg-purple-100 text-purple-700";
  }
}
