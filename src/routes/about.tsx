import { createFileRoute, Link } from "@tanstack/react-router";
import { openBookingModal } from "@/components/booking/BookingModal";
import { useEffect, useState } from "react";
import { Award, BadgeCheck, ScrollText, GraduationCap as GradCap, Trophy, ShieldCheck as ShieldCert } from "lucide-react";
import {
  Phone, Target, Eye, UserCheck, Sparkles, Scissors, HeartHandshake,
  ShieldCheck, Siren, CheckCircle2, ArrowRight, Users, ShieldCheck as ShieldIcon,
  Smile, Activity, Clock, Microscope, Lightbulb, BookOpenCheck, MessagesSquare,
  Stethoscope, ChevronRight,
} from "lucide-react";
import aboutBanner from "@/assets/hero-surgeon.jpg";
import { Reveal, useCountUp } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { resolveAssetUrl } from "@/lib/asset-url";
import receptionAsset from "@/assets/about-reception-new.webp.asset.json";
import doctorImg from "@/assets/home2-doctor.jpg";
import vascularImg from "@/assets/about-vascular.jpg";
import surgeryImg from "@/assets/about-surgery.jpg";

const receptionImg = resolveAssetUrl(receptionAsset.url);

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ignite Vascular Center, Vijayawada" },
      { name: "description", content: "Learn about Ignite Vascular Center — a specialized vascular surgery & endovascular care center in Kasturibai Peta, Vijayawada. Advanced vascular care with compassionate hearts." },
      { property: "og:title", content: "About Ignite Vascular Center — Vijayawada" },
      { property: "og:description", content: "Advanced vascular surgery and endovascular care center dedicated to excellence, innovation and compassionate patient care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6f8] pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-8 lg:pb-24">
        <Reveal className="reveal" variant="left">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.28em] text-primary">About Us</span>
          <h1 className="mt-4 font-display text-2xl font-black leading-[1.1] tracking-tight text-secondary sm:text-3xl lg:text-4xl">
            Advanced Vascular Care.<br />
            <span className="text-primary">Compassionate</span> Hearts.
          </h1>
          <span className="mt-5 block h-[3px] w-16 rounded-full bg-secondary/70" />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Ignite Vascular Center is a specialized vascular surgery and endovascular
            care center in Kasturibai Peta, Vijayawada. We diagnose and treat diseases
            affecting arteries, veins, and blood vessels using advanced technology and
            minimally invasive techniques.
          </p>
          <div className="mt-8">
            <button type="button" onClick={() => openBookingModal()} className="group inline-flex items-center gap-3 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-[1.03]">
              Book an Appointment
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>
        </Reveal>

        <Reveal className="reveal" variant="right" delay={0.14}>
          <div className="relative overflow-hidden rounded-2xl shadow-lift">
            <img src={receptionImg} alt="Ignite Vascular Center reception" width={1400} height={900} loading="lazy" decoding="async" className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[460px]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MissionVision() {
  const items = [
    {
      icon: Target,
      label: "Our Mission",
      accent: "red" as const,
      headLead: "To provide world-class",
      headAccent: "vascular care",
      body: "through advanced medical expertise, innovative technology, and compassionate treatment that improves patients' quality of life.",
    },
    {
      icon: Eye,
      label: "Our Vision",
      accent: "purple" as const,
      headLead: "To be the most",
      headAccent: "trusted vascular care center",
      body: "in Andhra Pradesh, recognized for excellence, innovation, and patient-centered care.",
    },
  ];

  return (
    <section className="relative overflow-hidden pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pt-28" style={{ backgroundColor: "#f0f3f6" }}>



      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <Reveal className="reveal" variant="up">
          <div className="relative rounded-[24px] bg-white/90 p-5 shadow-[0_30px_80px_-40px_rgba(65,48,92,0.35)] ring-1 ring-secondary/10 backdrop-blur-sm sm:rounded-[28px] sm:p-8 lg:p-12">

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-secondary/15">
              {items.map((it, i) => {
                const red = it.accent === "red";
                const labelColor = red ? "text-primary" : "text-secondary";
                const accentColor = red ? "text-primary" : "text-secondary";
                const dotColor = red ? "bg-primary" : "bg-secondary";
                const lineColor = red ? "bg-primary/70" : "bg-secondary/70";
                const iconTint = red ? "text-primary" : "text-secondary";
                const ringTint = red
                  ? "bg-[radial-gradient(circle_at_center,rgba(233,60,60,0.14),transparent_70%)]"
                  : "bg-[radial-gradient(circle_at_center,rgba(90,48,150,0.14),transparent_70%)]";
                const isFirst = i === 0;
                const headingId = `mv-${it.label.replace(/\s+/g, "-").toLowerCase()}`;
                return (
                  <Reveal
                    key={it.label}
                    className="reveal group"
                    variant={isFirst ? "left" : "right"}
                    delay={0.15 + i * 0.18}
                  >
                    <article
                      tabIndex={0}
                      aria-labelledby={headingId}
                      className={`flex flex-col items-start gap-5 rounded-2xl outline-none transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:flex-row sm:gap-6 ${isFirst ? "sm:pr-8 lg:pr-12 focus-visible:ring-primary" : "sm:pl-8 lg:pl-12 focus-visible:ring-secondary"}`}
                    >
                      <div className="relative shrink-0">
                        <span className={`absolute -inset-3 rounded-full ${ringTint} transition-opacity duration-500 group-hover:opacity-80 group-focus-within:opacity-80`} aria-hidden />
                        <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white shadow-[0_18px_40px_-18px_rgba(65,48,92,0.4)] ring-1 ring-secondary/15 transition-transform duration-500 group-hover:-translate-y-1 group-focus-within:-translate-y-1 sm:h-24 sm:w-24">
                          <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-white to-[#faf4f7] ring-1 ring-secondary/10 sm:h-16 sm:w-16">
                            <it.icon strokeWidth={2.25} aria-hidden className={`h-7 w-7 ${iconTint} sm:h-8 sm:w-8`} />
                          </span>
                        </span>
                      </div>

                      <div className="relative w-full flex-1 pl-5">
                        <span
                          aria-hidden
                          className={`absolute left-0 top-1 h-2.5 w-2.5 rounded-full ${dotColor} shadow-[0_0_0_4px_rgba(255,255,255,1),0_0_0_5px_rgba(65,48,92,0.08)] motion-safe:dot-travel`}
                          style={{ ["--dot-travel" as any]: "78px", animationDelay: isFirst ? "0s" : "1.6s" }}
                        />
                        <span className={`absolute left-[5px] top-3 h-[calc(100%-12px)] w-px ${lineColor}`} aria-hidden />

                        <span className={`text-[11px] font-extrabold uppercase tracking-[0.28em] ${labelColor}`}>{it.label}</span>
                        <span className={`mt-2 block h-[3px] w-8 rounded-full ${dotColor}`} aria-hidden />

                        <h3 id={headingId} className="mt-4 font-display text-xl font-black leading-[1.2] tracking-tight text-secondary sm:mt-5 sm:text-2xl lg:text-[28px] lg:leading-[1.15]">
                          {it.headLead} <span className={accentColor}>{it.headAccent}</span>
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-4">{it.body}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChoose() {
  const cards = [
    { icon: Stethoscope, title: "Experienced Specialists", body: "Highly skilled vascular surgeons with extensive experience.", accent: false },
    { icon: Sparkles, title: "Advanced Technology", body: "State-of-the-art equipment for accurate diagnosis and treatment.", accent: false },
    { icon: Scissors, title: "Minimally Invasive Procedures", body: "Less pain, faster recovery and minimal risk.", accent: false },
    { icon: HeartHandshake, title: "Patient-Centered Approach", body: "Personalized care with compassion and respect.", accent: false },
    { icon: ShieldCheck, title: "Comprehensive Care", body: "From diagnosis to recovery, we are with you at every step.", accent: false },
    { icon: Siren, title: "Emergency Support", body: "Prompt care for urgent vascular conditions.", accent: true },
  ];
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="reveal text-center">
          <span className="text-xs font-bold uppercase tracking-[0.32em] text-primary">Why Choose Us</span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-secondary sm:text-4xl">
            Excellence in Vascular Care
          </h2>
          <span className="mx-auto mt-4 block h-0.5 w-14 rounded-full bg-primary" />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} className="reveal" delay={i * 0.06}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-border/70 bg-white px-4 py-8 text-center shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                <c.icon
                  strokeWidth={1.6}
                  className={`h-11 w-11 ${c.accent ? "text-primary" : "text-secondary"} transition-transform duration-500 group-hover:-translate-y-0.5`}
                />
                <h3 className="mt-5 font-display text-sm font-bold leading-snug text-secondary">{c.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  const bullets = ["Expert in Endovascular Procedures", "Varicose Veins Specialist", "Peripheral Arterial Disease Expert", "Diabetic Foot Care Specialist", "Deep Vein Thrombosis Expert", "Vascular Ultrasound Expert"];
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[minmax(0,260px)_1fr_minmax(0,280px)] lg:gap-12 lg:px-8">
        <Reveal className="reveal" variant="left">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[radial-gradient(circle,theme(colors.secondary/20)_1px,transparent_1.5px)] bg-[length:10px_10px]" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-lift">
              <img src={doctorImg} alt="Vascular specialist" width={520} height={640} loading="lazy" className="h-[360px] w-full object-cover" />
            </div>
          </div>
        </Reveal>

        <Reveal className="reveal" variant="up" delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Our Doctor</span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-secondary sm:text-4xl">
            Meet Our Vascular Specialist
          </h2>
          <h3 className="mt-6 font-display text-xl font-extrabold text-primary">G. Narasimha Sai</h3>
          <div className="mt-1 space-y-1 text-sm font-semibold text-secondary">
            <p>MBBS (Govt Siddhartha Medical College, Vijayawada 2010)</p>
            <p>DNB (Gen Surgery, NBEMS New Delhi 2018)</p>
            <p>DrNB (Vascular Surgery) NIMS, 2025</p>
            <p>Lifetime Member in VSI since 2025</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Vascular &amp; Endovascular Surgeon</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            With years of experience in managing complex vascular conditions, Dr. Narasimha Sai
            specializes in minimally invasive and endovascular procedures. He is dedicated
            to providing the highest quality care with a patient-first approach.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {bullets.map((b, i) => (
              <Reveal key={b} className="reveal" variant="up" delay={0.22 + i * 0.06}>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-secondary/85">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Link to="/contact" className="mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-[1.03]">
            View Doctor Profile
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </Reveal>

        <Reveal className="reveal" variant="right" delay={0.18}>
          <CertificationsCarousel />
        </Reveal>
      </div>
    </section>
  );
}

const CERTIFICATIONS = [
  { icon: Award, title: "Board Certified", subtitle: "Vascular & Endovascular Surgery", issuer: "National Board of Examinations", year: "2018", accent: "from-primary to-[oklch(0.55_0.18_10)]" },
  { icon: GradCap, title: "DrNB Vascular Surgery", subtitle: "Super-Specialty Fellowship", issuer: "NIMS, Hyderabad", year: "2017", accent: "from-secondary to-[oklch(0.35_0.14_340)]" },
  { icon: ScrollText, title: "DNB General Surgery", subtitle: "Diplomate of National Board", issuer: "NBE, New Delhi", year: "2014", accent: "from-primary to-secondary" },
  { icon: BadgeCheck, title: "Fellowship — Endovascular", subtitle: "Advanced Peripheral Interventions", issuer: "Vascular Society of India", year: "2019", accent: "from-[oklch(0.55_0.18_10)] to-secondary" },
  { icon: Trophy, title: "Excellence in Patient Care", subtitle: "Clinical Outcomes Award", issuer: "AP Medical Association", year: "2022", accent: "from-secondary to-primary" },
  { icon: ShieldCert, title: "Member — ISVS", subtitle: "Indian Society for Vascular Surgery", issuer: "Lifetime Membership", year: "2018", accent: "from-primary to-[oklch(0.35_0.14_340)]" },
];

function CertificationsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % CERTIFICATIONS.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative mx-auto w-full max-w-[320px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Doctor certifications carousel"
    >
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-2xl" aria-hidden />
      <div className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#41305c] shadow-[0_20px_60px_-15px_rgba(65,48,92,0.65)]">
        {/* ambient glows */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[oklch(0.55_0.18_10)]/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" aria-hidden />

        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary-foreground/90">Credentials</span>
          <span className="text-[10px] font-semibold text-white/60">
            {index + 1} / {CERTIFICATIONS.length}
          </span>
        </div>

        {CERTIFICATIONS.map((c, i) => {
          const active = i === index;
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              aria-hidden={!active}
              className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <div className={`relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br ${c.accent} shadow-glow-red ring-1 ring-white/20`}>
                <div className="absolute inset-1.5 rounded-full bg-[#41305c]" />
                <Icon className="relative h-10 w-10 text-white" strokeWidth={1.6} />
              </div>
              <h4 className="mt-5 font-display text-base font-extrabold text-white">{c.title}</h4>
              <p className="mt-1 text-xs font-semibold text-primary-foreground/90">{c.subtitle}</p>
              <p className="mt-3 text-xs text-white/60">{c.issuer}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
                <BadgeCheck className="h-3 w-3 text-primary-foreground" /> Verified · {c.year}
              </span>
            </div>
          );
        })}

        <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-1.5">
          {CERTIFICATIONS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show certification ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

function Stat({ end, suffix, label, icon: Icon }: { end: number; suffix: string; label: string; icon: React.ComponentType<{ className?: string }> }) {
  const { ref, value } = useCountUp(end, 1600);
  return (
    <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className="text-center text-primary-foreground">
      <Icon className="mx-auto h-7 w-7 opacity-90" />
      <div className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
        {value}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground/85">{label}</div>
    </div>
  );
}

function StatsBar() {
  const stats = [
    { icon: Users, end: 10, suffix: "+", label: "Years of Experience" },
    { icon: ShieldIcon, end: 2000, suffix: "+", label: "Successful Procedures" },
    { icon: Smile, end: 1500, suffix: "+", label: "Happy Patients" },
    { icon: Activity, end: 100, suffix: "+", label: "Advanced Treatments" },
    { icon: Clock, end: 0, suffix: "", label: "Emergency Support", text: "24/7" },
  ];
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="reveal rounded-[5px] bg-gradient-to-r from-primary via-[oklch(0.55_0.18_10)] to-secondary p-6 shadow-lift sm:p-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/15">
            {stats.map((s, i) => (
              <Reveal key={s.label} className="reveal" variant="zoom" delay={i * 0.08}>
                {s.text ? (
                  <div className="text-center text-primary-foreground">
                    <s.icon className="mx-auto h-7 w-7 opacity-90" />
                    <div className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">{s.text}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground/85">{s.label}</div>
                  </div>
                ) : (
                  <Stat icon={s.icon} end={s.end} suffix={s.suffix} label={s.label} />
                )}
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Commitment() {
  const items = [
    { icon: Microscope, title: "Evidence-Based Treatments" },
    { icon: Lightbulb, title: "Continuous Innovation" },
    { icon: BookOpenCheck, title: "Safe & Ethical Practice" },
    { icon: MessagesSquare, title: "Transparent Communication" },
  ];
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal className="reveal" variant="left">
          <div className="overflow-hidden rounded-[7px] shadow-lift">
            <img src={surgeryImg} alt="Vascular surgery team" width={1200} height={900} loading="lazy" className="h-[340px] w-full object-cover" />
          </div>
        </Reveal>
        <Reveal className="reveal" variant="right" delay={0.12}>
          <h2 className="font-display text-3xl font-black tracking-tight text-primary sm:text-4xl">
            Our Commitment to You
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            At Ignite Vascular Center, we are committed to delivering exceptional
            vascular care with integrity, empathy, and excellence. Your health and
            well-being are at the heart of everything we do.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal key={it.title} className="reveal" variant="up" delay={0.18 + i * 0.08}>
                <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-secondary">{it.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="reveal relative overflow-hidden rounded-[5px] bg-gradient-to-r from-secondary via-[oklch(0.35_0.14_340)] to-primary p-8 shadow-lift sm:p-10">
          <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto]">
            <Reveal className="reveal" variant="left">
              <div className="text-primary-foreground">
                <h3 className="font-display text-2xl font-black sm:text-3xl">Take the First Step Towards Better Circulation</h3>
                <p className="mt-2 text-sm text-primary-foreground/85">Our team is here to help you live a healthier, pain-free life.</p>
              </div>
            </Reveal>
            <Reveal className="reveal" variant="zoom" delay={0.14}>
              <button type="button" onClick={() => openBookingModal()} className="inline-flex items-center gap-3 self-start rounded-full bg-white px-6 py-3 text-sm font-bold text-primary shadow-lift transition-transform duration-300 hover:scale-[1.03] sm:self-auto">
                Book Appointment
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </Reveal>
          </div>
          <div className="pointer-events-none absolute -right-6 -top-8 h-56 w-56 rounded-full bg-white/10 blur-2xl" aria-hidden />
        </Reveal>
      </div>
    </section>
  );
}


function SubBanner() {
  return (
    <section className="relative h-[300px] overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={aboutBanner}
          alt="About Ignite Vascular Center"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/75 to-secondary/50" />
      </div>
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 lg:px-8">
        <Reveal variant="up">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            About Us
          </h1>
        </Reveal>
        <Reveal variant="up" delay={0.08}>
          <nav aria-label="Breadcrumb" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Link to="/" className="font-semibold text-white/80 transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4 text-white/60" />
            <span className="font-semibold text-primary-foreground">About Us</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}

function AboutPage() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <div className="bg-white [overflow-x:clip]">
      <Navbar />
      <SubBanner />
      <Hero />
      <div className="h-10 lg:h-16 bg-white" aria-hidden />
      <WhyChoose />
      <MissionVision />
      <Doctor />
      <StatsBar />
      <Commitment />
      <CTA />
      <Footer />
    </div>
  );
}
