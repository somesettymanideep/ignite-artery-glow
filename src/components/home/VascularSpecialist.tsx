import { ArrowRight, Award, Stethoscope, Users, Heart } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import doctorImg from "@/assets/home2-doctor.jpg";

const DOCTOR_POINTS = [
  { icon: Award, text: "10+ Years of Experience" },
  { icon: Stethoscope, text: "Expert in Endovascular Procedures" },
  { icon: Users, text: "Thousands of Successful Treatments" },
  { icon: Heart, text: "Patient-Centered Approach" },
];

export function VascularSpecialist() {
  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_1fr_1fr] lg:px-8">
        <Reveal variant="left">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Expert Care You Can Trust</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-[2.75rem]">
            Meet Our<br />Vascular <span className="text-primary">Specialist</span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-brand" />
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Our experienced vascular surgeon is dedicated to providing world-class care with
            expertise, precision, and compassion.
          </p>

          <ul className="mt-7 space-y-3.5">
            {DOCTOR_POINTS.map((p, i) => (
              <Reveal key={p.text} as="li" variant="up" delay={i * 0.1} className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><p.icon className="h-4 w-4" /></span>
                <span className="text-sm font-semibold text-secondary">{p.text}</span>
              </Reveal>
            ))}
          </ul>

          <a href="#cta" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105">
            Know More About Doctor <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25"><ArrowRight className="h-3.5 w-3.5" /></span>
          </a>
        </Reveal>

        <Reveal variant="zoom" className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary/10 to-secondary/10 p-3 shadow-lift">
            <img
              src={doctorImg}
              alt="Vascular surgeon portrait"
              width={900}
              height={1100}
              loading="lazy"
              className="w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </Reveal>

        <Reveal variant="right">
          <div className="rounded-[2rem] bg-secondary p-8 text-secondary-foreground shadow-lift lg:p-10">
            <h3 className="font-display text-2xl font-extrabold">Dr. Arvind Kumar</h3>
            <div className="mt-4 space-y-1 text-sm text-secondary-foreground/85">
              <p>MBBS, MS (General Surgery),</p>
              <p>DNB (Vascular Surgery)</p>
            </div>
            <p className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              Vascular &amp; Endovascular Surgeon
            </p>
            <div className="my-6 h-px bg-white/15" />
            <p className="text-sm leading-relaxed text-secondary-foreground/85">
              Specialized in treating complex vascular conditions with minimally invasive and
              advanced surgical techniques.
            </p>
            <p className="mt-8 font-display text-2xl italic text-primary-foreground/90" style={{ fontFamily: "cursive" }}>
              A. Kumar
            </p>
            <div className="mt-6 border-t border-white/15 pt-4 text-xs font-semibold text-secondary-foreground/70">
              Reg. No. AP/MED/2015/00842
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
