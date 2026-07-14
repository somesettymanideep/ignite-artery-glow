import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Phone, Check, Activity, Sparkles, Clock, ChevronRight, ChevronDown,
  Timer, Stethoscope, BedDouble, CalendarClock, UserCheck, ClipboardList,
  HelpCircle, Plus, Minus, ListTree,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — Ignite Vascular Center" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} — Ignite Vascular Center, Vijayawada` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} — Ignite Vascular Center` },
        { property: "og:description", content: s.short },
        { property: "og:type", content: "article" },
        { property: "og:image", content: `https://ignite-artery-glow.lovable.app${s.image}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  errorComponent: ({ error }) => (
    <div className="p-10 text-center text-secondary">{String(error)}</div>
  ),
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-display text-3xl font-black text-secondary">Service not found</h1>
        <p className="mt-3 text-muted-foreground">The treatment you're looking for doesn't exist.</p>
        <Link to="/treatments" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-primary-foreground">
          Browse all treatments <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
      <Footer />
    </>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: (typeof SERVICES)[number] };
  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.slug !== service.slug);
  const [factsOpen, setFactsOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: 350 }}>
          <div className="absolute inset-0">
            <img src={service.image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60" />
          </div>
          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pt-20 lg:px-8">
            <Reveal variant="up">
              <nav aria-label="Breadcrumb" className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur">
                <Link to="/" className="hover:text-white">Home</Link>
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                <Link to="/treatments" className="hover:text-white">Treatments</Link>
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                <span className="text-white">{service.title}</span>
              </nav>
              <h1 className="max-w-3xl font-display text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
            </Reveal>
          </div>
        </section>


        {/* Body */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
            <div className="space-y-12 lg:col-span-8">

              <Reveal variant="up">
                <h2 className="font-display text-3xl font-extrabold text-secondary">Overview</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{service.overview}</p>
              </Reveal>

              <Reveal variant="up">
                <h2 className="font-display text-3xl font-extrabold text-secondary">Signs & Symptoms</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4 text-[14.5px] text-secondary">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Activity className="h-3.5 w-3.5" />
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal variant="up">
                <h2 className="font-display text-3xl font-extrabold text-secondary">Our Approach</h2>
                <ol className="mt-5 space-y-3">
                  {service.procedure.map((p, i) => (
                    <li key={p} className="flex items-start gap-4 rounded-2xl bg-gradient-brand-soft p-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-brand font-display text-sm font-black text-primary-foreground shadow-glow-red">
                        {i + 1}
                      </span>
                      <p className="pt-1 text-[14.5px] text-secondary">{p}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal variant="up">
                <h2 className="font-display text-3xl font-extrabold text-secondary">Benefits</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-white p-4 text-[14.5px] text-secondary shadow-soft">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal variant="up">
                <div className="rounded-3xl bg-secondary p-6 text-primary-foreground sm:p-8">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <h2 className="font-display text-2xl font-extrabold">Recovery & Follow-up</h2>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/85">{service.recovery}</p>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <Reveal variant="up" className="rounded-3xl bg-gradient-brand-soft p-6">
                <div className="flex items-center gap-2 text-primary">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-[11px] font-black uppercase tracking-[0.22em]">Other Treatments</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: r.slug }}
                        className="group flex items-center justify-between gap-3 rounded-xl bg-white p-3 text-[13.5px] font-semibold text-secondary shadow-soft transition hover:-translate-y-0.5"
                      >
                        <span className="truncate">{r.title}</span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Quick Facts — collapsible on mobile */}
              <Reveal variant="up" className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-white to-primary/5 shadow-soft">
                <button
                  type="button"
                  onClick={() => setFactsOpen((o) => !o)}
                  aria-expanded={factsOpen}
                  aria-controls="quick-facts-panel"
                  className="flex w-full items-center justify-between gap-3 p-6 text-left lg:pointer-events-none lg:pb-2"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-primary">
                      <ClipboardList className="h-4 w-4 shrink-0" />
                      <span className="text-[11px] font-black uppercase tracking-[0.22em]">Quick Facts</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-extrabold text-secondary">At a glance</h3>
                  </div>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red transition-transform duration-300 lg:hidden ${factsOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div
                  id="quick-facts-panel"
                  className={`grid transition-all duration-500 ease-out lg:!grid-rows-[1fr] lg:!opacity-100 ${factsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-6 pb-6 lg:pt-2">
                      <dl className="space-y-3">
                        {[
                          { icon: Timer, label: "Duration", value: service.quickFacts.duration },
                          { icon: Stethoscope, label: "Anesthesia", value: service.quickFacts.anesthesia },
                          { icon: BedDouble, label: "Hospital stay", value: service.quickFacts.hospitalStay },
                          { icon: CalendarClock, label: "Recovery time", value: service.quickFacts.recoveryTime },
                        ].map(({ icon: I, label, value }) => (
                          <div key={label} className="flex items-start gap-3 rounded-xl bg-white/70 p-3">
                            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-glow-red">
                              <I className="h-4 w-4" />
                            </span>
                            <div className="min-w-0">
                              <dt className="text-[11px] font-black uppercase tracking-[0.16em] text-muted-foreground">{label}</dt>
                              <dd className="text-[13.5px] font-semibold text-secondary">{value}</dd>
                            </div>
                          </div>
                        ))}
                      </dl>
                      <div className="mt-4 rounded-2xl border border-primary/15 bg-white/80 p-4">
                        <div className="flex items-center gap-2 text-primary">
                          <UserCheck className="h-4 w-4" />
                          <span className="text-[11px] font-black uppercase tracking-[0.16em]">Suitability</span>
                        </div>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-secondary">{service.quickFacts.suitability}</p>
                      </div>
                      <div className="mt-3 rounded-2xl border border-secondary/10 bg-secondary p-4 text-white">
                        <div className="flex items-center gap-2 text-primary-foreground/90">
                          <Sparkles className="h-4 w-4 text-primary" />
                          <span className="text-[11px] font-black uppercase tracking-[0.16em]">What to expect</span>
                        </div>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/85">{service.quickFacts.whatToExpect}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </aside>

          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={service.faqs} title={service.title} />
      </main>
      <Footer />
    </>
  );
}

function FAQSection({ faqs, title }: { faqs: { q: string; a: string }[]; title: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative border-t border-border/60 bg-gradient-to-b from-white via-primary/5 to-white py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal variant="up" className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-primary shadow-soft">
            <HelpCircle className="h-3.5 w-3.5" /> FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-secondary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[15px] text-muted-foreground">
            Common patient questions about {title.toLowerCase()}.
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} variant="up" className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-soft transition hover:border-primary/30">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:px-6"
                  >
                    <span className="pr-2 text-[15px] font-bold text-secondary sm:text-base">{f.q}</span>
                    <span
                      className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-border/50 px-5 py-4 text-[14.5px] leading-relaxed text-muted-foreground sm:px-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="up" className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl bg-secondary p-6 text-center text-white sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-lg font-extrabold">Still have questions?</p>
            <p className="text-sm text-white/80">Talk to our vascular specialist for a personalised answer.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-bold text-primary-foreground shadow-glow-red">
            <Phone className="h-4 w-4" /> Book a Consultation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
