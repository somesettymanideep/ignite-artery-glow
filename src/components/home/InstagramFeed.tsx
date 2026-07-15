import { useEffect, useRef, useState, useCallback } from "react";
import { Instagram, Play, Pause, Heart, MessageCircle, Send, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";

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

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.target !== e.currentTarget) return;
      if (!reel.video) return;
      const key = e.key.toLowerCase();
      if (e.key === " " || e.key === "Spacebar" || key === "k" || key === "enter") {
        e.preventDefault();
        togglePlay();
      } else if (key === "m") {
        e.preventDefault();
        onToggleSound(index);
      }
    },
    [reel.video, togglePlay, onToggleSound, index],
  );

  const reelLabel = `Instagram reel ${index + 1}: ${reel.caption}. ${reel.views} views, ${reel.likes} likes, ${reel.comments} comments.${reel.video ? " Press Space or K to play or pause, M to toggle sound." : ""}`;

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
      {/* Shimmer skeleton — visible until poster (or video first frame) is ready */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-[linear-gradient(110deg,#1f1730_25%,#2a2140_50%,#1f1730_75%)] bg-[length:200%_100%] transition-opacity duration-500 ${
          posterLoaded || videoReady ? "opacity-0" : "opacity-100 animate-[reel-shimmer_1.6s_linear_infinite]"
        }`}
      />

      {/* Poster thumbnail — only for image-only reels (videos have no thumbnail) */}
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

      {/* Video — mounted only after intersection; fades in once buffered */}
      {reel.video && inView && (
        <video
          ref={(el) => {
            videoRef.current = el;
            registerVideo(index, el);
          }}
          src={reel.video}
          loop
          muted
          playsInline
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

      {/* Buffering spinner while video prepares */}
      {reel.video && inView && !videoReady && (
        <div className="absolute inset-0 grid place-items-center" role="status" aria-live="polite">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white/90" aria-hidden />
          <span className="sr-only">Loading video</span>
        </div>
      )}

      {/* Top row */}
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

      {/* Per-video sound toggle */}
      {reel.video && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleSound(index);
          }}
          aria-label={isUnmuted ? `Mute reel ${index + 1}` : `Unmute reel ${index + 1}`}
          aria-pressed={isUnmuted}
          title={isUnmuted ? "Mute (M)" : "Unmute (M)"}
          className={`absolute right-3 top-12 z-20 grid h-9 w-9 place-items-center rounded-full backdrop-blur transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 ${
            isUnmuted
              ? "bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)] text-white shadow-glow-red"
              : "bg-black/50 text-white hover:bg-black/70"
          }`}
        >
          {isUnmuted ? <Volume2 className="h-4 w-4" aria-hidden /> : <VolumeX className="h-4 w-4" aria-hidden />}
        </button>
      )}

      {/* Play button (only for image-only reels) */}
      {!reel.video && (
        <div className="absolute inset-0 grid place-items-center" aria-hidden>
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-secondary shadow-lift transition-transform duration-500 group-hover:scale-110">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </span>
        </div>
      )}

      {/* Play/Pause button for videos */}
      {reel.video && videoReady && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          aria-label={isPlaying ? `Pause reel ${index + 1}` : `Play reel ${index + 1}`}
          aria-pressed={isPlaying}
          title={isPlaying ? "Pause (Space / K)" : "Play (Space / K)"}
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

      {/* Bottom info */}
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
  const [unmutedIdx, setUnmutedIdx] = useState<number | null>(null);
  const unmutedIdxRef = useRef<number | null>(null);

  const registerVideo = useCallback((idx: number, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(idx, el);
      el.muted = true;
    } else {
      videoRefs.current.delete(idx);
    }
  }, []);

  const toggleSound = useCallback((idx: number) => {
    // Run audio side effects SYNCHRONOUSLY in the user gesture (outside any
    // setState updater — those may run twice in StrictMode and undo the effect).
    const target = videoRefs.current.get(idx);
    if (!target) return;

    const willUnmute = unmutedIdxRef.current !== idx;

    // Mute every other video first
    videoRefs.current.forEach((el, i) => {
      if (i !== idx) {
        el.muted = true;
      }
    });

    if (willUnmute) {
      target.muted = false;
      target.volume = 1;
      // Always (re)start playback when the user turns sound on
      const p = target.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          target.muted = true;
          unmutedIdxRef.current = null;
          setUnmutedIdx(null);
        });
      }
      unmutedIdxRef.current = idx;
      setUnmutedIdx(idx);
    } else {
      target.muted = true;
      unmutedIdxRef.current = null;
      setUnmutedIdx(null);
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
    if (isMobile) return; // no autoplay on mobile
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
  }, [unmutedIdx, isMobile]);

  const slideBy = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
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
