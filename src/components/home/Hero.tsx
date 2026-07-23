import { Star, Check, Calendar, ArrowRight, Award, Activity, HeartPulse, Users } from "lucide-react";
import { openBookingModal } from "@/components/booking/BookingModal";
import { Reveal } from "@/hooks/use-reveal";
import heroAsset from "@/assets/hero-varicose-legs-v3.webp.asset.json";
import { resolveAssetUrl } from "@/lib/asset-url";

const heroImg = resolveAssetUrl(heroAsset.url);

const trust = [
  "Experienced Vascular Specialist",
  "Minimally Invasive Procedures",
  "Expertise in Non-healing ulcers and Limb salvage",
  "AV Fistula Surgeries",
  "Personalized Patient Care",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
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
            endovascular procedures, conventional vascular surgery, and simple and complex AV Fistula surgeries.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-bold text-primary-foreground shadow-glow-red transition-all duration-300 hover:scale-105 hover:shadow-glow-indigo animate-pulse-glow"
            >
              <Calendar className="h-5 w-5" /> Book Appointment
            </button>
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

        {/* Right */}
        <Reveal variant="right" className="relative">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-brand opacity-15 blur-2xl" aria-hidden />
            <img
              src={heroImg}
              alt="Vascular surgeon with advanced digital artery visualization at Ignite Vascular Center"
              width={1024}
              height={1152}
              fetchPriority="high"
              decoding="async"
              className="relative w-full rounded-[2rem] object-cover shadow-lift"
            />

            {/* Floating glass cards */}
            <div className="glass-card animate-float absolute -left-4 top-8 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-10">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground"><Award className="h-5 w-5" /></span>
              <span className="text-sm font-bold leading-tight">10+ Years<br /><span className="text-xs font-semibold text-muted-foreground">Experience</span></span>
            </div>
            <div className="glass-card animate-float-slower absolute -right-4 top-1/3 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-8">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground"><Activity className="h-5 w-5" /></span>
              <span className="text-sm font-bold leading-tight">Advanced<br /><span className="text-xs font-semibold text-muted-foreground">Endovascular Procedures</span></span>
            </div>
            <div className="glass-card animate-float absolute -left-2 bottom-24 flex items-center gap-3 rounded-2xl px-4 py-3 [animation-delay:1.2s] sm:-left-12">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground"><HeartPulse className="h-5 w-5" /></span>
              <span className="text-sm font-bold leading-tight">Patient-Centered<br /><span className="text-xs font-semibold text-muted-foreground">Care</span></span>
            </div>
            <div className="glass-card animate-float-slower absolute -right-2 -bottom-5 flex items-center gap-3 rounded-2xl px-4 py-3 [animation-delay:0.6s] sm:-right-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground"><Users className="h-5 w-5" /></span>
              <span className="text-sm font-bold leading-tight">Trusted by<br /><span className="text-xs font-semibold text-muted-foreground">Thousands</span></span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
