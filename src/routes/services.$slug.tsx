import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Phone, Check, ChevronRight, Sparkles, Wand2, Clock, ShieldCheck, HeartPulse,
  HelpCircle, Plus, Minus, Download, PhoneCall, CheckCircle2,
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

const FEATURES = [
  { icon: Wand2, title: "Minimally Invasive", desc: "Advanced techniques with minimal pain" },
  { icon: Clock, title: "Quick Recovery", desc: "Get back to your routine faster" },
  { icon: ShieldCheck, title: "Safe & Effective", desc: "Proven treatments with great results" },
  { icon: HeartPulse, title: "Better Quality of Life", desc: "Relieve pain, improve circulation & comfort" },
];

const WHY_CHOOSE = [
  "Expert Vascular Surgeons",
  "Advanced Technology",
  "Minimally Invasive Treatments",
  "Personalized Patient Care",
  "Proven Track Record",
];

// Split "Bulging, rope-like veins in the legs" → title="Bulging", desc="rope-like veins in the legs"
function splitSymptom(s: string): { title: string; desc: string } {
  const commaIdx = s.indexOf(",");
  if (commaIdx > 0 && commaIdx < 22) {
    return { title: s.slice(0, commaIdx).trim(), desc: s.slice(commaIdx + 1).trim() };
  }
  const words = s.split(" ");
  const title = words.slice(0, 2).join(" ");
  const desc = words.slice(2).join(" ") || s;
  return { title, desc };
}

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: (typeof SERVICES)[number] };
  const related = SERVICES.filter((s) => s.slug !== service.slug);

  // Split title so the last word gets the red accent (e.g. "Varicose Veins" + "Treatment")
  const titleWords = service.title.split(" ");
  const titleHead = titleWords.slice(0, -1).join(" ");
  const titleAccent = titleWords.slice(-1)[0];

  const symptomCards = service.symptoms.slice(0, 4).map(splitSymptom);
  const bullets = service.benefits.slice(0, 5);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 lg:pt-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[13px] font-semibold text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/treatments" className="hover:text-primary">Services</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-secondary">{service.title}</span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left */}
              <Reveal variant="up" className="lg:col-span-6">
                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-primary/80">
                  Our Service
                </span>
                <h1 className="mt-3 font-display text-4xl font-black leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-6xl">
                  {titleHead}{" "}
                  <span className="text-primary">{titleAccent}</span>
                </h1>
                <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
                  {service.overview}
                </p>

                {/* Feature chips row */}
                <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
                  {FEATURES.map(({ icon: I, title, desc }, i) => (
                    <Reveal key={title} variant="up" delay={0.05 * (i + 1)} as="li" className="text-center">
                      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                        <I className="h-6 w-6" />
                      </span>
                      <p className="mt-3 text-[13px] font-bold text-secondary">{title}</p>
                      <p className="mt-1 text-[11.5px] leading-snug text-muted-foreground">{desc}</p>
                    </Reveal>
                  ))}
                </ul>
              </Reveal>

              {/* Right image */}
              <Reveal variant="zoom" className="lg:col-span-6">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[380px] w-full rounded-3xl object-cover shadow-soft sm:h-[460px]"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
            {/* Main content */}
            <div className="space-y-14 lg:col-span-8">
              {/* About */}
              <Reveal variant="up" as="section">
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  About {service.title.replace(/ Treatment$/i, "")}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {service.overview}
                </p>

                <div className="mt-8 rounded-3xl border border-border/60 bg-white p-5 shadow-soft sm:p-6">
                  <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {symptomCards.map(({ title, desc }, i) => (
                      <li key={title + i} className="flex flex-col items-start gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                          <HeartPulse className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-[14px] font-bold text-secondary">{title}</p>
                          <p className="mt-1 text-[12.5px] leading-snug text-muted-foreground">{desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* How we treat */}
              <Reveal variant="up" as="section">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                  <div>
                    <h2 className="font-display text-3xl font-extrabold text-secondary">
                      <span className="border-b-4 border-primary pb-1">How We Treat</span>{" "}
                      {service.title.replace(/ Treatment$/i, "")}
                    </h2>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">
                      We provide state-of-the-art treatments customized to your condition
                      for lasting relief and improved vascular health.
                    </p>
                    <ul className="mt-6 space-y-3">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                            <CheckCircle2 className="h-4 w-4" />
                          </span>
                          <span className="text-[14.5px] text-secondary">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={`${service.title} procedure`}
                      className="h-[320px] w-full rounded-3xl object-cover shadow-soft sm:h-[380px]"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Our approach steps */}
              <Reveal variant="up" as="section">
                <h2 className="font-display text-3xl font-extrabold text-secondary">Our Approach</h2>
                <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.procedure.map((p, i) => (
                    <li key={p} className="flex items-start gap-4 rounded-2xl bg-gradient-brand-soft p-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-brand font-display text-sm font-black text-primary-foreground shadow-glow-red">
                        {i + 1}
                      </span>
                      <p className="pt-1 text-[14px] text-secondary">{p}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>

              {/* Recovery */}
              <Reveal variant="up" as="section">
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
              {/* Other Treatments */}
              <Reveal variant="up" className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
                <h3 className="font-display text-xl font-extrabold text-secondary">Other Treatments</h3>
                <ul className="mt-5 space-y-1">
                  {related.map((r) => {
                    const I = r.icon;
                    return (
                      <li key={r.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: r.slug }}
                          className="group flex items-center gap-3 rounded-xl px-2 py-2.5 text-[14px] font-semibold text-secondary transition hover:bg-primary/5"
                        >
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                            <I className="h-4 w-4" />
                          </span>
                          <span className="min-w-0 flex-1 leading-snug">{r.title}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>

              {/* Need Help */}
              <Reveal variant="up" className="relative overflow-hidden rounded-3xl p-6 text-white shadow-soft" >
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#4b1d8a_0%,#7c3aed_55%,#a855f7_100%)]" />
                <h3 className="font-display text-xl font-extrabold">Need Help?</h3>
                <p className="mt-2 text-[13.5px] text-white/85">
                  Speak with our vascular care experts today.
                </p>
                <a
                  href="tel:+919966117292"
                  className="mt-5 flex items-center gap-3 text-white"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 ring-1 ring-white/20">
                    <PhoneCall className="h-4 w-4" />
                  </span>
                  <span className="font-display text-lg font-black tracking-wide">+91 99661 17292</span>
                </a>
                <Link
                  to="/contact"
                  className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13.5px] font-bold text-secondary shadow-soft transition hover:-translate-y-0.5"
                >
                  Talk to Specialist <Phone className="h-4 w-4 text-primary" />
                </Link>
              </Reveal>

              {/* Why Choose Us */}
              <Reveal variant="up" className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
                <h3 className="font-display text-xl font-extrabold text-secondary">Why Choose Us?</h3>
                <ul className="mt-5 space-y-3">
                  {WHY_CHOOSE.map((w) => (
                    <li key={w} className="flex items-center gap-3 text-[14px] font-semibold text-secondary">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Download Brochure */}
              <Reveal variant="up" className="rounded-3xl border border-primary/15 bg-[hsl(15,90%,97%)] p-6 shadow-soft">
                <h3 className="font-display text-xl font-extrabold text-secondary">Download Brochure</h3>
                <p className="mt-2 text-[13.5px] text-muted-foreground">
                  Get detailed information about our vascular treatments.
                </p>
                <a
                  href="#"
                  className="mt-5 flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-white px-5 py-3 text-[13.5px] font-bold text-secondary shadow-soft transition hover:-translate-y-0.5"
                >
                  Download Now <Download className="h-4 w-4 text-primary" />
                </a>
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

// Silence unused import warning kept for shared iconography.
void Sparkles;
