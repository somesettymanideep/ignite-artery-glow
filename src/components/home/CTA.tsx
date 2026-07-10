import { Calendar, Phone } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-cta py-20 lg:py-28">
      {/* Animated heartbeat line */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 1440 400"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path
          d="M-20 200 H 300 L 340 200 L 370 120 L 400 280 L 430 160 L 460 200 H 700 L 740 200 L 770 110 L 800 290 L 830 170 L 860 200 H 1100 L 1140 200 L 1170 130 L 1200 270 L 1230 180 L 1260 200 H 1500"
          stroke="white"
          strokeWidth="3"
          className="heartbeat-line"
        />
      </svg>

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
