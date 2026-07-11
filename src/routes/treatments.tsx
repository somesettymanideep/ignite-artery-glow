import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  HeartPulse, Droplets, Stethoscope, Syringe, ChevronRight,
  CheckCircle2, ArrowRight, Phone,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import servicesImg from "@/assets/contact-services.jpg";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Our Treatments — Ignite Vascular Center, Vijayawada" },
      { name: "description", content: "Explore advanced vascular treatments at Ignite Vascular Center in Vijayawada. Arterial & venous diseases, dialysis access, central line access and more." },
      { property: "og:title", content: "Our Treatments — Ignite Vascular Center" },
      { property: "og:description", content: "Advanced vascular surgery and endovascular treatments in Vijayawada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TreatmentsPage,
});

type Category = {
  id: string;
  title: string;
  icon: React.ElementType;
  short: string;
  items: string[];
};

const CATEGORIES: Category[] = [
  {
    id: "arterial",
    title: "Arterial diseases",
    icon: HeartPulse,
    short: "Complete care for blocked, narrowed or diseased arteries affecting limbs and organs.",
    items: [
      "Acute limb ischemia",
      "Chronic limb ischemia",
      "Gangrene",
      "Non healing ulcer",
      "Diabetic foot ulcers",
      "Thrombolysis",
      "Thrombectomy",
      "Hybrid procedures",
      "Angioplasty and stenting",
      "Vasculitis",
      "Aneurysms",
      "Pseudo aneurysms",
      "Ruptured pseudo aneurysms",
    ],
  },
  {
    id: "venous",
    title: "Venous diseases",
    icon: Droplets,
    short: "Modern minimally invasive solutions for varicose veins, clots and venous ulcers.",
    items: [
      "Varicose veins",
      "Venous ulcers",
      "Dvt",
      "Catheter directed Thrombolysis",
      "Venous Thrombectomy",
      "Post thrombotic syndrome",
      "Venoplasty and stenting",
      "May thurner syndrome",
      "Ivc filter",
      "Aneurysms",
    ],
  },
  {
    id: "av-access",
    title: "AV access and dialysis related",
    icon: Stethoscope,
    short: "Creation, maintenance and salvage of vascular access for long-term dialysis care.",
    items: [
      "Radio cephalic fistula",
      "Brachio cephalic fistula",
      "Brachio basilic fistula",
      "Upper limb AV graft",
      "Chest loop AV graft",
      "Lower limb AV graft",
      "Complicated av access",
      "Fistula salvage",
      "Fistuloplasty",
      "Central vein stenosis",
      "Fistula ligation",
      "Ruptured fistula",
    ],
  },
  {
    id: "central-line",
    title: "Central line access",
    icon: Syringe,
    short: "Safe insertion and management of central venous catheters and ports for therapy.",
    items: [
      "Hickman line",
      "Picc line",
      "Chemoport insertion",
    ],
  },
];

function Hero() {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden pt-24 sm:min-h-[460px] lg:min-h-[520px] lg:pt-28">
      <div className="absolute inset-0">
        <img
          src={servicesImg}
          alt="Advanced vascular and endovascular care at Ignite Vascular Center"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/75 to-secondary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-secondary/30" />
      </div>

      <div className="absolute bottom-0 left-0 right-0" aria-hidden>
        <svg className="h-12 w-full text-background sm:h-16 lg:h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal variant="up" className="text-center sm:text-left">
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Link to="/" className="font-semibold text-white/80 transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4 text-white/60" />
            <span className="font-semibold text-primary-foreground">Our Treatments</span>
          </nav>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Treatments
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mx-0 sm:text-lg">
            From arterial and venous disease management to dialysis access and central line procedures — we offer comprehensive, patient-focused vascular care under one roof.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({
  category,
  isActive,
  onActivate,
}: {
  category: Category;
  isActive: boolean;
  onActivate: () => void;
}) {
  const Icon = category.icon;
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onClick={onActivate}
      onFocus={onActivate}
      className={`group relative w-full rounded-[5px] p-6 text-left transition-all duration-500 sm:p-8 lg:p-10 ${
        isActive
          ? "bg-gradient-brand text-primary-foreground shadow-glow-red"
          : "bg-card text-card-foreground shadow-soft hover:-translate-y-1 hover:shadow-lift"
      }`}
      aria-expanded={isActive}
    >
      <div className={`mb-5 inline-flex items-center justify-center rounded-2xl p-3.5 transition-colors duration-500 ${
        isActive ? "bg-white/20" : "bg-gradient-brand-soft text-secondary"
      }`}>
        <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
      </div>

      <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
        {category.title}
      </h3>
      <p className={`mt-3 text-sm leading-relaxed sm:text-[15px] ${isActive ? "text-white/85" : "text-muted-foreground"}`}>
        {category.short}
      </p>

      <span className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
        isActive ? "text-white" : "text-primary group-hover:gap-3"
      }`}>
        {isActive ? "Showing treatments" : "View treatments"}
        <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isActive ? "rotate-90" : ""}`} />
      </span>

      {/* Active indicator line */}
      <span className={`absolute left-0 top-0 h-1 w-full rounded-t-[5px] bg-white transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} aria-hidden />
    </button>
  );
}

function TreatmentsGrid() {
  const [activeId, setActiveId] = useState<string>("arterial");
  const activeCategory = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.28em] text-primary">What We Treat</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl lg:text-5xl">
            Specialized Vascular &<br className="hidden sm:block" /> Endovascular Services
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Hover or tap a category to explore the full range of procedures and conditions we manage at Ignite Vascular Center.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.id} variant="up" delay={i * 0.08}>
              <ServiceCard
                category={category}
                isActive={activeId === category.id}
                onActivate={() => setActiveId(category.id)}
              />
            </Reveal>
          ))}
        </div>

        {/* Expanded sub-services panel */}
        <Reveal variant="up" delay={0.2}>
          <div className="mt-6 overflow-hidden rounded-[5px] border border-border/60 bg-card shadow-soft transition-all duration-500">
            <div className="bg-gradient-brand px-6 py-4 sm:px-8">
              <h3 className="font-display text-lg font-bold text-primary-foreground sm:text-xl">
                {activeCategory.title} — Treatment List
              </h3>
            </div>
            <div className="p-6 sm:p-8">
              <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {activeCategory.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-secondary sm:text-[15px]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="zoom" className="rounded-[5px] bg-gradient-cta p-8 text-center text-primary-foreground shadow-lift sm:p-12 lg:p-16">
          <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            Our vascular specialists will evaluate your condition and recommend the most effective, minimally invasive approach for your recovery.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-secondary shadow-soft transition-transform duration-300 hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Book an Appointment
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Get a Second Opinion
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TreatmentsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TreatmentsGrid />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
