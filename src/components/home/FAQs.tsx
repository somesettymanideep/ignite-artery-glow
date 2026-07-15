import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const FAQS = [
  {
    q: "What conditions does a vascular surgeon treat?",
    a: "We treat varicose veins, deep vein thrombosis (DVT), peripheral arterial disease (PAD), diabetic foot ulcers, aneurysms, and critical limb ischemia — using both minimally invasive endovascular and open surgical techniques.",
  },
  {
    q: "Are your treatments minimally invasive?",
    a: "Yes. Most of our procedures — including laser ablation for varicose veins and angioplasty for blocked arteries — are performed through pinhole access under local anesthesia, allowing same-day discharge and rapid recovery.",
  },
  {
    q: "How do I know if I need to see a vascular specialist?",
    a: "Symptoms like leg pain while walking, non-healing wounds, sudden swelling, bulging veins, numbness, or discoloration of the feet warrant a vascular evaluation. Early diagnosis prevents serious complications.",
  },
  {
    q: "Is varicose vein treatment covered by insurance?",
    a: "Symptomatic varicose vein treatment is covered by most health insurance policies in India. Our team assists with pre-authorization and cashless approval at empanelled insurers.",
  },
  {
    q: "How soon can I return to work after a procedure?",
    a: "Most patients return to office work within 24–48 hours after endovenous laser or angioplasty procedures. Bypass and open surgery patients typically resume routine activity in 2–6 weeks.",
  },
  {
    q: "Do you offer second opinions for vascular conditions?",
    a: "Yes. We offer detailed second opinions — including review of your imaging and reports — to confirm diagnosis and explore less invasive alternatives before you commit to surgery.",
  },
];

export function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">FAQs</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Quick answers to the questions patients ask us most often.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} variant="up" delay={i * 0.04}>
                <div
                  className={`rounded-2xl border bg-card/70 backdrop-blur transition-all ${
                    isOpen ? "border-primary/40 shadow-lg shadow-primary/5" : "border-border hover:border-primary/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold sm:text-lg">{item.q}</span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all ${
                        isOpen ? "bg-gradient-brand text-white" : "bg-primary/10 text-primary"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden px-6 transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
