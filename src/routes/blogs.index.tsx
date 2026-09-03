import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  Search,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { SubBanner } from "@/components/home/SubBanner";
import { ProgressiveImage } from "@/components/ui/ProgressiveImage";
import { Reveal } from "@/hooks/use-reveal";
import { BLOG_POSTS, BlogPost } from "@/lib/blogs-data";
import { openBookingModal } from "@/components/booking/BookingModal";
import aboutVascularImg from "@/assets/about-vascular.jpg";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Vascular Health Blog & Guides | Ignite Vascular Center, Vijayawada" },
      {
        name: "description",
        content:
          "Read expert vascular health articles, guides, and tips from Dr. G. Narasimha Sai at Ignite Vascular Center, Vijayawada. Learn about varicose veins, PAD, DVT, and choosing the best vascular surgeon.",
      },
      {
        name: "keywords",
        content: "best vascular surgeon in Vijayawada, vascular surgeon in Vijayawada",
      },
      {
        property: "og:title",
        content: "Vascular Health Blogs & Patient Guides — Ignite Vascular Center",
      },
      {
        property: "og:description",
        content:
          "Expert articles and guides to help you make informed decisions about vascular care and varicose veins in Vijayawada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://ignitevascularcenter.com/blogs" },
    ],
  }),
  component: BlogsListPage,
});

function BlogsListPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(BLOG_POSTS.map((b) => b.category)));
    return ["All", ...cats];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <Navbar />

      {/* Hero / SubBanner */}
      <SubBanner
        title="Vascular Health Blog"
        crumb="Blogs & Articles"
        image={aboutVascularImg}
      />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Intro Heading & Search / Filter */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal variant="left">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <BookOpen className="h-3.5 w-3.5" />
                Knowledge & Insights
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
                Latest Articles & Patient Guides
              </h2>
              <p className="mt-2 max-w-2xl text-base text-muted-foreground">
                In-depth medical advice, prevention strategies, and diagnostic insights written by vascular specialists to keep your blood vessels healthy.
              </p>
            </div>
          </Reveal>

          {/* Search bar */}
          <Reveal variant="right" delay={0.1}>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border/80 bg-white py-2.5 pl-10 pr-4 text-sm text-secondary placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm"
              />
            </div>
          </Reveal>
        </div>

        {/* Categories Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-border/60 pb-6">
          <span className="mr-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Filter By:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-secondary text-white shadow-sm"
                  : "bg-white text-secondary/80 border border-border/70 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Grid of Blog Cards */}
        <section className="mt-10">
          {filteredPosts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-white p-12 text-center">
              <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-bold text-secondary">No articles found</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try searching for a different keyword or select another category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2 text-xs font-semibold text-white transition hover:bg-secondary/90"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, idx) => (
                <Reveal key={post.slug} variant="up" delay={idx * 0.08}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                    {/* Card Image */}
                    <Link
                      to="/blogs/$slug"
                      params={{ slug: post.slug }}
                      className="relative block aspect-[16/10] overflow-hidden bg-secondary/5"
                    >
                      <ProgressiveImage
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-secondary shadow-sm backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </Link>

                    {/* Card Body */}
                    <div className="flex flex-1 flex-col p-6">
                      {/* Meta Info */}
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

                      {/* Title */}
                      <h3 className="mt-3 font-display text-lg font-bold leading-snug text-secondary transition-colors duration-200 group-hover:text-primary">
                        <Link to="/blogs/$slug" params={{ slug: post.slug }}>
                          {post.title}
                        </Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground flex-1">
                        {post.excerpt}
                      </p>

                      {/* Author & Read More Footer */}
                      <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="h-8 w-8 rounded-full border border-border object-cover"
                          />
                          <span className="text-xs font-semibold text-secondary">
                            {post.author.name}
                          </span>
                        </div>

                        <Link
                          to="/blogs/$slug"
                          params={{ slug: post.slug }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-all duration-200 group-hover:translate-x-0.5"
                        >
                          Read Article
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </section>

        {/* Featured Guide Banner */}
        <Reveal variant="up" delay={0.2}>
          <section className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-secondary via-[#312447] to-secondary p-8 text-white shadow-lift lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-[#DA3234]" /> Featured Patient Guide
                </span>
                <h3 className="mt-4 font-display text-2xl font-black leading-tight sm:text-3xl lg:text-4xl text-white">
                  Looking for the <span className="text-[#DA3234]">Best Vascular Surgeon in Vijayawada?</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                  Vascular health is too vital to leave to chance. Learn how to evaluate surgeon qualifications, condition expertise, minimally invasive procedures, and diagnostic precision before scheduling your appointment.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    to="/blogs/$slug"
                    params={{ slug: featuredPost.slug }}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-xs font-bold text-white shadow-glow-red transition-transform hover:scale-105"
                  >
                    Read 7-Point Guide <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => openBookingModal()}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    <Stethoscope className="h-4 w-4" /> Book Consultation
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl backdrop-blur-md">
                  <ProgressiveImage
                    src={featuredPost.coverImage}
                    alt="Looking for the Best Vascular Surgeon in Vijayawada"
                    loading="lazy"
                    className="h-[240px] w-full rounded-xl object-cover sm:h-[280px]"
                  />
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
