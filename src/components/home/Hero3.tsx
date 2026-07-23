import {
  Calendar,
  PlayCircle,
  ShieldCheck,
  Users,
  Activity,
  HeartHandshake,
  Scissors,
  HeartPulse,
  UserRound,
} from "lucide-react";
import { openBookingModal } from "@/components/booking/BookingModal";
import { Reveal } from "@/hooks/use-reveal";
import heroAsset from "@/assets/hero-section-image.webp.asset.json";
import { resolveAssetUrl } from "@/lib/asset-url";

const heroImg = resolveAssetUrl(heroAsset.url);

const stats = [
  { icon: ShieldCheck, value: "10+", label: "Years of\nExperience" },
  { icon: Users, value: "5000+", label: "Happy\nPatients" },
  { icon: Activity, value: "1000+", label: "Successful\nSurgeries" },
  { icon: HeartHandshake, value: "Patient", label: "Centered\nCare", valueClass: "text-primary" },
];

const features = [
  { icon: Scissors, text: "Minimally Invasive\nEndovascular Procedures" },
  { icon: ShieldCheck, text: "Conventional\nVascular Surgery" },
  { icon: HeartPulse, text: "Non-healing Ulcers\n& Limb Salvage Expertise" },
  { icon: UserRound, text: "Simple & Complex\nAV Fistula Surgeries" },
  { icon: HeartHandshake, text: "Compassionate Care\nBetter Outcomes" },
];

export function Hero3() {
  return (
    <section id="home" className="relative isolate">
      {/* ============ HERO IMAGE + OVERLAY LAYER ============ */}
      <div className="relative overflow-hidden pt-24 lg:pt-28">
        {/* Full-bleed hero image, anchored to the right */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Medical illustration showing varicose veins and AV fistula anatomy — Ignite Vascular Center"
            width={1024}
            height={1536}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-right"
          />
          {/* White fade from left — reveals content, image dominates the right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, #ffffff 34%, rgba(255,255,255,0.85) 46%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0) 72%)",
            }}
            aria-hidden
          />
          {/* Bottom fade so the dark feature strip has a clean anchor */}
          <div
            className="absolute inset-x-0 bottom-0 h-32"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.75))",
            }}
            aria-hidden
          />
        </div>

        {/* CONTENT — occupies the left column */}
        <div className="relative mx-auto max-w-7xl px-5 pb-12 lg:px-8 lg:pb-16">
          <div className="grid lg:grid-cols-12">
            <Reveal variant="left" className="lg:col-span-6 xl:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-secondary shadow-[0_8px_30px_-8px_rgba(65,48,92,0.25)] ring-1 ring-black/5">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-brand text-white">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                Advanced Vascular &amp; Endovascular Care
              </div>

              <h1 className="mt-6 font-display text-[40px] font-black leading-[1.05] tracking-tight text-secondary sm:text-5xl xl:text-[56px]">
                Advanced Vascular Solutions.
                <br />
                <span className="text-primary">Compassionate Care.</span>
                <br />
                <span className="text-secondary/70">Better Outcomes.</span>
              </h1>

              <div className="mt-6 h-1 w-16 rounded-full bg-primary" />

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                Ignite Vascular Center provides comprehensive diagnosis and
                treatment for diseases affecting arteries, veins, and blood
                vessels using advanced minimally invasive endovascular
                procedures, conventional vascular surgery, and simple and
                complex AV Fistula surgeries.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openBookingModal()}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-glow-red transition-transform duration-300 hover:scale-[1.03]"
                >
                  <Calendar className="h-4 w-4" /> Book Appointment
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/20 bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-secondary transition-colors hover:border-secondary hover:bg-accent"
                >
                  <PlayCircle className="h-5 w-5 text-primary" /> Explore Treatments
                </a>
              </div>
            </Reveal>
          </div>

          {/* Stats card — floats bottom-left, overlaps the image slightly on lg */}
          <Reveal variant="up" className="relative mt-10 lg:mt-14">
            <div className="max-w-[720px] rounded-2xl bg-white/95 p-5 shadow-[0_20px_60px_-25px_rgba(65,48,92,0.35)] ring-1 ring-black/5 backdrop-blur">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary/10 text-secondary">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div className="leading-tight">
                      <div
                        className={`text-lg font-black ${s.valueClass ?? "text-primary"}`}
                      >
                        {s.value}
                      </div>
                      <div className="whitespace-pre-line text-[11px] font-semibold text-secondary/70">
                        {s.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ============ DARK FEATURE STRIP ============ */}
      <Reveal variant="up">
        <div className="relative mx-auto max-w-7xl px-5 pb-10 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-secondary via-[#2d2148] to-secondary p-5 shadow-[0_30px_60px_-30px_rgba(65,48,92,0.55)]">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {features.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/5 text-primary ring-1 ring-white/25">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div className="whitespace-pre-line text-[13px] font-bold leading-tight text-white">
                    {f.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
