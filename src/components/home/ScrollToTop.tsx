import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, Activity, HeartPulse, Stethoscope, Droplets, Waves, Syringe } from "lucide-react";

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

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {/* Services popover */}
      <div
        className={`w-72 origin-bottom-right overflow-hidden rounded-3xl border border-border/60 bg-white shadow-lift transition-all duration-300 ease-out ${
          open ? "pointer-events-auto scale-100 opacity-100 translate-y-0" : "pointer-events-none scale-90 opacity-0 translate-y-4"
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
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-primary/5 hover:text-primary"
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
      <div className="pointer-events-auto flex items-center gap-2">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Quick services menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-border/60 bg-white text-primary shadow-soft transition-all duration-300 hover:scale-110"
        >
          <Stethoscope className="h-5 w-5" />
        </button>
        <button
          onClick={toTop}
          aria-label="Scroll to top"
          className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
