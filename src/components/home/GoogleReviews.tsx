import { useCallback, useEffect, useRef, useState } from "react";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const REVIEWS = [
  {
    name: "Ramesh Babu",
    initial: "R",
    when: "2 weeks ago",
    rating: 5,
    text: "Excellent care at Ignite Vascular Center. My varicose vein laser treatment was quick and painless. Doctor explained everything clearly and the staff were very supportive throughout. Highly recommended!",
    color: "#1a73e8",
  },
  {
    name: "Lakshmi Devi",
    initial: "L",
    when: "1 month ago",
    rating: 5,
    text: "My father's diabetic foot was healing nowhere. The team here saved his leg with expert vascular care and constant follow-up. Forever grateful to Dr. Arvind and team.",
    color: "#c5221f",
  },
  {
    name: "Suresh Chandra",
    initial: "S",
    when: "3 weeks ago",
    rating: 5,
    text: "Angioplasty for my leg artery was done with great precision. The doctor is patient, kind, and highly skilled. I can walk without pain again after 3 years!",
    color: "#188038",
  },
  {
    name: "Padmavathi K",
    initial: "P",
    when: "2 months ago",
    rating: 5,
    text: "For my dialysis fistula, procedure went smoothly and access works perfectly. Staff treated me like family. World-class facility right here in Vijayawada.",
    color: "#b06000",
  },
  {
    name: "Naveen Kumar",
    initial: "N",
    when: "1 week ago",
    rating: 5,
    text: "Very modern clinic with advanced technology. Consultation was thorough and transparent about costs. The endovascular procedure was truly minimally invasive.",
    color: "#1a73e8",
  },
  {
    name: "Anjali Reddy",
    initial: "A",
    when: "5 weeks ago",
    rating: 5,
    text: "Best vascular specialist in Vijayawada. Clean facility, on-time appointments and a doctor who actually listens. My mother's DVT treatment went perfectly.",
    color: "#c5221f",
  },
];

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.3l-6.2-5.2c-2 1.5-4.5 2.5-7.2 2.5-5.3 0-9.7-3.4-11.3-8l-6.5 5C9.5 39.7 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.5l6.2 5.2C41.6 35.2 44 30 44 24c0-1.3-.1-2.3-.4-3.5z" />
    </svg>
  );
}

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

export function GoogleReviews() {
  const perView = useSlidesPerView();
  const total = REVIEWS.length;
  const maxIndex = Math.max(0, total - perView);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const next = useCallback(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? maxIndex : i - 1)), [maxIndex]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next, paused]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  const pages = maxIndex + 1;
  const slideBasis = `${100 / perView}%`;

  return (
    <section
      id="google-reviews"
      aria-labelledby="google-reviews-heading"
      className="relative overflow-hidden bg-surface py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-primary/8 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-xs font-bold text-secondary">
            <GoogleG className="h-4 w-4" /> Google Reviews
          </div>
          <h2 id="google-reviews-heading" className="mt-4 font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            Trusted by Patients on <span className="text-gradient">Google</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-brand" />
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="font-display text-4xl font-extrabold text-secondary">4.9</span>
            <div className="text-left">
              <div className="flex gap-0.5" role="img" aria-label="Average rating 4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F9A825] text-[#F9A825]" aria-hidden />
                ))}
              </div>
              <p className="text-xs font-semibold text-foreground/80">Based on 320+ Google reviews</p>
            </div>
          </div>
        </Reveal>

        <Reveal variant="up" delay={0.1} className="relative mt-14">
          <div
            className="group/slider relative"
            role="region"
            aria-roledescription="carousel"
            aria-label="Google patient reviews"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="overflow-hidden rounded-2xl">
              <div
                ref={trackRef}
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
                aria-live="polite"
              >
                {REVIEWS.map((r, i) => {
                  const isVisible = i >= index && i < index + perView;
                  return (
                    <div
                      key={r.name}
                      className="shrink-0 px-3 py-2"
                      style={{ flexBasis: slideBasis, transitionDelay: `${(i - index) * 90}ms` }}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${i + 1} of ${total}`}
                      aria-hidden={!isVisible}
                    >
                      <article
                        className={`flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift focus-within:-translate-y-1.5 focus-within:shadow-lift ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-40 translate-y-2"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <span
                              className="grid h-11 w-11 place-items-center rounded-full font-display text-base font-extrabold text-white"
                              style={{ backgroundColor: r.color }}
                              aria-hidden
                            >
                              {r.initial}
                            </span>
                            <div>
                              <p className="font-display text-sm font-bold text-secondary">{r.name}</p>
                              <p className="text-[11px] font-semibold text-foreground/70">Local Guide · {r.when}</p>
                            </div>
                          </div>
                          <GoogleG className="h-5 w-5 shrink-0" />
                        </div>

                        <div className="mt-4 flex gap-0.5" role="img" aria-label={`${r.rating} out of 5 stars`}>
                          {Array.from({ length: r.rating }).map((_, s) => (
                            <Star key={s} className="h-4 w-4 fill-[#F9A825] text-[#F9A825]" aria-hidden />
                          ))}
                        </div>

                        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">“{r.text}”</p>

                        <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-[11px] font-bold uppercase tracking-wider">
                          <span className="text-foreground/70">Posted on Google</span>
                          <span className="inline-flex items-center gap-1 text-primary">
                            Helpful <ExternalLink className="h-3 w-3" aria-hidden />
                          </span>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous reviews"
              aria-controls="google-reviews-heading"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white text-secondary shadow-soft ring-1 ring-border/70 transition-all duration-300 hover:scale-110 hover:ring-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:-left-4"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next reviews"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white text-secondary shadow-soft ring-1 ring-border/70 transition-all duration-300 hover:scale-110 hover:ring-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:-right-4"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Select review slide">
            {Array.from({ length: pages }).map((_, i) => {
              const active = i === index;
              return (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active}
                  aria-label={`Go to slide ${i + 1} of ${pages}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    active ? "w-8 bg-gradient-brand" : "w-2.5 bg-border hover:bg-primary/40"
                  }`}
                />
              );
            })}
          </div>
        </Reveal>

        <Reveal variant="up" delay={0.15} className="mt-12 flex justify-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ignite+Vascular+Center+Vijayawada"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read all reviews on Google (opens in a new tab)"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-secondary shadow-soft ring-1 ring-border/70 transition-all duration-300 hover:shadow-lift hover:ring-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <GoogleG className="h-4 w-4" /> Read all reviews on Google
            <ExternalLink className="h-4 w-4 text-primary" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
