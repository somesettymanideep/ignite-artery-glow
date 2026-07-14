import { useEffect, useRef, useState, useCallback } from "react";
import { Instagram, Play, Pause, Heart, MessageCircle, Send, Volume2, VolumeX } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import reel1 from "@/assets/about-surgery.jpg";
import reel2 from "@/assets/home2-doctor.jpg";
import reel3 from "@/assets/about-vascular.jpg";
import reel4 from "@/assets/hero-surgeon.jpg";
import reel5 from "@/assets/case-hero-vessels.jpg";
import igReel1 from "@/assets/ignite-reel-1.mp4.asset.json";
import igReel2 from "@/assets/ignite-reel-2.mp4.asset.json";
import igReel3 from "@/assets/ignite-reel-3.mp4.asset.json";
import igReel4 from "@/assets/ignite-reel-4.mp4.asset.json";

type Reel = {
  poster: string;
  video?: string;
  caption: string;
  likes: string;
  comments: number;
  views: string;
  tag: string;
};

const REELS: Reel[] = [
  { video: igReel1.url, poster: reel1, caption: "Inside Ignite Vascular Center — a look at our advanced vascular care", likes: "12.4k", comments: 218, views: "84k", tag: "#IgniteVascular" },
  { video: igReel2.url, poster: reel2, caption: "Dr. Narasimha Sai on early signs of varicose veins you shouldn't ignore", likes: "9.1k", comments: 342, views: "62k", tag: "#VaricoseVeins" },
  { video: igReel3.url, poster: reel3, caption: "3D walkthrough — how a diabetic foot ulcer heals with vascular care", likes: "7.6k", comments: 154, views: "48k", tag: "#DiabeticFoot" },
  { video: igReel4.url, poster: reel4, caption: "Live patient story: back to walking pain-free after PAD treatment", likes: "15.2k", comments: 487, views: "1.1M", tag: "#PatientStory" },
  { poster: reel5, caption: "Understanding DVT — the silent clot that travels", likes: "6.3k", comments: 92, views: "39k", tag: "#DVT" },
];

type ReelCardProps = {
  reel: Reel;
  index: number;
  isUnmuted: boolean;
  onToggleSound: (i: number) => void;
  registerVideo: (i: number, el: HTMLVideoElement | null) => void;
};

function ReelCard({ reel, index, isUnmuted, onToggleSound, registerVideo }: ReelCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } else {
      v.pause();
    }
  }, []);

  // Lazy-mount videos only when card is near viewport
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "300px 400px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      role="listitem"
      className="group relative aspect-[9/16] w-[220px] overflow-hidden rounded-[1.5rem] border border-border/60 bg-secondary shadow-lift transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-red sm:w-[240px]"
    >
      {/* Shimmer skeleton — visible until poster (or video first frame) is ready */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-[linear-gradient(110deg,#1f1730_25%,#2a2140_50%,#1f1730_75%)] bg-[length:200%_100%] transition-opacity duration-500 ${
          posterLoaded || videoReady ? "opacity-0" : "opacity-100 animate-[reel-shimmer_1.6s_linear_infinite]"
        }`}
      />

      {/* Poster thumbnail — shown until video first frame is buffered */}
      <img
        src={reel.poster}
        alt={reel.caption}
        loading="lazy"
        decoding="async"
        onLoad={() => setPosterLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          videoReady && reel.video ? "opacity-0" : "opacity-100"
        } ${!reel.video ? "transition-transform duration-[1400ms] ease-out group-hover:scale-110" : ""}`}
      />

      {/* Video — mounted only after intersection; fades in once buffered */}
      {reel.video && inView && (
        <video
          ref={(el) => {
            videoRef.current = el;
            registerVideo(index, el);
          }}
          src={reel.video}
          poster={reel.poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out group-hover:scale-105 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/85" aria-hidden />

      {/* Buffering spinner while video prepares */}
      {reel.video && inView && !videoReady && (
        <div className="absolute inset-0 grid place-items-center" aria-hidden>
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white/90" />
        </div>
      )}

      {/* Top row */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 pt-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Reel
        </span>
        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
          {reel.views}
        </span>
      </div>

      {/* Per-video sound toggle */}
      {reel.video && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleSound(index);
          }}
          aria-label={isUnmuted ? "Mute video" : "Unmute video"}
          aria-pressed={isUnmuted}
          className={`absolute right-3 top-12 z-10 grid h-9 w-9 place-items-center rounded-full backdrop-blur transition-all duration-300 hover:scale-110 ${
            isUnmuted
              ? "bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)] text-white shadow-glow-red"
              : "bg-black/50 text-white hover:bg-black/70"
          }`}
        >
          {isUnmuted ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </button>
      )}

      {/* Play button (only for image-only reels) */}
      {!reel.video && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-secondary shadow-lift transition-transform duration-500 group-hover:scale-110">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </span>
        </div>
      )}

      {/* Bottom info */}
      <div className="absolute inset-x-0 bottom-0 space-y-2 p-3 text-white">
        <p className="line-clamp-2 text-[11px] font-semibold leading-snug">{reel.caption}</p>
        <div className="flex items-center gap-3 text-[10px] font-bold text-white/90">
          <span className="inline-flex items-center gap-1"><Heart className="h-3 w-3" /> {reel.likes}</span>
          <span className="inline-flex items-center gap-1"><MessageCircle className="h-3 w-3" /> {reel.comments}</span>
          <span className="inline-flex items-center gap-1"><Send className="h-3 w-3" /></span>
          <span className="ml-auto rounded-full bg-white/20 px-1.5 py-0.5 backdrop-blur">{reel.tag}</span>
        </div>
      </div>
    </article>
  );
}

