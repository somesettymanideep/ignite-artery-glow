import { createFileRoute } from "@tanstack/react-router";
import {
  Star,
  Calendar,
  ArrowRight,
  Sparkles,
  Activity,
  HeartPulse,
  Stethoscope,
  Droplets,
  Zap,
  ShieldPlus,
  Microscope,
  Search,
  Plus,
} from "lucide-react";
import { Navbar } from "@/components/home/Navbar";
import { openBookingModal } from "@/components/booking/BookingModal";
import { toAbsoluteUrl, resolveAssetUrl } from "@/lib/asset-url";
import heroAsset from "@/assets/hero-section-image.webp.asset.json";
import legAsset from "@/assets/hero-varicose-legs-v3.webp.asset.json";

const homeOgImage = toAbsoluteUrl(heroAsset.url);
const legImg = resolveAssetUrl(legAsset.url);

export const Route = createFileRoute("/home-3")({
  component: Home3Page,
  head: () => ({
    meta: [
      { title: "Home Hero — Ignite Vascular Center" },
      {
        name: "description",
        content:
          "Ignite Vascular Center in Vijayawada — advanced vascular and endovascular care by Dr. G. Narasimha Sai.",
      },
      { property: "og:title", content: "Home Hero — Ignite Vascular Center" },
      {
        property: "og:description",
        content:
          "Advanced vascular and endovascular care in Vijayawada by Dr. G. Narasimha Sai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: homeOgImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: homeOgImage },
    ],
    links: [
      { rel: "canonical", href: "https://ignite-artery-glow.lovable.app/home-3" },
    ],
  }),
});

const featureStrip = [
  { icon: HeartPulse, label: "Varicose Veins" },
  { icon: Droplets, label: "AV Fistula" },
  { icon: Activity, label: "Endovascular" },
  { icon: ShieldPlus, label: "Limb Salvage" },
  { icon: Stethoscope, label: "Diabetic Foot" },
  { icon: Zap, label: "Laser Surgery" },
];

function Home3Page() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-[#FCFCFD] text-[#41305C]"
      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
    >
      <Navbar />

      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-24">
        {/* Ambient radial gradients */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(217,44,45,0.18), transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 -right-60 h-[640px] w-[640px] rounded-full opacity-50 blur-3xl animate-[gradient-shift_14s_ease-in-out_infinite]"
          style={{ background: "radial-gradient(circle, rgba(109,75,168,0.28), transparent 70%)" }}
        />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-10">
          {/* ============ LEFT PANEL ============ */}
          <div className="relative animate-[h3-fade-left_0.9s_cubic-bezier(0.16,1,0.3,1)_both]">
            {/* Glass badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold animate-[h3-float_4s_ease-in-out_infinite]"
              style={{
                background: "rgba(255,255,255,0.55)",
                borderColor: "rgba(65,48,92,0.12)",
                backdropFilter: "blur(14px) saturate(160%)",
                boxShadow: "0 8px 24px -12px rgba(65,48,92,0.18)",
                color: "#41305C",
              }}
            >
              <Sparkles className="h-4 w-4" style={{ color: "#D92C2D" }} />
              Advanced Vascular &amp; Endovascular Care
              <Star className="h-3.5 w-3.5 fill-[#D92C2D] text-[#D92C2D]" />
            </div>

            {/* Heading */}
            <h1
              className="mt-6 font-extrabold leading-[1.05] tracking-tight text-[2.5rem] sm:text-[3.25rem] xl:text-[4.25rem]"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              <span className="block text-[#41305C]">Advanced Vascular</span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg,#41305C 0%,#6D4BA8 45%,#D92C2D 100%)",
                }}
              >
                Surgery with
              </span>
              <span className="block text-[#41305C]">
                Compassion{" "}
                <span className="relative inline-block">
                  &amp; Precision
                  <span
                    aria-hidden
                    className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full opacity-90"
                    style={{
                      background:
                        "linear-gradient(90deg,#D92C2D,#6D4BA8,transparent)",
                    }}
                  />
                </span>
              </span>
            </h1>

            {/* Paragraph */}
            <p
              className="mt-8 max-w-xl text-[1.075rem] leading-relaxed"
              style={{ color: "color-mix(in oklab, #41305C 72%, white)" }}
            >
              Ignite Vascular Center provides comprehensive diagnosis and
              treatment for arteries, veins and blood vessels — using
              minimally invasive endovascular procedures, conventional vascular
              surgery, and simple &amp; complex AV Fistula surgeries.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[1rem] font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(110deg,#41305C 0%,#6D4BA8 55%,#D92C2D 100%)",
                  boxShadow:
                    "0 12px 30px -10px rgba(217,44,45,0.55), 0 6px 18px -8px rgba(65,48,92,0.45)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-[h3-glow_2.4s_ease-in-out_infinite]"
                  style={{
                    boxShadow:
                      "0 0 0 6px rgba(217,44,45,0.18), 0 0 40px 4px rgba(109,75,168,0.35)",
                  }}
                />
                <Calendar className="relative h-5 w-5" />
                <span className="relative">Book Appointment</span>
              </button>

              <a
                href="/treatments"
                className="inline-flex items-center gap-2 rounded-full border-2 bg-white px-7 py-3.5 text-[1rem] font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "rgba(65,48,92,0.18)", color: "#41305C" }}
              >
                Explore Treatments <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Statistics card */}
            <div
              className="mt-10 grid grid-cols-3 gap-2 rounded-3xl border p-5 sm:gap-4"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))",
                borderColor: "rgba(65,48,92,0.1)",
                backdropFilter: "blur(16px) saturate(160%)",
                boxShadow: "0 20px 50px -24px rgba(65,48,92,0.28)",
              }}
            >
              {[
                { icon: Activity, value: "10+", label: "Years Experience" },
                { icon: HeartPulse, value: "400+", label: "AV Fistula Surgeries" },
                { icon: ShieldPlus, value: "100+", label: "Laser Varicose Surgeries" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center text-center animate-[h3-fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_both]"
                  style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                >
                  <span
                    className="mb-2 grid h-10 w-10 place-items-center rounded-xl text-white"
                    style={{
                      background:
                        "linear-gradient(135deg,#41305C,#6D4BA8,#D92C2D)",
                    }}
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="text-2xl font-extrabold text-[#41305C] sm:text-3xl">
                    {s.value}
                  </span>
                  <span className="mt-1 text-[0.72rem] font-medium leading-tight text-[#41305C]/70 sm:text-xs">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ============ RIGHT PANEL ============ */}
          <div className="relative animate-[h3-fade-right_0.9s_cubic-bezier(0.16,1,0.3,1)_both]">
            <div
              className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[2.5rem]"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 20%, #6D4BA8 0%, #41305C 45%, #2A1F3D 100%)",
                boxShadow:
                  "0 40px 80px -30px rgba(65,48,92,0.55), inset 0 0 80px rgba(0,0,0,0.25)",
              }}
            >
              {/* Large curved shape */}
              <svg
                aria-hidden
                viewBox="0 0 600 750"
                className="absolute inset-0 h-full w-full opacity-70"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D92C2D" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#6D4BA8" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#41305C" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M -50 500 Q 200 100 700 250 L 700 800 L -50 800 Z"
                  fill="url(#curveGrad)"
                />
              </svg>

              {/* Soft top glow */}
              <div
                aria-hidden
                className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl animate-[h3-breathe_5s_ease-in-out_infinite]"
                style={{ background: "rgba(217,44,45,0.35)" }}
              />

              {/* Leg image */}
              <img
                src={legImg}
                alt="Human leg anatomy showing vascular structures"
                className="absolute inset-0 h-full w-full object-cover object-center mix-blend-luminosity opacity-95 animate-[h3-zoom_18s_ease-in-out_infinite]"
                loading="eager"
                fetchPriority="high"
              />
              {/* Color overlay to blend into purple */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(65,48,92,0.15) 0%, rgba(65,48,92,0.55) 100%)",
                }}
              />

              {/* Dotted connector lines */}
              <svg
                aria-hidden
                viewBox="0 0 600 750"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 130 200 Q 220 250 300 320"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.5"
                  strokeDasharray="3 6"
                  fill="none"
                />
                <path
                  d="M 470 460 Q 400 480 340 500"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.5"
                  strokeDasharray="3 6"
                  fill="none"
                />
              </svg>

              {/* Zoom callout 1 - top left */}
              <div
                className="absolute left-4 top-8 sm:left-6 sm:top-12 animate-[h3-pop_0.7s_cubic-bezier(0.16,1,0.3,1)_both]"
                style={{ animationDelay: "0.7s" }}
              >
                <div
                  className="grid h-24 w-24 place-items-center rounded-full border-2 sm:h-28 sm:w-28 animate-[h3-breathe_4s_ease-in-out_infinite]"
                  style={{
                    borderColor: "rgba(255,255,255,0.6)",
                    background:
                      "radial-gradient(circle, rgba(217,44,45,0.4), rgba(65,48,92,0.15))",
                    boxShadow:
                      "0 0 30px rgba(217,44,45,0.45), inset 0 0 20px rgba(255,255,255,0.15)",
                  }}
                >
                  <Search className="h-8 w-8 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Zoom callout 2 - bottom right */}
              <div
                className="absolute right-4 bottom-32 sm:right-8 sm:bottom-40 animate-[h3-pop_0.7s_cubic-bezier(0.16,1,0.3,1)_both]"
                style={{ animationDelay: "0.9s" }}
              >
                <div
                  className="grid h-24 w-24 place-items-center rounded-full border-2 sm:h-28 sm:w-28 animate-[h3-breathe_4.5s_ease-in-out_infinite]"
                  style={{
                    borderColor: "rgba(255,255,255,0.6)",
                    background:
                      "radial-gradient(circle, rgba(109,75,168,0.45), rgba(65,48,92,0.15))",
                    boxShadow:
                      "0 0 30px rgba(109,75,168,0.5), inset 0 0 20px rgba(255,255,255,0.15)",
                  }}
                >
                  <Microscope className="h-8 w-8 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Floating medical icons */}
              <div className="absolute right-8 top-16 animate-[h3-float_5s_ease-in-out_infinite]">
                <div
                  className="grid h-11 w-11 place-items-center rounded-2xl text-white"
                  style={{
                    background: "rgba(255,255,255,0.14)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <Plus className="h-5 w-5" />
                </div>
              </div>
              <div
                className="absolute left-10 bottom-48 animate-[h3-float_6s_ease-in-out_infinite]"
                style={{ animationDelay: "0.8s" }}
              >
                <div
                  className="grid h-11 w-11 place-items-center rounded-2xl text-white"
                  style={{
                    background: "rgba(255,255,255,0.14)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <HeartPulse className="h-5 w-5" />
                </div>
              </div>

              {/* Info card: Varicose Veins - top right */}
              <div
                className="absolute right-3 top-6 max-w-[180px] rounded-2xl p-3 sm:right-[-14px] sm:top-40 sm:max-w-[210px] animate-[h3-fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_both]"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.4)",
                  animationDelay: "1.1s",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="grid h-8 w-8 place-items-center rounded-lg text-white"
                    style={{ background: "linear-gradient(135deg,#D92C2D,#6D4BA8)" }}
                  >
                    <HeartPulse className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-[#41305C]">
                    Varicose Veins
                  </span>
                </div>
                <p className="mt-2 text-[0.7rem] leading-snug text-[#41305C]/70">
                  Advanced laser treatment for enlarged, twisted veins.
                </p>
              </div>

              {/* Info card: AV Fistula - bottom left */}
              <div
                className="absolute left-3 bottom-6 max-w-[190px] rounded-2xl p-3 sm:left-[-18px] sm:bottom-16 sm:max-w-[220px] animate-[h3-fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_both]"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.4)",
                  animationDelay: "1.3s",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="grid h-8 w-8 place-items-center rounded-lg text-white"
                    style={{ background: "linear-gradient(135deg,#41305C,#6D4BA8)" }}
                  >
                    <Droplets className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-[#41305C]">
                    AV Fistula
                  </span>
                </div>
                <p className="mt-2 text-[0.7rem] leading-snug text-[#41305C]/70">
                  Dialysis access with expert simple &amp; complex creation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============ FEATURE STRIP ============ */}
        <div
          className="relative mx-auto mt-16 max-w-[1440px] px-5 lg:px-10 animate-[h3-fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_both]"
          style={{ animationDelay: "0.6s" }}
        >
          <div
            className="grid grid-cols-2 gap-3 rounded-3xl border p-4 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.95), rgba(255,255,255,0.7))",
              borderColor: "rgba(65,48,92,0.1)",
              backdropFilter: "blur(16px) saturate(160%)",
              boxShadow: "0 24px 60px -30px rgba(65,48,92,0.35)",
            }}
          >
            {featureStrip.map((f) => (
              <div
                key={f.label}
                className="group flex flex-col items-center gap-2 rounded-2xl p-3 text-center transition-all duration-300 hover:scale-[1.03] hover:bg-white hover:shadow-lg"
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl text-white transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(135deg,#41305C 0%,#6D4BA8 60%,#D92C2D 100%)",
                  }}
                >
                  <f.icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold text-[#41305C] sm:text-sm">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local keyframes */}
      <style>{`
        @keyframes h3-fade-left {
          from { opacity: 0; transform: translateX(-40px); filter: blur(6px); }
          to { opacity: 1; transform: none; filter: blur(0); }
        }
        @keyframes h3-fade-right {
          from { opacity: 0; transform: translateX(40px) scale(0.94); filter: blur(6px); }
          to { opacity: 1; transform: none; filter: blur(0); }
        }
        @keyframes h3-fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes h3-pop {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes h3-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes h3-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes h3-breathe {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.06); opacity: 1; }
        }
        @keyframes h3-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes gradient-shift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 30px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[h3-"] { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
