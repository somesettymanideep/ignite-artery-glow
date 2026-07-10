import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send, ArrowUp, Siren, ChevronDown } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const quickLinks = ["Home", "About", "Services", "Why Us", "Testimonials", "Contact"];
const serviceLinks = [
  "Varicose Vein Treatment",
  "Peripheral Artery Disease",
  "Diabetic Foot Care",
  "Endovascular Procedures",
  "Carotid Artery Disease",
  "Dialysis Access Surgery",
];

function EmergencyCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden rounded-3xl glass-dark shadow-lift transition-all duration-500 sm:w-96">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand animate-pulse-glow text-primary-foreground">
          <Siren className="h-7 w-7" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold text-primary-foreground">24/7 Emergency</h3>
          <p className="text-sm text-secondary-foreground/70">Click to expand</p>
        </div>
        <ChevronDown
          className={`ml-auto h-5 w-5 shrink-0 text-secondary-foreground/70 transition-transform duration-500 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden px-5 pb-5">
          <p className="text-sm text-secondary-foreground/70">
            Immediate care for vascular emergencies.
          </p>
          <a
            href="tel:+919999999999"
            className="mt-3 block font-display text-2xl font-extrabold text-primary-foreground transition-colors hover:text-red-soft"
          >
            +91 99999 99999
          </a>
          <a
            href="tel:+919999999999"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer id="contact" className="relative overflow-hidden bg-indigo-deep text-secondary-foreground">
      <Reveal variant="up" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-lg font-bold text-primary-foreground">
                IV
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-bold">Ignite Vascular</span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary-foreground/60">
                  Center · Vijayawada
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-secondary-foreground/70">
              Specialized Vascular Surgery &amp; Endovascular Care Center providing advanced,
              compassionate treatment for arteries, veins and blood vessels.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#contact"
                  aria-label="Social media"
                  className="glass-dark grid h-10 w-10 place-items-center rounded-xl transition-transform duration-300 hover:scale-110 hover:bg-primary"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links + services */}
          <div>
            <h3 className="font-display text-base font-bold">Quick Links</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-secondary-foreground/70 transition-colors hover:text-primary-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold">Our Services</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a href="#services" className="text-secondary-foreground/70 transition-colors hover:text-primary-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h3 className="font-display text-base font-bold">Contact Us</h3>
            <ul className="mt-5 space-y-3.5 text-sm text-secondary-foreground/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                Kasturibai Peta, Vijayawada, Andhra Pradesh
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                <a href="tel:+919999999999" className="hover:text-primary-foreground">+91 99999 99999</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                <a href="mailto:care@ignitevascular.in" className="hover:text-primary-foreground">care@ignitevascular.in</a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                Mon – Sat · 9:00 AM – 8:00 PM
              </li>
            </ul>

            <div className="glass-dark mt-6 rounded-2xl p-2">
              <form
                className="flex items-center gap-2"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter signup"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email for health tips"
                  className="w-full min-w-0 bg-transparent px-3 py-2 text-sm text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand transition-transform duration-300 hover:scale-110"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map + emergency */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="overflow-hidden rounded-3xl border border-secondary-foreground/10">
            <iframe
              title="Ignite Vascular Center location — Kasturibai Peta, Vijayawada"
              src="https://www.google.com/maps?q=Kasturibai+Peta,+Vijayawada,+Andhra+Pradesh&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="glass-dark flex flex-col justify-center rounded-3xl p-8 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand animate-pulse-glow">
              <Siren className="h-7 w-7" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold">24/7 Vascular Emergency</h3>
            <p className="mt-1 text-sm text-secondary-foreground/70">Immediate care for vascular emergencies</p>
            <a
              href="tel:+919999999999"
              className="mt-4 font-display text-2xl font-extrabold text-primary-foreground transition-colors hover:text-red-soft"
            >
              +91 99999 99999
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/10 pt-8 text-sm text-secondary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Ignite Vascular Center, Vijayawada. All rights reserved.</p>
          <p>Vascular Surgery &amp; Endovascular Care</p>
        </div>
      </Reveal>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red transition-all duration-500 hover:scale-110 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
