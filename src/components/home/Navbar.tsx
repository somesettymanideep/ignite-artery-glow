import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { CATEGORIES } from "@/lib/treatments-data";

type NavItem = {
  label: string;
  route: "/" | "/about" | "/treatments" | "/second-opinion" | "/case-studies" | "/gallery" | "/contact";
  hasDropdown?: boolean;
};

const NAV: NavItem[] = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Our Treatments", route: "/treatments", hasDropdown: true },
  { label: "Second Opinion", route: "/second-opinion" },
  { label: "Case Studies", route: "/case-studies" },
  { label: "Gallery", route: "/gallery" },
  { label: "Contact", route: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase = "relative text-[13px] font-semibold transition-colors";

  const renderLink = (item: NavItem, closeOnClick = true) => {
    const active = pathname === item.route || (item.route === "/treatments" && pathname.startsWith("/services"));
    const cls = `${linkBase} inline-flex items-center gap-1 ${
      active
        ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-[calc(100%-14px)] after:rounded-full after:bg-primary"
        : "text-secondary/80 hover:text-primary"
    }`;

    if (item.hasDropdown) {
      return (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => setTreatmentsOpen(true)}
          onMouseLeave={() => setTreatmentsOpen(false)}
        >
          <Link
            to={item.route}
            className={cls}
            onClick={closeOnClick ? () => setOpen(false) : undefined}
          >
            {item.label}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${treatmentsOpen ? "rotate-180" : ""}`} />
          </Link>
          {treatmentsOpen && (
            <div className="absolute left-1/2 top-full z-50 pt-3 -translate-x-1/2">
              <div className="w-[720px] rounded-2xl border border-border/60 bg-white p-5 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div key={cat.id} className="rounded-xl p-3 hover:bg-gradient-brand-soft">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
                            <Icon className="h-4 w-4" />
                          </span>
                          <h4 className="font-display text-sm font-extrabold text-secondary">{cat.title}</h4>
                        </div>
                        <ul className="space-y-0.5">
                          {cat.items.slice(0, 5).map((it) => (
                            <li key={it.slug}>
                              <Link
                                to="/services/$slug"
                                params={{ slug: it.slug }}
                                className="block truncate rounded px-2 py-1 text-xs font-medium text-secondary/75 hover:bg-white hover:text-primary"
                                onClick={() => setTreatmentsOpen(false)}
                              >
                                {it.name}
                              </Link>
                            </li>
                          ))}
                          {cat.items.length > 5 && (
                            <li>
                              <Link
                                to="/treatments"
                                className="block px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-primary"
                                onClick={() => setTreatmentsOpen(false)}
                              >
                                +{cat.items.length - 5} more →
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <Link
                  to="/treatments"
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-brand py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground"
                  onClick={() => setTreatmentsOpen(false)}
                >
                  View All Treatments
                </Link>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.label}
        to={item.route}
        className={cls}
        onClick={closeOnClick ? () => setOpen(false) : undefined}
      >
        {item.label}
      </Link>
    );
  };

  const isHome = pathname === "/";

  const cta = isHome ? (
    <a
      href="#cta"
      className="hidden items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105 sm:inline-flex"
      onClick={() => setOpen(false)}
    >
      <Phone className="h-4 w-4" /> Book Appointment
    </a>
  ) : (
    <Link
      to="/contact"
      className="hidden items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105 sm:inline-flex"
      onClick={() => setOpen(false)}
    >
      <Phone className="h-4 w-4" /> Book Appointment
    </Link>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-soft transition-all duration-500">
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-brand transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-lg font-bold text-primary-foreground shadow-glow-red">
            IV
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-lg font-bold tracking-tight">
              Ignite Vascular
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Center · Vijayawada
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.label}>{renderLink(item, false)}</li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {cta}
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t bg-white lg:hidden">
          <ul className="space-y-1 px-5 py-4">
            {NAV.map((item) => {
              if (item.hasDropdown) {
                return (
                  <li key={item.label}>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.route}
                        className="flex-1 py-2 text-[13px] font-semibold text-secondary/80"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        aria-label="Toggle treatments"
                        onClick={() => setMobileTreatmentsOpen((v) => !v)}
                        className="p-2"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileTreatmentsOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {mobileTreatmentsOpen && (
                      <div className="mb-2 space-y-3 rounded-xl bg-gradient-brand-soft p-3">
                        {CATEGORIES.map((cat) => (
                          <div key={cat.id}>
                            <p className="mb-1 text-[11px] font-black uppercase tracking-wider text-primary">{cat.title}</p>
                            <ul className="space-y-0.5">
                              {cat.items.map((it) => (
                                <li key={it.slug}>
                                  <Link
                                    to="/services/$slug"
                                    params={{ slug: it.slug }}
                                    className="block truncate rounded px-2 py-1 text-xs font-medium text-secondary/80"
                                    onClick={() => setOpen(false)}
                                  >
                                    {it.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }
              return <li key={item.label}>{renderLink(item)}</li>;
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
