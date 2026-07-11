import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUp,
  Activity,
  HeartPulse,
  Stethoscope,
  Droplets,
  Waves,
  Syringe,
  Waypoints,
} from "lucide-react";

const SERVICES = [
  { icon: Activity, label: "Arterial Diseases", to: "/treatments" as const },
  { icon: Waves, label: "Venous Diseases", to: "/treatments" as const },
  { icon: Droplets, label: "AV Access & Dialysis", to: "/treatments" as const },
  { icon: Syringe, label: "Central Line Access", to: "/treatments" as const },
  { icon: HeartPulse, label: "Second Opinion", to: "/second-opinion" as const },
  { icon: Stethoscope, label: "All Treatments", to: "/treatments" as const },
];

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const topBtnRef = useRef<HTMLButtonElement | null>(null);
  const svcBtnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close popover on Escape and return focus to trigger
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        svcBtnRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        !svcBtnRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    // Focus first link in the popover for keyboard users
    const first = panelRef.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const toTop = () => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });

    // After scroll settles, move focus to the top of the document so keyboard
    // and screen-reader users continue navigating from the beginning.
    const moveFocus = () => {
      const target =
        document.querySelector<HTMLElement>("main h1, main [role='heading'], main") ||
        document.body;
      const prevTabIndex = target.getAttribute("tabindex");
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      const cleanup = () => {
        if (prevTabIndex === null) target.removeAttribute("tabindex");
        else target.setAttribute("tabindex", prevTabIndex);
        target.removeEventListener("blur", cleanup);
      };
      target.addEventListener("blur", cleanup);
    };
    window.setTimeout(moveFocus, prefersReduced ? 0 : 500);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      {/* Services popover */}
      <div
        ref={panelRef}
        role="menu"
        aria-label="Quick services"
        aria-hidden={!open}
        className={`w-72 origin-bottom-right overflow-hidden rounded-3xl border border-border/60 bg-white shadow-lift transition-all duration-300 ease-out ${
          open ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-gradient-brand px-5 py-3.5">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground/80">Explore</p>
          <h3 className="font-display text-base font-extrabold text-primary-foreground">Our Services</h3>
        </div>
        <ul className="p-2">
          {SERVICES.map((s) => (
            <li key={s.label}>
              <Link
                to={s.to}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-primary/5 hover:text-primary focus:outline-none focus-visible:bg-primary/5 focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <s.icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1 truncate">{s.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button
          ref={svcBtnRef}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label="Quick services menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-border/60 bg-white text-primary shadow-soft transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
        >
          <Waypoints className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          ref={topBtnRef}
          onClick={toTop}
          aria-label="Scroll to top of page"
          title="Scroll to top"
          className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
