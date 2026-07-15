import { useEffect, useState } from "react";
import { z } from "zod";
import { Calendar as CalendarIcon, Mail, MessageSquare, Phone, User, Clock, CheckCircle2, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

const BOOKING_EVENT = "ignite:open-booking";

export function openBookingModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(BOOKING_EVENT));
  }
}

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s()-]+$/i, "Only digits, spaces and + ( ) - are allowed"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: "", email: "", phone: "", date: "", time: "", message: "" };

const TIME_SLOTS = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM",
];

export function BookingModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => {
      setSubmitted(false);
      setErrors({});
      setForm(EMPTY);
      setOpen(true);
    };
    window.addEventListener(BOOKING_EVENT, handler);
    return () => window.removeEventListener(BOOKING_EVENT, handler);
  }, []);

  const today = new Date().toISOString().slice(0, 10);

  const setField = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    // Success — in real app: send to backend / email service
    setSubmitted(true);
  };

  const inputBase =
    "w-full rounded-xl border bg-white px-11 py-3 text-sm text-secondary placeholder:text-muted-foreground/70 outline-none transition-all duration-200 focus:ring-4";
  const inputOk =
    "border-border/70 focus:border-primary focus:ring-primary/15";
  const inputErr =
    "border-red-400 focus:border-red-500 focus:ring-red-500/15";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg overflow-hidden border-0 bg-white p-0 sm:max-w-xl [&>button.absolute]:hidden">
        {/* Gradient header */}
        <div className="relative overflow-hidden bg-gradient-brand px-6 pb-8 pt-7 text-white">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/15 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" aria-hidden />
          <DialogClose
            aria-label="Close"
            className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <X className="h-4 w-4" />
          </DialogClose>
          <DialogHeader className="relative space-y-1.5 text-left">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest backdrop-blur">
              <CalendarIcon className="h-3.5 w-3.5" /> Appointment
            </div>
            <DialogTitle className="font-display text-2xl font-black tracking-tight text-white sm:text-[26px]">
              Book Your Consultation
            </DialogTitle>
            <DialogDescription className="text-sm text-white/85">
              Fill in your details and we'll confirm your slot with Dr. G. Narasimha Sai.
            </DialogDescription>
          </DialogHeader>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-7 w-7" />
            </span>
            <h3 className="font-display text-xl font-bold text-secondary">Appointment request sent</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Thank you, {form.name.split(" ")[0]}. Our team will call you shortly on{" "}
              <span className="font-semibold text-secondary">{form.phone}</span> to confirm your visit on{" "}
              <span className="font-semibold text-secondary">
                {new Date(form.date).toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" })}
              </span>{" "}
              at <span className="font-semibold text-secondary">{form.time}</span>.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-secondary px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-4 px-6 py-6">
            {/* Name */}
            <Field label="Full Name" htmlFor="bk-name" error={errors.name}>
              <div className="relative">
                <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="bk-name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                  aria-invalid={!!errors.name}
                />
              </div>
            </Field>

            {/* Email */}
            <Field label="Email Address" htmlFor="bk-email" error={errors.email}>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="bk-email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={255}
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                  aria-invalid={!!errors.email}
                />
              </div>
            </Field>

            {/* Phone */}
            <Field label="Phone Number" htmlFor="bk-phone" error={errors.phone}>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="bk-phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={20}
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  className={`${inputBase} ${errors.phone ? inputErr : inputOk}`}
                  aria-invalid={!!errors.phone}
                />
              </div>
            </Field>

            {/* Date + Time */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Preferred Date" htmlFor="bk-date" error={errors.date}>
                <div className="relative">
                  <CalendarIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="bk-date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => setField("date", e.target.value)}
                    className={`${inputBase} ${errors.date ? inputErr : inputOk}`}
                    aria-invalid={!!errors.date}
                  />
                </div>
              </Field>
              <Field label="Preferred Time" htmlFor="bk-time" error={errors.time}>
                <div className="relative">
                  <Clock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select
                    id="bk-time"
                    value={form.time}
                    onChange={(e) => setField("time", e.target.value)}
                    className={`${inputBase} appearance-none pr-9 ${errors.time ? inputErr : inputOk}`}
                    aria-invalid={!!errors.time}
                  >
                    <option value="">Select time</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </Field>
            </div>

            {/* Message */}
            <Field label="Message (optional)" htmlFor="bk-message" error={errors.message}>
              <div className="relative">
                <MessageSquare className="pointer-events-none absolute left-3.5 top-4 h-4 w-4 text-muted-foreground" />
                <textarea
                  id="bk-message"
                  rows={3}
                  maxLength={1000}
                  placeholder="Briefly describe your concern (varicose veins, leg pain, diabetic foot, etc.)"
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                  className={`${inputBase} min-h-[92px] resize-y py-3 ${errors.message ? inputErr : inputOk}`}
                />
              </div>
            </Field>

            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-glow-red transition-transform duration-300 hover:scale-[1.02]"
            >
              <CalendarIcon className="h-4 w-4" /> Confirm Appointment
            </button>
            <p className="text-center text-[11px] text-muted-foreground">
              By submitting, you agree to be contacted regarding your appointment.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label, htmlFor, error, children,
}: { label: string; htmlFor: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-secondary/70">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
