import { Star, ExternalLink } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const REVIEWS = [
  {
    name: "Ramesh Babu",
    initial: "R",
    when: "2 weeks ago",
    rating: 5,
    text: "Excellent care at Ignite Vascular Center. My varicose vein laser treatment was quick and painless. Doctor explained everything clearly and the staff were very supportive throughout. Highly recommended!",
    color: "#4285F4",
  },
  {
    name: "Lakshmi Devi",
    initial: "L",
    when: "1 month ago",
    rating: 5,
    text: "My father's diabetic foot was healing nowhere. The team here saved his leg with expert vascular care and constant follow-up. Forever grateful to Dr. Arvind and team.",
    color: "#DB4437",
  },
  {
    name: "Suresh Chandra",
    initial: "S",
    when: "3 weeks ago",
    rating: 5,
    text: "Angioplasty for my leg artery was done with great precision. The doctor is patient, kind, and highly skilled. I can walk without pain again after 3 years!",
    color: "#0F9D58",
  },
  {
    name: "Padmavathi K",
    initial: "P",
    when: "2 months ago",
    rating: 5,
    text: "For my dialysis fistula, procedure went smoothly and access works perfectly. Staff treated me like family. World-class facility right here in Vijayawada.",
    color: "#F4B400",
  },
  {
    name: "Naveen Kumar",
    initial: "N",
    when: "1 week ago",
    rating: 5,
    text: "Very modern clinic with advanced technology. Consultation was thorough and transparent about costs. The endovascular procedure was truly minimally invasive.",
    color: "#4285F4",
  },
  {
    name: "Anjali Reddy",
    initial: "A",
    when: "5 weeks ago",
    rating: 5,
    text: "Best vascular specialist in Vijayawada. Clean facility, on-time appointments and a doctor who actually listens. My mother's DVT treatment went perfectly.",
    color: "#DB4437",
  },
];

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.3l-6.2-5.2c-2 1.5-4.5 2.5-7.2 2.5-5.3 0-9.7-3.4-11.3-8l-6.5 5C9.5 39.7 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.5l6.2 5.2C41.6 35.2 44 30 44 24c0-1.3-.1-2.3-.4-3.5z"/>
    </svg>
  );
}

export function GoogleReviews() {
  return (
    <section id="google-reviews" className="relative overflow-hidden bg-surface py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-primary/8 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-xs font-bold text-secondary">
            <GoogleG className="h-4 w-4" /> Google Reviews
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            Trusted by Patients on <span className="text-gradient">Google</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-brand" />
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="font-display text-4xl font-extrabold text-secondary">4.9</span>
            <div className="text-left">
              <div className="flex gap-0.5" aria-label="4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <p className="text-xs font-semibold text-muted-foreground">Based on 320+ Google reviews</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              variant="up"
              delay={(i % 3) * 0.1}
              className="group flex flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
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
                    <p className="text-[11px] font-semibold text-muted-foreground">Local Guide · {r.when}</p>
                  </div>
                </div>
                <GoogleG className="h-5 w-5 shrink-0" />
              </div>

              <div className="mt-4 flex gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{r.text}”
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-[11px] font-bold uppercase tracking-wider">
                <span className="text-muted-foreground">Posted on Google</span>
                <span className="inline-flex items-center gap-1 text-primary transition-transform group-hover:translate-x-0.5">
                  Helpful <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" className="mt-12 flex justify-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ignite+Vascular+Center+Vijayawada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-secondary shadow-soft ring-1 ring-border/70 transition-all duration-300 hover:shadow-lift hover:ring-primary/40"
          >
            <GoogleG className="h-4 w-4" /> Read all reviews on Google
            <ExternalLink className="h-4 w-4 text-primary" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
