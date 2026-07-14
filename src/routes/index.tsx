import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { VascularSpecialist } from "@/components/home/VascularSpecialist";
import { Services } from "@/components/home/Services";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";

import { InstagramFeed } from "@/components/home/InstagramFeed";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/hooks/use-reveal";


export const Route = createFileRoute("/")({
  component: Index,
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
      <Reveal variant="up" delay={0.05}><Testimonials /></Reveal>
      <Reveal variant="zoom" delay={0.05}><InstagramFeed /></Reveal>
      <Footer />
    </main>
  );
}

