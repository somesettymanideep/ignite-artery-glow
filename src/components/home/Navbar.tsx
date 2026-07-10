import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#doctor" },
  { label: "Our Treatments", href: "#services" },
  { label: "Second Opinion", href: "#cta" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-soft transition-all duration-500">
      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-brand transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
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
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105 sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> Book Appointment
          </a>
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
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
