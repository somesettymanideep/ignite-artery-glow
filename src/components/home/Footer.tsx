import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MessageCircle, MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const quickLinks: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Treatments", to: "/treatments" },
  { label: "Second Opinion", to: "/second-opinion" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];
const serviceLinks = [
  "Varicose Veins Treatment",
  "Endovascular Procedures",
  "Peripheral Arterial Disease (PAD)",
  "Deep Vein Thrombosis (DVT)",
  "Diabetic Foot Care",
  "Vascular Ultrasound & Diagnosis",
  "Balloon Angioplasty",
  "Arterial Bypass Surgery",
];

export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.8fr_1fr_1.1fr] lg:px-8">
        <Reveal className="reveal" variant="up" delay={0}>
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand font-display text-sm font-bold shadow-glow-red">IV</span>
              <span className="font-display text-lg font-extrabold">
                Ignite <span className="text-primary">Vascular</span> Center
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
              Ignite Vascular Center is a specialized vascular surgery and endovascular care center in Vijayawada, providing advanced treatment with compassion and excellence.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Youtube, MessageCircle].map((I, i) => (
                <a key={i} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand transition-transform hover:scale-110">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="reveal" variant="up" delay={0.08}>
          <div>
            <h4 className="font-display text-base font-bold">Quick Links</h4>
            <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/75">
              {quickLinks.map((q) => (
                <li key={q.label}>
                  <Link to={q.to} className="hover:text-primary-foreground">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="reveal" variant="up" delay={0.16}>
          <div>
            <h4 className="font-display text-base font-bold">Our Services</h4>
            <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/75">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/#services" className="hover:text-primary-foreground">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="reveal" variant="up" delay={0.24}>
          <div>
            <h4 className="font-display text-base font-bold">Contact Information</h4>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Opp. Brahmanandam Orthopaedic Center,<br />Bellapu Sobhanadri Street, Kasturibai Peta,<br />Vijayawada, Andhra Pradesh – 520002</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand">
                  <Phone className="h-4 w-4" />
                </span>
                <a href="tel:+919966117292" className="hover:text-primary-foreground">+91 99661 17292</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand">
                  <Mail className="h-4 w-4" />
                </span>
                <a href="mailto:info@ignitevascularcenter.com" className="hover:text-primary-foreground">info@ignitevascularcenter.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand">
                  <Clock className="h-4 w-4" />
                </span>
                <span>Mon – Sat : 9:00 AM – 8:00 PM<br />Sunday: By Appointment</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
      <div className="border-t border-white/10" style={{ backgroundColor: "#d92c2d" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/90 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Ignite Vascular Center. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">Designed with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> for Better Health</p>
        </div>
      </div>
    </footer>
  );
}
