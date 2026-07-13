import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { z } from "zod";
import {
  ChevronRight, ChevronDown, ShieldCheck, FileText, HeartHandshake, Lock,
  ArrowRight, PlayCircle, Activity, Stethoscope, Users, HeartPulse,
  UploadCloud, UserRound, ClipboardCheck, MessagesSquare, ClipboardList,
  User, Phone, Mail, MessageCircle, Send, CalendarCheck, Loader2,
  Award, Search, Sparkles, Microscope, HeartHandshake as HeartCare, HelpCircle,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { FloatingEmergency } from "@/components/home/FloatingEmergency";
import { SubBanner } from "@/components/home/SubBanner";
import heroImg from "@/assets/second-opinion-hero.jpg";
import doctorImg from "@/assets/doctor-portrait.jpg";
import whyImg from "@/assets/why-choose.jpg";
import secondOpinionBanner from "@/assets/about-vascular.jpg";

const secondOpinionSchema = z.object({
  name: z.string().trim().min(2, "Full name is required").max(100, "Name is too long"),
  phone: z.string().trim().min(6, "Phone number is required").max(20, "Phone number is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  age: z.string().refine((val) => !val || (Number(val) >= 0 && Number(val) <= 120), {
    message: "Age must be between 0 and 120",
  }),
  gender: z.string().optional(),
  concern: z.string().min(1, "Please select a concern"),
  message: z.string().max(1000, "Message must be less than 1000 characters").optional(),
  file: z.string().optional(),
});

type FormData = z.infer<typeof secondOpinionSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

