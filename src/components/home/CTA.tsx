import { Calendar, Phone } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import ctaBg from "@/assets/cta-vascular-bg.jpg";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background banner */}
      <img
        src={ctaBg}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/80 to-primary/75"
        aria-hidden
      />

      <Reveal variant="zoom" className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          Take the First Step Toward Better Vascular Health
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
          Our vascular specialists are ready to provide expert diagnosis and personalized
          treatment for your vascular conditions.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 rounded-full bg-card px-8 py-4 font-bold text-secondary shadow-lift transition-transform duration-300 hover:scale-105"
          >
            <Calendar className="h-5 w-5" /> Book Appointment
          </a>
          <a
            href="#contact"
            className="glass-dark inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-primary-foreground transition-transform duration-300 hover:scale-105"
          >
            <Phone className="h-5 w-5" /> Contact Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
