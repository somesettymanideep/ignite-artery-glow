import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
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

          {/* Contact */}
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
