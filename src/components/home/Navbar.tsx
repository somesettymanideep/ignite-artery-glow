import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

type NavItem = {
  label: string;
  route: "/" | "/about" | "/treatments" | "/second-opinion" | "/case-studies" | "/gallery" | "/contact";
};

const NAV: NavItem[] = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Our Treatments", route: "/treatments" },
  { label: "Second Opinion", route: "/second-opinion" },
  { label: "Case Studies", route: "/case-studies" },
  { label: "Gallery", route: "/gallery" },
  { label: "Contact", route: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [treatOpen, setTreatOpen] = useState(false);
  const [mobileTreatOpen, setMobileTreatOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const openTreat = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setTreatOpen(true);
  };
  const scheduleCloseTreat = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setTreatOpen(false), 140);
  };

  const linkBase = "relative text-[13px] font-semibold transition-colors";

  const renderLink = (item: NavItem, closeOnClick = true) => {
    const active = pathname === item.route || (item.route === "/treatments" && pathname.startsWith("/services/"));
    const cls = `${linkBase} ${
      active
        ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary"
        : "text-secondary/80 hover:text-primary"
    }`;
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

  const renderDesktopItem = (item: NavItem) => {
    if (item.route === "/treatments") {
      const active = pathname === "/treatments" || pathname.startsWith("/services/");
      return (
        <li
          key={item.label}
          className="relative"
          onMouseEnter={openTreat}
          onMouseLeave={scheduleCloseTreat}
        >
          <Link
            to="/treatments"
            className={`${linkBase} inline-flex items-center gap-1 ${
              active
                ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-[calc(100%-16px)] after:rounded-full after:bg-primary"
                : "text-secondary/80 hover:text-primary"
            }`}
            aria-haspopup="menu"
            aria-expanded={treatOpen}
          >
            {item.label}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-300 ${treatOpen ? "rotate-180" : ""}`}
              aria-hidden
            />
          </Link>
          <div
            role="menu"
            className={`absolute left-1/2 top-full z-50 mt-3 w-[320px] -translate-x-1/2 rounded-2xl border border-border/60 bg-white p-2 shadow-xl transition-all duration-200 ${
              treatOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
            onMouseEnter={openTreat}
            onMouseLeave={scheduleCloseTreat}
          >
            <div className="px-3 pb-2 pt-2 text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground">
              Featured Services
            </div>
            <ul className="grid gap-1">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    role="menuitem"
                    className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-secondary"
                    onClick={() => setTreatOpen(false)}
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-brand-soft text-primary transition group-hover:bg-white/10 group-hover:text-white">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13px] font-bold leading-tight text-secondary group-hover:text-white">
                        {s.title}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground group-hover:text-white/75">
                        {s.short}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/treatments"
              onClick={() => setTreatOpen(false)}
              className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-secondary/5 py-2.5 text-[12px] font-bold uppercase tracking-[0.18em] text-secondary hover:bg-secondary/10"
            >
              View all treatments
            </Link>
          </div>
        </li>
      );
    }
    return <li key={item.label}>{renderLink(item, false)}</li>;
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
          {NAV.map(renderDesktopItem)}
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
        <div className="border-t bg-white lg:hidden">
          <ul className="space-y-1 px-5 py-4">
            {NAV.map((item) => {
              if (item.route === "/treatments") {
                return (
                  <li key={item.label}>
                    <div className="flex items-center justify-between">
                      {renderLink(item)}
                      <button
                        type="button"
                        className="grid h-8 w-8 place-items-center rounded-lg text-secondary/70 hover:bg-secondary/5"
                        onClick={() => setMobileTreatOpen((v) => !v)}
                        aria-label="Toggle treatments"
                        aria-expanded={mobileTreatOpen}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileTreatOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {mobileTreatOpen && (
                      <ul className="mt-1 space-y-1 border-l border-secondary/10 pl-4">
                        {SERVICES.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to="/services/$slug"
                              params={{ slug: s.slug }}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2 py-1.5 text-[13px] font-semibold text-secondary/80 hover:text-primary"
                            >
                              <s.icon className="h-3.5 w-3.5 text-primary" /> {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
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
