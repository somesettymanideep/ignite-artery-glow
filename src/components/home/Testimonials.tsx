import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    name: "Ramesh Babu",
    location: "Vijayawada",
    text: "I suffered from painful varicose veins for years. The laser treatment at Ignite Vascular was quick and almost painless — I walked home the same day. Truly world-class care.",
  },
  {
    name: "Lakshmi Devi",
    location: "Guntur",
    text: "My father's diabetic foot ulcer was healing nowhere for months. The team here saved his leg with expert vascular care and constant follow-up. We are forever grateful.",
  },
  {
    name: "Suresh Chandra",
    location: "Eluru",
    text: "The angioplasty for my blocked leg artery was done with such precision. The doctor explained everything patiently. I can walk without pain again after 3 years.",
  },
  {
    name: "Padmavathi K",
    location: "Machilipatnam",
    text: "For my dialysis fistula, I was nervous, but the procedure went smoothly and the access works perfectly. The staff treated me like family throughout.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary/8 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Testimonials</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
        </Reveal>

        <Reveal variant="up" className="relative mt-14">
          <div className="overflow-hidden rounded-[1.75rem]">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <figure key={t.name} className="w-full shrink-0 px-1 py-2">
                  <div className="glass-card animate-float-slower relative mx-auto max-w-3xl rounded-[1.75rem] p-8 text-center sm:p-12">
                    <Quote className="mx-auto h-10 w-10 text-primary/30" aria-hidden />
                    <div className="mt-4 flex justify-center gap-1" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-lg leading-relaxed text-foreground">
                      “{t.text}”
                    </blockquote>
                    <figcaption className="mt-6">
                      <span className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-gradient-brand font-display text-lg font-bold text-primary-foreground">
                        {t.name.charAt(0)}
                      </span>
                      <p className="font-display font-bold">{t.name}</p>
                      <p className="text-sm font-semibold text-muted-foreground">{t.location}</p>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
              className="glass-card grid h-11 w-11 place-items-center rounded-full transition-transform duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-gradient-brand" : "w-2.5 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((index + 1) % testimonials.length)}
              className="glass-card grid h-11 w-11 place-items-center rounded-full transition-transform duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
