import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2, Users, HeartHandshake, ShieldCheck, Plus, Calendar, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import heroReception from "@/assets/about-reception.jpg";
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
  component: GalleryPage,
});

const FEATURES = [
  { icon: Building2, title: "Modern Facilities", desc: "State-of-the-art infrastructure" },
  { icon: Users, title: "Expert Team", desc: "Experienced & dedicated specialists" },
  { icon: HeartHandshake, title: "Patient Comfort", desc: "Designed for your care and convenience" },
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

function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? IMAGES : IMAGES.filter((i) => i.cat === active);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute top-32 -right-32 h-[460px] w-[460px] rounded-full bg-secondary/15 blur-3xl" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal variant="left">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Gallery</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-5xl lg:text-6xl">
              Moments of Care <br />
              <span className="text-gradient">That Inspire Trust</span>
            </h1>
            <div className="mt-6 h-[3px] w-24 rounded-full bg-secondary/60" />
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              A glimpse into our center, our team, and the care we provide every day.
            </p>
          </Reveal>

          <Reveal variant="right" className="relative">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-brand opacity-20 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-lift">
                <img src={heroReception} alt="Ignite Vascular Center reception" className="h-[420px] w-full object-cover sm:h-[480px]" />
              </div>
              <div className="glass-card animate-float absolute -left-4 top-8 rounded-2xl px-4 py-3 text-sm font-bold sm:-left-10">
                Premium Care
              </div>
              <div className="glass-card animate-float-slower absolute -right-4 bottom-10 rounded-2xl px-4 py-3 text-sm font-bold sm:-right-8">
                Trusted Experts
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature cards */}
      <section className="relative py-8">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} variant="up" delay={i * 0.08}>
              <div className="hover-lift group h-full rounded-[18px] border border-border/60 bg-card p-6 shadow-soft">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-secondary">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Category nav */}
      <section className="mx-auto max-w-7xl px-5 pt-16 lg:px-8">
        <Reveal variant="up">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-nowrap items-center gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0">
              {CATEGORIES.map((c) => {
                const on = c === active;
                return (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      on
                        ? "bg-primary text-primary-foreground shadow-glow-red"
                        : "border border-border bg-card text-secondary hover:border-primary hover:text-primary"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/40 px-5 py-2.5 text-sm font-bold text-secondary transition-all hover:border-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Plus className="h-4 w-4" /> Download Brochure
            </button>
          </div>
        </Reveal>
      </section>

      {/* Gallery grid */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img, i) => {
            // Vary heights for masonry feel
            const heights = ["h-64", "h-80", "h-72", "h-72", "h-64", "h-80", "h-80", "h-72", "h-64", "h-64", "h-80", "h-72"];
            const h = heights[i % heights.length];
            return (
              <Reveal key={`${img.alt}-${i}`} variant="up" delay={(i % 3) * 0.08}>
                <figure className={`group relative overflow-hidden rounded-[18px] shadow-soft ${h}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <figcaption className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/70">{img.cat}</span>
                    <p className="mt-1 font-display text-lg font-bold">{img.alt}</p>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Reveal variant="zoom">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-cta p-8 shadow-lift sm:p-12 lg:p-16">
            <svg className="pointer-events-none absolute -right-10 top-0 h-full w-1/2 opacity-15" viewBox="0 0 400 400" fill="none" aria-hidden>
              <path d="M20 200 C 100 100, 200 300, 300 180 S 500 220, 580 120" stroke="white" strokeWidth="2" />
              <path d="M20 260 C 120 200, 220 360, 320 240 S 500 300, 580 200" stroke="white" strokeWidth="2" />
              <path d="M20 320 C 140 260, 240 400, 340 300 S 500 360, 580 260" stroke="white" strokeWidth="2" />
            </svg>
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="flex items-start gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                  <Calendar className="h-8 w-8" />
                </span>
                <div>
                  <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                    Experience World-Class Vascular Care
                  </h2>
                  <p className="mt-3 max-w-xl text-white/85">
                    Book an appointment with our experts today.
                  </p>
                </div>
              </div>
              <a
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-secondary shadow-lift transition-transform duration-300 hover:scale-105"
              >
                Book an Appointment <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
