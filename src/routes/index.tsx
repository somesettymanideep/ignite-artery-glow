import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Doctor } from "@/components/home/Doctor";
import { Services } from "@/components/home/Services";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { CTA } from "@/components/home/CTA";
import { Footer } from "@/components/home/Footer";
import { FloatingEmergency } from "@/components/home/FloatingEmergency";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Doctor />
      <Services />
      <WhyChoose />
      <Process />
      <Testimonials />
      <GoogleReviews />
      <CTA />
      <Footer />
      <FloatingEmergency />
    </main>
  );
}
