import { BadgeCheck, Cpu, Scissors, ClipboardList, Activity, HeartHandshake } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import whyImg from "@/assets/why-choose.jpg";

const points = [
  { icon: BadgeCheck, text: "Highly Experienced Specialists" },
  { icon: Cpu, text: "Modern Endovascular Techniques" },
  { icon: Scissors, text: "Minimally Invasive Procedures" },
  { icon: ClipboardList, text: "Personalized Treatment Plans" },
  { icon: Activity, text: "More than 400+ AV Fistula Surgeries" },
  { icon: HeartHandshake, text: "Compassionate Care" },
];

export function WhyChoose() {
  return (
    <section id="why-us" className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal variant="left" className="relative">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-brand opacity-10 blur-2xl" aria-hidden />
          <img
            src={whyImg}
            alt="Advanced 3D visualization of the human vascular system in red and indigo"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div className="glass-card animate-float absolute -bottom-6 left-6 rounded-2xl px-5 py-4">
            <p className="font-display text-2xl font-extrabold text-gradient">Precision First</p>
            <p className="text-xs font-semibold text-muted-foreground">Image-guided vascular care</p>
          </div>
        </Reveal>

        <Reveal variant="right">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="text-gradient">Ignite Vascular Center</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We combine surgical expertise, cutting-edge endovascular technology and genuine
            compassion to deliver the best possible outcomes for every patient.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal
                key={p.text}
                as="li"
                variant="up"
                delay={i * 0.1}
                className="glass-card hover-lift group flex items-center gap-3.5 rounded-2xl px-4 py-3.5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <p.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold">{p.text}</span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
