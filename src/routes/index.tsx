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


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VascularSpecialist />
      <Services />
      <WhyChoose />
      <Process />
      <Testimonials />
      
      <InstagramFeed />
      <Footer />
      
    </main>
  );
}
