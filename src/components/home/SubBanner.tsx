import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

type Props = {
  title: string;
  image: string;
  crumb: string;
};

export function SubBanner({ title, image, crumb }: Props) {
  return (
    <section className="relative h-[300px] overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/75 to-secondary/50" />
      </div>
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 lg:px-8">
        <Reveal variant="up">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal variant="up" delay={0.08}>
          <nav aria-label="Breadcrumb" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Link to="/" className="font-semibold text-white/80 transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4 text-white/60" />
            <span className="font-semibold text-primary-foreground">{crumb}</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
