import { createFileRoute, Link } from "@tanstack/react-router";
import { openBookingModal } from "@/components/booking/BookingModal";
import { useState } from "react";
import {
  HeartPulse, Droplets, Stethoscope, Syringe, ChevronRight,
  ArrowRight, Phone,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { SubBanner } from "@/components/home/SubBanner";
import servicesImg from "@/assets/contact-services.jpg";
import treatmentsBanner from "@/assets/about-surgery.jpg";

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
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
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

function CategoryRow({
  category,
  isActive,
  onActivate,
}: {
  category: Category;
  isActive: boolean;
  onActivate: () => void;
}) {
  const Icon = category.icon;

  if (isActive) {
    return (
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl shadow-secondary/10 ring-1 ring-secondary/5 transition-all duration-500">
        <button
          type="button"
          onClick={onActivate}
          className="flex w-full items-center justify-between bg-gradient-brand p-5 text-left sm:px-6"
          aria-expanded="true"
        >
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-primary-foreground">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="truncate font-display text-lg font-bold text-primary-foreground sm:text-xl">
              {category.title}
            </h3>
          </div>
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/20 text-primary-foreground">
            <ChevronRight className="h-4 w-4 rotate-90" />
          </span>
        </button>
        <div className="bg-card p-5 sm:p-6">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {category.items.map((item) => (
              <li key={item} className="group flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150" />
                <span className="text-sm font-medium leading-snug text-secondary sm:text-[15px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-secondary/10 py-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary transition-colors duration-300 hover:bg-secondary/5"
          >
            View all {category.title.toLowerCase()} services
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onActivate}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className="group flex w-full items-center justify-between rounded-2xl border border-border/60 bg-card p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/25 hover:shadow-soft sm:px-6"
      aria-expanded="false"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand-soft text-secondary transition-colors duration-300 group-hover:text-primary">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-display text-lg font-semibold text-secondary transition-colors duration-300 group-hover:text-primary">
            {category.title}
          </h3>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {category.short}
          </p>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
    </button>
  );
}

function TreatmentsGrid() {
  const [activeId, setActiveId] = useState<string>("arterial");

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal variant="up" className="mb-10 text-center sm:text-left">
          <span className="block text-xs font-bold uppercase tracking-[0.28em] text-primary">
            Specialized Care
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-secondary sm:text-4xl lg:text-5xl">
            What We{" "}
            <span className="text-gradient">
              Treat
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mx-0 sm:text-base">
            Comprehensive vascular and endovascular services tailored to your health and recovery.
          </p>
        </Reveal>

        <div className="space-y-3">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.id} variant="up" delay={i * 0.08}>
              <CategoryRow
                category={category}
                isActive={activeId === category.id}
                onActivate={() => setActiveId(category.id)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={0.2} className="mt-12 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Not seeing your condition?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-secondary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/40"
          >
            <Phone className="h-4 w-4" />
            Contact Specialist
          </Link>
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
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-secondary shadow-soft transition-transform duration-300 hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Book an Appointment
            </button>
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
      <SubBanner title="Our Treatments" crumb="Our Treatments" image={treatmentsBanner} />
      <main>
        <TreatmentsGrid />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
