import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Phone, Check, Activity, Sparkles, Clock, ChevronRight,
  Timer, Stethoscope, BedDouble, CalendarClock, UserCheck, ClipboardList,
  HelpCircle, Plus, Minus,
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
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 lg:pt-28">
          <div className="absolute inset-0">
            <img src={service.image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <Reveal variant="up">
              <nav aria-label="Breadcrumb" className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur">
                <Link to="/" className="hover:text-white">Home</Link>
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                <Link to="/treatments" className="hover:text-white">Treatments</Link>
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                <span className="text-white">{service.title}</span>
              </nav>
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-primary-foreground backdrop-blur">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-white backdrop-blur">
                  {service.cat}
                </span>
              </div>
              <h1 className="mt-6 max-w-3xl font-display text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {service.short}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-secondary shadow-soft transition-transform hover:scale-105">
                  <Phone className="h-4 w-4" /> Book Appointment
                </Link>
                <Link to="/second-opinion" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
                  Get a Second Opinion <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr,320px] lg:px-8">
            <div className="space-y-12">
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
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <Reveal variant="up" className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
                <h3 className="font-display text-lg font-extrabold text-secondary">Book a Consultation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Speak with our vascular specialist about {service.title.toLowerCase()}.
                </p>
                <Link to="/contact" className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-gradient-brand py-3 text-sm font-bold text-primary-foreground shadow-glow-red">
                  <Phone className="h-4 w-4" /> Book Appointment
                </Link>
                <a href="tel:+919999999999" className="mt-3 flex items-center justify-center gap-2 rounded-xl border-2 border-secondary/15 py-3 text-sm font-bold text-secondary hover:bg-secondary/5">
                  Call Now
                </a>
              </Reveal>

              {/* Quick Facts */}
              <Reveal variant="up" className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-white to-primary/5 p-6 shadow-soft">
                <div className="flex items-center gap-2 text-primary">
                  <ClipboardList className="h-4 w-4" />
                  <span className="text-[11px] font-black uppercase tracking-[0.22em]">Quick Facts</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-extrabold text-secondary">At a glance</h3>
                <dl className="mt-4 space-y-3">
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
              </Reveal>

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
