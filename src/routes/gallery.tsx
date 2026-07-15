import { createFileRoute } from "@tanstack/react-router";
import { openBookingModal } from "@/components/booking/BookingModal";
import { useState, useEffect, useCallback, useRef } from "react";

import {
  Image as ImageIcon,
  Users,
  MessageSquareHeart,
  ShieldCheck,
  Download,
  Calendar,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,

} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { FloatingEmergency } from "@/components/home/FloatingEmergency";
import { SubBanner } from "@/components/home/SubBanner";
import heroReceptionAsset from "@/assets/gallery-hero.png.asset.json";
const heroReception = heroReceptionAsset.url;
import galleryBannerAsset from "@/assets/gallery-hero.png.asset.json";
const galleryBanner = galleryBannerAsset.url;
import gFacilityExterior from "@/assets/gallery/facility-exterior.jpg";
import gFacilityReception from "@/assets/gallery/facility-reception.jpg";
import gFacilityCathlab from "@/assets/gallery/facility-cathlab.jpg";
import gFacilityRoom from "@/assets/gallery/facility-room.jpg";
import gTeamGroup from "@/assets/gallery/team-group.jpg";
import gTeamSurgeon from "@/assets/gallery/team-surgeon.jpg";
import gProcedureSurgery from "@/assets/gallery/procedure-surgery.jpg";
import gProcedureAngio from "@/assets/gallery/procedure-angio.jpg";
import gEventCamp from "@/assets/gallery/event-camp.jpg";
import gEventInauguration from "@/assets/gallery/event-inauguration.jpg";
import gPatientConsult from "@/assets/gallery/patient-consult.jpg";
import gPatientCare from "@/assets/gallery/patient-care.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ignite Vascular Center, Vijayawada" },
      { name: "description", content: "Explore our facilities, team, procedures and moments of care at Ignite Vascular Center." },
      { property: "og:title", content: "Gallery — Ignite Vascular Center" },
      { property: "og:description", content: "A glimpse into our center, our team, and the care we provide every day." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryTwoPage,
});

const FEATURES = [
  { icon: ImageIcon, title: "Modern Facilities", desc: "State-of-the-art infrastructure" },
  { icon: Users, title: "Expert Team", desc: "Experienced & dedicated specialists" },
  { icon: MessageSquareHeart, title: "Patient Comfort", desc: "Designed for your care and convenience" },
  { icon: ShieldCheck, title: "Trusted Care", desc: "Compassionate care you can rely on" },
];

const CATEGORIES = ["All", "Center & Facilities", "Our Team", "Procedures", "Events & Camps", "Patient Care"];

const IMAGES: { src: string; alt: string; cat: string }[] = [
  { src: gFacilityExterior, alt: "Hospital Exterior", cat: "Center & Facilities" },
  { src: gFacilityReception, alt: "Reception & Waiting Lounge", cat: "Center & Facilities" },
  { src: gFacilityCathlab, alt: "Advanced Cath Lab", cat: "Center & Facilities" },
  { src: gFacilityRoom, alt: "Patient Recovery Room", cat: "Center & Facilities" },
  { src: gTeamGroup, alt: "Our Medical Team", cat: "Our Team" },
  { src: gTeamSurgeon, alt: "Vascular Surgeon", cat: "Our Team" },
  { src: gProcedureSurgery, alt: "Endovascular Surgery", cat: "Procedures" },
  { src: gProcedureAngio, alt: "Angiography Procedure", cat: "Procedures" },
  { src: gEventCamp, alt: "Free Health Check-up Camp", cat: "Events & Camps" },
  { src: gEventInauguration, alt: "Hospital Inauguration", cat: "Events & Camps" },
  { src: gPatientConsult, alt: "Doctor Consultation", cat: "Patient Care" },
  { src: gPatientCare, alt: "Compassionate Bedside Care", cat: "Patient Care" },
];

function GalleryTwoPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? IMAGES : IMAGES.filter((i) => i.cat === active);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerIndex = useRef<number | null>(null);

  const open = useCallback((i: number) => {
    lastTriggerIndex.current = i;
    setLightbox(i);
  }, []);
  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length],
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );

  // Keyboard + body scroll lock + focus trap
  useEffect(() => {
    if (lightbox === null) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusable = () => {
      const root = dialogRef.current;
      if (!root) return [] as HTMLElement[];
      return Array.from(
        root.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled"));
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowRight") {
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "Tab") {
        const focusables = getFocusable();
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const activeEl = document.activeElement as HTMLElement | null;
        if (e.shiftKey && activeEl === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && activeEl === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog on next frame (after mount)
    const raf = requestAnimationFrame(() => {
      closeBtnRef.current?.focus();
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      // Return focus to the trigger that opened the lightbox
      const idx = lastTriggerIndex.current;
      const trigger = idx !== null ? triggerRefs.current[idx] : null;
      (trigger ?? previouslyFocused)?.focus?.();
    };
  }, [lightbox, close, next, prev]);

  // Preload neighbours for snappier transitions
  useEffect(() => {
    if (lightbox === null || filtered.length === 0) return;
    const nextIdx = (lightbox + 1) % filtered.length;
    const prevIdx = (lightbox - 1 + filtered.length) % filtered.length;
    [nextIdx, prevIdx].forEach((i) => {
      const img = new Image();
      img.decoding = "async";
      img.src = filtered[i].src;
    });
  }, [lightbox, filtered]);

  // Reset lightbox when filter changes to avoid stale index
  useEffect(() => {
    setLightbox(null);
    triggerRefs.current = [];
  }, [active]);


  return (
    <div className="min-h-screen overflow-x-hidden bg-background">

      <Navbar />
      <SubBanner title="Gallery" crumb="Gallery" image={galleryBanner} />

      {/* Hero with curved arc divider */}
      <section className="relative pt-12 lg:pt-16">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-[20px] bg-[#f5f6f8]">
            <div className="grid items-center gap-0 lg:grid-cols-2">
              {/* Left copy */}
              <Reveal variant="left" className="relative z-10 px-8 py-14 lg:px-14 lg:py-20">
                <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-primary">Gallery</span>
                <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-5xl">
                  Moments of Care <br />
                  <span className="text-primary">That Inspire Trust</span>
                </h1>
                <div className="mt-5 h-[3px] w-24 rounded-full bg-secondary/60" />
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                  A glimpse into our center, our team, and the care we provide every day.
                </p>
              </Reveal>

              {/* Right image with curved arc */}
              <Reveal variant="right" className="relative h-[320px] lg:h-[420px]">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 600 500"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#5A2D91" />
                      <stop offset="100%" stopColor="#E53935" />
                    </linearGradient>
                    <clipPath id="arc-clip">
                      <path d="M120,0 C60,120 60,380 120,500 L600,500 L600,0 Z" />
                    </clipPath>
                  </defs>
                  <path
                    d="M120,0 C60,120 60,380 120,500"
                    stroke="url(#arc-grad)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <foreignObject x="0" y="0" width="600" height="500" clipPath="url(#arc-clip)">
                    <img
                      src={heroReception}
                      alt="Ignite Vascular Center reception"
                      className="h-full w-full object-cover"
                      style={{ height: "500px", width: "600px" }}
                    />
                  </foreignObject>
                </svg>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="relative -mt-8 pb-4">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-4 rounded-[16px] border border-border/70 bg-white p-5 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} variant="up" delay={i * 0.08}>
                <div className="flex items-start gap-4 p-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-secondary">{f.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Category nav */}
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8">
        <Reveal variant="up">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-nowrap items-center gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0">
              {CATEGORIES.map((c) => {
                const on = c === active;
                return (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    aria-pressed={on}
                    className={`relative shrink-0 rounded-[8px] px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      on
                        ? "bg-primary text-primary-foreground shadow-glow-red ring-2 ring-primary/40 ring-offset-2 ring-offset-background scale-[1.03]"
                        : "bg-transparent text-secondary hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {c}
                    {on && (
                      <span className="pointer-events-none absolute -bottom-1.5 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-primary" />
                    )}
                  </button>

                );
              })}
            </div>
            <button className="inline-flex items-center gap-2 rounded-[8px] border-2 border-secondary/30 px-5 py-2.5 text-sm font-bold text-secondary transition-all hover:border-secondary hover:bg-secondary hover:text-secondary-foreground">
              Download Brochure <Download className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </section>

      {/* Gallery uniform grid */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img, i) => (
            <Reveal key={`${img.alt}-${i}`} variant="up" delay={(i % 3) * 0.08}>
              <button
                type="button"
                ref={(el) => { triggerRefs.current[i] = el; }}
                onClick={() => open(i)}
                aria-label={`Open image: ${img.alt}`}
                aria-haspopup="dialog"
                className="group relative block h-56 w-full cursor-zoom-in overflow-hidden rounded-[14px] text-left shadow-soft outline-none ring-primary/60 transition focus-visible:ring-2 focus-visible:ring-offset-2 sm:h-60 lg:h-64"
              >
                <figure className="contents">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full bg-white/95 text-primary opacity-0 shadow-lift ring-1 ring-white/60 backdrop-blur transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
                  >
                    <ZoomIn className="h-6 w-6" />
                  </span>
                  <figcaption className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70">{img.cat}</span>
                    <p className="mt-1 font-display text-base font-bold">{img.alt}</p>

                  </figcaption>

                </figure>
              </button>
            </Reveal>
          ))}

        </div>
      </section>


      {/* CTA banner */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <Reveal variant="zoom">
          <div
            className="relative overflow-hidden rounded-[16px] p-6 shadow-lift sm:p-10"
            style={{ background: "linear-gradient(90deg, #5A2D91 0%, #E53935 100%)" }}
          >
            <svg className="pointer-events-none absolute -right-6 top-0 h-full w-1/2 opacity-20" viewBox="0 0 400 400" fill="none" aria-hidden>
              <path d="M20 200 C 100 100, 200 300, 300 180 S 500 220, 580 120" stroke="white" strokeWidth="2" />
              <path d="M20 260 C 120 200, 220 360, 320 240 S 500 300, 580 200" stroke="white" strokeWidth="2" />
              <path d="M20 320 C 140 260, 240 400, 340 300 S 500 360, 580 260" stroke="white" strokeWidth="2" />
            </svg>
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="flex items-center gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-primary">
                  <Calendar className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    Experience World-Class Vascular Care
                  </h2>
                  <p className="mt-2 max-w-xl text-sm text-white/85">
                    Book an appointment with our experts today.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-secondary shadow-lift transition-transform duration-300 hover:scale-105"
              >
                Book an Appointment <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
      <FloatingEmergency />

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          aria-describedby="lightbox-desc"
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white outline-none transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white outline-none transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/70 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white outline-none transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/70 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] max-w-[92vw] flex-col items-center gap-4 animate-scale-in"
          >
            <img
              key={filtered[lightbox].src}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              loading="eager"
              decoding="async"
              // @ts-expect-error fetchpriority is a valid HTML attribute
              fetchpriority="high"
              className="max-h-[78vh] max-w-full rounded-[10px] object-contain shadow-lift"
            />
            <figcaption id="lightbox-desc" className="w-full max-w-2xl text-center">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/60">
                {filtered[lightbox].cat}
              </span>
              <p id="lightbox-title" className="mt-1 font-display text-lg font-bold text-white">
                {filtered[lightbox].alt}
              </p>
              <p className="mt-1 text-xs text-white/50" aria-live="polite">
                {lightbox + 1} / {filtered.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}

    </div>
  );
}

