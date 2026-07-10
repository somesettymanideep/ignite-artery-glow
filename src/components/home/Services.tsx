import { Waves, HeartPulse, Footprints, Syringe, Brain, Droplets, ArrowRight } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: Waves,
    title: "Varicose Vein Treatment",
    desc: "Laser, radiofrequency and foam sclerotherapy for painful, swollen veins — with minimal downtime and no large incisions.",
  },
  {
    icon: HeartPulse,
    title: "Peripheral Artery Disease",
    desc: "Angioplasty, stenting and bypass surgery to restore blood flow and relieve leg pain caused by blocked arteries.",
  },
  {
    icon: Footprints,
    title: "Diabetic Foot Care",
    desc: "Comprehensive limb-salvage care for diabetic foot ulcers and infections, protecting circulation and preventing amputation.",
  },
  {
    icon: Syringe,
    title: "Endovascular Procedures",
    desc: "Advanced catheter-based, minimally invasive treatments for aneurysms and vascular blockages through tiny punctures.",
  },
  {
    icon: Brain,
    title: "Carotid Artery Disease",
    desc: "Stroke-prevention surgery and stenting for narrowed carotid arteries, guided by advanced vascular imaging.",
  },
  {
    icon: Droplets,
    title: "Dialysis Access Surgery",
    desc: "AV fistula and graft creation and maintenance for reliable, long-lasting dialysis access with expert follow-up.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Our Services</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Specialized <span className="text-gradient">Vascular Treatments</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Complete care for arteries, veins and blood vessels — from diagnosis to advanced
            minimally invasive treatment.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              variant="zoom"
              delay={(i % 3) * 0.2}
              className="glass-card card-top-gradient hover-lift group rounded-3xl p-8"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow-red transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <s.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a
                href="#cta"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all duration-300 group-hover:gap-3"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
