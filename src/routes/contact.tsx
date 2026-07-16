import { createFileRoute, Link } from "@tanstack/react-router";
import { openBookingModal } from "@/components/booking/BookingModal";
import { useState, type FormEvent } from "react";
import {
  Phone, MapPin, Mail, Clock, MessageCircleHeart, CalendarCheck,
  ChevronRight, User, Send, ArrowRight, MessageCircle,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import servicesImg from "@/assets/contact-services.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Ignite Vascular Center, Vijayawada" },
      { name: "description", content: "Get in touch with Ignite Vascular Center in Kasturibai Peta, Vijayawada. Book appointments, consultations, or ask questions about vascular care." },
      { property: "og:title", content: "Contact Ignite Vascular Center — Vijayawada" },
      { property: "og:description", content: "Reach our vascular specialists for appointments, consultations and expert care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const INFO = [
  {
    icon: MapPin,
    title: "Address",
    lines: [
      "Opp. Brahmanandam Orthopaedic Center,",
      "Bellapu Sobhanadri Street,",
      "Kasturibai Peta, Vijayawada,",
      "Andhra Pradesh – 520002",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 99661 17292", "+91 89779 84567"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["ignitevascularcenter@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Sat  :  9:00 AM – 8:00 PM", "Sunday       :  By Appointment"],
  },
];

function Hero() {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden pt-24 sm:min-h-[460px] lg:min-h-[520px] lg:pt-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={servicesImg}
          alt="Advanced vascular and endovascular care at Ignite Vascular Center"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/75 to-secondary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-secondary/30" />
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute -bottom-px left-0 right-0" aria-hidden>
        <svg className="block h-12 w-full text-background sm:h-16 lg:h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="text-center sm:text-left">
          <Reveal variant="up">
            <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md shadow-soft">
              <Link
                to="/"
                className="rounded-full text-white/75 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/50" aria-hidden />
              <span className="text-primary-foreground" aria-current="page">Contact Us</span>
            </nav>

          </Reveal>

          <Reveal variant="up" delay={0.08}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.16}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mx-0 sm:text-lg">
              Have questions or need expert vascular care? Our team in Vijayawada is ready to assist you with appointments and consultations.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<null | "ok">(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "", agree: false });

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim() || !form.agree) return;
    import("@/lib/admin-store").then((m) => m.addSubmission("contact", form));
    setStatus("ok");
    setForm({ name: "", phone: "", email: "", subject: "", message: "", agree: false });
  }

  const input = "w-full rounded-2xl border border-border/70 bg-card px-4 py-3.5 pl-11 text-sm font-medium text-secondary placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10";

  return (
    <section className="py-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 lg:grid-cols-[1fr_minmax(320px,420px)] lg:px-8">
        <div className="space-y-8">
          <Reveal variant="left" className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-soft sm:p-8 lg:p-10">
            <Reveal variant="up">
              <h2 className="font-display text-2xl font-extrabold text-secondary sm:text-3xl">Send Us a Message</h2>
              <div className="mt-3 h-0.5 w-14 rounded-full bg-gradient-brand" />
              <p className="mt-3 text-[14px] text-muted-foreground">Fill out the form below and our team will get back to you shortly.</p>
            </Reveal>

            <form onSubmit={submit} className="mt-7 space-y-4" aria-label="Contact form">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: User, key: "name", type: "text", placeholder: "Your Name", label: "Your name", required: true },
                  { icon: Phone, key: "phone", type: "tel", placeholder: "Phone Number", label: "Phone number", required: false },
                  { icon: Mail, key: "email", type: "email", placeholder: "Email Address", label: "Email address", required: true },
                  { icon: MessageCircle, key: "subject", type: "text", placeholder: "Subject", label: "Subject", required: false },
                ].map((field, i) => (
                  <Reveal key={field.key} variant="up" delay={0.06 + i * 0.05}>
                    <div className="relative">
                      <field.icon className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type={field.type}
                        required={field.required}
                        maxLength={field.key === "email" ? 255 : field.key === "message" ? 1000 : field.key === "subject" ? 150 : 100}
                        value={form[field.key as keyof typeof form] as string}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className={input}
                        placeholder={field.placeholder}
                        aria-label={field.label}
                      />
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal variant="up" delay={0.26}>
                <div className="relative">
                  <MessageCircleHeart className="pointer-events-none absolute left-3.5 top-4 h-4.5 w-4.5 text-muted-foreground" />
                  <textarea required maxLength={1000} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${input} min-h-32 resize-y pt-4`} placeholder="Your Message" aria-label="Your message" />
                </div>
              </Reveal>

              <Reveal variant="up" delay={0.32}>
                <label className="flex items-start gap-3 rounded-2xl border border-border/60 bg-surface/60 p-3.5 text-sm">
                  <input type="checkbox" required checked={form.agree} onChange={(e) => setForm({ ...form, agree: e.target.checked })} className="mt-0.5 h-4 w-4 accent-primary" />
                  <span className="text-[13px] font-medium text-muted-foreground">
                    I confirm the information above is correct and consent to be contacted by Ignite Vascular Center.
                  </span>
                </label>
              </Reveal>

              <Reveal variant="up" delay={0.38}>
                <button type="submit" className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-brand px-6 py-4 font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-[1.02]">
                  Send Message
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/25 transition-transform duration-300 group-hover:translate-x-1">
                    <Send className="h-3.5 w-3.5" />
                  </span>
                </button>
              </Reveal>

              {status === "ok" && (
                <Reveal variant="zoom">
                  <p className="rounded-2xl bg-primary/10 px-4 py-3 text-sm font-semibold text-primary" role="status">
                    Thank you — your message has been received. We'll be in touch shortly.
                  </p>
                </Reveal>
              )}
            </form>
          </Reveal>

          <Reveal variant="up" delay={0.1} className="relative overflow-hidden rounded-[7px] shadow-soft">
            <div className="relative min-h-[360px] lg:min-h-[420px]">
              <iframe
                title="Ignite Vascular Center — Kasturibai Peta, Vijayawada"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2889068739205!2d80.63596327490121!3d16.51150598423397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb000b57ad75%3A0xe27905b07ec0904e!2sIgnite%20vascular%20center!5e0!3m2!1sen!2sin!4v1783746453912!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={0.12} className="lg:sticky lg:top-28">
          <div className="rounded-[2rem] border border-border/70 bg-card p-7 shadow-soft lg:p-9">
            <Reveal variant="up">
              <h3 className="font-display text-xl font-extrabold text-secondary sm:text-2xl">Contact Information</h3>
              <div className="mt-3 h-0.5 w-14 rounded-full bg-gradient-brand" />
              <p className="mt-3 text-[14px] text-muted-foreground">Reach us directly through any of the channels below.</p>
            </Reveal>

            <div className="mt-7 space-y-5">
              {INFO.map((info, i) => (
                <Reveal key={info.title} variant="right" delay={0.08 + i * 0.07}>
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow-red">
                      <info.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-display text-[15px] font-bold text-secondary">{info.title}</h4>
                      <div className="mt-1.5 space-y-0.5 text-[13px] leading-relaxed text-muted-foreground">
                        {info.lines.map((l) => <p key={l}>{l}</p>)}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="zoom" delay={0.4}>
              <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary/10 to-indigo-500/10 p-5">
                <p className="font-display text-sm font-extrabold text-secondary">Emergency Contact</p>
                <p className="mt-1 text-[13px] text-muted-foreground">For urgent vascular care, call us directly.</p>
                <a href="tel:+919966117292" className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-105">
                  <Phone className="h-4 w-4" /> +91 99661 17292
                </a>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AppointmentBanner() {
  return (
    <section className="py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="zoom" className="relative overflow-hidden rounded-[7px] bg-gradient-cta p-8 shadow-lift lg:p-10">
          <div className="relative grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
            <Reveal variant="left">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-primary shadow-lift animate-pulse-glow">
                <CalendarCheck className="h-8 w-8" />
              </span>
            </Reveal>
            <Reveal variant="up" delay={0.08}>
              <div className="min-w-0 text-primary-foreground">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary-foreground/75">Need Immediate Assistance?</p>
                <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">Book Your Appointment Today!</h3>
                <p className="mt-1.5 text-sm text-primary-foreground/85">Take the first step towards healthy circulation and a better life.</p>
              </div>
            </Reveal>
            <Reveal variant="right" delay={0.16}>
              <button type="button" onClick={() => openBookingModal()} className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-bold text-primary shadow-lift transition-transform duration-300 hover:scale-105">
                Book Appointment
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function ContactPage() {
  return (
    <div className="min-h-screen [overflow-x:clip] bg-background">
      <Navbar />
      <main>
        <Hero />
        <ContactForm />
        <AppointmentBanner />
      </main>
      <Footer />
    </div>
  );
}
