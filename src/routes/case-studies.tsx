import { createFileRoute, Link } from "@tanstack/react-router";
import { openBookingModal } from "@/components/booking/BookingModal";
import { useEffect, useMemo, useState } from "react";
import {
  Activity, Users, Stethoscope, Award, Clock, CalendarDays,
  ShieldCheck, ArrowRight, Filter, Calendar, LayoutGrid,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { SubBanner } from "@/components/home/SubBanner";
import caseBanner from "@/assets/case-studies-banner.webp.asset.json";
import { Footer } from "@/components/home/Footer";
import { FloatingEmergency } from "@/components/home/FloatingEmergency";
import { resolveAssetUrl } from "@/lib/asset-url";

import heroSlide1 from "@/assets/case-hero-1.jpg.asset.json";
import heroSlide2 from "@/assets/case-hero-2.jpg.asset.json";
import imgSurgery from "@/assets/gallery/procedure-surgery.jpg";
import imgAngio from "@/assets/gallery/procedure-angio.jpg";
import imgCathlab from "@/assets/gallery/facility-cathlab.jpg";
import imgPatient from "@/assets/gallery/patient-care.jpg";
import imgConsult from "@/assets/gallery/patient-consult.jpg";
import imgRoom from "@/assets/gallery/facility-room.jpg";
import imgSurgeon from "@/assets/gallery/team-surgeon.jpg";

const caseBannerUrl = resolveAssetUrl(caseBanner.url);
const heroSlide1Url = resolveAssetUrl(heroSlide1.url);
const heroSlide2Url = resolveAssetUrl(heroSlide2.url);

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real Patients, Real Results | Ignite Vascular Center" },
      { name: "description", content: "Explore real vascular surgery case studies from Ignite Vascular Center, Vijayawada — varicose veins, PAD, DVT, aneurysm repair, diabetic foot care and more." },
      { property: "og:title", content: "Case Studies — Ignite Vascular Center" },
      { property: "og:description", content: "Real patients. Real results. See how advanced vascular care transformed lives." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesPage,
});

type Category =
  | "All Cases"
  | "Varicose Veins"
  | "Peripheral Artery Disease (PAD)"
  | "Deep Vein Thrombosis (DVT)"
  | "Endovascular Procedures"
  | "Diabetic Foot Care"
  | "AV Fistula Surgeries";

type CaseItem = {
  category: Exclude<Category, "All Cases">;
  title: string;
  description: string;
  image: string;
  treatmentTime: string;
  recovery: string;
  outcome: string;
  badgeColor: "red" | "indigo";
};

const CASES: CaseItem[] = [
  {
    category: "Varicose Veins",
    title: "Endovenous Laser Treatment for Severe Varicose Veins",
    description: "A 45-year-old female patient suffering from painful varicose veins and swelling in both legs. Underwent Endovenous Laser Treatment (EVLT) with excellent results.",
    image: imgSurgery,
    treatmentTime: "45 mins",
    recovery: "2 days",
    outcome: "Excellent",
    badgeColor: "indigo",
  },
  {
    category: "Peripheral Artery Disease (PAD)",
    title: "Angioplasty for Blocked Leg Artery",
    description: "A 62-year-old male with walking pain due to blocked artery in the leg. Treated successfully with peripheral angioplasty and stent placement.",
    image: imgAngio,
    treatmentTime: "60 mins",
    recovery: "3 days",
    outcome: "Great",
    badgeColor: "red",
  },
  {
    category: "Deep Vein Thrombosis (DVT)",
    title: "DVT Management & Recovery",
    description: "A 38-year-old male diagnosed with DVT in the left leg. Treated with advanced anticoagulation therapy and compression management.",
    image: imgCathlab,
    treatmentTime: "—",
    recovery: "7 days",
    outcome: "Stable",
    badgeColor: "indigo",
  },
  {
    category: "Endovascular Procedures",
    title: "Aneurysm Repair with Stent Graft",
    description: "A 58-year-old male with abdominal aortic aneurysm treated with minimally invasive endovascular stent graft placement.",
    image: imgRoom,
    treatmentTime: "120 mins",
    recovery: "5 days",
    outcome: "Excellent",
    badgeColor: "red",
  },
  {
    category: "Diabetic Foot Care",
    title: "Diabetic Foot Ulcer Treatment",
    description: "A 60-year-old diabetic patient with non-healing ulcer. Advanced wound care and revascularization helped in complete healing.",
    image: imgPatient,
    treatmentTime: "—",
    recovery: "14 days",
    outcome: "Healed",
    badgeColor: "indigo",
  },
  {
    category: "Varicose Veins",
    title: "Radiofrequency Ablation for Varicose Veins",
    description: "A 50-year-old male patient treated with Radiofrequency Ablation (RFA) for varicose veins with minimal downtime.",
    image: imgConsult,
    treatmentTime: "35 mins",
    recovery: "2 days",
    outcome: "Excellent",
    badgeColor: "red",
  },
  {
    category: "AV Fistula Surgeries",
    title: "Brachiocephalic AV Fistula Creation for Dialysis Access",
    description: "A 55-year-old patient with end-stage renal disease required durable hemodialysis access. A radiocephalic AV fistula was created using microsurgical technique with excellent thrill and flow.",
    image: imgSurgeon,
    treatmentTime: "90 mins",
    recovery: "14 days",
    outcome: "Functional",
    badgeColor: "red",
  },
];

