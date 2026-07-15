import { useState } from "react";
import { Plus, Minus, ArrowRight, Headphones, Phone, Activity, HeartPulse, ClipboardCheck, ShieldCheck } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const FAQS = [
  {
    q: "What conditions does a vascular surgeon treat?",
    a: "We treat varicose veins, deep vein thrombosis (DVT), peripheral arterial disease (PAD), diabetic foot ulcers, aneurysms and critical limb ischemia — using both minimally invasive endovascular and open surgical techniques.",
  },
  {
    q: "Are your treatments minimally invasive?",
    a: "Yes. Most procedures — laser ablation for varicose veins and angioplasty for blocked arteries — are performed through pinhole access under local anesthesia, allowing same-day discharge and rapid recovery.",
  },
  {
    q: "How do I know if I need to see a vascular specialist?",
    a: "Leg pain while walking, non-healing wounds, sudden swelling, bulging veins, numbness or discoloration of the feet warrant a vascular evaluation. Early diagnosis prevents serious complications.",
  },
  {
    q: "Is varicose vein treatment covered by insurance?",
    a: "Symptomatic varicose vein treatment is covered by most health insurance policies in India. Our team assists with pre-authorization and cashless approval at empanelled insurers.",
  },
];

const FLOATING_CARDS = [
  { icon: Activity, title: "What are varicose veins?", desc: "Understand the basics of varicose veins and how they affect your health.", pos: "lg:top-0 lg:left-0" },
  { icon: HeartPulse, title: "What causes varicose veins?", desc: "Explore the common causes and risk factors behind varicose veins.", pos: "lg:top-0 lg:right-0" },
  { icon: ClipboardCheck, title: "What are the treatment options?", desc: "Learn about the advanced and minimally invasive treatment options.", pos: "lg:bottom-0 lg:left-0" },
  { icon: ShieldCheck, title: "Is the treatment painful?", desc: "Know what to expect during treatment and recovery.", pos: "lg:bottom-0 lg:right-0" },
];

export function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  const openBooking = () => window.dispatchEvent(new CustomEvent("open-booking-modal"));

  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* LEFT — heading + accordion */}
          <div>
            <Reveal variant="up">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">FAQs</span>
                <span className="h-px w-10 bg-primary" />
              </div>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-6xl">
                Frequently Asked
                <br />
                <span className="text-primary">Questions</span>
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                We're here to help you with answers to common questions.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {FAQS.map((item, i) => {
                const isOpen = open === i;
                const num = String(i + 1).padStart(2, "0");
                return (
                  <Reveal key={item.q} variant="up" delay={i * 0.05}>
                    <div
                      className={`rounded-2xl border transition-all ${
                        isOpen
                          ? "border-primary/30 bg-red-soft/15 shadow-lg shadow-primary/10"
                          : "border-border bg-card hover:border-primary/30 hover:shadow-md"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center gap-4 px-5 py-4 text-left"
                      >
                        <span className={`text-lg font-extrabold tabular-nums ${isOpen ? "text-primary" : "text-secondary/70"}`}>
                          {num}
                        </span>
                        <span className="flex-1 text-base font-semibold text-secondary">{item.q}</span>
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all ${
                            isOpen ? "border-primary bg-primary text-white" : "border-primary/40 text-primary"
                          }`}
                        >
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>
                      <div
                        className={`grid overflow-hidden px-5 transition-all duration-500 ease-out ${
                          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="min-h-0 pl-9">
                          <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal variant="up" delay={0.15}>
              <button
                type="button"
                onClick={openBooking}
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              >
                Book Consultation
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </Reveal>
          </div>

          {/* RIGHT — floating cards around central FAQ bubble */}
          <Reveal variant="fade" delay={0.1}>
            <div className="relative mx-auto h-[560px] w-full max-w-xl">
              {/* connecting dashed lines */}
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 500 560" fill="none" aria-hidden>
                <path d="M120 130 Q 250 260 380 130" stroke="currentColor" strokeDasharray="4 6" className="text-secondary/20" strokeWidth="1.5" />
                <path d="M120 430 Q 250 300 380 430" stroke="currentColor" strokeDasharray="4 6" className="text-secondary/20" strokeWidth="1.5" />
                <path d="M120 130 L 120 430" stroke="currentColor" strokeDasharray="4 6" className="text-secondary/20" strokeWidth="1.5" />
                <path d="M380 130 L 380 430" stroke="currentColor" strokeDasharray="4 6" className="text-secondary/20" strokeWidth="1.5" />
              </svg>

              {/* Center FAQ speech bubbles */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="grid h-32 w-32 place-items-center rounded-3xl rounded-br-sm bg-secondary text-3xl font-extrabold tracking-wide text-white shadow-2xl shadow-secondary/40 sm:h-36 sm:w-36 sm:text-4xl">
                    FAQ
                  </div>
                  <div className="absolute -bottom-6 -right-6 grid h-16 w-16 place-items-center rounded-2xl rounded-tl-sm bg-primary text-white shadow-xl shadow-primary/40">
                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 floating cards */}
              <div className="grid h-full grid-cols-2 gap-4 lg:gap-0">
                {FLOATING_CARDS.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className={`relative lg:absolute lg:w-[210px] ${card.pos} animate-[floaty_6s_ease-in-out_infinite]`}
                      style={{ animationDelay: `${i * 0.4}s` }}
                    >
                      <div className="group rounded-2xl bg-card p-5 text-center shadow-xl shadow-secondary/10 ring-1 ring-border/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15">
                        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary text-white shadow-md">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-3 text-sm font-bold leading-snug text-secondary">{card.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{card.desc}</p>
                        <div className="mx-auto mt-3 h-0.5 w-8 rounded-full bg-primary" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom bar — still have questions */}
        <Reveal variant="up" delay={0.1}>
          <div className="mt-16 grid gap-4 rounded-2xl bg-accent/60 p-6 backdrop-blur sm:grid-cols-2 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-secondary shadow-md">
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-bold text-secondary">Still have questions?</p>
                <p className="text-sm text-muted-foreground">Our experts are just a call away.</p>
              </div>
            </div>
            <a href="tel:+910000000000" className="flex items-center gap-4 sm:justify-end">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-white shadow-md shadow-primary/30">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Call Us Today</p>
                <p className="text-lg font-extrabold text-secondary">+91 00000 00000</p>
              </div>
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes orbit-dash {
          to { stroke-dashoffset: -80; }
        }
        .faq-orbit path {
          stroke-dasharray: 4 6;
          animation: orbit-dash 12s linear infinite;
        }
        .faq-accordion-body {
          transition: grid-template-rows 500ms cubic-bezier(0.22, 1, 0.36, 1),
                      padding 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .faq-accordion-body > div > p {
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 400ms ease 80ms, transform 400ms ease 80ms;
        }
        .faq-accordion-open .faq-accordion-body > div > p {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[floaty_6s_ease-in-out_infinite\\] { animation: none !important; }
          .faq-orbit path { animation: none !important; }
          .faq-accordion-body,
          .faq-accordion-body > div > p {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