export const Route = createFileRoute("/second-opinion")({
  head: () => ({
    meta: [
      { title: "Second Opinion — Ignite Vascular Center, Vijayawada" },
      { name: "description", content: "Request an expert vascular second opinion. Confidential review of your diagnosis and treatment plan by senior vascular specialists in Vijayawada." },
      { property: "og:title", content: "Get a Second Opinion — Ignite Vascular Center" },
      { property: "og:description", content: "Clarity and confidence for your vascular care. Confidential expert review by senior specialists." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SecondOpinionPage,
});

const BADGES = [
  { icon: ShieldCheck, title: "Trusted Experts", desc: "Consult with top vascular specialists" },
  { icon: FileText, title: "Accurate Review", desc: "We carefully evaluate your reports" },
  { icon: HeartHandshake, title: "Better Decisions", desc: "Make informed choices about your care" },
  { icon: Lock, title: "100% Confidential", desc: "Your information is safe and secure" },
];

const HELP_ITEMS = [
  { icon: Activity, label: "Complex Vascular Conditions" },
  { icon: Stethoscope, label: "Surgery or Procedure Advice" },
  { icon: Users, label: "Chronic or Recurrent Symptoms" },
  { icon: HeartPulse, label: "Unclear or Conflicting Diagnosis" },
];

const STEPS = [
  { icon: UploadCloud, title: "Submit Your Details", desc: "Fill out the form with your medical information and concerns." },
  { icon: FileText, title: "Upload Your Reports", desc: "Share your medical reports, scans, and prescriptions securely." },
  { icon: UserRound, title: "Expert Review", desc: "Our vascular specialists thoroughly review your case." },
  { icon: MessagesSquare, title: "Get Expert Opinion", desc: "Receive detailed insights and recommendations from our experts." },
  { icon: ClipboardCheck, title: "Make Informed Decisions", desc: "Choose the best treatment path with clarity and confidence." },
];

const WHY = [
  { icon: Award, title: "Experienced Vascular Specialists", desc: "Our experts have years of experience in complex vascular care." },
  { icon: Search, title: "Comprehensive Case Review", desc: "We analyze your medical history, reports, and treatment options thoroughly." },
  { icon: Sparkles, title: "Personalized Recommendations", desc: "Get tailor-made advice based on your unique condition." },
  { icon: HeartCare, title: "Patient-Centered Approach", desc: "Your health, comfort, and confidence are our highest priorities." },
];

const CONCERNS = [
  "Varicose Veins", "Deep Vein Thrombosis (DVT)", "Peripheral Arterial Disease",
  "Diabetic Foot", "Aortic Aneurysm", "Dialysis Access", "Other",
];

const FAQS = [
  {
    question: "What is a vascular second opinion?",
    answer: "A vascular second opinion is a confidential review of your diagnosis, imaging, and treatment plan by an experienced vascular specialist. It helps confirm your current path or explore alternative, less invasive options tailored to your condition.",
  },
  {
    question: "Who should request a second opinion?",
    answer: "Patients facing complex vascular conditions, recommended surgery, unclear diagnoses, recurring symptoms, or simply wanting reassurance before a major procedure can benefit greatly from a second opinion.",
  },
  {
    question: "What medical reports do I need to share?",
    answer: "Please upload recent scans (CT, MRI, Doppler ultrasound), blood reports, prescriptions, prior procedure notes, and a brief summary of your symptoms. The more complete your records, the more accurate our review.",
  },
  {
    question: "Is the second opinion service confidential?",
    answer: "Absolutely. Your information is handled with strict medical privacy standards and is only reviewed by authorized vascular specialists involved in your case.",
  },
  {
    question: "How long does it take to receive the opinion?",
    answer: "Most reviews are completed within 24–48 hours after we receive your complete records. Urgent cases are prioritized and handled as quickly as possible.",
  },
  {
    question: "Will this replace my current doctor?",
    answer: "No. A second opinion is meant to support and inform your decision-making. You remain under the care of your primary physician unless you choose to consult with us further.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fc] pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-14 lg:grid-cols-[1.15fr_0.95fr] lg:gap-8 lg:pb-20 lg:px-8">
        {/* Left content */}
        <Reveal variant="left" className="z-10">

          <Reveal variant="up" delay={0.05}>
            <h1 className="mt-6 font-display text-[2.1rem] font-extrabold leading-[1.12] tracking-tight text-secondary sm:text-4xl lg:text-[2.4rem] xl:text-[2.65rem]">
              <span className="block">Get a Second Opinion.</span>
              <span className="mt-2 block text-primary">Make the Right Decision</span>
            </h1>
          </Reveal>
          <Reveal variant="up" delay={0.15}>
            <div className="mt-4 h-[3px] w-12 rounded-full bg-primary" />
          </Reveal>

          <Reveal variant="up" delay={0.2}>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.75] text-muted-foreground">
              Your health decisions matter. Our expert vascular specialists provide a thorough
              review of your diagnosis and treatment plan so you can move forward with
              confidence and peace of mind.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-5 lg:gap-6">
            {BADGES.map((b, i) => (
              <Reveal key={b.title} variant="zoom" delay={0.3 + i * 0.1} className="flex justify-center">
                <div className="text-center w-[120px]">
                  <span className="mx-auto grid h-[54px] w-[54px] place-items-center rounded-full bg-[#ede9f6] text-[#311261]">
                    <b.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <p className="mt-3 font-display text-[12.5px] font-bold text-secondary">{b.title}</p>
                  <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={0.7}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#request" className="group inline-flex items-center gap-3 rounded-[6px] bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-glow-red transition-transform duration-300 hover:scale-[1.02]">
                Request Second Opinion
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-[6px] border-2 border-secondary/15 bg-white px-6 py-3.5 text-sm font-bold text-secondary transition-colors hover:border-primary hover:text-primary">
                How It Works
                <PlayCircle className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </Reveal>


        {/* Right image */}
        <Reveal variant="right" delay={0.12} className="relative lg:-mr-[max(2rem,calc((100vw-1280px)/2))]">
          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
            {/* Curved divider SVG */}
            <svg
              className="absolute top-0 left-0 z-10 h-full w-16 lg:w-24"
              viewBox="0 0 120 600"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M120,0 C30,120 30,480 120,600"
                stroke="#311261"
                strokeWidth="12"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 overflow-hidden rounded-l-[60px] sm:rounded-l-[80px] lg:rounded-l-[120px]">
              <img
                src={heroImg}
                alt="Anatomical illustration of the vascular tree"
                width={1200}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 z-20 rounded-xl bg-white p-5 shadow-lift sm:left-6 sm:right-auto sm:max-w-[340px]">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-red-50 text-primary">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-display text-[14px] font-extrabold text-secondary">Not Sure About Your Diagnosis or Treatment?</p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                    A second opinion can help you explore better options and ensure the right care for your vascular health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HelpRibbon() {
  return (
    <section className="bg-[#f7f8fc] pb-16 pt-14 lg:pb-20 lg:pt-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up">
          <div className="relative rounded-[18px] bg-[linear-gradient(115deg,#311261_0%,#311261_45%,#c62347_100%)] px-6 pb-8 pt-24 shadow-lift sm:overflow-visible sm:px-10 sm:py-9 sm:pl-[200px] lg:pl-[240px]">
            {/* Circular doctor photo — centered above on mobile, overlapping left from sm+ */}
            <div
              tabIndex={-1}
              className="absolute left-1/2 top-0 z-10 aspect-square w-[140px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white ring-4 ring-white shadow-lift focus-visible:outline-none focus-visible:ring-[6px] focus-visible:ring-primary sm:left-6 sm:top-1/2 sm:w-[170px] sm:-translate-x-0 sm:-translate-y-1/2 lg:left-10 lg:w-[190px]"
            >
              <img
                src={doctorImg}
                alt="Dr. Vascular Specialist, Ignite Vascular Center"
                loading="lazy"
                width={400}
                height={400}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="grid items-center gap-6 text-center sm:text-left md:grid-cols-[1fr_1.05fr]">
              <div>
                <h3 className="font-display text-2xl font-extrabold text-white sm:text-[26px]">Your Health. Our Expertise.</h3>
                <p className="mt-2 mx-auto max-w-md text-[13.5px] leading-relaxed text-white/85 sm:mx-0">
                  A second opinion can provide reassurance, confirm your diagnosis, or present alternative treatment options tailored to your condition.
                </p>
              </div>
              <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {HELP_ITEMS.map((h, i) => (
                  <Reveal key={h.label} variant="up" delay={0.08 + i * 0.06}>
                    <div className="flex items-center justify-center gap-3 text-white sm:justify-start">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-emerald-500">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      <span className="text-[13.5px] font-semibold">{h.label}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  const colors = ["bg-[#311261]", "bg-primary", "bg-[#311261]", "bg-primary", "bg-[#311261]"];
  return (
    <section id="how-it-works" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up" className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">How It Works</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-secondary sm:text-4xl">
            Simple Steps to Get Your Second Opinion
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary/70" />
        </Reveal>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} variant="up" delay={0.08 + i * 0.08} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <span className={`absolute -top-2 -right-2 z-10 grid h-7 w-7 place-items-center rounded-full ${colors[i]} text-[12px] font-bold text-white shadow-lift`}>
                    {i + 1}
                  </span>
                  <span
                    className="group grid h-20 w-20 sm:h-24 sm:w-24 place-items-center rounded-full text-white shadow-glow-indigo ring-4 ring-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-lift hover:ring-white/90 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
                    style={{
                      background:
                        i % 2 === 0
                          ? "linear-gradient(135deg, #311261, #5b3a9e)"
                          : "linear-gradient(135deg, var(--red-brand), #b91c1c)",
                    }}
                  >
                    <s.icon className="h-8 w-8 sm:h-10 sm:w-10 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[15px] font-extrabold text-secondary">{s.title}</h3>
                <p className="mt-2 max-w-[200px] text-[12.5px] leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span aria-hidden className="pointer-events-none absolute right-[-20px] top-12 hidden text-muted-foreground/50 lg:block">
                  <ArrowRight className="h-5 w-5" strokeDasharray="3 3" />
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RequestSection() {
  const [status, setStatus] = useState<null | "ok" | "error">(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", age: "", gender: "", concern: "", message: "", file: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  function validateField<K extends keyof FormData>(key: K, value: FormData[K]) {
    const partial = { [key]: value } as Record<K, FormData[K]>;
    const result = secondOpinionSchema.safeParse({ ...form, ...partial });
    if (!result.success) {
      const fieldError = result.error.issues.find((issue) => issue.path[0] === key);
      return fieldError?.message ?? "";
    }
    return "";
  }

  function validateAll(): FormErrors {
    const result = secondOpinionSchema.safeParse(form);
    if (!result.success) {
      const next: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormData;
        if (!next[key]) next[key] = issue.message;
      });
      return next;
    }
    return {};
  }

  function updateField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) {
      setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
    }
  }

  function blurField<K extends keyof FormData>(key: K) {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validateField(key, form[key]) }));
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, age: true, gender: true, concern: true, message: true, file: true });
    const validationErrors = validateAll();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setStatus(null);

    // Simulate async submission for UX demo; replace with server function when backend is wired.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setStatus("ok");
    setForm({ name: "", phone: "", email: "", age: "", gender: "", concern: "", message: "", file: "" });
    setErrors({});
    setTouched({});
  }

  const inputBase =
    "w-full rounded-[10px] border bg-white px-4 py-3.5 pl-11 text-[14px] font-medium text-secondary placeholder:text-muted-foreground/60 outline-none transition-all duration-300 focus:ring-4 hover:border-[#311261]/40 disabled:opacity-60";
  const inputNormal = `${inputBase} border-border/70 focus:border-[#311261] focus:ring-[#311261]/10`;
  const inputError = `${inputBase} border-red-400 focus:border-red-500 focus:ring-red-100`;

  const FieldError = ({ name }: { name: keyof FormData }) => {
    const msg = errors[name];
    if (!msg) return null;
    return <p id={`${name}-error`} className="mt-1.5 flex items-center gap-1.5 text-[11.5px] font-semibold text-red-500" role="alert"><span className="h-1 w-1 rounded-full bg-red-500" aria-hidden />{msg}</p>;
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleUploadKey = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  };

  return (
    <section id="request" className="bg-background pb-16 lg:pb-20">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal variant="left">
          <div className="relative overflow-hidden rounded-[20px] bg-card shadow-lift ring-1 ring-border/60">
            {/* Gradient accent header */}
            <div className="relative overflow-hidden bg-[linear-gradient(115deg,#311261,#4a1f7a_55%,#c62347)] px-7 py-6 lg:px-9">
              <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" aria-hidden />
              <div className="absolute -bottom-14 -left-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" aria-hidden />
              <div className="relative flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
                  <ClipboardCheck className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-white/95 ring-1 ring-white/25 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Free & Confidential
                  </span>
                  <h2 className="mt-2 font-display text-[22px] font-extrabold leading-tight text-white sm:text-2xl">Request Your Second Opinion</h2>
                </div>
              </div>
            </div>

            <div className="p-7 lg:p-9">
            <form onSubmit={submit} className="space-y-4" aria-label="Second opinion form" noValidate>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="so-name" className="sr-only">Full name</label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                    <input
                      id="so-name"
                      name="name"
                      autoComplete="name"
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      onBlur={() => blurField("name")}
                      className={errors.name ? inputError : inputNormal}
                      placeholder="Full Name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-required="true"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <FieldError name="name" />
                </div>
                <div>
                  <label htmlFor="so-phone" className="sr-only">Phone number</label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                    <input
                      id="so-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      onBlur={() => blurField("phone")}
                      className={errors.phone ? inputError : inputNormal}
                      placeholder="Phone Number"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      aria-required="true"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <FieldError name="phone" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-1">
                  <label htmlFor="so-email" className="sr-only">Email address</label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                    <input
                      id="so-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      onBlur={() => blurField("email")}
                      className={errors.email ? inputError : inputNormal}
                      placeholder="Email Address"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-required="true"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <FieldError name="email" />
                </div>
                <div>
                  <label htmlFor="so-age" className="sr-only">Age</label>
                  <div className="relative">
                    <ClipboardList className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                    <input
                      id="so-age"
                      name="age"
                      type="number"
                      inputMode="numeric"
                      min="0"
                      max="120"
                      value={form.age}
                      onChange={(e) => updateField("age", e.target.value)}
                      onBlur={() => blurField("age")}
                      className={errors.age ? inputError : inputNormal}
                      placeholder="Age"
                      aria-invalid={!!errors.age}
                      aria-describedby={errors.age ? "age-error" : undefined}
                      aria-required="true"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <FieldError name="age" />
                </div>
                <div>
                  <label htmlFor="so-gender" className="sr-only">Gender</label>
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                    <select
                      id="so-gender"
                      name="gender"
                      value={form.gender}
                      onChange={(e) => updateField("gender", e.target.value)}
                      onBlur={() => blurField("gender")}
                      className={`${errors.gender ? inputError : inputNormal} appearance-none pr-8`}
                      aria-invalid={!!errors.gender}
                      aria-describedby={errors.gender ? "gender-error" : undefined}
                      aria-required="true"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <FieldError name="gender" />
                </div>
              </div>


              <div>
                <label htmlFor="so-concern" className="mb-1.5 block text-[12.5px] font-semibold text-secondary">What is your concern?</label>
                <select
                  id="so-concern"
                  name="concern"
                  value={form.concern}
                  onChange={(e) => updateField("concern", e.target.value)}
                  onBlur={() => blurField("concern")}
                  className={`w-full rounded-xl border bg-card px-4 py-3 text-[13.5px] font-medium text-secondary outline-none transition-all duration-300 focus:ring-4 disabled:opacity-60 ${errors.concern ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-border/70 focus:border-primary focus:ring-primary/10"}`}
                  aria-invalid={!!errors.concern}
                  aria-describedby={errors.concern ? "concern-error" : undefined}
                  aria-required="true"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select Concern</option>
                  {CONCERNS.map((c) => <option key={c}>{c}</option>)}
                </select>
                <FieldError name="concern" />
              </div>

              <div>
                <label htmlFor="so-message" className="mb-1.5 block text-[12.5px] font-semibold text-secondary">Briefly describe your condition</label>
                <div className="relative">
                  <MessageCircle className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" aria-hidden />
                  <textarea
                    id="so-message"
                    name="message"
                    maxLength={1000}
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    onBlur={() => blurField("message")}
                    className={`${errors.message ? inputError : inputNormal} min-h-28 resize-y pt-3.5`}
                    placeholder="Write your message..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-required="true"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <FieldError name="message" />
              </div>

              <div>
                <span id="so-file-label" className="mb-1.5 block text-[12.5px] font-semibold text-secondary">Upload Medical Reports (PDF, JPG, PNG)</span>
                <label
                  htmlFor="so-file"
                  role="button"
                  tabIndex={isSubmitting ? -1 : 0}
                  onKeyDown={handleUploadKey}
                  aria-labelledby="so-file-label"
                  aria-describedby={`so-file-help${errors.file ? " file-error" : ""}`}
                  className={`group relative flex cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-[12px] border-2 border-dashed bg-gradient-to-br from-[#311261]/[0.03] to-[#c62347]/[0.03] px-5 py-9 text-center transition-all duration-300 hover:from-[#311261]/[0.06] hover:to-[#c62347]/[0.06] hover:shadow-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#311261]/20 focus-visible:border-[#311261] ${errors.file ? "border-red-300 hover:border-red-400" : "border-[#311261]/25 hover:border-[#311261]/60"}`}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#311261] shadow-soft ring-1 ring-[#311261]/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" aria-hidden>
                    <UploadCloud className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <span className="text-[13.5px] font-semibold text-secondary">
                    <span className="text-[#311261] underline decoration-dotted underline-offset-4">Click to upload</span> or drag and drop
                  </span>
                  <span id="so-file-help" className="text-[11.5px] text-muted-foreground">PDF, JPG or PNG · Max 10MB</span>
                  <input
                    id="so-file"
                    ref={fileInputRef}
                    name="file"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="sr-only"
                    onChange={(e) => updateField("file", e.target.files?.[0]?.name ?? "")}
                    disabled={isSubmitting}
                    aria-describedby="so-file-help"
                  />
                  {form.file && (
                    <span className="mt-1 inline-flex max-w-full items-center gap-1.5 rounded-full bg-[#311261]/10 px-3 py-1 text-[11.5px] font-semibold text-[#311261]" aria-live="polite">
                      <ClipboardCheck className="h-3 w-3 shrink-0" aria-hidden />
                      <span className="truncate">Selected file: {form.file}</span>
                    </span>
                  )}
                </label>
                <FieldError name="file" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-label={isSubmitting ? "Submitting your second opinion request" : "Submit second opinion request"}
                className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-[10px] bg-[linear-gradient(90deg,#311261,#4a1f7a_50%,#c62347)] px-6 py-4 text-[14.5px] font-bold text-primary-foreground shadow-glow-red transition-all duration-300 hover:shadow-lift hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#311261]/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden />
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    Submit Request
                    <span className="relative grid h-7 w-7 place-items-center rounded-full bg-white/25 transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                      <Send className="h-3.5 w-3.5" />
                    </span>
                  </>
                )}
              </button>



              {status === "ok" && (
                <p className="rounded-xl bg-primary/10 px-4 py-3 text-sm font-semibold text-primary" role="status">
                  Thank you — your request has been received. Our team will reach out shortly.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600" role="alert">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
            </div>

          </div>
        </Reveal>

        <Reveal variant="right">
          <div className="relative overflow-hidden rounded-[18px] bg-card p-7 shadow-soft ring-1 ring-border/60 lg:p-9">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 overflow-hidden">
              <img src={whyImg} alt="" aria-hidden loading="lazy" width={600} height={800} className="h-full w-full object-cover opacity-[0.18]" />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-card/70 to-transparent" />
            </div>
            <div className="relative">
              <h2 className="font-display text-2xl font-extrabold text-secondary">
                Why Choose a Second Opinion<br />at Ignite Vascular Center?
              </h2>
              <div className="mt-3 h-0.5 w-14 rounded-full bg-gradient-brand" />

              <div className="mt-7 space-y-6">
                {WHY.map((w, i) => (
                  <Reveal key={w.title} variant="up" delay={0.08 + i * 0.08}>
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#ede9f6] text-[#311261] ring-1 ring-[#311261]/20">
                        <w.icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <h4 className="font-display text-[15px] font-extrabold text-secondary">{w.title}</h4>
                        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{w.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal variant="up" delay={0.15}>
                <div className="mt-8 grid grid-cols-2 gap-2.5 border-t border-border/60 pt-6 sm:gap-3">
                  {[
                    { icon: Award, label: "15+ Yrs Experience" },
                    { icon: Stethoscope, label: "Minimally Invasive" },
                    { icon: Microscope, label: "Advanced Diagnostics" },
                    { icon: HeartHandshake, label: "Compassionate Care" },
                  ].map((t) => (
                    <div
                      key={t.label}
                      className="flex items-center gap-2 rounded-full bg-[#311261]/[0.04] px-3 py-2 ring-1 ring-[#311261]/15 transition-all duration-300 hover:bg-[#311261]/[0.08] hover:ring-[#311261]/30"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#311261] to-[#5b3a9e] text-white shadow-sm">
                        <t.icon className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                      <span className="truncate text-[11.5px] font-bold text-secondary sm:text-[12px]">{t.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal variant="up" className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Frequently Asked Questions</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-secondary sm:text-4xl">
            Understanding the Second Opinion Process
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary/70" />
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Get quick answers about eligibility, reports, confidentiality, and how our specialists review your case.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} variant="up" delay={0.06 + i * 0.06}>
                <div
                  className={`overflow-hidden rounded-[14px] bg-card shadow-soft ring-1 ring-border/60 transition-all duration-300 ${isOpen ? "ring-primary/20" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-300 ${isOpen ? "bg-primary text-white" : "bg-[#311261]/10 text-[#311261]"}`}>
                        <HelpCircle className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <span className="font-display text-[15px] font-extrabold text-secondary sm:text-base">{item.question}</span>
                    </span>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-surface/60 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 bg-primary/10 text-primary" : ""}`}>
                      <ChevronDown className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    aria-hidden={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-border/60 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                        <p className="max-w-3xl text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="zoom">
          <div className="relative overflow-hidden rounded-[14px] bg-[linear-gradient(115deg,#311261_0%,#311261_50%,#c62347_100%)] p-6 shadow-lift sm:p-8">
            <div className="relative grid items-center gap-5 md:grid-cols-[auto_1fr_auto]">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-primary shadow-lift animate-pulse-glow">
                <CalendarCheck className="h-7 w-7" />
              </span>
              <div className="min-w-0 text-white">
                <h3 className="font-display text-xl font-extrabold sm:text-2xl">Take the Next Step Towards Better Health</h3>
                <p className="mt-1 text-[13px] text-white/85">Get clarity, confidence, and the best treatment options with a second opinion from our vascular experts.</p>
              </div>
              <a href="#request" className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-white px-5 py-3 text-sm font-bold text-primary shadow-lift transition-transform duration-300 hover:scale-105">
                Request Second Opinion
                <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-brand text-white">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SecondOpinionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubBanner title="Second Opinion" crumb="Second Opinion" image={secondOpinionBanner} />
      <main>
        <Hero />
        <HelpRibbon />
        <HowItWorks />
        <RequestSection />
        <FAQSection />
        <CTABanner />
      </main>

      <Footer />
      <FloatingEmergency />
    </div>
  );
}
