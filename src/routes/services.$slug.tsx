import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Phone, Check, ChevronRight, Sparkles, Wand2, Clock, ShieldCheck, HeartPulse,
  HelpCircle, Plus, Minus, Download, PhoneCall, CheckCircle2, Star, Award, Users,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { SubBanner } from "@/components/home/SubBanner";
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
  const related = SERVICES;

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
        {/* Sub-page banner */}
        <SubBanner title={service.title} crumb={service.title} image={service.image} />

        {/* Hero */}
        <section className="relative overflow-hidden pt-16 lg:pt-20">
          {/* Ambient decor */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-40 right-[-120px] h-[380px] w-[380px] rounded-full bg-[hsl(258,90%,66%)]/15 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(1200px_500px_at_50%_-10%,hsl(15,90%,97%),transparent)]" />
          </div>

          <div className="mx-auto max-w-7xl px-5 lg:px-8">


            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Left */}
              <Reveal variant="up" className="lg:col-span-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3 py-1.5 shadow-soft backdrop-blur">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                    <Sparkles className="h-3 w-3" />
                  </span>
                  <span className="text-[10.5px] font-black uppercase tracking-[0.24em] text-primary">Our Service</span>
                </span>
                <h1 className="mt-4 font-display text-4xl font-black leading-[1.02] tracking-tight text-secondary sm:text-5xl lg:text-6xl">
                  {titleHead}{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-brand bg-clip-text text-transparent">{titleAccent}</span>
                    <span aria-hidden className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-gradient-brand opacity-20" />
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
                  {service.overview}
                </p>

                {/* Trust row */}
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[0,1,2,3,4].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[13px] font-bold text-secondary">4.9/5</span>
                    <span className="text-[12px] text-muted-foreground">· 500+ patients</span>
                  </div>
                  <span className="h-4 w-px bg-border" />
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-secondary">
                    <Award className="h-4 w-4 text-primary" />
                    NABH-aligned care
                  </div>
                </div>

                {/* Feature chips row */}
                <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
                  {FEATURES.map(({ icon: I, title, desc }, i) => (
                    <Reveal key={title} variant="up" delay={0.05 * (i + 1)} as="li" className="group text-center">
                      <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-primary shadow-soft ring-1 ring-primary/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-glow-red group-hover:ring-primary/40">
                        <I className="h-6 w-6" />
                      </span>
                      <p className="mt-3 text-[13px] font-bold text-secondary">{title}</p>
                      <p className="mt-1 text-[11.5px] leading-snug text-muted-foreground">{desc}</p>
                    </Reveal>
                  ))}
                </ul>
              </Reveal>

              {/* Right image with floating card */}
              <Reveal variant="zoom" className="lg:col-span-6">
                <div className="relative">
                  {/* Gradient frame */}
                  <div aria-hidden className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-brand opacity-20 blur-2xl" />
                  <div className="relative overflow-hidden rounded-[2rem] shadow-glow-red ring-1 ring-black/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-[420px] w-full object-cover sm:h-[500px]"
                    />
                    <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/25 via-transparent to-transparent" />
                  </div>

                  {/* Floating stat card — top right */}
                  <div className="absolute -top-4 right-4 hidden rounded-2xl border border-white/60 bg-white/95 p-4 shadow-soft backdrop-blur sm:block">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow-red">
                        <Users className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display text-lg font-black leading-none text-secondary">500+</p>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Patients treated</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge — bottom left */}
                  <div className="absolute -bottom-5 left-4 hidden items-center gap-3 rounded-2xl border border-white/60 bg-white/95 p-3 pr-5 shadow-soft backdrop-blur sm:flex">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-primary">Day-care</p>
                      <p className="text-[13px] font-bold text-secondary">Walk-in · Walk-out</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="relative py-16 lg:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_0%_20%,hsl(15,90%,97%),transparent)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
            {/* Main content */}
            <div className="space-y-16 lg:col-span-8">
              {/* About */}
              <Reveal variant="up" as="section">
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">01 · Overview</span>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-secondary sm:text-4xl">
                  About {service.title.replace(/ Treatment$/i, "")}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {service.overview}
                </p>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {symptomCards.map(({ title, desc }, i) => (
                    <Reveal key={title + i} variant="up" delay={0.05 * i} as="li" className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-red">
                      <span aria-hidden className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
                      <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow-red">
                        <HeartPulse className="h-5 w-5" />
                      </span>
                      <p className="relative mt-4 text-[15px] font-bold text-secondary">{title}</p>
                      <p className="relative mt-1.5 text-[12.5px] leading-snug text-muted-foreground">{desc}</p>
                    </Reveal>
                  ))}
                </ul>
              </Reveal>

              {/* How we treat */}
              <Reveal variant="up" as="section">
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">02 · Treatment</span>
                <div className="mt-2 grid items-center gap-10 lg:grid-cols-2">
                  <div>
                    <h2 className="font-display text-3xl font-extrabold text-secondary sm:text-4xl">
                      How We Treat{" "}
                      <span className="bg-gradient-brand bg-clip-text text-transparent">
                        {service.title.replace(/ Treatment$/i, "")}
                      </span>
                    </h2>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">
                      We provide state-of-the-art treatments customized to your condition
                      for lasting relief and improved vascular health.
                    </p>
                    <ul className="mt-6 space-y-3">
                      {bullets.map((b) => (
                        <li key={b} className="group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-primary/5">
                          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red transition-transform group-hover:scale-110">
                            <CheckCircle2 className="h-4 w-4" />
                          </span>
                          <span className="text-[14.5px] font-semibold text-secondary">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <div aria-hidden className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-brand-soft" />
                    <div aria-hidden className="absolute -right-4 -bottom-4 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
                    <img
                      src={service.image}
                      alt={`${service.title} procedure`}
                      className="h-[340px] w-full rounded-[1.75rem] object-cover shadow-soft ring-1 ring-black/5 sm:h-[400px]"
                    />
                    {/* corner badge */}
                    <div className="absolute -left-4 -top-4 hidden rounded-2xl bg-secondary p-3 pr-4 shadow-glow-red sm:flex sm:items-center sm:gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="text-[11px] font-black uppercase tracking-wider text-white">Advanced Care</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Our approach steps */}
              <Reveal variant="up" as="section">
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">03 · Method</span>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-secondary sm:text-4xl">Our Approach</h2>
                <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.procedure.map((p, i) => (
                    <li key={p} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-red">
                      <span aria-hidden className="absolute right-3 top-3 font-display text-6xl font-black text-primary/5 transition-colors group-hover:text-primary/10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-brand font-display text-sm font-black text-primary-foreground shadow-glow-red">
                        {i + 1}
                      </span>
                      <p className="relative mt-4 text-[14px] font-semibold text-secondary">{p}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>

              {/* Recovery */}
              <Reveal variant="up" as="section">
                <div className="relative overflow-hidden rounded-3xl bg-secondary p-6 text-primary-foreground shadow-soft sm:p-8">
                  <div aria-hidden className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/25 blur-3xl" />
                  <div aria-hidden className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-[hsl(258,90%,66%)]/25 blur-3xl" />
                  <div className="relative flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow-red">
                      <Clock className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Recovery & Follow-up</h2>
                  </div>
                  <p className="relative mt-4 max-w-2xl text-[15px] leading-relaxed text-white/85">{service.recovery}</p>
                  <div className="relative mt-6 flex flex-wrap gap-3">
                    <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-[13.5px] font-bold text-primary-foreground shadow-glow-red">
                      Book a Consultation <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a href="tel:+919966117292" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-[13.5px] font-bold text-white backdrop-blur transition hover:bg-white/20">
                      <Phone className="h-4 w-4" /> +91 99661 17292
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>


            {/* Sidebar */}
            <aside className="space-y-6 lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              {/* Other Treatments */}
              <Reveal variant="up" className="relative overflow-hidden rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
                <div aria-hidden className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                <div className="relative flex items-center gap-2 text-primary">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-[10.5px] font-black uppercase tracking-[0.22em]">Explore More</span>
                </div>
                <h3 className="relative mt-2 font-display text-xl font-extrabold text-secondary">Other Treatments</h3>
                <ul className="relative mt-5 space-y-1">
                  {related.map((r) => {
                    const I = r.icon;
                    const isActive = r.slug === service.slug;
                    return (
                      <li key={r.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: r.slug }}
                          aria-current={isActive ? "page" : undefined}
                          className={
                            isActive
                              ? "flex items-center gap-3 rounded-xl bg-gradient-brand px-3 py-2.5 text-[14px] font-bold text-primary-foreground shadow-glow-red"
                              : "group flex items-center gap-3 rounded-xl px-2 py-2.5 text-[14px] font-semibold text-secondary transition-all hover:bg-gradient-brand-soft hover:pl-3"
                          }
                        >
                          <span
                            className={
                              isActive
                                ? "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/20 text-white ring-1 ring-white/40"
                                : "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-gradient-brand group-hover:text-primary-foreground group-hover:shadow-glow-red"
                            }
                          >
                            <I className="h-4 w-4" />
                          </span>
                          <span className="min-w-0 flex-1 leading-snug">{r.title}</span>
                          <ArrowRight
                            className={
                              isActive
                                ? "h-4 w-4 shrink-0 text-white"
                                : "h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                            }
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>

              {/* Need Help */}
              <Reveal variant="up" className="relative overflow-hidden rounded-3xl p-6 text-white shadow-soft">
                <div aria-hidden className="absolute inset-0 -z-10 bg-[#41305c]" />
                <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-3xl" />
                <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
                <div className="relative flex items-center gap-2 text-white/80">
                  <PhoneCall className="h-4 w-4" />
                  <span className="text-[10.5px] font-black uppercase tracking-[0.22em]">24/7 Support</span>
                </div>
                <h3 className="relative mt-2 font-display text-2xl font-extrabold">Need Help?</h3>
                <p className="relative mt-2 text-[13.5px] text-white/85">
                  Speak with our vascular care experts today.
                </p>
                <a
                  href="tel:+919966117292"
                  className="relative mt-5 flex items-center gap-3 text-white"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur">
                    <PhoneCall className="h-4 w-4" />
                  </span>
                  <span className="font-display text-lg font-black tracking-wide">+91 99661 17292</span>
                </a>
                <Link
                  to="/contact"
                  className="relative mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13.5px] font-bold text-secondary shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow-red"
                >
                  Talk to Specialist <Phone className="h-4 w-4 text-primary" />
                </Link>
              </Reveal>

              {/* Why Choose Us */}
              <Reveal variant="up" className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-white to-primary/5 p-6 shadow-soft">
                <div className="flex items-center gap-2 text-primary">
                  <Award className="h-4 w-4" />
                  <span className="text-[10.5px] font-black uppercase tracking-[0.22em]">Trusted Care</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-extrabold text-secondary">Why Choose Us?</h3>
                <ul className="mt-5 space-y-3">
                  {WHY_CHOOSE.map((w) => (
                    <li key={w} className="flex items-center gap-3 text-[14px] font-semibold text-secondary">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow-red">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Download Brochure */}
              <Reveal variant="up" className="relative overflow-hidden rounded-3xl border border-primary/15 bg-[hsl(15,90%,97%)] p-6 shadow-soft">
                <div aria-hidden className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-brand opacity-10 blur-2xl" />
                <div className="relative flex items-center gap-2 text-primary">
                  <Download className="h-4 w-4" />
                  <span className="text-[10.5px] font-black uppercase tracking-[0.22em]">Free Guide</span>
                </div>
                <h3 className="relative mt-2 font-display text-xl font-extrabold text-secondary">Download Brochure</h3>
                <p className="relative mt-2 text-[13.5px] text-muted-foreground">
                  Get detailed information about our vascular treatments.
                </p>
                <a
                  href="#"
                  className="relative mt-5 flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-[13.5px] font-bold text-primary-foreground shadow-glow-red transition hover:-translate-y-0.5"
                >
                  Download Now <Download className="h-4 w-4" />
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

