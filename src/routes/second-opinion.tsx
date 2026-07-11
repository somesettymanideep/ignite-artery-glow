import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  ChevronRight, ChevronDown, ShieldCheck, FileText, HeartHandshake, Lock,
  ArrowRight, PlayCircle, Activity, Stethoscope, Users, HeartPulse,
  UploadCloud, UserRound, ClipboardCheck, MessagesSquare, ClipboardList,
  User, Phone, Mail, MessageCircle, Send, CalendarCheck, Loader2,
  Award, Search, Sparkles, HeartHandshake as HeartCare, HelpCircle,
} from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { FloatingEmergency } from "@/components/home/FloatingEmergency";
import heroImg from "@/assets/second-opinion-hero.jpg";
import doctorImg from "@/assets/doctor-portrait.jpg";
import whyImg from "@/assets/why-choose.jpg";

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
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-16 lg:px-8">
        <Reveal variant="left">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="font-semibold hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-secondary">Second Opinion</span>
          </nav>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-5xl lg:text-[3.25rem]">
            Get Clarity. Get Confidence.
            <span className="mt-2 block text-primary">Get a Second Opinion.</span>
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary/70" />

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Your health decisions matter. Our expert vascular specialists provide a thorough
            review of your diagnosis and treatment plan so you can move forward with
            confidence and peace of mind.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BADGES.map((b, i) => (
              <Reveal key={b.title} variant="up" delay={0.08 + i * 0.06}>
                <div className="text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                    <b.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <p className="mt-3 font-display text-[13.5px] font-bold text-secondary">{b.title}</p>
                  <p className="mt-1 text-[11.5px] leading-snug text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#request" className="group inline-flex items-center gap-2 rounded-[6px] bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow-red transition-transform duration-300 hover:scale-[1.02]">
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

        <Reveal variant="right" delay={0.15}>
          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-[85%] w-24 rounded-r-[80%] bg-primary/10 lg:block" aria-hidden />
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src={heroImg}
                alt="Anatomical illustration of the vascular tree"
                width={1200}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <Reveal variant="up" delay={0.35}>
              <div className="glass-card absolute -bottom-6 left-4 right-4 rounded-2xl bg-white/95 p-5 shadow-lift sm:left-8 sm:right-auto sm:max-w-sm">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-extrabold text-secondary">Not Sure About Your Diagnosis or Treatment?</p>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                      A second opinion can help you explore better options and ensure the right care for your vascular health.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HelpRibbon() {
  return (
    <section className="bg-[#f7f8fc] pb-16 pt-10 lg:pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up">
          <div className="relative overflow-hidden rounded-[18px] bg-[linear-gradient(115deg,#3a2a75_0%,#5a2585_45%,#c62347_100%)] p-6 shadow-lift sm:p-8">
            <div className="grid items-center gap-6 md:grid-cols-[220px_1fr]">
              <div className="relative hidden overflow-hidden rounded-2xl bg-white/10 md:block">
                <img src={doctorImg} alt="Vascular specialist" loading="lazy" width={400} height={280} className="h-40 w-full object-cover md:h-44" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-extrabold text-white sm:text-[26px]">You're Not Alone. We're Here to Help.</h3>
                <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-white/85">
                  A second opinion can provide reassurance, confirm your diagnosis, or present alternative treatment options tailored to your condition.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {HELP_ITEMS.map((h, i) => (
                    <Reveal key={h.label} variant="up" delay={0.08 + i * 0.06}>
                      <div className="flex items-center gap-3 text-white">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
                          <h.icon className="h-4 w-4" strokeWidth={1.9} />
                        </span>
                        <span className="text-[13.5px] font-semibold">{h.label}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  const colors = ["bg-primary", "bg-primary", "bg-indigo-600", "bg-primary", "bg-indigo-600"];
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
                  <span className="grid h-24 w-24 place-items-center rounded-full bg-white shadow-soft ring-1 ring-border/60">
                    <s.icon className="h-9 w-9 text-primary" strokeWidth={1.6} />
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
    "w-full rounded-xl border bg-card px-4 py-3 pl-10 text-[13.5px] font-medium text-secondary placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:ring-4";
  const inputNormal = `${inputBase} border-border/70 focus:border-primary focus:ring-primary/10`;
  const inputError = `${inputBase} border-red-400 focus:border-red-500 focus:ring-red-100`;

  const FieldError = ({ name }: { name: keyof FormData }) => {
    const msg = errors[name];
    if (!msg) return null;
    return <p className="mt-1.5 flex items-center gap-1.5 text-[11.5px] font-semibold text-red-500" role="alert"><span className="h-1 w-1 rounded-full bg-red-500" />{msg}</p>;
  };

  return (
    <section id="request" className="bg-background pb-16 lg:pb-20">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal variant="left">
          <div className="rounded-[18px] bg-card p-7 shadow-soft ring-1 ring-border/60 lg:p-8">
            <h2 className="font-display text-2xl font-extrabold text-secondary">Request Your Second Opinion</h2>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-gradient-brand" />
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              Fill in the details below. Our team will review your case and reach out within 24–48 hours.
            </p>

            <form onSubmit={submit} className="mt-5 space-y-4" aria-label="Second opinion form" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      onBlur={() => blurField("name")}
                      className={errors.name ? inputError : inputNormal}
                      placeholder="Full Name"
                      aria-label="Full name"
                      aria-invalid={!!errors.name}
                      disabled={isSubmitting}
                    />
                  </div>
                  <FieldError name="name" />
                </div>
                <div>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="tel"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      onBlur={() => blurField("phone")}
                      className={errors.phone ? inputError : inputNormal}
                      placeholder="Phone Number"
                      aria-label="Phone number"
                      aria-invalid={!!errors.phone}
                      disabled={isSubmitting}
                    />
                  </div>
                  <FieldError name="phone" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-1">
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      onBlur={() => blurField("email")}
                      className={errors.email ? inputError : inputNormal}
                      placeholder="Email Address"
                      aria-label="Email address"
                      aria-invalid={!!errors.email}
                      disabled={isSubmitting}
                    />
                  </div>
                  <FieldError name="email" />
                </div>
                <div>
                  <div className="relative">
                    <ClipboardList className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="number"
                      min="0"
                      max="120"
                      value={form.age}
                      onChange={(e) => updateField("age", e.target.value)}
                      onBlur={() => blurField("age")}
                      className={errors.age ? inputError : inputNormal}
                      placeholder="Age"
                      aria-label="Age"
                      aria-invalid={!!errors.age}
                      disabled={isSubmitting}
                    />
                  </div>
                  <FieldError name="age" />
                </div>
                <div>
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <select
                      value={form.gender}
                      onChange={(e) => updateField("gender", e.target.value)}
                      onBlur={() => blurField("gender")}
                      className={`${errors.gender ? inputError : inputNormal} appearance-none pr-8`}
                      aria-label="Gender"
                      aria-invalid={!!errors.gender}
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
                <label className="mb-1.5 block text-[12.5px] font-semibold text-secondary">What is your concern?</label>
                <select
                  value={form.concern}
                  onChange={(e) => updateField("concern", e.target.value)}
                  onBlur={() => blurField("concern")}
                  className={`w-full rounded-xl border bg-card px-4 py-3 text-[13.5px] font-medium text-secondary outline-none transition-all duration-300 focus:ring-4 disabled:opacity-60 ${errors.concern ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-border/70 focus:border-primary focus:ring-primary/10"}`}
                  aria-label="Primary concern"
                  aria-invalid={!!errors.concern}
                  disabled={isSubmitting}
                >
                  <option value="">Select Concern</option>
                  {CONCERNS.map((c) => <option key={c}>{c}</option>)}
                </select>
                <FieldError name="concern" />
              </div>

              <div>
                <label className="mb-1.5 block text-[12.5px] font-semibold text-secondary">Briefly describe your condition</label>
                <div className="relative">
                  <MessageCircle className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <textarea
                    maxLength={1000}
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    onBlur={() => blurField("message")}
                    className={`${errors.message ? inputError : inputNormal} min-h-28 resize-y pt-3.5`}
                    placeholder="Write your message..."
                    aria-label="Condition description"
                    aria-invalid={!!errors.message}
                    disabled={isSubmitting}
                  />
                </div>
                <FieldError name="message" />
              </div>

              <div>
                <label className="mb-1.5 block text-[12.5px] font-semibold text-secondary">Upload Medical Reports (PDF, JPG, PNG)</label>
                <label className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed bg-surface/40 px-5 py-8 text-center transition-colors hover:bg-primary/5 ${errors.file ? "border-red-300 hover:border-red-400" : "border-border hover:border-primary"}`}>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-primary shadow-soft">
                    <UploadCloud className="h-5 w-5" />
                  </span>
                  <span className="text-[13px] font-semibold text-secondary">Click to upload or drag and drop</span>
                  <span className="text-[11.5px] text-muted-foreground">( Max file size: 10MB )</span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => updateField("file", e.target.files?.[0]?.name ?? "")}
                    disabled={isSubmitting}
                  />
                  {form.file && <span className="text-[11.5px] font-semibold text-primary">{form.file}</span>}
                </label>
                <FieldError name="file" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-[6px] bg-[linear-gradient(90deg,#3a2a75,#c62347)] px-6 py-3.5 font-bold text-primary-foreground shadow-glow-red transition-all duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    Submit Request
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25 transition-transform duration-300 group-hover:translate-x-1">
                      <Send className="h-3.5 w-3.5" />
                    </span>
                  </>
                )}
              </button>

              <div className="flex items-start gap-3 rounded-xl bg-indigo-50/70 p-4 ring-1 ring-indigo-100">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-indigo-600 shadow-soft">
                  <Lock className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-display text-[13px] font-bold text-secondary">Your information is private and secure</p>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-muted-foreground">
                    We treat every submission with strict medical confidentiality. Your records are only reviewed by authorized vascular specialists and are never shared with third parties.
                  </p>
                </div>
              </div>

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
        </Reveal>

        <Reveal variant="right">
          <div className="relative overflow-hidden rounded-[18px] bg-card p-7 shadow-soft ring-1 ring-border/60 lg:p-9">
            <img src={whyImg} alt="" aria-hidden loading="lazy" width={800} height={800} className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08]" />
            <div className="relative">
              <h2 className="font-display text-2xl font-extrabold text-indigo-700">
                Why Choose a Second Opinion<br />at Ignite Vascular Center?
              </h2>
              <div className="mt-3 h-0.5 w-14 rounded-full bg-gradient-brand" />

              <div className="mt-7 space-y-6">
                {WHY.map((w, i) => (
                  <Reveal key={w.title} variant="up" delay={0.08 + i * 0.08}>
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-indigo-600 shadow-soft ring-1 ring-border/60">
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
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-300 ${isOpen ? "bg-primary text-white" : "bg-indigo-50 text-primary"}`}>
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
          <div className="relative overflow-hidden rounded-[14px] bg-[linear-gradient(115deg,#3a2a75_0%,#5a2585_50%,#c62347_100%)] p-6 shadow-lift sm:p-8">
            <svg className="pointer-events-none absolute inset-y-0 right-0 h-full w-72 opacity-30" viewBox="0 0 300 200" fill="none" aria-hidden>
              <path d="M0 100 L60 100 L80 40 L100 160 L120 80 L140 100 L200 100 L220 60 L240 140 L260 100 L320 100" stroke="white" strokeWidth="2" className="heartbeat-line" />
            </svg>
            <div className="relative grid items-center gap-5 md:grid-cols-[auto_1fr_auto]">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-primary shadow-lift animate-pulse-glow">
                <CalendarCheck className="h-7 w-7" />
              </span>
              <div className="min-w-0 text-white">
                <h3 className="font-display text-xl font-extrabold sm:text-2xl">Ready to Take the Next Step Towards Better Care?</h3>
                <p className="mt-1 text-[13px] text-white/85">Request your second opinion from our expert vascular specialists today.</p>
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
