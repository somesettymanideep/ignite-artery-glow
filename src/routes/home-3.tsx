import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { toAbsoluteUrl } from "@/lib/asset-url";
import heroAsset from "@/assets/hero-section-image.webp.asset.json";

const homeOgImage = toAbsoluteUrl(heroAsset.url);

export const Route = createFileRoute("/home-3")({
  component: Home3Page,
  head: () => ({
    meta: [
      { title: "Home Hero — Ignite Vascular Center" },
      {
        name: "description",
        content:
          "Ignite Vascular Center in Vijayawada — advanced vascular and endovascular care by Dr. G. Narasimha Sai.",
      },
      {
        property: "og:title",
        content: "Home Hero — Ignite Vascular Center",
      },
      {
        property: "og:description",
        content:
          "Advanced vascular and endovascular care in Vijayawada by Dr. G. Narasimha Sai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: homeOgImage },
      { name: "twitter:image", content: homeOgImage },
    ],
    links: [
      { rel: "canonical", href: "https://ignite-artery-glow.lovable.app/home-3" },
    ],
  }),
});

function Home3Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <Navbar />
      <Hero />
    </main>
  );
}
