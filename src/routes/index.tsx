import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { VascularSpecialist } from "@/components/home/VascularSpecialist";
import { Services } from "@/components/home/Services";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQs } from "@/components/home/FAQs";

import { LazyInstagramFeed } from "@/components/home/LazyInstagramFeed";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/hooks/use-reveal";
import { toAbsoluteUrl } from "@/lib/asset-url";
import heroAsset from "@/assets/hero-varicose-legs-v3.webp.asset.json";

const homeOgImage = toAbsoluteUrl(heroAsset.url);

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Best Vascular Surgeon in Vijayawada | Best Endovascular Surgeon — Ignite Vascular Center" },
      {
        name: "description",
        content:
          "Ignite Vascular Center, Vijayawada — led by Dr. G. Narasimha Sai, one of the best vascular & endovascular surgeons in Vijayawada. Advanced treatment for varicose veins, DVT, PAD, diabetic foot & limb salvage.",
      },
      {
        name: "keywords",
        content:
          "best vascular surgeon in Vijayawada, best endovascular surgeon, vascular surgeon Vijayawada, endovascular surgery Vijayawada, varicose veins treatment Vijayawada, DVT treatment, PAD treatment, diabetic foot care, limb salvage, Ignite Vascular Center",
      },
      { property: "og:title", content: "Best Vascular & Endovascular Surgeon in Vijayawada — Ignite Vascular Center" },
      {
        property: "og:description",
        content:
          "Advanced vascular & endovascular care in Vijayawada by Dr. G. Narasimha Sai (DrNB Vascular Surgery, NIMS). Book a consultation today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ignite-artery-glow.lovable.app/" },
      { property: "og:image", content: homeOgImage },
      { name: "twitter:image", content: homeOgImage },
    ],
    links: [{ rel: "canonical", href: "https://ignite-artery-glow.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Ignite Vascular Center",
          description:
            "Home to one of the best vascular and endovascular surgeons in Vijayawada, offering advanced treatment for varicose veins, DVT, PAD, diabetic foot and limb salvage.",
          url: "https://ignite-artery-glow.lovable.app/",
          telephone: "+91-00000-00000",
          medicalSpecialty: ["VascularSurgery", "Endovascular Surgery"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kasturibai Peta",
            addressLocality: "Vijayawada",
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN",
          },
          physician: {
            "@type": "Physician",
            name: "Dr. G. Narasimha Sai",
            medicalSpecialty: "Vascular and Endovascular Surgery",
            qualifications: "MBBS, DNB (Gen Surg), DrNB (Vascular Surgery) [NIMS]",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Reveal variant="up"><VascularSpecialist /></Reveal>
      <Reveal variant="fade" delay={0.05}><Services /></Reveal>
      <Reveal variant="up" delay={0.05}><WhyChoose /></Reveal>
      <Reveal variant="left" delay={0.05}><Process /></Reveal>
      <Reveal variant="up" delay={0.05}><FAQs /></Reveal>
      <Reveal variant="up" delay={0.05}><Testimonials /></Reveal>
      <Reveal variant="zoom" delay={0.05}><LazyInstagramFeed /></Reveal>
      <Footer />
    </main>
  );
}

