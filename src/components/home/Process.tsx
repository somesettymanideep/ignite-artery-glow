import { MessageSquare, ScanLine, ClipboardList, Syringe, HeartPulse, CalendarCheck } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "Detailed evaluation of your symptoms and history." },
  { icon: ScanLine, title: "Diagnosis", desc: "Advanced doppler, CT and angiographic imaging." },
  { icon: ClipboardList, title: "Personalized Treatment", desc: "A plan tailored to your condition and lifestyle." },
  { icon: Syringe, title: "Procedure", desc: "Minimally invasive or surgical intervention." },
  { icon: HeartPulse, title: "Recovery", desc: "Comfortable, closely monitored healing." },
  { icon: CalendarCheck, title: "Follow-Up Care", desc: "Long-term monitoring for lasting vascular health." },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">How It Works</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your <span className="text-gradient">Treatment Journey</span>
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {/* connecting line (desktop) */}
          <svg
            className="pointer-events-none absolute left-0 top-10 hidden h-2 w-full lg:block"
            aria-hidden
            preserveAspectRatio="none"
            viewBox="0 0 100 2"
          >
            <line x1="8" y1="1" x2="92" y2="1" stroke="var(--red-brand)" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="2 2" className="vein-line" vectorEffect="non-scaling-stroke" />
          </svg>

          {steps.map((s, i) => (
            <Reveal key={s.title} as="li" variant="zoom" delay={i * 0.15} className="relative text-center">
              <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full glass-card shadow-glow-indigo transition-transform duration-500 hover:scale-110">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="absolute -top-1.5 -right-1.5 grid h-7 w-7 place-items-center rounded-full bg-secondary text-xs font-extrabold text-secondary-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-sm font-bold">{s.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
