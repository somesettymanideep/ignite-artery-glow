import { Calendar, ArrowRight, Check, Activity, Zap, HeartPulse, Bandage } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import heroAsset from "@/assets/hero-varicose-legs-v3.webp.asset.json";
const heroImg = heroAsset.url;

const services = [
  { icon: Activity, label: "Varicose Vein Treatment" },
  { icon: Zap, label: "Endovenous Laser Therapy" },
  { icon: HeartPulse, label: "Peripheral Artery Disease Care" },
  { icon: Bandage, label: "Non-Healing Ulcer Management" },
];

const stats = [
  { value: "400+", label: "AV Fistula Surgeries" },
  { value: "100+", label: "Laser Surgeries for Varicose Veins" },
  { value: "50+", label: "Limb Salvage Procedures" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background pt-28 lg:pt-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-card shadow-lift">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-4">
            {/* Left content */}
            <Reveal variant="left" className="relative z-10 px-6 pt-10 pb-10 sm:px-10 lg:px-14 lg:py-16">
              <span className="inline-flex items-center gap-2 rounded-lg bg-secondary px-3.5 py-1.5 text-[11px] font-bold tracking-[0.14em] text-secondary-foreground">
                VARIATION 02
              </span>

              <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl xl:text-[3.25rem]">
                Don&apos;t Ignore Vein Problems.
                <br />
                Treat Early, <span className="text-primary">Live Better.</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                From varicose veins to complex vascular conditions, we provide safe, effective and
                advanced treatments to improve your quality of life.
              </p>

              <ul className="mt-8 space-y-3.5">
                {services.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3.5 text-[15px] font-semibold text-foreground">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-glow-indigo">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3.5">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3.5 text-sm font-bold text-secondary-foreground shadow-glow-indigo transition-all duration-300 hover:scale-[1.03]"
                >
                  Book an Appointment <Calendar className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-bold text-foreground transition-all duration-300 hover:border-secondary hover:bg-accent"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            {/* Right visual */}
            <Reveal variant="right" className="relative min-h-[420px] lg:min-h-[560px]">
              {/* Purple circle backdrop */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[95%] max-w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[70%] max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/40 blur-2xl"
                aria-hidden
              />
              {/* Dot grid */}
              <div
                className="pointer-events-none absolute right-6 top-6 h-20 w-24 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, color-mix(in oklab, var(--indigo-deep) 40%, transparent) 1.5px, transparent 1.5px)",
                  backgroundSize: "12px 12px",
                }}
                aria-hidden
              />
              {/* Hero image extends beyond frame */}
              <img
                src={heroImg}
                alt="Realistic clinical illustration of legs with varicose veins and magnified vein-valve diagram"
                className="relative z-10 mx-auto h-full w-auto max-h-[640px] object-contain lg:-mr-6 lg:translate-y-2"
              />
            </Reveal>
          </div>

          {/* Stats strip */}
          <div className="relative z-10 mx-6 -mt-4 mb-6 rounded-2xl bg-muted/70 px-6 py-5 backdrop-blur sm:mx-10 lg:mx-14 lg:mb-10">
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="text-left">
                  <div className="text-3xl font-extrabold text-primary sm:text-[2rem]">{s.value}</div>
                  <div className="mt-1 text-[13px] font-semibold leading-snug text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