const CATEGORIES: { label: Category; short: string; icon: React.ElementType }[] = [
  { label: "All Cases", short: "All", icon: LayoutGrid },
  { label: "Varicose Veins", short: "Varicose Veins", icon: Activity },
  { label: "Peripheral Artery Disease (PAD)", short: "PAD", icon: Stethoscope },
  { label: "Deep Vein Thrombosis (DVT)", short: "DVT", icon: Activity },
  { label: "Endovascular Procedures", short: "Endovascular", icon: Users },
  { label: "Diabetic Foot Care", short: "Diabetic Foot", icon: ShieldCheck },
  { label: "AV Fistula Surgeries", short: "AV Fistula", icon: Activity },
];

const STATS = [
  { icon: Award, value: "2000+", label: "Successful Procedures" },
  { icon: Users, value: "1500+", label: "Happy Patients" },
  { icon: Stethoscope, value: "25+", label: "Expert Treatments" },
  { icon: Activity, value: "10+", label: "Years of Experience" },
];

function CaseStudiesPage() {
  const [active, setActive] = useState<Category>("All Cases");

  const filtered = useMemo(
    () => (active === "All Cases" ? CASES : CASES.filter((c) => c.category === active)),
    [active],
  );

  return (
    <main className="min-h-screen bg-background [overflow-x:clip]">
      <Navbar />
      <SubBanner title="Case Studies" image={caseBannerUrl} crumb="Case Studies" />



      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f5f6f8] pt-24 lg:pt-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-14 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:pb-16 lg:pl-8 lg:pr-0">
          <div className="lg:py-10">
            <Reveal variant="left">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-primary">
                Case Studies
              </span>
            </Reveal>
            <Reveal variant="up" delay={0.06}>
              <h1 className="mt-4 font-display text-[40px] font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-[56px]">
                Real Patients.
                <br />
                <span className="text-primary">Real Results.</span>
              </h1>
            </Reveal>
            <Reveal variant="left" delay={0.14}>
              <div className="mt-3 h-[3px] w-20 rounded-full bg-primary/80" />
            </Reveal>
            <Reveal variant="up" delay={0.2}>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Explore our case studies to see how advanced vascular care and personalized treatment have transformed lives.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <Reveal key={s.label} variant="up" delay={0.28 + i * 0.06}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-secondary">
                      <s.icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <div className="font-display text-lg font-extrabold leading-none text-secondary">{s.value}</div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="right" delay={0.1}>
            <div className="relative -mr-5 lg:mr-0">
              <HeroCarousel />
            </div>
          </Reveal>

        </div>
      </section>



      {/* Category filter bar */}
      <section className="bg-white border-y border-border/60">
        <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8">
          <Reveal variant="up">
            <div className="flex items-center gap-3">
              {/* Scrollable pills — edge-faded, snap-aligned */}
              <div className="relative min-w-0 flex-1">
                <div
                  className="flex items-center gap-2 overflow-x-auto flex-nowrap snap-x snap-mandatory scroll-px-1 pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  role="tablist"
                  aria-label="Case study categories"
                >
                  {CATEGORIES.map((c) => {
                    const isActive = c.label === active;
                    return (
                      <button
                        key={c.label}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActive(c.label)}
                        className={`snap-start inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                          isActive
                            ? "bg-gradient-brand text-primary-foreground shadow-glow-red"
                            : "bg-accent/60 text-secondary/80 hover:bg-accent"
                        }`}
                      >
                        <c.icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                        <span className="sm:hidden">{c.short}</span>
                        <span className="hidden sm:inline">{c.label}</span>
                      </button>
                    );
                  })}
                </div>
                {/* Edge fades hint scrollability */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent" />
              </div>

              {/* Filter button — always visible, never scrolls */}
              <button className="shrink-0 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border/70 bg-white px-4 py-2 text-[13px] font-semibold text-secondary/80 hover:bg-accent">
                <Filter className="h-4 w-4" strokeWidth={1.75} />
                <span className="hidden sm:inline">Filter</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>



      {/* Case grid */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[7px] bg-white shadow-soft ring-1 ring-border/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Reveal variant="zoom" delay={0.06 + i * 0.1}>
                      <img
                        src={c.image}
                        alt={c.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Reveal>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <Reveal variant="left" delay={0.12 + i * 0.1}>
                      <span
                        className={`inline-flex w-fit items-center rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground ${
                          c.badgeColor === "red" ? "bg-primary" : "bg-secondary"
                        }`}
                      >
                        {c.category}
                      </span>
                    </Reveal>

                    <Reveal variant="up" delay={0.17 + i * 0.1}>
                      <h3 className="mt-3 font-display text-[17px] font-extrabold leading-snug text-secondary">
                        {c.title}
                      </h3>
                    </Reveal>

                    <Reveal variant="up" delay={0.22 + i * 0.1}>
                      <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted-foreground">
                        {c.description}
                      </p>
                    </Reveal>

                    <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border/60 pt-4">
                      {[
                        { icon: Clock, label: "Treatment Time", value: c.treatmentTime },
                        { icon: CalendarDays, label: "Recovery Time", value: c.recovery },
                        { icon: Award, label: "Outcome", value: c.outcome },
                      ].map((m, j) => (
                        <Reveal key={m.label} variant="up" delay={0.28 + i * 0.1 + j * 0.05}>
                          <MetaCell icon={m.icon} label={m.label} value={m.value} />
                        </Reveal>
                      ))}
                    </div>

                    <Reveal variant="left" delay={0.44 + i * 0.1}>
                      <button className="mt-4 inline-flex w-fit items-center gap-1.5 text-[13px] font-bold text-primary transition-transform hover:translate-x-0.5">
                        Read More <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </Reveal>
                  </div>

                </article>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal variant="zoom">
            <div className="relative overflow-hidden rounded-[7px] bg-gradient-cta p-6 sm:p-8 lg:p-10">
              <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-5">
                  <Reveal variant="left" delay={0.1}>
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-secondary shadow-lift">
                      <Calendar className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                  </Reveal>
                  <div>
                    <Reveal variant="up" delay={0.16}>
                      <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                        Need Expert Care for Vascular Conditions?
                      </h3>
                    </Reveal>
                    <Reveal variant="up" delay={0.22}>
                      <p className="mt-1 text-sm text-white/85">
                        Our specialists are here to help you every step of the way.
                      </p>
                    </Reveal>
                  </div>
                </div>
                <Reveal variant="right" delay={0.28}>
                  <button
                    type="button"
                    onClick={() => openBookingModal()}
                    className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-secondary transition-transform hover:scale-105"
                  >
                    Book an Appointment
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-white transition-transform group-hover:translate-x-0.5">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </Reveal>


              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-14 right-24 h-40 w-40 rounded-full bg-primary/40 blur-3xl" />
            </div>
          </Reveal>
        </div>
      </section>


      <Footer />
      <FloatingEmergency />
    </main>
  );
}

function MetaCell({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className="bg-gradient-brand mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full text-white ring-1 ring-white/60 shadow-[0_6px_16px_-4px_rgba(217,44,45,0.45)]"
        aria-hidden="true"
      >
        <Icon className="h-[18px] w-[18px]" strokeWidth={2.25} />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 text-[13px] font-bold text-secondary">{value}</div>
      </div>
    </div>
  );
}

function HeroCarousel() {
  const slides = [
    { src: heroSlide1Url, alt: "Healthcare professional examining varicose veins on an elderly patient's legs" },
    { src: heroSlide2Url, alt: "Close-up of leg with varicose vein disease" },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative ml-auto w-full max-w-[560px] lg:max-w-none">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] shadow-lift ring-1 ring-border/50">
        {slides.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-transparent" />
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Show slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === idx ? "w-8 bg-gradient-brand" : "w-2 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}



