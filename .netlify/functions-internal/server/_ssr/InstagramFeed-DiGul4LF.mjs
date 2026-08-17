import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { $ as Heart, Ct as ChevronLeft, M as Pause, St as ChevronRight, Z as Instagram, b as Send, k as Play, z as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as Reveal } from "./Navbar-BM-BbmIn.mjs";
import { t as about_surgery_default } from "./about-surgery-DfwoFKko.mjs";
import { t as home2_doctor_default } from "./home2-doctor-BE0K0zsR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/InstagramFeed-DiGul4LF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var REELS = [
	{
		webm: "/reels/ignite-reel-1.webm",
		video: "/reels/ignite-reel-1.mp4",
		poster: about_surgery_default,
		caption: "Inside Ignite Vascular Center — a look at our advanced vascular care",
		likes: "12.4k",
		comments: 218,
		views: "84k",
		tag: "#IgniteVascular"
	},
	{
		webm: "/reels/ignite-reel-2.webm",
		video: "/reels/ignite-reel-2.mp4",
		poster: home2_doctor_default,
		caption: "Dr. Narasimha Sai on early signs of varicose veins you shouldn't ignore",
		likes: "9.1k",
		comments: 342,
		views: "62k",
		tag: "#VaricoseVeins"
	},
	{
		webm: "/reels/ignite-reel-3.webm",
		video: "/reels/ignite-reel-3.mp4",
		poster: "https://ignitevascularcenter.com/assets/about-vascular-4lTmMu_B.jpg",
		caption: "3D walkthrough — how a diabetic foot ulcer heals with vascular care",
		likes: "7.6k",
		comments: 154,
		views: "48k",
		tag: "#DiabeticFoot"
	},
	{
		webm: "/reels/ignite-reel-4.webm",
		video: "/reels/ignite-reel-4.mp4",
		poster: "https://ignitevascularcenter.com/assets/hero-surgeon-BLbv3VV_.jpg",
		caption: "Live patient story: back to walking pain-free after PAD treatment",
		likes: "15.2k",
		comments: 487,
		views: "1.1M",
		tag: "#PatientStory"
	}
];
function ReelCard({ reel, index, isActive, onPlayRequest, onPauseRequest, registerVideo }) {
	const cardRef = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	const [posterLoaded, setPosterLoaded] = (0, import_react.useState)(false);
	const [videoReady, setVideoReady] = (0, import_react.useState)(false);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	const handleToggle = (0, import_react.useCallback)(() => {
		if (isPlaying) onPauseRequest(index);
		else onPlayRequest(index);
	}, [
		isPlaying,
		index,
		onPlayRequest,
		onPauseRequest
	]);
	(0, import_react.useEffect)(() => {
		const el = cardRef.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setInView(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setInView(true);
					io.disconnect();
				}
			});
		}, {
			rootMargin: "300px 400px",
			threshold: .01
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	const onKeyDown = (0, import_react.useCallback)((e) => {
		if (e.target !== e.currentTarget) return;
		if (!reel.video) return;
		const key = e.key.toLowerCase();
		if (e.key === " " || e.key === "Spacebar" || key === "k" || key === "enter") {
			e.preventDefault();
			handleToggle();
		}
	}, [reel.video, handleToggle]);
	const reelLabel = `Instagram reel ${index + 1}: ${reel.caption}. ${reel.views} views, ${reel.likes} likes, ${reel.comments} comments.${reel.video ? " Press Space or K to play or pause." : ""}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		ref: cardRef,
		role: "listitem",
		tabIndex: reel.video ? 0 : -1,
		onKeyDown,
		"aria-label": reelLabel,
		"aria-roledescription": "Instagram reel",
		className: "group relative aspect-[9/16] w-[220px] overflow-hidden rounded-[1.5rem] border border-border/60 bg-secondary shadow-lift transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-red focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-[240px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: `absolute inset-0 bg-[linear-gradient(110deg,#1f1730_25%,#2a2140_50%,#1f1730_75%)] bg-[length:200%_100%] transition-opacity duration-500 ${posterLoaded || videoReady ? "opacity-0" : "opacity-100 animate-[reel-shimmer_1.6s_linear_infinite]"}`
			}),
			!reel.video && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: reel.poster,
				alt: "",
				"aria-hidden": "true",
				loading: "lazy",
				decoding: "async",
				onLoad: () => setPosterLoaded(true),
				className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
			}),
			reel.video && inView && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("video", {
				ref: (el) => {
					videoRef.current = el;
					registerVideo(index, el);
				},
				loop: true,
				playsInline: true,
				preload: "metadata",
				"aria-label": `Video: ${reel.caption}`,
				onLoadedData: () => setVideoReady(true),
				onCanPlay: () => setVideoReady(true),
				onPlay: () => setIsPlaying(true),
				onPause: () => setIsPlaying(false),
				className: `absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out group-hover:scale-105 ${videoReady ? "opacity-100" : "opacity-0"}`,
				children: [reel.webm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: reel.webm,
					type: "video/webm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: reel.video,
					type: "video/mp4"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/85",
				"aria-hidden": true
			}),
			reel.video && inView && !videoReady && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 grid place-items-center",
				role: "status",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white/90",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Loading video"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 top-0 flex items-center justify-between px-3 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-1.5 w-1.5 rounded-full bg-primary",
						"aria-hidden": true
					}), " Reel"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur",
					"aria-label": `${reel.views} views`,
					children: reel.views
				})]
			}),
			!reel.video && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid place-items-center",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-14 w-14 place-items-center rounded-full bg-white/90 text-secondary shadow-lift transition-transform duration-500 group-hover:scale-110",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-0.5 h-5 w-5 fill-current" })
				})
			}),
			reel.video && inView && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation();
					handleToggle();
				},
				"aria-label": isPlaying ? `Pause reel ${index + 1}` : `Play reel ${index + 1} with sound`,
				"aria-pressed": isPlaying,
				title: isPlaying ? "Pause (Space / K)" : "Play with sound (Space / K)",
				className: `absolute inset-0 z-10 grid place-items-center transition-opacity duration-300 focus:outline-none focus-visible:opacity-100 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-14 w-14 place-items-center rounded-full bg-white/90 text-secondary shadow-lift backdrop-blur transition-transform duration-300 hover:scale-110",
					children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
						className: "h-5 w-5 fill-current",
						"aria-hidden": true
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
						className: "ml-0.5 h-5 w-5 fill-current",
						"aria-hidden": true
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 space-y-2 p-3 text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-[11px] font-semibold leading-snug",
					children: reel.caption
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-[10px] font-bold text-white/90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1",
							"aria-label": `${reel.likes} likes`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
									className: "h-3 w-3",
									"aria-hidden": true
								}),
								" ",
								reel.likes
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1",
							"aria-label": `${reel.comments} comments`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									className: "h-3 w-3",
									"aria-hidden": true
								}),
								" ",
								reel.comments
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-1",
							"aria-hidden": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3 w-3" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-auto rounded-full bg-white/20 px-1.5 py-0.5 backdrop-blur",
							children: reel.tag
						})
					]
				})]
			})
		]
	});
}
function InstagramFeed() {
	const trackRef = (0, import_react.useRef)(null);
	const videoRefs = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const [activeIdx, setActiveIdx] = (0, import_react.useState)(null);
	const activeIdxRef = (0, import_react.useRef)(null);
	const registerVideo = (0, import_react.useCallback)((idx, el) => {
		if (el) {
			videoRefs.current.set(idx, el);
			el.defaultMuted = false;
			el.muted = false;
			el.removeAttribute("muted");
			el.volume = 1;
			if (activeIdxRef.current !== idx) el.pause();
		} else videoRefs.current.delete(idx);
	}, []);
	const playReel = (0, import_react.useCallback)((idx) => {
		const target = videoRefs.current.get(idx);
		if (!target) return;
		videoRefs.current.forEach((el, i) => {
			if (i !== idx) {
				try {
					el.pause();
				} catch {}
				el.muted = false;
				el.defaultMuted = false;
				el.removeAttribute("muted");
			}
		});
		target.muted = false;
		target.defaultMuted = false;
		target.removeAttribute("muted");
		target.volume = 1;
		if (target.readyState === 0) target.load();
		activeIdxRef.current = idx;
		setActiveIdx(idx);
		const tryPlay = () => {
			target.muted = false;
			target.defaultMuted = false;
			target.removeAttribute("muted");
			const p = target.play();
			if (p && typeof p.catch === "function") p.catch(() => {
				activeIdxRef.current = null;
				setActiveIdx(null);
			});
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
	const pauseReel = (0, import_react.useCallback)((idx) => {
		const target = videoRefs.current.get(idx);
		if (!target) return;
		try {
			target.pause();
		} catch {}
		target.muted = false;
		target.defaultMuted = false;
		target.removeAttribute("muted");
		if (activeIdxRef.current === idx) {
			activeIdxRef.current = null;
			setActiveIdx(null);
		}
	}, []);
	const [isMobile, setIsMobile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(max-width: 767px)");
		const update = () => setIsMobile(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);
	(0, import_react.useEffect)(() => {
		const el = trackRef.current;
		if (!el) return;
		if (isMobile) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let raf = 0;
		let paused = false;
		const step = () => {
			if (!paused && activeIdx === null && el) {
				el.scrollLeft += .35;
				if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) el.scrollLeft = 0;
			}
			raf = requestAnimationFrame(step);
		};
		const onEnter = () => paused = true;
		const onLeave = () => paused = false;
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
	const slideBy = (0, import_react.useCallback)((dir) => {
		const el = trackRef.current;
		if (!el) return;
		const children = Array.from(el.children);
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
		const target = children[Math.max(0, Math.min(children.length - 1, currentIdx + dir))];
		el.scrollTo({
			left: target.offsetLeft,
			behavior: "smooth"
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "instagram",
		className: "relative overflow-hidden bg-white py-20 lg:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes reel-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#F58529]/15 via-[#DD2A7B]/15 to-[#8134AF]/15 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#515BD4]/15 via-[#DD2A7B]/10 to-[#F58529]/10 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-5 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "up",
						className: "flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 place-items-center rounded-xl bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)] text-white shadow-glow-red",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
										className: "h-4 w-4",
										strokeWidth: 2
									})
								}), "@ignitevascular"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 font-display text-3xl font-black tracking-tight text-secondary sm:text-4xl",
								children: [
									"Follow Our ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-[linear-gradient(90deg,#F58529,#DD2A7B,#8134AF)] bg-clip-text text-transparent",
										children: "Instagram"
									}),
									" Reels"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground",
								children: "Real procedures, patient stories, doctor tips and behind-the-scenes moments from Ignite Vascular Center."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.instagram.com/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-full bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)] px-5 py-3 text-sm font-bold text-white shadow-glow-red transition-transform duration-300 hover:scale-[1.03]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), " Follow Us"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: trackRef,
						className: "scrollbar-none mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
						role: "list",
						"aria-label": "Instagram reels",
						children: (isMobile ? REELS : REELS.concat(REELS)).map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "up",
							delay: i % 5 * .06,
							className: "reveal shrink-0 snap-center md:snap-start basis-full md:basis-auto flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelCard, {
								reel: r,
								index: i,
								isActive: activeIdx === i,
								onPlayRequest: playReel,
								onPauseRequest: pauseReel,
								registerVideo
							})
						}, i))
					}),
					isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-center gap-4 md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => slideBy(-1),
							"aria-label": "Previous reel",
							className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-secondary shadow-md transition-all hover:scale-105 hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => slideBy(1),
							"aria-label": "Next reel",
							className: "grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)] text-white shadow-glow-red transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { InstagramFeed };
