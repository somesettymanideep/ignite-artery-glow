import { useCallback, useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, BadgeCheck } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

type Testimonial = {
  name: string;
  location: string;
  treatment: string;
  text: string;
  color: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ramesh Babu",
    location: "Vijayawada",
    treatment: "Varicose Vein Laser",
    text: "I suffered from painful varicose veins for years. The laser treatment at Ignite Vascular was quick and almost painless — I walked home the same day. Truly world-class care.",
    color: "#c5221f",
  },
  {
    name: "Lakshmi Devi",
    location: "Guntur",
    treatment: "Diabetic Foot Care",
    text: "My father's diabetic foot ulcer was healing nowhere for months. The team here saved his leg with expert vascular care and constant follow-up. We are forever grateful.",
    color: "#41305c",
  },
  {
    name: "Suresh Chandra",
    location: "Eluru",
    treatment: "Leg Artery Angioplasty",
    text: "The angioplasty for my blocked leg artery was done with such precision. The doctor explained everything patiently. I can walk without pain again after 3 years.",
    color: "#1a73e8",
  },
  {
    name: "Padmavathi K",
    location: "Machilipatnam",
    treatment: "Dialysis Fistula",
    text: "For my dialysis fistula, I was nervous, but the procedure went smoothly and the access works perfectly. The staff treated me like family throughout.",
    color: "#188038",
  },
  {
    name: "Naveen Kumar",
    location: "Tenali",
    treatment: "DVT Treatment",
    text: "Modern clinic with advanced technology. The consultation was thorough and transparent about costs. My DVT treatment was truly minimally invasive.",
    color: "#b06000",
  },
];

function useSlidesPerView() {
  const [n, setN] = useState(1);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setN(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return n;
}

export function Testimonials() {
  const perView = useSlidesPerView();
  const total = TESTIMONIALS.length;
  const [index, setIndex] = useState(0); // 0..total; `total` sits on cloned first slide
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLDivElement | null>(null);

  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => {
    setIndex((i) => {
      if (i <= 0) {
        // jump to cloned tail, then animate to real last on next tick
        setAnimate(false);
        return total;
      }
      return i - 1;
    });
  }, [total]);

  // After a jump (no-anim), re-enable animation and step to target
  useEffect(() => {
    if (animate) return;
    // If we jumped to `total`, animate back one step to show last real slide
    if (index === total) {
      const raf = requestAnimationFrame(() => {
        setAnimate(true);
        setIndex(total - 1);
      });
      return () => cancelAnimationFrame(raf);
    }
    // If we jumped to 0, just re-enable animation
    const raf = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(raf);
  }, [animate, index, total]);

  // After forward wrap: when index reaches `total` (cloned first slide), snap to 0
  const onTransitionEnd = () => {
    if (index >= total) {
      setAnimate(false);
      setIndex(0);
    }
  };

  useEffect(() => {
    if (paused) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, paused]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "Home") {
      e.preventDefault();
      setAnimate(true);
      setIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setAnimate(true);
      setIndex(total - 1);
    }
  };

  const slideBasis = `${100 / perView}%`;
  // Duplicate first `perView` slides at the end for seamless loop
  const rendered = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, perView)];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-gradient-to-b from-surface via-background to-surface py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            <BadgeCheck className="h-4 w-4" aria-hidden /> Patient Stories
          </span>
          <h2
            id="testimonials-heading"
            className="mt-4 font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl lg:text-5xl"
          >
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-brand" />
          <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/75 sm:text-base">
            Real experiences from patients who trusted us with their vascular
            health journey.
          </p>
        </Reveal>

        <Reveal variant="up" delay={0.1} className="relative mt-14">
          <div
            ref={regionRef}
            className="relative"
            role="region"
            aria-roledescription="carousel"
            aria-label="Patient testimonials"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="overflow-hidden rounded-3xl">
              <ul
                className={`flex ${animate ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
                style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
                aria-live="polite"
                onTransitionEnd={onTransitionEnd}
              >
                {rendered.map((t, i) => {
                  const realIndex = i % total;
                  return (
                    <li
                      key={`${t.name}-${i}`}
                      className="shrink-0 px-3 py-2"
                      style={{ flexBasis: slideBasis }}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${realIndex + 1} of ${total}`}
                    >
                      <article
                        className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift focus-within:-translate-y-1.5 focus-within:border-primary/40 focus-within:shadow-lift sm:p-7"
                      >
                        <Quote
                          className="h-9 w-9 text-primary/25 transition-transform duration-500 group-hover:scale-110"
                          aria-hidden
                        />
                        <div
                          className="mt-3 flex gap-0.5"
                          role="img"
                          aria-label="Rated 5 out of 5 stars"
                        >
                          {Array.from({ length: 5 }).map((_, s) => (
                            <Star
                              key={s}
                              className="h-4 w-4 fill-[#F9A825] text-[#F9A825]"
                              aria-hidden
                            />
                          ))}
                        </div>
                        <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/85">
                          <p>“{t.text}”</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                          <span
                            className="grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-base font-extrabold text-white shadow-soft"
                            style={{ backgroundColor: t.color }}
                            aria-hidden
                          >
                            {t.name.charAt(0)}
                          </span>
                          <div className="min-w-0">
                            <p className="flex items-center gap-1.5 truncate font-display text-sm font-bold text-secondary">
                              {t.name}
                              <BadgeCheck
                                className="h-4 w-4 shrink-0 text-primary"
                                aria-label="Verified patient"
                              />
                            </p>
                            <p className="flex items-center gap-1 truncate text-xs font-semibold text-foreground/70">
                              <MapPin className="h-3 w-3 shrink-0" aria-hidden />
                              {t.location}
                            </p>
                            <p className="mt-1 inline-flex max-w-full truncate rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                              {t.treatment}
                            </p>
                          </div>
                        </figcaption>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-secondary shadow-soft ring-1 ring-border/70 transition-all duration-300 hover:scale-110 hover:ring-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:grid lg:-left-4"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-secondary shadow-soft ring-1 ring-border/70 transition-all duration-300 hover:scale-110 hover:ring-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:grid lg:-right-4"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-secondary shadow-soft ring-1 ring-border/70 transition-all duration-300 hover:scale-110 hover:ring-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:hidden"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Select testimonial slide"
            >
              {TESTIMONIALS.map((_, i) => {
                const active = i === index % total;
                return (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={active}
                    aria-label={`Go to slide ${i + 1} of ${total}`}
                    onClick={() => {
                      setAnimate(true);
                      setIndex(i);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      active
                        ? "w-8 bg-gradient-brand"
                        : "w-2.5 bg-border hover:bg-primary/40"
                    }`}
                  />
                );
              })}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-secondary shadow-soft ring-1 ring-border/70 transition-all duration-300 hover:scale-110 hover:ring-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:hidden"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
