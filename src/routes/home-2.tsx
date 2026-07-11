import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, ArrowRight, Calendar, Check, ShieldCheck, Cpu, UserCheck, Heart,
  GraduationCap, Award, Users, Stethoscope, Activity, Waves, Syringe, Footprints,
  Scan, CircleDot, HeartPulse, MonitorPlay, Droplets, Star, Quote, ChevronLeft,
  ChevronRight, MapPin, Mail, Clock, Facebook, Instagram, Youtube, Send,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import heroImg from "@/assets/home2-hero.jpg";
import doctorImg from "@/assets/home2-doctor.jpg";

export const Route = createFileRoute("/home-2")({
  head: () => ({
    meta: [
      { title: "Ignite Vascular Center — Expert Vascular Care in Vijayawada" },
      { name: "description", content: "Specialized vascular surgery and endovascular care in Kasturibai Peta, Vijayawada. Minimally invasive procedures, advanced diagnostics, and compassionate patient care." },
      { property: "og:title", content: "Ignite Vascular Center — Expert Vascular Care in Vijayawada" },
      { property: "og:description", content: "Advanced vascular surgery and endovascular procedures with compassion and precision." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home2,
});

/* ---------------- Hero ---------------- */
const HERO_FEATURES = [
  { icon: ShieldCheck, label: "Minimally Invasive Procedures" },
  { icon: Cpu, label: "Advanced Technology" },
  { icon: UserCheck, label: "Experienced Specialists" },
  { icon: Heart, label: "Patient-Centered Care" },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute -top-24 right-0 h-[520px] w-[520px] rounded-full bg-secondary/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute top-40 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal variant="left">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Advanced Vascular Care in Vijayawada
          </div>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-5xl xl:text-[3.5rem]">
            Expert Vascular Care.<br />
            Better Circulation.<br />
            <span className="text-primary">Brighter</span> Life.
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-brand" />
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Ignite Vascular Center is a leading vascular surgery and endovascular care center in
            Kasturibai Peta, Vijayawada. We diagnose and treat diseases of arteries, veins, and
            blood vessels with advanced technology and compassionate care.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-4">
            {HERO_FEATURES.map((f, i) => (
              <Reveal key={f.label} as="li" variant="up" delay={0.1 + i * 0.1} className="flex flex-col items-start gap-2">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 hover:scale-110">
                  <f.icon className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-bold leading-tight text-secondary">{f.label}</span>
              </Reveal>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105">
              Book Appointment <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25"><ArrowRight className="h-3.5 w-3.5" /></span>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/20 bg-white px-6 py-3.5 text-sm font-bold text-secondary transition-colors duration-300 hover:border-primary hover:text-primary">
              Our Services <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary"><ArrowRight className="h-3.5 w-3.5" /></span>
            </a>
          </div>
        </Reveal>

        <Reveal variant="right" className="relative">
          <div className="relative mx-auto max-w-xl">
            <div aria-hidden className="absolute inset-x-8 top-6 h-[92%] rounded-[3rem] bg-gradient-to-b from-primary/25 via-secondary/25 to-secondary/40" />
            <img
              src={heroImg}
              alt="Vascular specialist with holographic artery visualization"
              width={1280}
              height={1280}
              className="relative w-full rounded-[2.5rem] object-cover"
            />
            <div className="glass-card animate-float absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl px-5 py-3.5 shadow-lift">
              <span className="font-display text-2xl font-extrabold text-gradient">10+</span>
              <span className="text-xs font-bold leading-tight text-secondary">Years of Excellence<br /><span className="font-semibold text-muted-foreground">in Vascular Care</span></span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Doctor ---------------- */
const DOCTOR_POINTS = [
  { icon: Award, text: "10+ Years of Experience" },
  { icon: Stethoscope, text: "Expert in Endovascular Procedures" },
  { icon: Users, text: "Thousands of Successful Treatments" },
  { icon: Heart, text: "Patient-Centered Approach" },
];

function Doctor() {
  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_1fr_1fr] lg:px-8">
        <Reveal variant="left">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Expert Care You Can Trust</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-[2.75rem]">
            Meet Our<br />Vascular <span className="text-primary">Specialist</span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-brand" />
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Our experienced vascular surgeon is dedicated to providing world-class care with
            expertise, precision, and compassion.
          </p>

          <ul className="mt-7 space-y-3.5">
            {DOCTOR_POINTS.map((p, i) => (
              <Reveal key={p.text} as="li" variant="up" delay={i * 0.1} className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><p.icon className="h-4 w-4" /></span>
                <span className="text-sm font-semibold text-secondary">{p.text}</span>
              </Reveal>
            ))}
          </ul>

          <a href="#cta" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105">
            Know More About Doctor <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25"><ArrowRight className="h-3.5 w-3.5" /></span>
          </a>
        </Reveal>

        <Reveal variant="zoom" className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary/10 to-secondary/10 p-3 shadow-lift">
            <img
              src={doctorImg}
              alt="Vascular surgeon portrait"
              width={900}
              height={1100}
              loading="lazy"
              className="w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </Reveal>

        <Reveal variant="right">
          <div className="rounded-[2rem] bg-secondary p-8 text-secondary-foreground shadow-lift lg:p-10">
            <h3 className="font-display text-2xl font-extrabold">Dr. Arvind Kumar</h3>
            <div className="mt-4 space-y-1 text-sm text-secondary-foreground/85">
              <p>MBBS, MS (General Surgery),</p>
              <p>DNB (Vascular Surgery)</p>
            </div>
            <p className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              Vascular &amp; Endovascular Surgeon
            </p>
            <div className="my-6 h-px bg-white/15" />
            <p className="text-sm leading-relaxed text-secondary-foreground/85">
              Specialized in treating complex vascular conditions with minimally invasive and
              advanced surgical techniques.
            </p>
            <p className="mt-8 font-display text-2xl italic text-primary-foreground/90" style={{ fontFamily: "cursive" }}>
              A. Kumar
            </p>
            <div className="mt-6 border-t border-white/15 pt-4 text-xs font-semibold text-secondary-foreground/70">
              Reg. No. AP/MED/2015/00842
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const SERVICES = [
  { icon: Waves, title: "Varicose Veins Treatment" },
  { icon: Syringe, title: "Endovascular Procedures" },
  { icon: Activity, title: "Peripheral Arterial Disease (PAD)" },
  { icon: HeartPulse, title: "Deep Vein Thrombosis (DVT)" },
  { icon: Footprints, title: "Diabetic Foot Care" },
  { icon: MonitorPlay, title: "Vascular Ultrasound & Diagnosis" },
  { icon: CircleDot, title: "Balloon Angioplasty" },
  { icon: Scan, title: "Arterial Bypass Surgery" },
  { icon: Droplets, title: "Chronic Venous Disease Treatment" },
  { icon: Stethoscope, title: "Vascular Consultation & Follow-up" },
];

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-surface py-20 lg:py-24">
      <Reveal variant="up" className="mx-auto max-w-2xl text-center px-5">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">What We Offer</span>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-secondary">
          Our <span className="text-primary">Services</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-brand" />
        <p className="mt-4 text-[15px] text-muted-foreground">Comprehensive vascular care for a healthier you</p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-4 px-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-8">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} variant="zoom" delay={(i % 5) * 0.1} className="group flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/8 text-primary transition-all duration-500 group-hover:bg-gradient-brand group-hover:text-primary-foreground group-hover:scale-110">
              <s.icon className="h-8 w-8" strokeWidth={1.5} />
            </span>
            <p className="mt-4 text-[13px] font-bold leading-tight text-secondary">{s.title}</p>
            <span className="mt-3 h-0.5 w-8 bg-primary/40 transition-all duration-500 group-hover:w-12 group-hover:bg-primary" />
          </Reveal>
        ))}
      </div>

      <Reveal variant="up" className="mt-12 flex justify-center">
        <a href="#cta" className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/15 bg-white px-6 py-3 text-sm font-bold text-secondary transition-all duration-300 hover:border-primary hover:text-primary">
          View All Services <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground"><ArrowRight className="h-3.5 w-3.5" /></span>
        </a>
      </Reveal>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const TESTIMONIALS = [
  { name: "Ramesh B.", location: "Vijayawada", text: "I had severe varicose veins and leg pain for years. After treatment at Ignite Vascular Center, I feel relief and can walk without pain. The doctor and staff are very caring and professional." },
  { name: "Suresh K.", location: "Vijayawada", text: "The endovascular procedure recommended by the doctor was life-changing. Minimal pain, quick recovery, and excellent care throughout my treatment." },
  { name: "Lakshmi P.", location: "Vijayawada", text: "Very advanced technology and excellent expertise. I highly recommend Ignite Vascular Center for any vascular problems." },
  { name: "Padmavathi K.", location: "Machilipatnam", text: "For my dialysis fistula, the procedure went smoothly and the access works perfectly. The staff treated me like family." },
];

function Testimonials() {
  const [start, setStart] = useState(0);
  const perView = 3;
  const pages = Math.max(1, TESTIMONIALS.length - perView + 1);

  useEffect(() => {
    const id = setInterval(() => setStart((s) => (s + 1) % pages), 6000);
    return () => clearInterval(id);
  }, [pages]);

  const visible = Array.from({ length: perView }, (_, i) => TESTIMONIALS[(start + i) % TESTIMONIALS.length]);

  return (
    <section id="testimonials" className="relative overflow-hidden py-20 lg:py-24">
      <Reveal variant="up" className="mx-auto max-w-2xl text-center px-5">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Patients Stories</span>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-secondary">
          What Our <span className="text-primary">Patients</span> Say
        </h2>
        <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-brand" />
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {visible.map((t, i) => (
            <Reveal key={`${t.name}-${start}-${i}`} variant="up" delay={i * 0.15} className="relative rounded-3xl bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
              <Quote className="h-8 w-8 text-primary" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              <div className="my-5 h-0.5 w-12 bg-gradient-brand" />
              <div className="mb-4 flex gap-0.5" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand font-display text-sm font-extrabold text-primary-foreground">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <p className="font-display text-sm font-bold text-secondary">{t.name}</p>
                  <p className="text-xs font-semibold text-muted-foreground">{t.location}</p>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <button onClick={() => setStart((start - 1 + pages) % pages)} aria-label="Previous"
          className="absolute -left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-card shadow-soft transition-transform hover:scale-110 lg:-left-6">
          <ChevronLeft className="h-5 w-5 text-secondary" />
        </button>
        <button onClick={() => setStart((start + 1) % pages)} aria-label="Next"
          className="absolute -right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-card shadow-soft transition-transform hover:scale-110 lg:-right-6">
          <ChevronRight className="h-5 w-5 text-secondary" />
        </button>

        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} onClick={() => setStart(i)} aria-label={`Slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === start ? "w-8 bg-gradient-brand" : "w-2.5 bg-border"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
const CTA_ITEMS = [
  { icon: Calendar, title: "Quick Appointment" },
  { icon: UserCheck, title: "Expert Consultation" },
  { icon: Activity, title: "Advanced Treatment" },
];

function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden px-5 py-12 lg:px-8">
      <Reveal variant="zoom" className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-cta p-10 lg:p-14 shadow-lift">
        <svg aria-hidden className="pointer-events-none absolute -right-10 top-0 h-full w-1/2 opacity-20" viewBox="0 0 400 400" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M50 200 C 120 100, 180 300, 260 180 S 380 220, 450 160" stroke="white" strokeWidth="2" className="vein-line" />
          <path d="M80 320 C 160 260, 220 380, 300 300 S 400 340, 460 280" stroke="white" strokeWidth="1.5" className="vein-line" />
        </svg>

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="text-primary-foreground">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary-foreground/80">Need Expert Vascular Care?</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">Your Health, Our Priority</h2>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/85">
              Book an appointment today and take the first step towards a healthier, pain-free life.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="grid w-full grid-cols-3 gap-4">
              {CTA_ITEMS.map((c, i) => (
                <Reveal key={c.title} variant="up" delay={i * 0.15} className="flex flex-col items-center gap-2 text-center text-primary-foreground">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur transition-transform duration-500 hover:scale-110">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <p className="text-xs font-bold leading-tight">{c.title}</p>
                </Reveal>
              ))}
            </div>
            <a href="tel:+919966117292" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-lift transition-transform duration-300 hover:scale-105">
              Book Appointment Now <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground"><ArrowRight className="h-3.5 w-3.5" /></span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer id="contact" className="bg-white pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 lg:grid-cols-4 lg:px-8">
        <Reveal variant="up">
          <div className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand font-display text-sm font-bold text-primary-foreground">IV</span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-extrabold text-secondary">Ignite <span className="text-primary">Vascular</span> Center</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">We Ignite The Hope</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Advanced vascular and endovascular care center in Kasturibai Peta, Vijayawada. We are
            committed to providing world-class treatment with compassion and excellence.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Youtube, Send].map((Icon, i) => (
              <a key={i} href="#contact" aria-label="social" className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground transition-transform hover:scale-110">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal variant="up" delay={0.1}>
          <h3 className="font-display text-base font-extrabold text-secondary">Quick Links</h3>
          <div className="mt-3 h-0.5 w-8 bg-primary" />
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            {["Home", "About Us", "Services", "Treatments", "Our Doctor", "Testimonials", "Blog", "Contact Us"].map((l) => (
              <li key={l}><a href="#top" className="transition-colors hover:text-primary">{l}</a></li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="up" delay={0.2}>
          <h3 className="font-display text-base font-extrabold text-secondary">Services</h3>
          <div className="mt-3 h-0.5 w-8 bg-primary" />
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.title}><a href="#services" className="transition-colors hover:text-primary">{s.title}</a></li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="up" delay={0.3}>
          <h3 className="font-display text-base font-extrabold text-secondary">Contact Us</h3>
          <div className="mt-3 h-0.5 w-8 bg-primary" />
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><MapPin className="h-4 w-4" /></span>Opp. Brahmanandam Orthopaedic Center, Bellapu Sobhanadri Street, Kasturibai Peta, Vijayawada, Andhra Pradesh — 520002</li>
            <li className="flex items-center gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><Phone className="h-4 w-4" /></span><a href="tel:+919966117292" className="hover:text-primary">+91 99661 17292</a></li>
            <li className="flex items-center gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><Mail className="h-4 w-4" /></span><a href="mailto:info@ignitevascularcenter.com" className="hover:text-primary">info@ignitevascularcenter.com</a></li>
            <li className="flex items-center gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><Clock className="h-4 w-4" /></span>Mon - Sat: 9:00 AM - 8:00 PM</li>
          </ul>
        </Reveal>
      </div>
      <div className="bg-secondary py-4 text-center text-xs text-secondary-foreground/80 sm:flex sm:justify-between sm:px-8">
        <p>© 2025 Ignite Vascular Center. All Rights Reserved.</p>
        <p className="mt-1 sm:mt-0">Designed with <span className="text-primary">♥</span> for Better Health</p>
      </div>
    </footer>
  );
}

/* ---------------- Stats strip (light) ---------------- */
function Trust() {
  const items = [
    { k: "10+", v: "Years of Excellence" },
    { k: "5000+", v: "Successful Procedures" },
    { k: "98%", v: "Patient Satisfaction" },
    { k: "24/7", v: "Emergency Support" },
  ];
  return (
    <section className="relative -mt-4">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 lg:grid-cols-4 lg:px-8">
        {items.map((s, i) => (
          <Reveal key={s.v} variant="up" delay={i * 0.1} className="rounded-2xl bg-card p-5 text-center shadow-soft">
            <p className="font-display text-3xl font-extrabold text-gradient">{s.k}</p>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">{s.v}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Home2() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) {
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
        return;
      }
      // Wait a frame so target sections are mounted + measured.
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <main className="bg-background [&_section]:scroll-mt-24">
      <Navbar />
      <Hero />
      <Trust />
      <Doctor />
      <Services />
      <Testimonials />
      <CTASection />
      <Footer />

      {/* floating link to original */}
      <Link to="/" className="fixed bottom-6 left-6 z-40 rounded-full bg-white px-4 py-2 text-xs font-bold text-secondary shadow-lift transition-transform hover:scale-105">
        ← Home v1
      </Link>
    </main>
  );
}

