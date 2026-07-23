import { Star, Check, Calendar, ArrowRight } from "lucide-react";
import { openBookingModal } from "@/components/booking/BookingModal";
import { Reveal } from "@/hooks/use-reveal";
import heroAsset from "@/assets/hero-section-image.webp.asset.json";
import { resolveAssetUrl } from "@/lib/asset-url";

const heroImg = resolveAssetUrl(heroAsset.url);

const trust = [
  "Experienced Vascular Specialist",
  "Minimally Invasive Procedures",
  "Expertise in Non-healing ulcers and Limb salvage",
  "simple and complex AV Fistula Surgeries",
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

          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[2.5rem] xl:text-[2.75rem]">
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
        <Reveal variant="right" className="relative lg:-mt-40">
          <div className="relative mx-auto w-full max-w-[620px]">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[40px] opacity-70"
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 55% 45%, rgba(65,48,92,0.10), transparent 70%)",
              }}
            />
            <img
              src={heroImg}
              alt="Medical illustration showing varicose veins and AV fistula anatomy at Ignite Vascular Center"
              width={1024}
              height={1536}
              fetchPriority="high"
              decoding="async"
              className="mx-auto block h-auto w-full max-w-[560px] object-contain lg:mt-24"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
