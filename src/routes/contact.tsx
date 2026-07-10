import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Phone, Menu, X, MapPin, Mail, Clock, MessageCircleHeart, CalendarCheck,
  ShieldCheck, ChevronRight, User, Send, ArrowRight, Facebook, Instagram,
  Youtube, MessageCircle, Heart,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import buildingImg from "@/assets/contact-building.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Ignite Vascular Center, Vijayawada" },
      { name: "description", content: "Get in touch with Ignite Vascular Center in Kasturibai Peta, Vijayawada. Book appointments, consultations, or ask questions about vascular care." },
      { property: "og:title", content: "Contact Ignite Vascular Center — Vijayawada" },
      { property: "og:description", content: "Reach our vascular specialists for appointments, consultations and expert care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Treatments", href: "/#services" },
  { label: "Our Doctor", href: "/#doctor" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/" },
  { label: "Contact Us", href: "/contact", active: true },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass-card shadow-soft" : "bg-white/90 backdrop-blur"}`}>
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8 xl:flex xl:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand font-display text-sm font-bold text-primary-foreground shadow-glow-red">IV</span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-[15px] font-extrabold tracking-tight text-secondary">
              Ignite <span className="text-primary">Vascular</span> Center
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">We Ignite The Hope</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 xl:flex">
          {NAV.map((n) => (
            <li key={n.label}>
              <a href={n.href} className={`relative text-[13px] font-semibold transition-colors ${n.active ? "text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary" : "text-secondary/80 hover:text-primary"}`}>{n.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="tel:+919966117292" className="hidden items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105 sm:inline-flex">
            <Phone className="h-4 w-4" /> +91 99661 17292
          </a>
          <button className="grid h-10 w-10 place-items-center rounded-xl border xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t bg-white xl:hidden">
          <ul className="space-y-1 px-5 py-3">
            {NAV.map((n) => (
              <li key={n.label}><a href={n.href} onClick={() => setOpen(false)} className={`block rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-accent ${n.active ? "text-primary" : ""}`}>{n.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

const INFO = [
  {
    icon: MapPin,
    title: "Address",
    lines: [
      "Opp. Brahmanandam Orthopaedic Center,",
      "Bellapu Sobhanadri Street,",
      "Kasturibai Peta, Vijayawada,",
      "Andhra Pradesh – 520002",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 99661 17292", "+91 89779 84567"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@ignitevascularcenter.com", "appointments@ignitevascularcenter.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Sat  :  9:00 AM – 8:00 PM", "Sunday       :  By Appointment"],
  },
];

function Hero() {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden pt-24 sm:min-h-[460px] lg:min-h-[520px] lg:pt-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={buildingImg}
          alt="Ignite Vascular Center building exterior"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/75 to-secondary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-secondary/30" />
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden>
        <svg className="h-12 w-full text-background sm:h-16 lg:h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal variant="up" className="text-center sm:text-left">
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Link to="/" className="font-semibold text-white/80 transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4 text-white/60" />
            <span className="font-semibold text-primary-foreground">Contact Us</span>
          </nav>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mx-0 sm:text-lg">
            Have questions or need expert vascular care? Our team in Vijayawada is ready to assist you with appointments and consultations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<null | "ok">(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "", agree: false });

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim() || !form.agree) return;
    setStatus("ok");
    setForm({ name: "", phone: "", email: "", subject: "", message: "", agree: false });
  }

  const input = "w-full rounded-2xl border border-border/70 bg-card px-4 py-3.5 pl-11 text-sm font-medium text-secondary placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10";

  return (
    <section className="py-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 lg:grid-cols-[1fr_minmax(320px,420px)] lg:px-8">
        <div className="space-y-8">
          <Reveal variant="left" className="rounded-[2rem] bg-card p-8 shadow-soft lg:p-10">
            <h2 className="font-display text-2xl font-extrabold text-secondary sm:text-3xl">Send Us a Message</h2>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-gradient-brand" />
            <p className="mt-3 text-[14px] text-muted-foreground">Fill out the form below and our team will get back to you shortly.</p>

            <form onSubmit={submit} className="mt-7 space-y-4" aria-label="Contact form">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" />
                  <input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={input} placeholder="Your Name" aria-label="Your name" />
                </div>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" />
                  <input type="tel" maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={input} placeholder="Phone Number" aria-label="Phone number" />
                </div>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" />
                  <input required type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} placeholder="Email Address" aria-label="Email address" />
                </div>
                <div className="relative">
                  <MessageCircle className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" />
                  <input maxLength={150} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={input} placeholder="Subject" aria-label="Subject" />
                </div>
              </div>

              <div className="relative">
                <MessageCircleHeart className="pointer-events-none absolute left-3.5 top-4 h-4.5 w-4.5 text-muted-foreground" />
                <textarea required maxLength={1000} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${input} min-h-32 resize-y pt-4`} placeholder="Your Message" aria-label="Your message" />
              </div>

              <label className="flex items-start gap-3 rounded-2xl border border-border/60 bg-surface/60 p-3.5 text-sm">
                <input type="checkbox" required checked={form.agree} onChange={(e) => setForm({ ...form, agree: e.target.checked })} className="mt-0.5 h-4 w-4 accent-primary" />
                <span className="text-[13px] font-medium text-muted-foreground">
                  I confirm the information above is correct and consent to be contacted by Ignite Vascular Center.
                </span>
              </label>

              <button type="submit" className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-brand px-6 py-4 font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-[1.02]">
                Send Message
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/25 transition-transform duration-300 group-hover:translate-x-1">
                  <Send className="h-3.5 w-3.5" />
                </span>
              </button>

              {status === "ok" && (
                <p className="rounded-2xl bg-primary/10 px-4 py-3 text-sm font-semibold text-primary" role="status">
                  Thank you — your message has been received. We'll be in touch shortly.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal variant="up" className="relative overflow-hidden rounded-[2rem] shadow-soft">
            <div className="relative min-h-[360px] lg:min-h-[420px]">
              <iframe
                title="Ignite Vascular Center — Kasturibai Peta, Vijayawada"
                src="https://www.google.com/maps?q=Kasturibai+Peta,+Vijayawada,+Andhra+Pradesh&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="glass-card pointer-events-auto absolute left-5 top-5 max-w-xs rounded-2xl p-5 shadow-lift lg:left-6 lg:top-6">
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <p className="font-display text-sm font-extrabold text-secondary">Ignite Vascular Center</p>
                </div>
                <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">
                  Opp. Brahmanandam Orthopaedic Center, Bellapu Sobhanadri St, Kasturibai Peta, Vijayawada, Andhra Pradesh 520002
                </p>
                <a
                  href="https://www.google.com/maps?q=Kasturibai+Peta,+Vijayawada"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-primary transition-all hover:gap-2.5"
                >
                  View on Google Maps <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" className="lg:sticky lg:top-28">
          <div className="rounded-[2rem] bg-card p-7 shadow-soft lg:p-9">
            <h3 className="font-display text-xl font-extrabold text-secondary sm:text-2xl">Contact Information</h3>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-gradient-brand" />
            <p className="mt-3 text-[14px] text-muted-foreground">Reach us directly through any of the channels below.</p>

            <div className="mt-7 space-y-5">
              {INFO.map((info, i) => (
                <div key={info.title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow-red">
                    <info.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-display text-[15px] font-bold text-secondary">{info.title}</h4>
                    <div className="mt-1.5 space-y-0.5 text-[13px] leading-relaxed text-muted-foreground">
                      {info.lines.map((l) => <p key={l}>{l}</p>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary/10 to-indigo-500/10 p-5">
              <p className="font-display text-sm font-extrabold text-secondary">Emergency Contact</p>
              <p className="mt-1 text-[13px] text-muted-foreground">For urgent vascular care, call us directly.</p>
              <a href="tel:+919966117292" className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105">
                <Phone className="h-4 w-4" /> +91 99661 17292
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AppointmentBanner() {
  return (
    <section className="py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="zoom" className="relative overflow-hidden rounded-[2rem] bg-gradient-cta p-8 shadow-lift lg:p-10">
          <svg className="pointer-events-none absolute inset-y-0 left-0 h-full w-64 opacity-30" viewBox="0 0 200 200" fill="none" aria-hidden>
            <path d="M20 100 Q 60 40 100 100 T 180 100" stroke="white" strokeWidth="2" className="heartbeat-line" />
            <path d="M10 140 Q 50 80 90 140 T 190 140" stroke="white" strokeWidth="2" className="heartbeat-line" />
          </svg>
          <div className="relative grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-primary shadow-lift animate-pulse-glow">
              <CalendarCheck className="h-8 w-8" />
            </span>
            <div className="min-w-0 text-primary-foreground">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary-foreground/75">Need Immediate Assistance?</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">Book Your Appointment Today!</h3>
              <p className="mt-1.5 text-sm text-primary-foreground/85">Take the first step towards healthy circulation and a better life.</p>
            </div>
            <a href="tel:+919966117292" className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-bold text-primary shadow-lift transition-transform duration-300 hover:scale-105">
              Book Appointment
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const FOOTER_LINKS = ["Home", "About Us", "Services", "Treatments", "Our Doctor", "Testimonials", "Blog", "Contact Us"];
const FOOTER_SERVICES = [
  "Varicose Veins Treatment",
  "Endovascular Procedures",
  "Peripheral Arterial Disease (PAD)",
  "Deep Vein Thrombosis (DVT)",
  "Diabetic Foot Care",
  "Vascular Ultrasound & Diagnosis",
  "Balloon Angioplasty",
  "Arterial Bypass Surgery",
];

function ContactFooter() {
  return (
    <footer className="relative mt-6 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand font-display text-sm font-bold text-primary-foreground">IV</span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-extrabold text-secondary">Ignite <span className="text-primary">Vascular</span> Center</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">We Ignite The Hope</span>
            </span>
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-muted-foreground">
            Ignite Vascular Center is a specialized vascular surgery and endovascular care center in Vijayawada, providing advanced treatment with compassion and excellence.
          </p>
          <div className="mt-6 flex gap-2.5">
            {[
              { Icon: Facebook, cls: "bg-[#1877F2]" },
              { Icon: Instagram, cls: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
              { Icon: Youtube, cls: "bg-[#FF0000]" },
              { Icon: MessageCircle, cls: "bg-[#25D366]" },
            ].map(({ Icon, cls }, i) => (
              <a key={i} href="#" aria-label="Social" className={`grid h-10 w-10 place-items-center rounded-full text-white transition-transform duration-300 hover:scale-110 ${cls}`}>
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-extrabold text-secondary">Quick Links</h4>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-gradient-brand" />
          <ul className="mt-5 space-y-2.5 text-[13px]">
            {FOOTER_LINKS.map((l) => (
              <li key={l}>
                <a href="#" className="flex items-center justify-between text-muted-foreground transition-colors hover:text-primary">
                  {l} <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-extrabold text-secondary">Our Services</h4>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-gradient-brand" />
          <ul className="mt-5 space-y-2.5 text-[13px]">
            {FOOTER_SERVICES.map((s) => (
              <li key={s}><a href="/#services" className="text-muted-foreground transition-colors hover:text-primary">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-extrabold text-secondary">Get in Touch</h4>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-gradient-brand" />
          <ul className="mt-5 space-y-3.5 text-[13px] text-muted-foreground">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Opp. Brahmanandam Orthopaedic Center, Bellapu Sobhanadri Street, Kasturibai Peta, Vijayawada, Andhra Pradesh – 520002</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> +91 99661 17292</li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> info@ignitevascularcenter.com</li>
            <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> <span>Mon - Sat: 9:00 AM – 8:00 PM<br />Sunday: By Appointment</span></li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-4 text-[12px] text-white/80 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Ignite Vascular Center. All Rights Reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Designed with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> for Better Health
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <ContactForm />
        <AppointmentBanner />
      </main>
      <ContactFooter />
    </div>
  );
}
