import { useState } from "react";
import {
  LayoutGrid,
  Stethoscope,
  ScanSearch,
  Scissors,
  HeartHandshake,
  Waves,
  HeartPulse,
  Syringe,
  Footprints,
  Activity,
  ShieldPlus,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import varicoseImg from "@/assets/service-varicose.jpg";
import padImg from "@/assets/service-pad.jpg";
import endoImg from "@/assets/service-endo.jpg";
import dvtImg from "@/assets/service-dvt.jpg";
import diabeticImg from "@/assets/service-diabetic.jpg";
import limbImg from "@/assets/service-limb.jpg";

const CATEGORIES = [
  { key: "all", label: "All Services", icon: LayoutGrid },
  { key: "treatments", label: "Treatments", icon: Stethoscope },
  { key: "diagnostics", label: "Diagnostics", icon: ScanSearch },
  { key: "surgeries", label: "Surgeries", icon: Scissors },
  { key: "care", label: "Care Programs", icon: HeartHandshake },
] as const;

type CatKey = (typeof CATEGORIES)[number]["key"];

const SERVICES: {
  title: string;
  desc: string;
  icon: typeof Waves;
  image: string;
  cat: Exclude<CatKey, "all">;
}[] = [
  {
    title: "Varicose Veins Treatment",
    desc: "Advanced laser & radiofrequency techniques for lasting relief.",
    icon: Waves,
    image: varicoseImg,
    cat: "treatments",
  },
  {
    title: "Peripheral Arterial Disease (PAD)",
    desc: "Effective solutions for blocked arteries and poor circulation.",
    icon: HeartPulse,
    image: padImg,
    cat: "treatments",
  },
  {
    title: "Endovascular Procedures",
    desc: "Stent placement, angioplasty & minimally invasive care.",
    icon: Syringe,
    image: endoImg,
    cat: "surgeries",
  },
  {
    title: "Deep Vein Thrombosis (DVT)",
    desc: "Diagnosis, treatment & follow-up care.",
    icon: Activity,
    image: dvtImg,
    cat: "diagnostics",
  },
  {
    title: "Diabetic Foot Care",
    desc: "Wound care, infection control & prevention.",
    icon: Footprints,
    image: diabeticImg,
    cat: "care",
  },
  {
    title: "Limb Salvage Procedures",
    desc: "Advanced revascularization to save limbs.",
    icon: ShieldPlus,
    image: limbImg,
    cat: "surgeries",
  },
];

export function Services() {
  const [active, setActive] = useState<CatKey>("all");
  const visible = active === "all" ? SERVICES : SERVICES.filter((s) => s.cat === active);

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(180deg,#F6F3FB 0%,#EEE7F7 100%)" }}
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[28rem] w-[28rem] rounded-full bg-secondary/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.28em] text-primary">
            Our Services
          </span>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Complete Vascular Care
            <br />
            <span className="text-gradient">Under One Roof</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground">
            Expert care. Advanced technology. Better outcomes.
          </p>
        </Reveal>

        {/* Category pills */}
        <Reveal variant="up" delay={0.1}>
          <div
            role="tablist"
            aria-label="Service categories"
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {CATEGORIES.map((c) => {
              const selected = active === c.key;
              return (
                <button
                  key={c.key}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(c.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                    selected
                      ? "text-primary-foreground shadow-glow-red"
                      : "bg-white text-secondary hover:bg-white/80"
                  }`}
                  style={
                    selected
                      ? { background: "var(--gradient-brand)" }
                      : { boxShadow: "0 6px 16px -10px rgba(69,54,96,0.35)" }
                  }
                >
                  <c.icon className="h-4 w-4" aria-hidden />
                  {c.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s, i) => (
            <Reveal
              key={s.title}
              variant="zoom"
              delay={(i % 3) * 0.12}
              className="group relative overflow-hidden rounded-3xl"
            >
              <article
                tabIndex={0}
                className="relative block h-[320px] overflow-hidden rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                {/* Background image */}
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  width={800}
                  height={640}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-focus-visible:scale-110"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(20,10,40,0.15) 0%, rgba(20,10,40,0.55) 55%, rgba(15,5,35,0.9) 100%)",
                  }}
                  aria-hidden
                />
                {/* Sheen on hover */}
                <div
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1400ms] ease-out group-hover:translate-x-full"
                  aria-hidden
                />

                {/* Icon */}
                <span
                  className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-primary shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                  aria-hidden
                >
                  <s.icon className="h-5 w-5" />
                </span>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-display text-xl font-extrabold leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/80">
                    {s.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-white transition-all duration-300 group-hover:gap-3">
                    Learn More
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* View all */}
        <Reveal variant="up" delay={0.2} className="mt-12 flex justify-center">
          <a
            href="#cta"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-secondary/25 bg-white px-8 py-3.5 font-bold text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:shadow-glow-indigo"
          >
            View All Services
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
