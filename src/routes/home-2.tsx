import { createFileRoute, Link } from "@tanstack/react-router";
import { openBookingModal } from "@/components/booking/BookingModal";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  Phone, ArrowRight, Calendar, Check, ShieldCheck, Cpu, UserCheck, Heart,
  GraduationCap, Award, Users, Stethoscope, Activity, Waves, Syringe, Footprints,
  Scan, CircleDot, HeartPulse, MonitorPlay, Droplets, Star, Quote, ChevronLeft,
  ChevronRight, MessageCircleHeart, BadgeCheck, MessageSquare, HandHeart,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { Doctor } from "@/components/home/Doctor";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import heroImg from "@/assets/home2-hero.jpg";
import doctorImg from "@/assets/home2-doctor.jpg";
import hero3dImg from "@/assets/home2-3d-hero.jpg";

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
            <button type="button" onClick={() => openBookingModal()} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105">
              Book Appointment <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25"><ArrowRight className="h-3.5 w-3.5" /></span>
            </button>
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

/* ---------------- Testimonials (v2 — reference layout) ---------------- */
const TESTIMONIALS = [
  {
    name: "Ramesh Babu",
    location: "Vijayawada",
    treatment: "Varicose Veins Treatment",
    color: "#1a73e8",
    text: "I had severe varicose veins for years and was suffering a lot. Dr. Narasimha Sai explained the condition clearly and suggested the best treatment. The laser procedure was painless and the results are excellent.",
  },
  {
    name: "Suresh K.",
    location: "Vijayawada",
    treatment: "Angioplasty Treatment",
    color: "#41305c",
    text: "My father had a blocked leg artery and severe pain while walking. Dr. Sai performed angioplasty and the recovery was smooth. His expertise and care gave us great confidence.",
  },
  {
    name: "Lakshmi S.",
    location: "Vijayawada",
    treatment: "Diabetic Foot Care",
    color: "#c5221f",
    text: "I consulted Dr. Sai for a non-healing ulcer on my foot due to diabetes. The treatment and care I received were excellent. Now my ulcer has healed completely. Highly recommended!",
  },
  {
    name: "Padmavathi K.",
    location: "Machilipatnam",
    treatment: "Dialysis Fistula",
    color: "#188038",
    text: "For my dialysis fistula, the procedure went smoothly and the access works perfectly. The staff treated me like family throughout the process.",
  },
];

