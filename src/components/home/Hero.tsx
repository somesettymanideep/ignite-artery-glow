import { Calendar, ArrowRight, Sparkles, Zap, Activity, HeartPulse } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import heroAsset from "@/assets/hero-varicose-legs.png.asset.json";
import veinCloseup from "@/assets/vein-closeup.jpg";

const heroImg = heroAsset.url;

const chips = [
  { icon: Sparkles, label: "Varicose Vein Treatment" },
  { icon: Zap, label: "Endovenous Laser Therapy" },
  { icon: Activity, label: "Peripheral Artery Disease Care" },
  { icon: HeartPulse, label: "Non Healing Ulcer Management" },
];

const stats = [
  { value: "400+", label: "AV Fistula Surgeries" },
  { value: "100+", label: "Laser Surgeries for Varicose Veins" },
  { value: "50+", label: "Limb Salvage Procedures" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-24 lg:pt-32 lg:pb-32"
      style={{
        background:
          "linear-gradient(135deg, #f6f2ff 0%, #ffffff 45%, #faf7ff 100%)",
      }}
    >
      {/* Dot grid accent top-right */}
      <div
        className="pointer-events-none absolute right-10 top-24 hidden h-24 w-24 opacity-40 lg:block"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, #8b5cf6 1.2px, transparent 1.2px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* LEFT */}
        <Reveal variant="left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#4c1d95] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-md">
            Variation 02
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1a0b3d] sm:text-5xl xl:text-[3.5rem]">
            Don't Ignore Vein Problems.
            <br />
            Treat Early,{" "}
            <span style={{ color: "#e11d48" }}>Live Better.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            From varicose veins to complex vascular conditions,
            we provide safe, effective and advanced treatments
            to improve your quality of life.
          </p>

          <ul className="mt-8 space-y-3.5">
            {chips.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ede4ff] text-[#6d28d9]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-[15px] font-semibold text-[#1a0b3d]">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-[#4c1d95] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-900/25 transition-all duration-300 hover:scale-[1.03] hover:bg-[#5b21b6]"
            >
              Book an Appointment <Calendar className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#4c1d95]/25 bg-white px-6 py-3 text-sm font-bold text-[#4c1d95] transition-all duration-300 hover:border-[#4c1d95] hover:bg-[#f5efff]"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal variant="right" className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xl">
            {/* Purple gradient circle backdrop */}
            <div
              className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #c4b5fd 0%, #a78bfa 45%, #7c3aed 100%)",
              }}
              aria-hidden
            />
            <div
              className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-2xl"
              style={{ background: "#a78bfa" }}
              aria-hidden
            />

            {/* Legs image */}
            <img
              src={heroImg}
              alt="Anatomical illustration of legs showing varicose veins"
              width={1024}
              height={1280}
              className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
            />

            {/* Vein close-up floating circle */}
            <div className="absolute left-[38%] top-[38%] z-20 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-2xl animate-float sm:h-36 sm:w-36">
              <img
                src={veinCloseup}
                alt="Close-up of vein cross-section"
                width={768}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Stats card */}
      <Reveal variant="up" className="relative mx-auto mt-14 max-w-5xl px-5 lg:px-8">
        <div className="grid grid-cols-3 gap-6 rounded-2xl bg-white p-6 shadow-[0_20px_60px_-20px_rgba(76,29,149,0.25)] ring-1 ring-purple-100 sm:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="text-3xl font-extrabold text-[#4c1d95] sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
