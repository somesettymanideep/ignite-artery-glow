import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Activity, Users, Stethoscope, Award, Clock, CalendarDays,
  ShieldCheck, ArrowRight, Filter, Calendar, LayoutGrid,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { FloatingEmergency } from "@/components/home/FloatingEmergency";

import heroVessels from "@/assets/case-hero-vessels.jpg";
import imgSurgery from "@/assets/gallery/procedure-surgery.jpg";
import imgAngio from "@/assets/gallery/procedure-angio.jpg";
import imgCathlab from "@/assets/gallery/facility-cathlab.jpg";
import imgPatient from "@/assets/gallery/patient-care.jpg";
import imgConsult from "@/assets/gallery/patient-consult.jpg";
import imgRoom from "@/assets/gallery/facility-room.jpg";

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
  | "Diabetic Foot Care";

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
];

const CATEGORIES: { label: Category; icon: React.ElementType }[] = [
  { label: "All Cases", icon: LayoutGrid },
  { label: "Varicose Veins", icon: Activity },
  { label: "Peripheral Artery Disease (PAD)", icon: Stethoscope },
  { label: "Deep Vein Thrombosis (DVT)", icon: Activity },
  { label: "Endovascular Procedures", icon: Users },
  { label: "Diabetic Foot Care", icon: ShieldCheck },
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f5f6f8] pt-24 lg:pt-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-14 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:pb-16 lg:pl-8 lg:pr-0">
          <div className="lg:py-10">
            <Reveal variant="up">
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
            <Reveal variant="up" delay={0.12}>
              <div className="mt-3 h-[3px] w-20 rounded-full bg-primary/80" />
            </Reveal>
            <Reveal variant="up" delay={0.18}>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Explore our case studies to see how advanced vascular care and personalized treatment have transformed lives.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.24}>
              <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
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
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="zoom" delay={0.1}>
            <div className="relative -mr-5 lg:mr-0">
              <img
                src={heroVessels}
                alt="Illustration of vascular blood vessels"
                className="ml-auto block h-auto w-full max-w-[560px] object-cover lg:max-w-none"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </section>


      {/* Category filter bar */}
      <section className="border-y border-border/60 bg-white">
      {/* Category filter bar */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
          <Reveal variant="up">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((c) => {
                const isActive = c.label === active;
                return (
                  <button
                    key={c.label}
                    onClick={() => setActive(c.label)}
                    className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[13px] font-semibold transition-all ${
                      isActive
                        ? "bg-gradient-brand text-primary-foreground shadow-glow-red"
                        : "text-secondary/80 hover:bg-accent"
                    }`}
                  >
                    <c.icon className="h-4 w-4" strokeWidth={1.75} />
                    {c.label}
                  </button>
                );
              })}
              <button className="ml-auto inline-flex items-center gap-2 rounded-md border border-border/70 bg-white px-4 py-2.5 text-[13px] font-semibold text-secondary/80 hover:bg-accent">
                Filter
                <Filter className="h-4 w-4" strokeWidth={1.75} />
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
              <Reveal key={c.title} variant="up" delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[7px] bg-white shadow-soft ring-1 ring-border/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className={`inline-flex w-fit items-center rounded-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground ${
                        c.badgeColor === "red" ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      {c.category}
                    </span>

                    <h3 className="mt-4 font-display text-lg font-extrabold leading-snug text-secondary">
                      {c.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>

                    <div className="mt-5 grid grid-cols-3 gap-3 rounded-md bg-accent/50 p-3">
                      <MetaCell icon={Clock} label="Treatment Time" value={c.treatmentTime} />
                      <MetaCell icon={CalendarDays} label="Recovery" value={c.recovery} />
                      <MetaCell icon={Award} label="Outcome" value={c.outcome} />
                    </div>

                    <button className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-primary transition-transform hover:translate-x-0.5">
                      Read More <ArrowRight className="h-4 w-4" />
                    </button>
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
          <Reveal variant="up">
            <div className="relative overflow-hidden rounded-[7px] bg-gradient-cta p-6 sm:p-8 lg:p-10">
              <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-secondary shadow-lift">
                    <Calendar className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                      Need Expert Care for Vascular Conditions?
                    </h3>
                    <p className="mt-1 text-sm text-white/85">
                      Our specialists are here to help you every step of the way.
                    </p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-secondary transition-transform hover:scale-105"
                >
                  Book an Appointment <ArrowRight className="h-4 w-4" />
                </Link>
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
    <div className="flex flex-col items-center gap-1 text-center">
      <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="text-xs font-bold text-secondary">{value}</div>
    </div>
  );
}