function Testimonials() {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const total = TESTIMONIALS.length;
  const maxIndex = Math.max(0, total - perView);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => { if (index > maxIndex) setIndex(maxIndex); }, [index, maxIndex]);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 6500);
    return () => clearInterval(id);
  }, [maxIndex, paused]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const pages = maxIndex + 1;

  return (
    <section
      id="testimonials"
      aria-labelledby="t-heading"
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ background: "linear-gradient(180deg,#FFFFFF 0%,#F6F3FB 100%)" }}
    >
      <Reveal variant="up" className="mx-auto max-w-2xl px-5 text-center">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #DA3234)" }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#453660" }} />
          <span className="text-[11px] font-black uppercase tracking-[0.28em]" style={{ color: "#DA3234" }}>
            Testimonials
          </span>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#453660" }} />
          <span className="h-px w-8" style={{ background: "linear-gradient(90deg, #DA3234, transparent)" }} />
        </div>
        <h2 id="t-heading" className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl" style={{ color: "#1E293B" }}>
          What Our <span style={{ color: "#DA3234" }}>Patients Say</span>
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#1E293BB3" }}>
          Real stories from real patients who experienced better care and better outcomes.
        </p>
      </Reveal>

      <div
        className="relative mx-auto mt-14 max-w-7xl px-5 lg:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden">
          <ul
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            aria-live="polite"
          >
            {TESTIMONIALS.map((t, i) => (
              <li key={t.name} className="shrink-0 px-3" style={{ flexBasis: `${100 / perView}%` }}>
                <article
                  className="group relative flex h-full flex-col rounded-3xl bg-white p-7 transition-all duration-500 hover:-translate-y-1.5"
                  style={{ boxShadow: "0 24px 50px -28px rgba(69,54,96,0.28)" }}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-full"
                      style={{ background: "rgba(69,54,96,0.1)", color: "#453660" }}
                      aria-hidden
                    >
                      <Quote className="h-5 w-5" />
                    </span>
                    <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4" style={{ color: "#DA3234", fill: "#DA3234" }} aria-hidden />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-5 flex-1 text-[14.5px] leading-relaxed" style={{ color: "#1E293BCC" }}>
                    <p>{t.text}</p>
                  </blockquote>
                  <div className="my-5 h-px w-full" style={{ background: "rgba(69,54,96,0.12)" }} />
                  <figcaption className="flex items-center gap-3">
                    <span
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-base font-extrabold text-white"
                      style={{ backgroundColor: t.color, boxShadow: `0 8px 20px -8px ${t.color}80` }}
                      aria-hidden
                    >
                      {t.name.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-display text-[15px] font-extrabold" style={{ color: "#1E293B" }}>
                        {t.name}
                      </p>
                      <p className="truncate text-xs font-semibold" style={{ color: "#1E293B99" }}>
                        {t.location}
                      </p>
                      <p className="mt-0.5 truncate text-[12px] font-bold" style={{ color: "#453660" }}>
                        {t.treatment}
                      </p>
                    </div>
                  </figcaption>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute -left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white transition-all duration-300 hover:scale-110 sm:grid lg:-left-6"
          style={{ boxShadow: "0 10px 24px -10px rgba(69,54,96,0.35)", color: "#453660" }}
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="absolute -right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white transition-all duration-300 hover:scale-110 sm:grid lg:-right-6"
          style={{ boxShadow: "0 10px 24px -10px rgba(69,54,96,0.35)", color: "#453660" }}
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>

        <div className="mt-8 flex items-center justify-center gap-4 sm:hidden">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-soft"
            style={{ color: "#453660" }}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className="h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 28 : 10,
                  background: i === index ? "linear-gradient(90deg,#DA3234,#453660)" : "rgba(69,54,96,0.2)",
                }}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-soft"
            style={{ color: "#453660" }}
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats strip (v2 — reference layout) ---------------- */
const TRUST_ITEMS = [
  { icon: MessageCircleHeart, value: "2000+", label: "Happy Patients", sub: "Trusted by thousands of patients", tone: "purple" as const },
  { icon: BadgeCheck, value: "4.9/5", label: "Patient Rating", sub: "Based on Google reviews", tone: "red" as const },
  { icon: MessageSquare, value: "98%", label: "Satisfaction Rate", sub: "Patients recommend our treatments", tone: "purple" as const },
  { icon: HandHeart, value: "10+", label: "Years of Trust", sub: "A decade of compassionate vascular care", tone: "red" as const },
];

function Trust() {
  return (
    <section aria-labelledby="trust-heading" className="relative px-5 pb-6 lg:px-8">
      <h2 id="trust-heading" className="sr-only">Clinic trust and patient satisfaction metrics</h2>
      <Reveal variant="up" className="relative mx-auto max-w-7xl">
        <div
          className="overflow-hidden rounded-[2rem] p-6 sm:p-8"
          style={{
            background: "linear-gradient(135deg,#F3EEFA 0%,#EEE7F7 100%)",
            boxShadow: "0 24px 50px -30px rgba(69,54,96,0.35)",
          }}
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {TRUST_ITEMS.map((item, i) => {
              const isPurple = item.tone === "purple";
              const iconBg = isPurple ? "rgba(69,54,96,0.14)" : "rgba(218,50,52,0.12)";
              const iconColor = isPurple ? "#453660" : "#DA3234";
              return (
                <Reveal
                  as="li"
                  key={item.label}
                  variant="up"
                  delay={i * 0.1}
                  className="relative flex items-center gap-4 lg:justify-center"
                >
                  <span
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-full transition-transform duration-500 hover:scale-110"
                    style={{ background: iconBg, color: iconColor }}
                    aria-hidden
                  >
                    <item.icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-2xl font-black leading-none" style={{ color: "#1E293B" }}>
                      {item.value}
                    </p>
                    <p className="mt-1 text-[13px] font-extrabold" style={{ color: "#1E293B" }}>
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium leading-snug" style={{ color: "#1E293B99" }}>
                      {item.sub}
                    </p>
                  </div>
                  {i < TRUST_ITEMS.length - 1 && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 lg:block"
                      style={{ background: "rgba(69,54,96,0.15)" }}
                    />
                  )}
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Reveal>
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
            <button type="button" onClick={() => openBookingModal()} className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-lift transition-transform duration-300 hover:scale-105">
              Book Appointment Now <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground"><ArrowRight className="h-3.5 w-3.5" /></span>
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}


/* ---------------- Premium Doctor Hero (v2) ---------------- */
const HERO_STATS = [
  { icon: Activity, num: "400+", label: "AV Fistula Surgeries" },
  { icon: Waves, num: "100+", label: "Laser Varicose Procedures" },
  { icon: Footprints, num: "50+", label: "Limb Salvage Cases" },
];
const EXPERTISE_CHIPS = [
  "AV Fistula Creation", "Complex AV Access", "Varicose Veins", "Laser Treatment",
  "Peripheral Artery Disease", "Diabetic Foot Care", "Non-Healing Ulcers",
  "Limb Salvage", "Endovascular Procedures",
];
const HERO_TRUST = [
  "Experienced Vascular Specialist",
  "Advanced Endovascular Procedures",
  "Minimally Invasive Treatments",
  "Patient-Centered Care",
];

function HeroPremium() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(160deg,#FFFFFF 0%,#FFF7F7 55%,#F8F6FD 100%)" }}
    >
      {/* Ambient decor */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl animate-float"
        style={{ background: "radial-gradient(closest-side, rgba(218,50,52,0.18), transparent)" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-24 h-[560px] w-[560px] rounded-full blur-3xl animate-float-slower"
        style={{ background: "radial-gradient(closest-side, rgba(69,54,96,0.22), transparent)" }} />
      <svg aria-hidden viewBox="0 0 1200 400" preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-1/3 h-[300px] w-full opacity-[0.08]">
        <path d="M0 200 C 200 80, 400 320, 600 200 S 1000 80, 1200 220" stroke="#DA3234" strokeWidth="2" fill="none" className="vein-line" />
        <path d="M0 260 C 220 160, 420 360, 620 260 S 1020 180, 1200 300" stroke="#453660" strokeWidth="1.5" fill="none" className="vein-line" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[45fr_55fr] lg:gap-16 lg:px-8">
        {/* LEFT — 45% */}
        <div>
          <Reveal variant="up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DA3234]/20 bg-white/80 px-4 py-1.5 text-xs font-bold backdrop-blur"
              style={{ color: "#DA3234" }}>
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "#DA3234" }} />
              Ignite Vascular Center · Vijayawada
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.2}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl xl:text-[3.4rem]"
              style={{ color: "#1E293B" }}>
              Expert Vascular Care.<br />
              <span style={{ color: "#DA3234" }}>Better Circulation.</span><br />
              <span style={{ color: "#453660" }}>Brighter Life.</span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.4}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed" style={{ color: "#1E293BCC" }}>
              Ignite Vascular Center is a leading vascular surgery and endovascular care center in
              Kasturibai Peta, Vijayawada, delivering advanced diagnosis and minimally invasive
              treatments for artery, vein and blood-vessel disorders.
            </p>
          </Reveal>

          {/* Doctor card */}
          <Reveal variant="up" delay={0.5}>
            <div className="mt-7 flex items-center gap-4 rounded-3xl border border-white/60 bg-white/85 p-4 backdrop-blur-xl"
              style={{ boxShadow: "0 16px 40px -18px rgba(69,54,96,0.35)" }}>
              <img
                src={doctorImg}
                alt="Dr. G. Narasimha Sai"
                width={120}
                height={120}
                loading="lazy"
                className="h-16 w-16 rounded-2xl object-cover"
              />
              <div className="min-w-0">
                <p className="font-display text-base font-extrabold" style={{ color: "#1E293B" }}>
                  Dr. G. Narasimha Sai
                </p>
                <p className="text-[11px] font-semibold leading-snug" style={{ color: "#1E293B99" }}>
                  MBBS, DNB (Gen Surgery), DrNB (Vascular Surgery — NIMS)
                </p>
                <p className="mt-1 inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: "rgba(69,54,96,0.1)", color: "#453660" }}>
                  Vascular &amp; Endovascular Surgeon
                </p>
              </div>
            </div>
          </Reveal>

          {/* Experience stats */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {HERO_STATS.map((s, i) => (
              <Reveal key={s.label} variant="up" delay={0.55 + i * 0.1}>
                <div className="group h-full rounded-2xl border border-white/60 bg-white/80 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1"
                  style={{ boxShadow: "0 10px 28px -14px rgba(30,41,59,0.18)" }}>
                  <span className="grid h-9 w-9 place-items-center rounded-xl text-white"
                    style={{ background: "linear-gradient(135deg,#DA3234,#453660)" }}>
                    <s.icon className="h-4 w-4" />
                  </span>
                  <p className="mt-3 font-display text-xl font-black" style={{ color: "#DA3234" }}>{s.num}</p>
                  <p className="text-[11px] font-semibold leading-tight" style={{ color: "#1E293B99" }}>{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Expertise chips */}
          <Reveal variant="up" delay={0.75}>
            <div className="mt-6 flex flex-wrap gap-2">
              {EXPERTISE_CHIPS.map((c) => (
                <span key={c}
                  className="rounded-full border px-3 py-1.5 text-[11px] font-bold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: "rgba(69,54,96,0.18)",
                    color: "#453660",
                    background: "white",
                  }}>
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal variant="zoom" delay={0.85}>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => openBookingModal()}
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "#DA3234",
                  boxShadow: "0 14px 32px -10px rgba(218,50,52,0.55)",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#B41F28")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#DA3234")}>
                <Calendar className="h-4 w-4" /> Book Appointment
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
              <Link to="/second-opinion"
                className="inline-flex items-center gap-2 rounded-full border-2 bg-white px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderColor: "#453660", color: "#453660" }}>
                Get Second Opinion <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          {/* Trust badges */}
          <Reveal variant="up" delay={0.95}>
            <ul className="mt-7 grid gap-2 sm:grid-cols-2">
              {HERO_TRUST.map((t) => (
                <li key={t} className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: "#1E293B" }}>
                  <span className="grid h-5 w-5 place-items-center rounded-full" style={{ background: "#DA3234" }}>
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* RIGHT — 55% doctor portrait + floating cards */}
        <Reveal variant="right" delay={0.2} className="relative">
          <div className="relative mx-auto max-w-[560px]">
            {/* Circular gradient behind */}
            <div aria-hidden className="absolute inset-0 -z-10 rounded-full blur-3xl animate-float-slower"
              style={{
                background: "radial-gradient(circle at 50% 40%, rgba(218,50,52,0.22), transparent 65%)",
              }} />
            {/* Vascular illustration */}
            <svg aria-hidden viewBox="0 0 400 500" className="pointer-events-none absolute -inset-6 -z-10 h-[110%] w-[110%] opacity-40">
              <defs>
                <linearGradient id="vasc" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#DA3234" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#453660" stopOpacity="0.35" />
                </linearGradient>
              </defs>
              <path d="M200 20 C 240 120, 140 180, 200 260 S 260 380, 210 480" stroke="url(#vasc)" strokeWidth="3" fill="none" className="vein-line" />
              <path d="M120 60 C 80 160, 180 200, 120 300 S 60 420, 140 490" stroke="url(#vasc)" strokeWidth="2" fill="none" className="vein-line" />
              <path d="M300 40 C 340 160, 260 220, 320 320 S 360 440, 280 500" stroke="url(#vasc)" strokeWidth="2" fill="none" className="vein-line" />
            </svg>

            {/* Portrait frame */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 p-2 backdrop-blur-xl"
              style={{ boxShadow: "0 30px 60px -20px rgba(69,54,96,0.4)" }}>
              <img
                src={doctorImg}
                alt="Dr. G. Narasimha Sai — Vascular & Endovascular Surgeon"
                width={1000}
                height={1250}
                className="w-full rounded-[1.6rem] object-cover"
                style={{ aspectRatio: "4 / 5" }}
              />
              <div aria-hidden className="pointer-events-none absolute inset-2 rounded-[1.6rem]"
                style={{ background: "linear-gradient(180deg, transparent 55%, rgba(69,54,96,0.35))" }} />
            </div>

            {/* Floating cards */}
            <div className="animate-float absolute -left-4 top-16 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 backdrop-blur-xl sm:-left-10"
              style={{ boxShadow: "0 16px 40px -18px rgba(218,50,52,0.35)" }}>
              <span className="grid h-10 w-10 place-items-center rounded-xl text-white"
                style={{ background: "#DA3234" }}>
                <Activity className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold leading-tight" style={{ color: "#1E293B" }}>
                400+<br />
                <span className="text-[10px] font-semibold" style={{ color: "#1E293B99" }}>AV Fistula Surgeries</span>
              </span>
            </div>

            <div className="animate-float-slower absolute -right-4 top-1/2 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 backdrop-blur-xl sm:-right-10"
              style={{ boxShadow: "0 16px 40px -18px rgba(69,54,96,0.35)" }}>
              <span className="grid h-10 w-10 place-items-center rounded-xl text-white"
                style={{ background: "#453660" }}>
                <Waves className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold leading-tight" style={{ color: "#1E293B" }}>
                100+<br />
                <span className="text-[10px] font-semibold" style={{ color: "#1E293B99" }}>Laser Varicose</span>
              </span>
            </div>

            <div className="animate-float absolute -bottom-4 left-8 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 backdrop-blur-xl [animation-delay:0.6s]"
              style={{ boxShadow: "0 16px 40px -18px rgba(30,41,59,0.3)" }}>
              <span className="grid h-10 w-10 place-items-center rounded-xl text-white"
                style={{ background: "linear-gradient(135deg,#DA3234,#453660)" }}>
                <Footprints className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold leading-tight" style={{ color: "#1E293B" }}>
                50+<br />
                <span className="text-[10px] font-semibold" style={{ color: "#1E293B99" }}>Limb Salvage Cases</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 3D Holographic Hero Section ---------------- */
const HERO3D_BADGES = [
  { icon: HeartPulse, label: "AI Diagnostics" },
  { icon: ShieldCheck, label: "Certified Safety" },
  { icon: Activity, label: "Live Monitoring" },
  { icon: Cpu, label: "Smart Imaging" },
];

function Hero3D() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Mouse + scroll parallax. Skipped when reduced motion is requested,
  // and disabled on coarse pointers (touch) where mouse tracking is noise.
  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const scene = sceneRef.current;
    const frame = frameRef.current;
    const c1 = card1Ref.current;
    const c2 = card2Ref.current;
    if (!scene || !frame) return;

    let mx = 0, my = 0, sy = 0;
    let raf = 0;

    const apply = () => {
      raf = 0;
      const rx = (my * -6).toFixed(2);
      const ry = (mx * 8).toFixed(2);
      const tz = (sy * -20).toFixed(2);
      frame.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(0, ${tz}px, 0)`;
      if (c1) c1.style.transform = `translate3d(${mx * -18}px, ${my * -14 + sy * -14}px, 0)`;
      if (c2) c2.style.transform = `translate3d(${mx * 22}px, ${my * 16 + sy * 18}px, 0)`;
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(apply); };

    const onMove = (e: PointerEvent) => {
      const r = scene.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = ((e.clientY - r.top) / r.height - 0.5) * 2;
      schedule();
    };
    const onLeave = () => { mx = 0; my = 0; schedule(); };
    const onScroll = () => {
      const r = scene.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      sy = Math.max(-1, Math.min(1, (vh / 2 - (r.top + r.height / 2)) / vh));
      schedule();
    };

    scene.addEventListener("pointermove", onMove);
    scene.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const floatClass = reduced ? "" : "animate-float";
  const floatSlowClass = reduced ? "" : "animate-float-slower";

  return (
    <section
      id="innovation"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #F5F9FC 45%, #E8F4FD 100%)",
      }}
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl ${reduced ? "" : "hologram-pulse"}`}
        style={{ background: "radial-gradient(closest-side, rgba(0,194,255,0.28), transparent)" }}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute -bottom-24 -right-24 h-[560px] w-[560px] rounded-full blur-3xl ${reduced ? "" : "hologram-pulse [animation-delay:1.2s]"}`}
        style={{ background: "radial-gradient(closest-side, rgba(15,108,189,0.22), transparent)" }}
      />
      {/* Soft floating particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className={`${floatClass} absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-[#00C2FF]/70`} />
        <span className={`${floatSlowClass} absolute left-[22%] top-[62%] h-1.5 w-1.5 rounded-full bg-[#0F6CBD]/60`} />
        <span className={`${floatClass} absolute right-[18%] top-[26%] h-2.5 w-2.5 rounded-full bg-[#10B981]/60 [animation-delay:0.8s]`} />
        <span className={`${floatSlowClass} absolute right-[10%] bottom-[18%] h-2 w-2 rounded-full bg-[#E53935]/60 [animation-delay:1.4s]`} />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 lg:px-8">
        {/* Left copy — 40% */}
        <Reveal variant="left">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold"
            style={{ background: "rgba(15,108,189,0.1)", color: "#0F6CBD" }}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${reduced ? "" : "pulse-dot"}`} style={{ background: "#00C2FF" }} />
            Next-Gen Vascular Intelligence
          </div>

          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl xl:text-[3.25rem]" style={{ color: "#153E75" }}>
            Expert Vascular Care.<br />
            <span style={{ color: "#0F6CBD" }}>Better Circulation.</span><br />
            <span style={{ color: "#E53935" }}>Brighter Life.</span>
          </h2>

          <div className="mt-5 h-1 w-20 rounded-full" style={{ background: "linear-gradient(90deg,#0F6CBD,#00C2FF)" }} />

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed" style={{ color: "#153E75CC" }}>
            Ignite Vascular Center is a leading vascular surgery and endovascular care center in
            Kasturibai Peta, Vijayawada. We diagnose and treat diseases of arteries, veins, and
            blood vessels with advanced technology and compassionate care.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {HERO3D_BADGES.map((b, i) => (
              <Reveal
                key={b.label}
                as="li"
                variant="up"
                delay={0.1 + i * 0.08}
                className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 backdrop-blur-md shadow-soft"
              >
                <span
                  className="grid h-10 w-10 place-items-center rounded-xl text-white shadow-soft"
                  style={{ background: "linear-gradient(135deg,#0F6CBD,#00C2FF)" }}
                >
                  <b.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold" style={{ color: "#153E75" }}>{b.label}</span>
              </Reveal>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-transform duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg,#0F6CBD,#153E75)",
                boxShadow: "0 12px 32px -8px rgba(15,108,189,0.55)",
              }}
            >
              <Calendar className="h-4 w-4" /> Book Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 bg-white/80 px-7 py-3.5 text-sm font-bold backdrop-blur transition-colors duration-300 hover:bg-white"
              style={{ color: "#0F6CBD", borderColor: "rgba(15,108,189,0.25)" }}
            >
              Explore Treatments <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        {/* Right illustration — 60% */}
        <Reveal variant="right" className="relative">
          <div
            ref={sceneRef}
            className="relative mx-auto max-w-2xl"
            style={{ perspective: "1200px" } as CSSProperties}
          >
            {/* Glow halo */}
            <div
              aria-hidden
              className={`absolute -inset-6 rounded-[2.75rem] blur-2xl ${reduced ? "" : "hologram-pulse"}`}
              style={{ background: "linear-gradient(135deg, rgba(0,194,255,0.35), rgba(15,108,189,0.25))" }}
            />
            {/* Glass frame with hologram scan overlay */}
            <div
              ref={frameRef}
              className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 p-2 backdrop-blur-xl will-change-transform"
              style={{
                boxShadow: "0 30px 60px -20px rgba(21,62,117,0.35)",
                transformStyle: "preserve-3d",
                transition: reduced ? undefined : "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <img
                src={hero3dImg}
                alt="3D holographic vascular illustration with surgeon and AI diagnostic dashboard"
                width={1536}
                height={1280}
                loading="lazy"
                className="w-full rounded-[1.6rem] object-cover"
              />
              {!reduced && (
                <>
                  <div aria-hidden className="pointer-events-none absolute inset-2 rounded-[1.6rem] hologram-scan" />
                  <div aria-hidden className="pointer-events-none absolute inset-2 rounded-[1.6rem] hologram-grid opacity-40" />
                </>
              )}
            </div>

            {/* Floating glass stat cards */}
            <div
              ref={card1Ref}
              className={`${floatClass} absolute -left-4 top-10 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 backdrop-blur-xl shadow-lift sm:-left-8 will-change-transform`}
            >
              <span
                className={`relative grid h-10 w-10 place-items-center rounded-xl text-white ${reduced ? "" : "pulse-ring"}`}
                style={{ background: "linear-gradient(135deg,#E53935,#B71C1C)" }}
              >
                <HeartPulse className={`h-5 w-5 ${reduced ? "" : "heart-beat"}`} />
              </span>
              <span className="text-xs font-bold leading-tight" style={{ color: "#153E75" }}>
                72 BPM<br />
                <span className="text-[10px] font-semibold" style={{ color: "#0F6CBD" }}>Live Vitals</span>
              </span>
            </div>

            <div
              ref={card2Ref}
              className={`${floatSlowClass} absolute -right-4 bottom-16 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 backdrop-blur-xl shadow-lift sm:-right-6 [animation-delay:0.6s] will-change-transform`}
            >
              <span
                className="grid h-10 w-10 place-items-center rounded-xl text-white"
                style={{ background: "linear-gradient(135deg,#10B981,#059669)" }}
              >
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold leading-tight" style={{ color: "#153E75" }}>
                Analysis Complete<br />
                <span className="text-[10px] font-semibold" style={{ color: "#10B981" }}>All Clear</span>
              </span>
            </div>
          </div>
        </Reveal>
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
      <HeroPremium />
      <Hero3D />
      <Doctor />
      <Services />
      <Testimonials />
      <Trust />
      <GoogleReviews />
      <CTASection />
      <Footer />


      {/* floating link to original */}
      <Link to="/" className="fixed bottom-6 left-6 z-40 rounded-full bg-white px-4 py-2 text-xs font-bold text-secondary shadow-lift transition-transform hover:scale-105">
        ← Home v1
      </Link>
    </main>
  );
}

