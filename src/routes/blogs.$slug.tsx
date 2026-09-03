import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  Bookmark,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Phone,
  MapPin,
  Stethoscope,
  Building,
  Check,
  Copy,
} from "lucide-react";
import { FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { SubBanner } from "@/components/home/SubBanner";
import { ProgressiveImage } from "@/components/ui/ProgressiveImage";
import { Reveal } from "@/hooks/use-reveal";
import { BLOG_POSTS, getBlogPostBySlug, BlogPost } from "@/lib/blogs-data";
import { openBookingModal } from "@/components/booking/BookingModal";
import { toast } from "sonner";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article Not Found — Ignite Vascular Center" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: p.metaTitle },
        { name: "description", content: p.metaDescription },
        { name: "keywords", content: p.keywords || "best vascular surgeon in Vijayawada, vascular surgeon in Vijayawada" },
        { property: "og:title", content: p.metaTitle },
        { property: "og:description", content: p.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.coverImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "robots", content: "index, follow" },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://ignitevascularcenter.com/blogs/${p.slug}`,
        },
      ],
    };
  },
  notFoundComponent: BlogNotFound,
  component: BlogDetailPage,
});

function BlogNotFound() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-24 text-center lg:px-8 lg:py-32">
        <h1 className="font-display text-3xl font-black text-secondary">
          Article Not Found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The blog article you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/blogs"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-glow-red"
        >
          Browse All Articles <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function BlogDetailPage() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Article link copied to clipboard!");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post.title;

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <Navbar />

      {/* SubBanner matching all standard pages */}
      <SubBanner
        title="Vascular Health Blog"
        crumb="Blog Details"
        image={post.coverImage}
      />

      {/* Main Container matching standard site max-w-7xl px-5 lg:px-8 */}
      <main className="mx-auto max-w-7xl px-5 py-10 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Main Article Content Column (8 cols) */}
          <article className="lg:col-span-8">
            <Reveal variant="up">
              <header>
                {/* Category & Meta */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {post.publishDate}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Main Heading */}
                <h1 className="mt-4 font-display text-2xl font-black leading-tight text-secondary sm:text-3xl lg:text-4xl">
                  {post.title}
                </h1>

                {/* Excerpt */}
                <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {post.excerpt}
                </p>

                {/* Author Info Bar & Share Links */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border/60 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-11 w-11 rounded-full border border-primary/30 object-cover shadow-sm"
                    />
                    <div>
                      <span className="block text-sm font-bold text-secondary">
                        {post.author.name}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {post.author.role}
                      </span>
                    </div>
                  </div>

                  {/* Share buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-muted-foreground mr-1 hidden sm:inline">
                      Share:
                    </span>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        shareTitle + " " + shareUrl
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on WhatsApp"
                      className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366] text-white shadow-sm transition hover:scale-110"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        shareUrl
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                      className="grid h-8 w-8 place-items-center rounded-full bg-[#1877F2] text-white shadow-sm transition hover:scale-110"
                    >
                      <FaFacebook className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        shareTitle
                      )}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
                      className="grid h-8 w-8 place-items-center rounded-full bg-[#1DA1F2] text-white shadow-sm transition hover:scale-110"
                    >
                      <FaTwitter className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      aria-label="Copy article link"
                      className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-white shadow-sm transition hover:scale-110"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-300" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </header>
            </Reveal>

            {/* Featured Hero Banner */}
            <Reveal variant="up" delay={0.08}>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border/80 bg-white shadow-lift">
                <ProgressiveImage
                  src={post.coverImage}
                  alt={post.title}
                  width={1200}
                  height={630}
                  fetchPriority="high"
                  className="w-full object-cover max-h-[460px]"
                />
              </div>
            </Reveal>

            {/* Table of Contents Box */}
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-display text-sm font-bold text-secondary sm:text-base">
                <Bookmark className="h-4 w-4 text-primary" />
                In This Guide
              </h3>
              <ul className="mt-3.5 grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs font-semibold text-secondary/90">
                {post.sections.map((sec, idx) => (
                  <li key={sec.id || idx}>
                    <a
                      href={`#${sec.id}`}
                      className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                    >
                      <ChevronRight className="h-3 w-3 text-primary shrink-0" />
                      <span className="truncate">{sec.title}</span>
                    </a>
                  </li>
                ))}
                {post.faqs.length > 0 && (
                  <li>
                    <a
                      href="#faqs-section"
                      className="inline-flex items-center gap-1.5 hover:text-primary transition-colors text-primary font-bold"
                    >
                      <ChevronRight className="h-3 w-3 text-primary shrink-0" />
                      Frequently Asked Questions
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Body Sections */}
            <div className="mt-8 space-y-8 text-secondary/90 leading-relaxed text-[15px] sm:text-base">
              {post.sections.map((section) => (
                <section
                  key={section.id || section.title}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <h2 className="font-display text-lg font-bold text-secondary sm:text-xl md:text-2xl mb-3 pb-2 border-b border-border/60">
                    {section.title}
                  </h2>

                  {section.subtitle && (
                    <p className="text-sm font-semibold text-primary mb-2.5">
                      {section.subtitle}
                    </p>
                  )}

                  <div className="space-y-3.5">
                    {section.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                        className="leading-relaxed text-secondary/85 text-[15px] sm:text-base"
                      />
                    ))}
                  </div>

                  {/* Optional Callout */}
                  {section.callout && (
                    <div
                      className={`mt-4 flex items-start gap-3 rounded-xl border p-4 sm:p-5 ${
                        section.callout.type === "warning"
                          ? "border-[#DA3234]/30 bg-[#DA3234]/10 text-secondary"
                          : "border-primary/30 bg-primary/5 text-secondary"
                      }`}
                    >
                      <AlertCircle
                        className={`h-5 w-5 shrink-0 mt-0.5 ${
                          section.callout.type === "warning"
                            ? "text-[#DA3234]"
                            : "text-primary"
                        }`}
                      />
                      <div>
                        {section.callout.title && (
                          <h4 className="text-sm font-bold text-secondary mb-1">
                            {section.callout.title}
                          </h4>
                        )}
                        <p className="text-xs sm:text-sm leading-relaxed text-secondary/90">
                          {section.callout.text}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Optional Checklist */}
                  {section.list && (
                    <ul className="mt-3.5 space-y-2 rounded-xl bg-white border border-border/80 p-4 sm:p-5 shadow-sm">
                      {section.list.map((item, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-secondary font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* FAQs Section Accordion */}
              {post.faqs.length > 0 && (
                <section id="faqs-section" className="scroll-mt-28 pt-6 border-t border-border/80">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary">
                      <HelpCircle className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl font-black text-secondary">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-5">
                    Quick answers to common queries regarding vascular consultation and treatments in Vijayawada.
                  </p>

                  <div className="space-y-2.5">
                    {post.faqs.map((faq, fIdx) => {
                      const isOpen = activeFaq === fIdx;
                      return (
                        <div
                          key={fIdx}
                          className="overflow-hidden rounded-xl border border-border/80 bg-white transition-all shadow-sm"
                        >
                          <button
                            type="button"
                            onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                            className="flex w-full items-center justify-between px-5 py-3.5 text-left font-display text-sm sm:text-base font-bold text-secondary hover:text-primary transition-colors"
                          >
                            <span>{faq.question}</span>
                            <ChevronDown
                              className={`h-4 w-4 shrink-0 text-primary transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="border-t border-border/50 bg-[#fbfbfe] px-5 py-3.5 text-xs sm:text-sm leading-relaxed text-secondary/80">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-border/60 pt-5">
              <span className="text-xs font-bold text-muted-foreground mr-1">
                Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary/5 border border-border/80 px-3 py-1 text-xs font-semibold text-secondary/80"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Specialist Profile Card */}
            <div className="mt-8 rounded-2xl border border-border/80 bg-white p-5 sm:p-7 shadow-soft">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-20 w-20 rounded-full border-2 border-primary object-cover shadow-md shrink-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    About The Specialist
                  </span>
                  <h3 className="mt-0.5 font-display text-base sm:text-lg font-bold text-secondary">
                    {post.author.name}
                  </h3>
                  <p className="text-xs font-semibold text-muted-foreground mt-0.5">
                    {post.author.role}
                  </p>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-secondary/80">
                    Dr. G. Narasimha Sai is a premier consultant vascular and endovascular surgeon in Vijayawada, specializing in minimally invasive varicose vein ablation, arterial bypass, diabetic limb salvage, and dialysis AV access surgeries at Ignite Vascular Center.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                    <button
                      type="button"
                      onClick={() => openBookingModal()}
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-xs font-bold text-white shadow-glow-red transition hover:scale-105"
                    >
                      <Stethoscope className="h-3.5 w-3.5" /> Book Consultation
                    </button>
                    <a
                      href="tel:+919966117292"
                      className="inline-flex items-center gap-1.5 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-2 text-xs font-bold text-secondary transition hover:bg-secondary hover:text-white"
                    >
                      <Phone className="h-3.5 w-3.5" /> +91 99661 17292
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar Column (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Sticky Clinic & Consultation Card */}
            <div className="rounded-2xl border border-border/80 bg-white p-5 sm:p-6 shadow-soft sticky top-28">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Building className="h-4 w-4" /> Ignite Vascular Center
              </div>
              <h3 className="mt-2 font-display text-base sm:text-lg font-bold text-secondary">
                Need Vascular Evaluation?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Get an accurate duplex ultrasound evaluation and individualized treatment plan from our dedicated vascular team in Vijayawada.
              </p>

              <div className="mt-4 space-y-2.5">
                <button
                  type="button"
                  onClick={() => openBookingModal()}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-brand py-2.5 text-xs font-bold text-white shadow-glow-red transition hover:scale-102"
                >
                  <Stethoscope className="h-4 w-4" /> Book Appointment
                </button>
                <a
                  href="tel:+919966117292"
                  className="w-full flex items-center justify-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 py-2.5 text-xs font-bold text-secondary transition hover:bg-secondary hover:text-white"
                >
                  <Phone className="h-4 w-4" /> Call: +91 99661 17292
                </a>
              </div>

              <div className="mt-5 border-t border-border/60 pt-4 text-xs text-muted-foreground space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Opp. Brahmanandam Orthopaedic Center, Pushpa Hotel Road, Kasturibai Peta, Vijayawada – 520002</span>
                </div>
              </div>

              {/* Internal Link to Home Page */}
              <div className="mt-4 pt-3.5 border-t border-border/60 text-center">
                <Link
                  to="/"
                  className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                >
                  Visit Ignite Vascular Center Home <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Sidebar Related Articles (if multiple exist) */}
            {relatedPosts.length > 0 && (
              <div className="rounded-2xl border border-border/80 bg-white p-5 shadow-soft">
                <h4 className="font-display text-sm sm:text-base font-bold text-secondary mb-3.5">
                  Related Guides
                </h4>
                <div className="space-y-3.5">
                  {relatedPosts.map((rPost) => (
                    <Link
                      key={rPost.slug}
                      to="/blogs/$slug"
                      params={{ slug: rPost.slug }}
                      className="group flex gap-3 items-center"
                    >
                      <img
                        src={rPost.coverImage}
                        alt={rPost.title}
                        className="h-14 w-14 rounded-xl object-cover shrink-0 border border-border group-hover:scale-105 transition-transform"
                      />
                      <div className="min-w-0">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-primary">
                          {rPost.category}
                        </span>
                        <h5 className="text-xs font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2 mt-0.5">
                          {rPost.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Bottom Related Section (if multiple exist) */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 border-t border-border/80 pt-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  More From Our Blog
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-secondary mt-1">
                  Related Articles You May Find Helpful
                </h3>
              </div>
              <Link
                to="/blogs"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                View All Articles <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rPost) => (
                <article
                  key={rPost.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <Link
                    to="/blogs/$slug"
                    params={{ slug: rPost.slug }}
                    className="relative block aspect-[16/10] overflow-hidden"
                  >
                    <img
                      src={rPost.coverImage}
                      alt={rPost.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-secondary shadow-sm">
                        {rPost.category}
                      </span>
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs text-muted-foreground">
                      {rPost.readTime}
                    </span>
                    <h4 className="mt-2 font-display text-sm font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors">
                      <Link to="/blogs/$slug" params={{ slug: rPost.slug }}>
                        {rPost.title}
                      </Link>
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2 flex-1">
                      {rPost.excerpt}
                    </p>
                    <Link
                      to="/blogs/$slug"
                      params={{ slug: rPost.slug }}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary"
                    >
                      Read Full Article <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
