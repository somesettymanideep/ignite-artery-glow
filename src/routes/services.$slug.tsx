import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Phone, Check, ChevronRight, Stethoscope } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { SubBanner } from "@/components/home/SubBanner";
import treatmentsBanner from "@/assets/about-surgery.jpg";
import { findService, CATEGORIES } from "@/lib/treatments-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return service as NonNullable<ReturnType<typeof findService>>;
  },
  head: ({ loaderData, params }) => {
    const s = loaderData;
    const title = s
      ? `${s.name} — ${s.categoryTitle} | Ignite Vascular Center`
      : "Service — Ignite Vascular Center";
    const desc = s?.summary ?? "Advanced vascular treatments in Vijayawada.";
    const url = `https://ignite-artery-glow.lovable.app/services/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: s
        ? [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              name: s.name,
              description: s.summary,
              category: s.categoryTitle,
            }),
          }]
        : [],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServicePage,
});

function ServiceNotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-display text-4xl font-black">Service not found</h1>
        <p className="mt-4 text-muted-foreground">The treatment you're looking for doesn't exist.</p>
        <Link to="/treatments" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-bold text-primary-foreground">
          View all treatments <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
      <Footer />
    </>
  );
}

function ServicePage() {
  const s = Route.useLoaderData();
  const category = CATEGORIES.find((c) => c.id === s.categoryId)!;
  const related = category.items.filter((i) => i.slug !== s.slug).slice(0, 6);

  return (
    <>
      <Navbar />
      <SubBanner title={s.name} crumb={s.categoryTitle} image={treatmentsBanner} />
      <main className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          {/* Breadcrumb */}
          <Reveal variant="up" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/treatments" className="hover:text-primary">Treatments</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-secondary">{s.name}</span>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div>
              <Reveal variant="up">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-brand-soft px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                  <Stethoscope className="h-3.5 w-3.5" /> {s.categoryTitle}
                </span>
                <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl">
                  {s.name}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.summary}</p>
              </Reveal>

              <Reveal variant="up" delay={0.1} className="mt-10">
                <h2 className="font-display text-2xl font-extrabold">Overview</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-secondary/80">{s.overview}</p>
              </Reveal>

              <Reveal variant="up" delay={0.15} className="mt-10">
                <h2 className="font-display text-2xl font-extrabold">Common Symptoms</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {s.symptoms.map((it: string) => (
                    <li key={it} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm font-medium text-secondary">{it}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal variant="up" delay={0.2} className="mt-10">
                <h2 className="font-display text-2xl font-extrabold">Our Approach</h2>
                <ol className="mt-4 space-y-3">
                  {s.approach.map((it: string, i: number) => (
                    <li key={it} className="flex items-start gap-4 rounded-xl bg-gradient-brand-soft p-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand font-display text-sm font-black text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="pt-1 text-sm font-medium text-secondary">{it}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal variant="zoom" delay={0.25} className="mt-12 overflow-hidden rounded-2xl bg-gradient-cta p-8 text-primary-foreground shadow-lift">
                <h3 className="font-display text-2xl font-extrabold">Talk to a Vascular Specialist</h3>
                <p className="mt-2 text-sm text-white/85">Get a personalized evaluation for {s.name.toLowerCase()}.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-secondary">
                    <Phone className="h-4 w-4" /> Book Appointment
                  </Link>
                  <Link to="/second-opinion" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10">
                    Get Second Opinion <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <Reveal variant="up" className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
                <h3 className="font-display text-lg font-extrabold text-secondary">
                  Related in {category.title}
                </h3>
                <ul className="mt-4 space-y-1">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: r.slug }}
                        className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-secondary/80 transition-colors hover:bg-gradient-brand-soft hover:text-primary"
                      >
                        <span className="truncate">{r.name}</span>
                        <ChevronRight className="h-4 w-4 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/treatments"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full border-2 border-secondary/15 py-2.5 text-xs font-bold uppercase tracking-wider text-secondary hover:bg-secondary/5"
                >
                  All treatments <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
