import { Reveal, useCountUp } from "@/hooks/use-reveal";

const stats = [
  { value: 5000, suffix: "+", label: "Successful Procedures" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
  { value: 24, suffix: "/7", label: "Patient Support" },
];

function Counter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <Reveal variant="up" delay={delay} className="glass-card hover-lift rounded-3xl p-8 text-center">
      <span ref={ref} className="font-display text-4xl font-extrabold text-gradient sm:text-5xl">
        {current.toLocaleString()}
        {suffix}
      </span>
      <p className="mt-2 text-sm font-semibold text-muted-foreground">{label}</p>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section className="relative py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 lg:grid-cols-4 lg:gap-7 lg:px-8">
        {stats.map((s, i) => (
          <Counter key={s.label} {...s} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}
