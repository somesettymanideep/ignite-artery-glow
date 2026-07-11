import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  hash: string;
  route: string;
};

const NAV: NavItem[] = [
  { label: "Home", hash: "home", route: "/" },
  { label: "About", hash: "doctor", route: "/about" },
  { label: "Our Treatments", hash: "services", route: "/treatments" },
  { label: "Second Opinion", hash: "cta", route: "/" },
  { label: "Contact", hash: "contact", route: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const isHome = pathname === "/";
  const currentHash = (hash ?? "").replace(/^#/, "") || "home";

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "relative text-[13px] font-semibold transition-colors";

  const isActive = (item: NavItem) =>
    isHome ? currentHash === item.hash : pathname === item.route;

  const renderLink = (item: NavItem, closeOnClick = true) => {
    const active = isActive(item);
    const cls = `${linkBase} ${
      active
        ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary"
        : "text-secondary/80 hover:text-primary"
    }`;

    if (isHome) {
      return (
        <a
          key={item.label}
          href={`#${item.hash}`}
          className={cls}
          onClick={closeOnClick ? () => setOpen(false) : undefined}
        >
          {item.label}
        </a>
      );
    }

    if (item.route === "/" && item.hash) {
      return (
        <Link
          key={item.label}
          to={item.route}
          hash={item.hash}
          className={cls}
          onClick={closeOnClick ? () => setOpen(false) : undefined}
        >
          {item.label}
        </Link>
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
      {/* Scroll progress */}
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
        <div className="border-t bg-white lg:hidden">
          <ul className="space-y-1 px-5 py-4">
            {NAV.map((item) => (
              <li key={item.label}>{renderLink(item)}</li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
