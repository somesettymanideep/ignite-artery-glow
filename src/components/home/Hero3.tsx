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
import heroImg from "@/assets/hero-leg-photo.jpg";

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
    <section id="home" className="relative isolate overflow-hidden">
      {/* soft warm background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#faf7f2] via-white to-[#f5f0ea]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-10 lg:px-8 lg:pt-28 lg:pb-14">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-6">
          {/* ============ LEFT — copy ============ */}
          <Reveal variant="left" className="relative z-10 lg:col-span-6">
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

          {/* ============ RIGHT — photorealistic leg with callout labels ============ */}
          <Reveal variant="right" className="relative lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[640px]">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[40px] opacity-70"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 55% at 55% 45%, rgba(65,48,92,0.12), transparent 70%)",
                }}
              />
              <div className="relative overflow-hidden rounded-[28px] ring-1 ring-black/5 shadow-[0_30px_60px_-25px_rgba(65,48,92,0.35)]">
                <img
                  src={heroImg}
                  alt="Close-up of a leg with varicose veins alongside medical illustrations of varicose veins and AV fistula anatomy — Ignite Vascular Center"
                  width={1280}
                  height={1024}
                  fetchPriority="high"
                  decoding="async"
                  className="block h-auto w-full object-cover"
                />

                {/* Callout labels overlaid to the right of the baked-in zoom circles */}
                <div className="pointer-events-none absolute right-3 top-[14%] w-[42%] max-w-[220px] rounded-2xl bg-white/95 p-3 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.35)] ring-1 ring-black/5 backdrop-blur sm:right-4 sm:p-4">
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary/10 text-secondary">
                      <Activity className="h-4 w-4" />
                    </span>
                    <div className="text-[11px] font-black uppercase tracking-wider text-secondary sm:text-xs">
                      Varicose Veins
                    </div>
                  </div>
                  <div className="mt-1.5 h-[2px] w-8 rounded-full bg-primary" />
                  <p className="mt-1.5 text-[10.5px] leading-snug text-muted-foreground sm:text-[11.5px]">
                    Advanced treatment for varicose veins and venous disorders.
                  </p>
                </div>

                <div className="pointer-events-none absolute right-3 top-[52%] w-[42%] max-w-[220px] rounded-2xl bg-white/95 p-3 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.35)] ring-1 ring-black/5 backdrop-blur sm:right-4 sm:p-4">
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary/10 text-secondary">
                      <HeartPulse className="h-4 w-4" />
                    </span>
                    <div className="text-[11px] font-black uppercase tracking-wider text-secondary sm:text-xs">
                      AV Fistula
                    </div>
                  </div>
                  <div className="mt-1.5 h-[2px] w-8 rounded-full bg-primary" />
                  <p className="mt-1.5 text-[10.5px] leading-snug text-muted-foreground sm:text-[11.5px]">
                    Expertise in simple and complex AV Fistula surgeries.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ============ STATS CARD — spans full width under the grid ============ */}
        <Reveal variant="up" className="relative mt-8 lg:mt-10">
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
