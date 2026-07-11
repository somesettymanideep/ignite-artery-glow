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
          <nav aria-label="Breadcrumb" className="mt-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md shadow-soft">
            <Link
              to="/"
              className="rounded-full text-white/75 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/50" aria-hidden />
            <span className="text-primary-foreground" aria-current="page">{crumb}</span>
          </nav>
        </Reveal>

      </div>
    </section>
  );
}
