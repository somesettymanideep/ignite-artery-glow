import { useEffect, useRef, useState, useCallback } from "react";
import { Instagram, Play, Pause, Heart, MessageCircle, Send, ChevronLeft, ChevronRight } from "lucide-react";

import { Reveal } from "@/hooks/use-reveal";
import reel1 from "@/assets/about-surgery.jpg";
import reel2 from "@/assets/home2-doctor.jpg";
import reel3 from "@/assets/about-vascular.jpg";
import reel4 from "@/assets/hero-surgeon.jpg";

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
];

type ReelCardProps = {
  reel: Reel;
  index: number;
  isActive: boolean;
  onPlayRequest: (i: number) => void;
  onPauseRequest: (i: number) => void;
  registerVideo: (i: number, el: HTMLVideoElement | null) => void;
};

function ReelCard({ reel, index, isActive, onPlayRequest, onPauseRequest, registerVideo }: ReelCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = useCallback(() => {
    if (isPlaying) onPauseRequest(index);
    else onPlayRequest(index);
  }, [isPlaying, index, onPlayRequest, onPauseRequest]);

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

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.target !== e.currentTarget) return;
      if (!reel.video) return;
      const key = e.key.toLowerCase();
      if (e.key === " " || e.key === "Spacebar" || key === "k" || key === "enter") {
        e.preventDefault();
        handleToggle();
      }
    },
    [reel.video, handleToggle],
  );

  const reelLabel = `Instagram reel ${index + 1}: ${reel.caption}. ${reel.views} views, ${reel.likes} likes, ${reel.comments} comments.${reel.video ? " Press Space or K to play or pause." : ""}`;

  return (
    <article
      ref={cardRef}
      role="listitem"
      tabIndex={reel.video ? 0 : -1}
      onKeyDown={onKeyDown}
      aria-label={reelLabel}
      aria-roledescription="Instagram reel"
      className="group relative aspect-[9/16] w-[220px] overflow-hidden rounded-[1.5rem] border border-border/60 bg-secondary shadow-lift transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-red focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-[240px]"
    >
      <div
        aria-hidden
        className={`absolute inset-0 bg-[linear-gradient(110deg,#1f1730_25%,#2a2140_50%,#1f1730_75%)] bg-[length:200%_100%] transition-opacity duration-500 ${
          posterLoaded || videoReady ? "opacity-0" : "opacity-100 animate-[reel-shimmer_1.6s_linear_infinite]"
        }`}
      />

      {!reel.video && (
        <img
          src={reel.poster}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onLoad={() => setPosterLoaded(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
      )}

      {reel.video && inView && (
        <video
          ref={(el) => {
            videoRef.current = el;
            registerVideo(index, el);
          }}
          src={reel.video}
          loop
          playsInline
          muted={!isActive}
          preload="metadata"
          aria-label={`Video: ${reel.caption}`}
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

      {reel.video && inView && !videoReady && (
        <div className="absolute inset-0 grid place-items-center" role="status" aria-live="polite">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white/90" aria-hidden />
          <span className="sr-only">Loading video</span>
        </div>
      )}

      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 pt-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden /> Reel
        </span>
        <span
          className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur"
          aria-label={`${reel.views} views`}
        >
          {reel.views}
        </span>
      </div>

      {!reel.video && (
        <div className="absolute inset-0 grid place-items-center" aria-hidden>
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-secondary shadow-lift transition-transform duration-500 group-hover:scale-110">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </span>
        </div>
      )}

      {reel.video && videoReady && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
          aria-label={isPlaying ? `Pause reel ${index + 1}` : `Play reel ${index + 1} with sound`}
          aria-pressed={isPlaying}
          title={isPlaying ? "Pause (Space / K)" : "Play with sound (Space / K)"}
          className={`absolute inset-0 z-10 grid place-items-center transition-opacity duration-300 focus:outline-none focus-visible:opacity-100 ${
            isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
          }`}
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-secondary shadow-lift backdrop-blur transition-transform duration-300 hover:scale-110">
            {isPlaying ? (
              <Pause className="h-5 w-5 fill-current" aria-hidden />
            ) : (
              <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden />
            )}
          </span>
        </button>
      )}

      <div className="absolute inset-x-0 bottom-0 space-y-2 p-3 text-white">
        <p className="line-clamp-2 text-[11px] font-semibold leading-snug">{reel.caption}</p>
        <div className="flex items-center gap-3 text-[10px] font-bold text-white/90">
          <span className="inline-flex items-center gap-1" aria-label={`${reel.likes} likes`}>
            <Heart className="h-3 w-3" aria-hidden /> {reel.likes}
          </span>
          <span className="inline-flex items-center gap-1" aria-label={`${reel.comments} comments`}>
            <MessageCircle className="h-3 w-3" aria-hidden /> {reel.comments}
          </span>
          <span className="inline-flex items-center gap-1" aria-hidden>
            <Send className="h-3 w-3" />
          </span>
          <span className="ml-auto rounded-full bg-white/20 px-1.5 py-0.5 backdrop-blur">{reel.tag}</span>
        </div>
      </div>
    </article>
  );
}

export function InstagramFeed() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const activeIdxRef = useRef<number | null>(null);

  const registerVideo = useCallback((idx: number, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(idx, el);
    } else {
      videoRefs.current.delete(idx);
    }
  }, []);

  const playReel = useCallback((idx: number) => {
    const target = videoRefs.current.get(idx);
    if (!target) return;

    // Pause & mute every other video
    videoRefs.current.forEach((el, i) => {
      if (i !== idx) {
        try { el.pause(); } catch {}
        el.muted = true;
      }
    });

    target.muted = false;
    target.defaultMuted = false;
    target.removeAttribute("muted");
    target.volume = 1;
    activeIdxRef.current = idx;
    setActiveIdx(idx);

    const tryPlay = () => {
      target.muted = false;
      target.defaultMuted = false;
      target.removeAttribute("muted");
      const p = target.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {});
      }
    };
    tryPlay();
    if (target.readyState < 2) {
      const onReady = () => {
        target.removeEventListener("loadedmetadata", onReady);
        if (activeIdxRef.current === idx) tryPlay();
      };
      target.addEventListener("loadedmetadata", onReady);
    }
  }, []);

  const pauseReel = useCallback((idx: number) => {
    const target = videoRefs.current.get(idx);
    if (!target) return;
    try { target.pause(); } catch {}
    target.muted = true;
    if (activeIdxRef.current === idx) {
      activeIdxRef.current = null;
      setActiveIdx(null);
    }
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (isMobile) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let paused = false;
    const step = () => {
      if (!paused && activeIdx === null && el) {
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
  }, [activeIdx, isMobile]);

  const slideBy = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) return;
    const scrollLeft = el.scrollLeft;
    let currentIdx = 0;
    let bestDist = Infinity;
    children.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - scrollLeft);
      if (d < bestDist) {
        bestDist = d;
        currentIdx = i;
      }
    });
    const nextIdx = Math.max(0, Math.min(children.length - 1, currentIdx + dir));
    const target = children[nextIdx];
    el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  }, []);


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
          {(isMobile ? REELS : REELS.concat(REELS)).map((r, i) => (
            <Reveal
              key={i}
              variant="up"
              delay={(i % 5) * 0.06}
              className="reveal shrink-0 snap-center md:snap-start basis-full md:basis-auto flex justify-center"
            >
              <ReelCard
                reel={r}
                index={i}
                isActive={activeIdx === i}
                onPlayRequest={playReel}
                onPauseRequest={pauseReel}
                registerVideo={registerVideo}
              />
            </Reveal>
          ))}
        </div>

        {isMobile && (
          <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
            <button
              type="button"
              onClick={() => slideBy(-1)}
              aria-label="Previous reel"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-secondary shadow-md transition-all hover:scale-105 hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => slideBy(1)}
              aria-label="Next reel"
              className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)] text-white shadow-glow-red transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
