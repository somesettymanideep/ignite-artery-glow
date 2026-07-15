import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
    bg: "#1877F2",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    bg: "linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    bg: "#0A66C2",
  },
];

export function FloatingSocials() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = Math.max(window.innerHeight * 0.7, 500);
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 transition-all duration-500 md:flex ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0 pointer-events-none"
      }`}
    >
      {socials.map(({ name, href, icon: Icon, bg }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="group relative flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110"
          style={{ background: bg }}
        >
          <Icon size={20} strokeWidth={2.2} />
          <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1">
            {name}
          </span>
        </a>
      ))}
    </div>
  );
}
