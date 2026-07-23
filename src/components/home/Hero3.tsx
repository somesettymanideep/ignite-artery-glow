import {
  Calendar,
  PlayCircle,
  ShieldCheck,
  Users,
  Activity,
  HeartHandshake,
  Scissors,
  Stethoscope,
  HeartPulse,
  UserRound,
  Sparkles,
  Waves,
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
    <section id="home" className="relative overflow-hidden pt-28 lg:pt-32">
      {/* subtle pattern bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #41305c 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-8">
        {/* LEFT */}
        <Reveal variant="left" className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-secondary shadow-[0_8px_30px_-8px_rgba(65,48,92,0.25)] ring-1 ring-black/5">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-brand text-white">
              <ShieldCheck className="h-4 w-4" />
            </span>
            Advanced Vascular &amp; Endovascular Care
          </div>

          <h1 className="mt-6 font-display text-[42px] font-black leading-[1.05] tracking-tight text-secondary sm:text-5xl xl:text-[58px]">
            Advanced Vascular Solutions.
            <br />
            <span className="text-primary">Compassionate Care.</span>
            <br />
            <span className="text-secondary/70">Better Outcomes.</span>
          </h1>

          <div className="mt-6 h-1 w-16 rounded-full bg-primary" />

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Ignite Vascular Center provides comprehensive diagnosis and treatment
            for diseases affecting arteries, veins, and blood vessels using
            advanced minimally invasive endovascular procedures, conventional
            vascular surgery, and simple and complex AV Fistula surgeries.
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

          {/* Stats card */}
          <div className="mt-10 rounded-2xl bg-white p-5 shadow-[0_20px_60px_-25px_rgba(65,48,92,0.35)] ring-1 ring-black/5">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary/8 text-secondary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <div className={`text-lg font-black ${s.valueClass ?? "text-primary"}`}>
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

        {/* RIGHT — indigo stadium shape with offset red outline + leg image */}
        <Reveal variant="right" className="relative">
          {(() => {
            const stadium = "50% 50% 46% 46% / 52% 52% 20% 20%";
            return (
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[560px]">
                {/* Thin red outline — same curvature, offset down-left */}
                <div
                  aria-hidden
                  className="absolute inset-0 border-[2px] border-primary"
                  style={{
                    borderRadius: stadium,
                    transform: "translate(-10px, 10px)",
                  }}
                />
                {/* Indigo stadium backdrop */}
                <div
                  aria-hidden
                  className="absolute inset-0 overflow-hidden bg-gradient-to-b from-secondary via-[#2d2148] to-[#1c1430]"
                  style={{ borderRadius: stadium }}
                >
                  {/* top-left soft light */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 60% 45% at 28% 18%, rgba(255,255,255,0.10), transparent 70%)",
                    }}
                  />
                  {/* bottom-right warm glow */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 55% 40% at 78% 88%, rgba(218,50,52,0.14), transparent 70%)",
                    }}
                  />
                  {/* inner rim highlight following the curve */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      borderRadius: stadium,
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -40px 60px rgba(0,0,0,0.25)",
                    }}
                  />
                </div>
                {/* Leg image — contained inside the stadium, anchored to bottom */}
                <img
                  src={heroImg}
                  alt="Medical illustration showing varicose veins and AV fistula anatomy — Ignite Vascular Center"
                  width={1024}
                  height={1536}
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-x-0 bottom-0 top-[4%] mx-auto h-[96%] w-auto max-w-[92%] object-contain object-bottom"
                />




            {/* Callout: Varicose Veins */}
            <div className="absolute right-[-6%] top-[10%] flex items-center gap-3 sm:right-[-14%]">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-white shadow-lift sm:h-24 sm:w-24">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/40 to-secondary/60" />
                <Waves className="absolute inset-0 m-auto h-10 w-10 text-white/90" />
              </div>
              <div className="hidden sm:block">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-primary shadow-lift">
                  <Sparkles className="h-5 w-5" />
                </span>
              </div>
              <div className="max-w-[180px] rounded-xl bg-white/95 p-3 shadow-lift ring-1 ring-black/5 backdrop-blur">
                <div className="text-xs font-black uppercase tracking-wider text-secondary">
                  Varicose Veins
                </div>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                  Advanced treatment for varicose veins and venous disorders.
                </p>
                <div className="mt-2 h-0.5 w-8 rounded-full bg-primary" />
              </div>
            </div>

            {/* Callout: AV Fistula */}
            <div className="absolute right-[-6%] top-[52%] flex items-center gap-3 sm:right-[-14%]">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-white shadow-lift sm:h-24 sm:w-24">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-secondary/60" />
                <Activity className="absolute inset-0 m-auto h-10 w-10 text-white/90" />
              </div>
              <div className="hidden sm:block">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-primary shadow-lift">
                  <Stethoscope className="h-5 w-5" />
                </span>
              </div>
              <div className="max-w-[180px] rounded-xl bg-white/95 p-3 shadow-lift ring-1 ring-black/5 backdrop-blur">
                <div className="text-xs font-black uppercase tracking-wider text-secondary">
                  AV Fistula
                </div>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                  Expertise in simple and complex AV Fistula surgeries.
                </p>
                <div className="mt-2 h-0.5 w-8 rounded-full bg-primary" />
              </div>
            </div>
              </div>
            );
          })()}
        </Reveal>

      </div>

      {/* Bottom feature strip */}
      <Reveal variant="up">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-secondary via-[#2d2148] to-secondary p-5 shadow-[0_30px_60px_-30px_rgba(65,48,92,0.55)]">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {features.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full ring-1 ring-white/25 text-primary bg-white/5">
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
