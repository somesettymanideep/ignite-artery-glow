import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Phone, Target, Eye, UserCheck, Sparkles, Scissors, HeartHandshake,
  ShieldCheck, Siren, CheckCircle2, ArrowRight, Users, ShieldCheck as ShieldIcon,
  Smile, Activity, Clock, Microscope, Lightbulb, BookOpenCheck, MessagesSquare,
  Stethoscope, ChevronRight,
} from "lucide-react";
import aboutBanner from "@/assets/hero-surgeon.jpg";
import { Reveal, useCountUp } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import receptionImg from "@/assets/about-reception.jpg";
import doctorImg from "@/assets/home2-doctor.jpg";
import vascularImg from "@/assets/about-vascular.jpg";
import surgeryImg from "@/assets/about-surgery.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ignite Vascular Center, Vijayawada" },
      { name: "description", content: "Learn about Ignite Vascular Center — a specialized vascular surgery & endovascular care center in Kasturibai Peta, Vijayawada. Advanced vascular care with compassionate hearts." },
      { property: "og:title", content: "About Ignite Vascular Center — Vijayawada" },
      { property: "og:description", content: "Advanced vascular surgery and endovascular care center dedicated to excellence, innovation and compassionate patient care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6f8] pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-8 lg:pb-24">
        <Reveal className="reveal" variant="left">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.28em] text-primary">About Us</span>
          <h1 className="mt-4 font-display text-2xl font-black leading-[1.1] tracking-tight text-secondary sm:text-3xl lg:text-4xl">
            Advanced Vascular Care.<br />
            <span className="text-primary">Compassionate</span> Hearts.
          </h1>
          <span className="mt-5 block h-[3px] w-16 rounded-full bg-secondary/70" />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Ignite Vascular Center is a specialized vascular surgery and endovascular
            care center in Kasturibai Peta, Vijayawada. We diagnose and treat diseases
            affecting arteries, veins, and blood vessels using advanced technology and
            minimally invasive techniques.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-[1.03]">
              Book an Appointment
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal className="reveal" variant="right" delay={0.14}>
          <div className="relative">
            {/* gradient arc frame */}
            <div className="absolute -left-4 -top-4 -bottom-4 w-40 rounded-l-[220px] bg-gradient-to-b from-primary via-primary/70 to-secondary opacity-90 blur-[0.5px]" aria-hidden />
            <div className="relative overflow-hidden rounded-[220px_28px_28px_220px] shadow-lift">
              <img src={receptionImg} alt="Ignite Vascular Center reception" width={1400} height={900} className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[460px]" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MissionVision() {
  const items = [
    {
      icon: Target,
      title: "Our Mission",
      body: "To provide world-class vascular care through advanced medical expertise, innovative technology, and compassionate treatment that improves patients' quality of life.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      body: "To be the most trusted vascular care center in Andhra Pradesh, recognized for excellence, innovation, and patient-centered care.",
    },
  ];
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="reveal rounded-3xl bg-[#f6f4f9] p-6 sm:p-10">
          <div className="grid gap-8 sm:grid-cols-2 sm:divide-x sm:divide-secondary/15">
            {items.map((it, i) => (
              <Reveal key={it.title} className="reveal" variant="up" delay={i * 0.1}>
                <div className="flex items-start gap-5 sm:px-4 lg:px-8">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white shadow-soft">
                    <it.icon strokeWidth={1.75} className="h-7 w-7 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.22em] text-secondary">{it.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChoose() {
  const cards = [
    { icon: Stethoscope, title: "Experienced Specialists", body: "Highly skilled vascular surgeons with extensive experience.", accent: false },
    { icon: Sparkles, title: "Advanced Technology", body: "State-of-the-art equipment for accurate diagnosis and treatment.", accent: false },
    { icon: Scissors, title: "Minimally Invasive Procedures", body: "Less pain, faster recovery and minimal risk.", accent: false },
    { icon: HeartHandshake, title: "Patient-Centered Approach", body: "Personalized care with compassion and respect.", accent: false },
    { icon: ShieldCheck, title: "Comprehensive Care", body: "From diagnosis to recovery, we are with you at every step.", accent: false },
    { icon: Siren, title: "Emergency Support", body: "Prompt care for urgent vascular conditions.", accent: true },
  ];
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="reveal text-center">
          <span className="text-xs font-bold uppercase tracking-[0.32em] text-primary">Why Choose Us</span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-secondary sm:text-4xl">
            Excellence in Vascular Care
          </h2>
          <span className="mx-auto mt-4 block h-0.5 w-14 rounded-full bg-primary" />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} className="reveal" delay={i * 0.06}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-border/70 bg-white px-4 py-8 text-center shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                <c.icon
                  strokeWidth={1.6}
                  className={`h-11 w-11 ${c.accent ? "text-primary" : "text-secondary"} transition-transform duration-500 group-hover:-translate-y-0.5`}
                />
                <h3 className="mt-5 font-display text-sm font-bold leading-snug text-secondary">{c.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  const bullets = ["Expert in Endovascular Procedures", "Varicose Veins Specialist", "Peripheral Arterial Disease Expert", "Diabetic Foot Care Specialist", "Deep Vein Thrombosis Expert", "Vascular Ultrasound Expert"];
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[minmax(0,260px)_1fr_minmax(0,280px)] lg:gap-12 lg:px-8">
        <Reveal className="reveal" variant="left">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[radial-gradient(circle,theme(colors.secondary/20)_1px,transparent_1.5px)] bg-[length:10px_10px]" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-lift">
              <img src={doctorImg} alt="Vascular specialist" width={520} height={640} loading="lazy" className="h-[360px] w-full object-cover" />
            </div>
          </div>
        </Reveal>

        <Reveal className="reveal" variant="up" delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Our Doctor</span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-secondary sm:text-4xl">
            Meet Our Vascular Specialist
          </h2>
          <h3 className="mt-6 font-display text-xl font-extrabold text-primary">G. Narasimha Sai</h3>
          <p className="mt-1 text-sm font-semibold text-secondary">MBBS, DNB (Gen Surg), DrNB (Vascular Surgery) [NIMS]</p>
          <p className="text-sm text-muted-foreground">Vascular &amp; Endovascular Surgeon</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            With years of experience in managing complex vascular conditions, Dr. Narasimha Sai
            specializes in minimally invasive and endovascular procedures. He is dedicated
            to providing the highest quality care with a patient-first approach.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {bullets.map((b, i) => (
              <Reveal key={b} className="reveal" variant="up" delay={0.22 + i * 0.06}>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-secondary/85">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Link to="/contact" className="mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-[1.03]">
            View Doctor Profile
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </Reveal>

        <Reveal className="reveal" variant="right" delay={0.18}>
          <img src={vascularImg} alt="Vascular anatomy illustration" width={900} height={1100} loading="lazy" className="mx-auto h-[360px] w-auto object-contain" />
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ end, suffix, label, icon: Icon }: { end: number; suffix: string; label: string; icon: React.ComponentType<{ className?: string }> }) {
  const { ref, value } = useCountUp(end, 1600);
  return (
    <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className="text-center text-primary-foreground">
      <Icon className="mx-auto h-7 w-7 opacity-90" />
      <div className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
        {value}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground/85">{label}</div>
    </div>
  );
}

function StatsBar() {
  const stats = [
    { icon: Users, end: 10, suffix: "+", label: "Years of Experience" },
    { icon: ShieldIcon, end: 2000, suffix: "+", label: "Successful Procedures" },
    { icon: Smile, end: 1500, suffix: "+", label: "Happy Patients" },
    { icon: Activity, end: 25, suffix: "+", label: "Advanced Treatments" },
    { icon: Clock, end: 0, suffix: "", label: "Emergency Support", text: "24/7" },
  ];
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="reveal rounded-[5px] bg-gradient-to-r from-primary via-[oklch(0.55_0.18_10)] to-secondary p-6 shadow-lift sm:p-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/15">
            {stats.map((s, i) => (
              <Reveal key={s.label} className="reveal" variant="zoom" delay={i * 0.08}>
                {s.text ? (
                  <div className="text-center text-primary-foreground">
                    <s.icon className="mx-auto h-7 w-7 opacity-90" />
                    <div className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">{s.text}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground/85">{s.label}</div>
                  </div>
                ) : (
                  <Stat icon={s.icon} end={s.end} suffix={s.suffix} label={s.label} />
                )}
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Commitment() {
  const items = [
    { icon: Microscope, title: "Evidence-Based Treatments" },
    { icon: Lightbulb, title: "Continuous Innovation" },
    { icon: BookOpenCheck, title: "Safe & Ethical Practice" },
    { icon: MessagesSquare, title: "Transparent Communication" },
  ];
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal className="reveal" variant="left">
          <div className="overflow-hidden rounded-[7px] shadow-lift">
            <img src={surgeryImg} alt="Vascular surgery team" width={1200} height={900} loading="lazy" className="h-[340px] w-full object-cover" />
          </div>
        </Reveal>
        <Reveal className="reveal" variant="right" delay={0.12}>
          <h2 className="font-display text-3xl font-black tracking-tight text-primary sm:text-4xl">
            Our Commitment to You
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            At Ignite Vascular Center, we are committed to delivering exceptional
            vascular care with integrity, empathy, and excellence. Your health and
            well-being are at the heart of everything we do.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal key={it.title} className="reveal" variant="up" delay={0.18 + i * 0.08}>
                <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-secondary">{it.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="reveal relative overflow-hidden rounded-[5px] bg-gradient-to-r from-secondary via-[oklch(0.35_0.14_340)] to-primary p-8 shadow-lift sm:p-10">
          <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto]">
            <Reveal className="reveal" variant="left">
              <div className="text-primary-foreground">
                <h3 className="font-display text-2xl font-black sm:text-3xl">Take the First Step Towards Better Circulation</h3>
                <p className="mt-2 text-sm text-primary-foreground/85">Our team is here to help you live a healthier, pain-free life.</p>
              </div>
            </Reveal>
            <Reveal className="reveal" variant="zoom" delay={0.14}>
              <Link to="/contact" className="inline-flex items-center gap-3 self-start rounded-full bg-white px-6 py-3 text-sm font-bold text-primary shadow-lift transition-transform duration-300 hover:scale-[1.03] sm:self-auto">
                Book Appointment
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          </div>
          <div className="pointer-events-none absolute -right-6 -top-8 h-56 w-56 rounded-full bg-white/10 blur-2xl" aria-hidden />
        </Reveal>
      </div>
    </section>
  );
}


function SubBanner() {
  return (
    <section className="relative h-[300px] overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={aboutBanner}
          alt="About Ignite Vascular Center"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/75 to-secondary/50" />
      </div>
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 lg:px-8">
        <Reveal variant="up">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            About Us
          </h1>
        </Reveal>
        <Reveal variant="up" delay={0.08}>
          <nav aria-label="Breadcrumb" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Link to="/" className="font-semibold text-white/80 transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4 text-white/60" />
            <span className="font-semibold text-primary-foreground">About Us</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}

function AboutPage() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <div className="bg-white [overflow-x:clip]">
      <Navbar />
      <SubBanner />
      <Hero />
      <div className="h-10 lg:h-16 bg-white" aria-hidden />
      <MissionVision />
      <WhyChoose />
      <Doctor />
      <StatsBar />
      <Commitment />
      <CTA />
      <Footer />
    </div>
  );
}
