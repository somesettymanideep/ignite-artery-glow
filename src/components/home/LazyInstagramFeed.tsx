import { lazy, Suspense, useEffect, useRef, useState } from "react";

const InstagramFeed = lazy(() =>
  import("./InstagramFeed").then((m) => ({ default: m.InstagramFeed })),
);

/**
 * Defers mounting (and therefore code-splitting + video asset loading) of the
 * Instagram Reels section until the user scrolls near it. Keeps the initial
 * home-page bundle small and avoids fetching any reel videos on first paint.
 */
export function LazyInstagramFeed() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setMount(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setMount(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!mount) {
    return (
      <div
        ref={sentinelRef}
        aria-hidden
        className="min-h-[520px] w-full bg-white"
      />
    );
  }

  return (
    <Suspense
      fallback={<div aria-hidden className="min-h-[520px] w-full bg-white" />}
    >
      <InstagramFeed />
    </Suspense>
  );
}
