import { Calendar, Phone } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-cta py-20 lg:py-28">
      {/* Animated flowing line */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 1440 400"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path
          d="M-20 220 C 240 120, 480 320, 720 200 S 1200 80, 1500 240"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="draw-line"
        />
        <path
          d="M-20 260 C 260 360, 520 160, 780 260 S 1240 340, 1500 200"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="draw-line draw-line-delayed"
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
