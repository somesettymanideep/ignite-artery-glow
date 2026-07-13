import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import handsHeart from "@/assets/testimonial-hands-heart.jpg";

const testimonials = [
  {
    name: "Ramesh Babu",
    role: "Patient",
    text:
      "Dr. Narasimha Sai garu explained my condition clearly and treated me with great care. The varicose vein laser procedure was painless and the results are amazing. Highly recommended!",
  },
  {
    name: "Lakshmi Devi",
    role: "Patient",
    text:
      "My father's diabetic foot ulcer was healing nowhere for months. The team here saved his leg with expert vascular care and constant follow-up. We are forever grateful.",
  },
  {
    name: "Suresh Chandra",
    role: "Patient",
    text:
      "The angioplasty for my blocked leg artery was done with such precision. The doctor explained everything patiently. I can walk without pain again after 3 years.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const active = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-background"
    >
      {/* Top gradient strip */}
      <div
        aria-hidden
        className="h-2 w-full"
        style={{
          background:
            "linear-gradient(90deg, #d92c2d 0%, #a02466 50%, #311261 100%)",
        }}
      />

      <div className="relative py-14 sm:py-20">
        {/* Right-side hands & heart image */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:block"
        >
          <img
            src={handsHeart}
            alt=""
            loading="lazy"
            width={1024}
            height={1024}
            className="h-56 w-56 object-contain lg:h-72 lg:w-72"
          />
        </div>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          {/* Heading */}
          <div className="text-center">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">
              What Our Patients Say
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-3 block h-[3px] w-14 rounded-full bg-primary"
            />
          </div>

          {/* Carousel */}
          <div className="relative mt-10 flex items-center justify-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-muted/60 text-secondary transition-all duration-300 hover:-translate-x-0.5 hover:bg-muted"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
            </button>

            <figure className="relative w-full max-w-2xl">
              <div className="relative rounded-2xl bg-muted/40 px-6 py-8 shadow-sm ring-1 ring-border/60 sm:px-10 sm:py-10">
                {/* Opening quote */}
                <span
                  aria-hidden
                  className="absolute left-5 top-4 font-display text-5xl font-black leading-none text-primary sm:left-6 sm:top-5"
                >
                  &#8220;
                </span>

                <blockquote
                  key={active.name}
                  className="animate-fade-in text-center text-sm leading-relaxed text-secondary sm:text-base sm:leading-[1.75]"
                >
                  {active.text}
                  <footer className="mt-4 text-left text-sm font-medium text-muted-foreground">
                    – {active.role}
                  </footer>
                </blockquote>

                {/* Closing quote */}
                <span
                  aria-hidden
                  className="absolute bottom-2 right-5 font-display text-5xl font-black leading-none text-primary sm:bottom-3 sm:right-6"
                >
                  &#8221;
                </span>
              </div>

              {/* Dots */}
              <div
                className="mt-6 flex items-center justify-center gap-2"
                role="tablist"
                aria-label="Testimonials pagination"
              >
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-6 bg-primary"
                        : "w-2.5 bg-border hover:bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
            </figure>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-muted/60 text-secondary transition-all duration-300 hover:translate-x-0.5 hover:bg-muted"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
