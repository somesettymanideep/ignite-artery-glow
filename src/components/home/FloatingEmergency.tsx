import { useState } from "react";
import { Siren, Phone, X } from "lucide-react";

export function FloatingEmergency() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded card */}
      <div
        className={`w-72 origin-bottom-right overflow-hidden rounded-3xl glass-dark shadow-lift transition-all duration-500 ease-out ${
          open ? "pointer-events-auto scale-100 opacity-100 translate-y-0" : "pointer-events-none scale-90 opacity-0 translate-y-4"
        }`}
      >
        <div className="p-5">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand animate-pulse-glow text-primary-foreground">
              <Siren className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-base font-bold text-primary-foreground">24/7 Emergency</h3>
              <p className="mt-1 text-xs leading-relaxed text-secondary-foreground/70">
                Immediate care for vascular emergencies. Call us anytime.
              </p>
            </div>
          </div>
          <a
            href="tel:+919966117292"
            className="mt-4 block font-display text-2xl font-extrabold text-primary-foreground transition-colors hover:text-red-soft"
          >
            +91 99661 17292
          </a>
          <a
            href="tel:+919966117292"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>

      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close emergency contact" : "Open emergency contact"}
        className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <Siren className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
