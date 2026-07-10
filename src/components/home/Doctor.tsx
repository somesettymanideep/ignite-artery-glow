import { GraduationCap, Stethoscope, HeartPulse, Calendar, User, Syringe, Activity } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import doctorImg from "@/assets/doctor-portrait.jpg";

export function Doctor() {
  return (
    <section id="doctor" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute top-1/4 left-0 h-96 w-96 rounded-full bg-primary/8 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Our Specialist</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Meet Our <span className="text-gradient">Specialist</span>
          </h2>
        </Reveal>

        <Reveal variant="zoom" className="relative mx-auto mt-14 max-w-4xl">
          <div className="glass-card card-top-gradient grid overflow-hidden rounded-[1.75rem] shadow-lift md:grid-cols-[2fr_3fr]">
            <div className="relative">
              <img
                src={doctorImg}
                alt="Dr. Ignite Vascular specialist — senior consultant vascular and endovascular surgeon"
                width={896}
                height={1088}
                loading="lazy"
                className="h-full min-h-72 w-full object-cover object-top"
              />
              {/* Floating medical icons */}
              <span className="glass-card animate-float absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl text-primary"><Stethoscope className="h-5 w-5" /></span>
              <span className="glass-card animate-float-slower absolute bottom-6 right-4 grid h-11 w-11 place-items-center rounded-2xl text-secondary"><HeartPulse className="h-5 w-5" /></span>
            </div>

            <div className="p-8 lg:p-10">
              <h3 className="font-display text-2xl font-extrabold">Dr. Arvind Kumar</h3>
              <p className="mt-1 font-semibold text-primary">
                Senior Consultant — Vascular &amp; Endovascular Surgeon
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A highly experienced vascular surgeon dedicated to treating complex arterial and
                venous conditions with precision, using both minimally invasive endovascular
                techniques and conventional vascular surgery.
              </p>

              <ul className="mt-6 space-y-3 text-sm font-semibold">
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent text-secondary"><GraduationCap className="h-4.5 w-4.5" /></span>
                  MBBS, MS (General Surgery), MCh (Vascular Surgery)
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent text-secondary"><Activity className="h-4.5 w-4.5" /></span>
                  20+ years of vascular &amp; endovascular experience
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent text-secondary"><Syringe className="h-4.5 w-4.5" /></span>
                  Varicose veins · PAD · Diabetic foot · Dialysis access
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105"
                >
                  <Calendar className="h-4 w-4" /> Book Consultation
                </a>
                <a
                  href="#doctor"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/25 px-6 py-3 text-sm font-bold text-secondary transition-colors duration-300 hover:border-secondary hover:bg-accent"
                >
                  <User className="h-4 w-4" /> View Profile
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