export function InstagramFeed() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const [unmutedIdx, setUnmutedIdx] = useState<number | null>(null);

  const registerVideo = useCallback((idx: number, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(idx, el);
      el.muted = true;
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } else {
      videoRefs.current.delete(idx);
    }
  }, []);

  const toggleSound = useCallback((idx: number) => {
    setUnmutedIdx((prev) => (prev === idx ? null : idx));
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((el, idx) => {
      const shouldUnmute = idx === unmutedIdx;
      el.muted = !shouldUnmute;
      if (shouldUnmute) {
        el.volume = 1;
        const p = el.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => setUnmutedIdx(null));
        }
      }
    });
  }, [unmutedIdx]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let paused = false;
    const step = () => {
      if (!paused && unmutedIdx === null && el) {
        el.scrollLeft += 0.35;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(step);
    };
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchstart", onEnter, { passive: true });
    el.addEventListener("touchend", onLeave, { passive: true });
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onEnter);
      el.removeEventListener("touchend", onLeave);
    };
  }, [unmutedIdx]);

  return (
    <section id="instagram" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <style>{`
        @keyframes reel-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#F58529]/15 via-[#DD2A7B]/15 to-[#8134AF]/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#515BD4]/15 via-[#DD2A7B]/10 to-[#F58529]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="up" className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-primary">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)] text-white shadow-glow-red">
                <Instagram className="h-4 w-4" strokeWidth={2} />
              </span>
              @ignitevascular
            </span>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-secondary sm:text-4xl">
              Follow Our <span className="bg-[linear-gradient(90deg,#F58529,#DD2A7B,#8134AF)] bg-clip-text text-transparent">Instagram</span> Reels
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Real procedures, patient stories, doctor tips and behind-the-scenes moments from Ignite Vascular Center.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)] px-5 py-3 text-sm font-bold text-white shadow-glow-red transition-transform duration-300 hover:scale-[1.03]"
            >
              <Instagram className="h-4 w-4" /> Follow Us
            </a>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="scrollbar-none mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          role="list"
          aria-label="Instagram reels"
        >
          {REELS.concat(REELS).map((r, i) => (
            <Reveal
              key={i}
              variant="up"
              delay={(i % 5) * 0.06}
              className="reveal shrink-0 snap-start"
            >
              <ReelCard
                reel={r}
                index={i}
                isUnmuted={unmutedIdx === i}
                onToggleSound={toggleSound}
                registerVideo={registerVideo}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
