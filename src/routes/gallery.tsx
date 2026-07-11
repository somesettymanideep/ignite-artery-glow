import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { FloatingEmergency } from "@/components/home/FloatingEmergency";
import { SubBanner } from "@/components/home/SubBanner";
import heroReception from "@/assets/about-reception.jpg";
import galleryBanner from "@/assets/why-choose.jpg";
import g1 from "@/assets/contact-building.jpg";
import g2 from "@/assets/about-surgery.jpg";
import g3 from "@/assets/doctor-portrait.jpg";
import g4 from "@/assets/about-vascular.jpg";
import g5 from "@/assets/contact-services.jpg";
import g6 from "@/assets/why-choose.jpg";
import g7 from "@/assets/home2-doctor.jpg";
import g8 from "@/assets/hero-surgeon.jpg";
import g9 from "@/assets/home2-hero.jpg";
import g10 from "@/assets/second-opinion-hero.jpg";
import g11 from "@/assets/about-reception.jpg";
import g12 from "@/assets/about-surgery.jpg";

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
  { src: g1, alt: "Hospital Exterior", cat: "Center & Facilities" },
  { src: g2, alt: "Operation Theatre", cat: "Procedures" },
  { src: g3, alt: "Doctor Consulting Patient", cat: "Patient Care" },
  { src: g4, alt: "Cath Lab Equipment", cat: "Center & Facilities" },
  { src: g5, alt: "Reception Desk", cat: "Center & Facilities" },
  { src: g6, alt: "Patient Room", cat: "Patient Care" },
  { src: g7, alt: "Medical Team", cat: "Our Team" },
  { src: g8, alt: "Surgeon Operating", cat: "Procedures" },
  { src: g9, alt: "Waiting Lounge", cat: "Center & Facilities" },
  { src: g10, alt: "Doctor Consultation", cat: "Patient Care" },
  { src: g11, alt: "Hospital Inauguration", cat: "Events & Camps" },
  { src: g12, alt: "Cath Lab Interior", cat: "Center & Facilities" },
];

function GalleryTwoPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? IMAGES : IMAGES.filter((i) => i.cat === active);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length],
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, close, next, prev]);

  // Reset lightbox when filter changes to avoid stale index
  useEffect(() => {
    setLightbox(null);
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
              <figure
                onClick={() => setLightbox(i)}
                className="group relative h-56 cursor-zoom-in overflow-hidden rounded-[14px] shadow-soft sm:h-60 lg:h-64"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70">{img.cat}</span>
                  <p className="mt-1 font-display text-base font-bold">{img.alt}</p>
                </figcaption>
              </figure>
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
              <a
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-secondary shadow-lift transition-transform duration-300 hover:scale-105"
              >
                Book an Appointment <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
      <FloatingEmergency />

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={filtered[lightbox].alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] max-w-[92vw] flex-col items-center gap-4 animate-scale-in"
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-h-[78vh] max-w-full rounded-[10px] object-contain shadow-lift"
            />
            <figcaption className="w-full max-w-2xl text-center">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/60">
                {filtered[lightbox].cat}
              </span>
              <p className="mt-1 font-display text-lg font-bold text-white">
                {filtered[lightbox].alt}
              </p>
              <p className="mt-1 text-xs text-white/50">
                {lightbox + 1} / {filtered.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

