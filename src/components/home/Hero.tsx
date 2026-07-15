import { Star, Check, Calendar, ArrowRight, Award, Activity, HeartPulse, Users } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import heroAsset from "@/assets/hero-varicose-legs-v3.webp.asset.json";
const heroImg = heroAsset.url;

const trust = [
  "Experienced Vascular Specialists",
  "Minimally Invasive Procedures",
  "Advanced Diagnostic Technology",
  "Personalized Patient Care",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[92vh]"
    >
      {/* Full-section background image */}
      <img
        src={heroImg}
        alt="Clinical illustration of varicose veins with a magnified vein valve diagram"
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden="false"
      />
      {/* Readability overlays */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10 lg:from-background lg:via-background/70 lg:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/70"
        aria-hidden
      />

      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-secondary/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Left */}
        <Reveal variant="left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-sm font-semibold text-secondary">
            <Star className="h-4 w-4 fill-primary text-primary" />
            Advanced Vascular &amp; Endovascular Care
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl xl:text-[3.4rem]">
            Advanced Vascular Surgery with{" "}
            <span className="text-gradient">Compassion &amp; Precision</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Ignite Vascular Center provides comprehensive diagnosis and treatment for diseases
            affecting arteries, veins, and blood vessels using advanced minimally invasive
            endovascular procedures and conventional vascular surgery.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-bold text-primary-foreground shadow-glow-red transition-all duration-300 hover:scale-105 hover:shadow-glow-indigo animate-pulse-glow"
            >
              <Calendar className="h-5 w-5" /> Book Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/25 bg-card px-7 py-3.5 font-bold text-secondary transition-all duration-300 hover:border-secondary hover:bg-accent"
            >
              Our Services <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm font-semibold">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right — floating glass credential cards over the background image */}
        <Reveal variant="right" className="relative hidden lg:block">
          <div className="relative mx-auto h-[520px] max-w-lg">
            <div className="glass-card animate-float absolute left-0 top-6 flex items-center gap-3 rounded-2xl px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground"><Award className="h-5 w-5" /></span>
              <span className="text-sm font-bold leading-tight">20+ Years<br /><span className="text-xs font-semibold text-muted-foreground">Experience</span></span>
            </div>
            <div className="glass-card animate-float-slower absolute right-0 top-1/3 flex items-center gap-3 rounded-2xl px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground"><Activity className="h-5 w-5" /></span>
              <span className="text-sm font-bold leading-tight">Advanced<br /><span className="text-xs font-semibold text-muted-foreground">Endovascular Procedures</span></span>
            </div>
            <div className="glass-card animate-float absolute left-4 bottom-24 flex items-center gap-3 rounded-2xl px-4 py-3 [animation-delay:1.2s]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground"><HeartPulse className="h-5 w-5" /></span>
              <span className="text-sm font-bold leading-tight">Patient-Centered<br /><span className="text-xs font-semibold text-muted-foreground">Care</span></span>
            </div>
            <div className="glass-card animate-float-slower absolute right-2 bottom-0 flex items-center gap-3 rounded-2xl px-4 py-3 [animation-delay:0.6s]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground"><Users className="h-5 w-5" /></span>
              <span className="text-sm font-bold leading-tight">Trusted by<br /><span className="text-xs font-semibold text-muted-foreground">Thousands</span></span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
