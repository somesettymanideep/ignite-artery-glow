import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Download, Upload, LogOut, Trash2, Search, LayoutDashboard, Mail, CalendarCheck, Stethoscope, Loader2 } from "lucide-react";
import logoAsset from "@/assets/ignite-logo.png.asset.json";
import { resolveAssetUrl } from "@/lib/asset-url";
import { supabase } from "@/integrations/supabase/client";
import {
  addSubmission,
  downloadCSV,
  getAll,
  removeSubmission,
  toCSV,
  type Submission,
  type SubmissionKind,
} from "@/lib/admin-store";

const logoUrl = resolveAssetUrl(logoAsset.url);

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin • Ignite Vascular Center" }, { name: "robots", content: "noindex, nofollow" }] }),
  component: AdminPage,
});

function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return (
    <div className="grid min-h-screen place-items-center bg-background">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );

  return session ? <Dashboard user={session.user} /> : <LoginScreen />;
}

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password,
    });

    if (error) {
      setErr(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen place-items-center bg-gradient-to-br from-[#f5f2fb] via-white to-[#ffe9ea] px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-border/60 bg-white/90 p-8 shadow-2xl backdrop-blur">
        <div className="mb-6 flex flex-col items-center gap-3">
          <img src={logoUrl} alt="Ignite Vascular Center" className="h-14 w-auto" />
          <div className="text-center">
            <h1 className="font-display text-2xl font-black text-secondary">Admin Login</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to manage submissions</p>
          </div>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-secondary/70">Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required
              className="w-full rounded-xl border border-border/70 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-secondary/70">Password</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required
              className="w-full rounded-xl border border-border/70 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15" />
          </label>
          {err && <p className="text-sm font-medium text-red-600">{err}</p>}
          <button type="submit" disabled={loading} className="w-full rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-glow-red transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100">
            {loading ? "Signing In..." : "Sign In"}
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

function Dashboard({ user }: { user: any }) {
  const [items, setItems] = useState<Submission[]>([]);
  const [tab, setTab] = useState<SubmissionKind | "all">("all");
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    setLoading(true);
    const data = await getAll();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  const filtered = useMemo(() => {
    return items
      .filter((s) => (tab === "all" ? true : s.kind === tab))
      .filter((s) => {
        if (!q.trim()) return true;
        const hay = [s.kind, new Date(s.createdAt).toLocaleString(), ...Object.values(s.data)].join(" ").toLowerCase();
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

  const handleLogout = () => supabase.auth.signOut();

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Ignite Vascular Center" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary">Admin Panel</p>
              <p className="font-display text-sm font-bold text-secondary">{user.email}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-white transition hover:opacity-90">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
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
            <button onClick={refresh} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-secondary transition hover:border-primary">
              Refresh Data
            </button>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-border/60 bg-white">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex flex-col items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="mt-4 text-sm text-muted-foreground">Loading submissions...</p>
              </div>
            ) : (
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
                      {columns.map((c) => {
                        const value = r.data[c];
                        const isImage = typeof value === 'string' && value.startsWith('data:image/');
                        const isPDF = typeof value === 'string' && value.startsWith('data:application/pdf');

                        return (
                          <td key={c} className="max-w-xs px-4 py-3 text-secondary">
                            {isImage ? (
                              <div className="flex items-center gap-3">
                                <a 
                                  href={value} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="group relative block h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border/50 bg-muted transition-transform hover:scale-110 active:scale-95"
                                >
                                  <img src={value} alt="Attachment" className="h-full w-full object-cover" />
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                    <span className="text-[10px] font-bold text-white">VIEW</span>
                                  </div>
                                </a>
                                <a 
                                  href={value} 
                                  download={`attachment-${r.id.substring(0, 4)}`}
                                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-white text-muted-foreground transition-all hover:bg-secondary/5 hover:text-[#311261] hover:border-[#311261]/30 active:scale-95"
                                  title="Download image"
                                >
                                  <Download className="h-4 w-4" />
                                </a>
                              </div>
                            ) : isPDF ? (
                              <a 
                                href={value} 
                                download={`report-${r.id.substring(0, 4)}.pdf`}
                                className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-muted/50 px-3 py-1.5 text-[12px] font-semibold text-[#311261] transition-all hover:bg-muted hover:border-[#311261]/20"
                              >
                                <Download className="h-3.5 w-3.5" />
                                Download PDF
                              </a>
                            ) : (
                              <div className="line-clamp-3 whitespace-pre-wrap break-words text-[13px]">
                                {value || <span className="text-muted-foreground/60">—</span>}
                              </div>
                            )}
                          </td>
                        );
                      })}
                      <td className="whitespace-nowrap px-4 py-3 text-right">
                        <button
                          onClick={async () => {
                            if (confirm("Delete this submission?")) {
                              await removeSubmission(r.id);
                              refresh();
                            }
                          }}
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
            )}
          </div>
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
