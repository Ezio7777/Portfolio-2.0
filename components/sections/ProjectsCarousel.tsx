"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  animate as fmAnimate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";
import Badge from "@/components/ui/Badge";

const TOTAL = projects.length;
const EXT   = [...projects, ...projects, ...projects];
const START = TOTAL;
const GAP   = 28;

// ─────────────────────────────────────────────────────────────────────────────
// Lightbox — outside the animated track so position:fixed works correctly
// ─────────────────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [cur, setCur] = useState(startIndex);
  const n = images.length;
  const prev = () => setCur((p) => (p - 1 + n) % n);
  const next = () => setCur((p) => (p + 1) % n);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, []); // eslint-disable-line

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] bg-black/97 backdrop-blur-2xl flex items-center justify-center"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all">
        <X size={18} />
      </button>
      <span className="absolute top-5 left-1/2 -translate-x-1/2 font-mono text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
        {cur + 1} / {n}
      </span>
      {n > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-gold-500 hover:text-obsidian-900 flex items-center justify-center text-white transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-gold-500 hover:text-obsidian-900 flex items-center justify-center text-white transition-all">
            <ChevronRight size={20} />
          </button>
        </>
      )}
      <div className="relative w-[90vw] max-w-5xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={cur} initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.93 }} transition={{ duration: 0.25 }} className="absolute inset-0">
            <Image src={images[cur]} alt={`Screenshot ${cur + 1}`} fill className="object-contain" draggable={false} />
          </motion.div>
        </AnimatePresence>
      </div>
      {n > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button key={i} onClick={(e) => { e.stopPropagation(); setCur(i); }}
              className={`rounded-full transition-all duration-300 ${i === cur ? "w-6 h-2 bg-gold-400" : "w-2 h-2 bg-white/25 hover:bg-white/55"}`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Project card
// ─────────────────────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  isActive,
  onOpenLightbox,
}: {
  project: (typeof projects)[0];
  isActive: boolean;
  onOpenLightbox?: (images: string[], startIdx: number) => void;
}) {
  const [imgIdx, setImgIdx]   = useState(0);
  const [descOpen, setDesc]   = useState(false);
  const [techOpen, setTech]   = useState(false);
  const images = project.images ?? [];

  useEffect(() => {
    if (!isActive) { setImgIdx(0); setDesc(false); setTech(false); }
  }, [isActive]);

  const prevImg = (e: React.MouseEvent) => { e.stopPropagation(); setImgIdx((p) => (p - 1 + images.length) % images.length); };
  const nextImg = (e: React.MouseEvent) => { e.stopPropagation(); setImgIdx((p) => (p + 1) % images.length); };

  return (
    /*
     * max-h caps the card so it never exceeds the viewport.
     * flex flex-col lets image stay fixed-height and body grow naturally.
     * Body uses overflow-y-auto only when needed (accordion expanded).
     */
    <div
      className="
        flex flex-col w-full
        glass rounded-2xl border border-[var(--color-border)] overflow-hidden
        max-h-[min(600px,calc(100vh-250px))]
      "
    >
      {/* ── Image ── */}
      <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 shrink-0 bg-[var(--color-surface-2)] overflow-hidden">
        {images.length > 0 ? (
          <>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={imgIdx} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }} className="absolute inset-0">
                <div
                  className={`absolute inset-0 group ${isActive ? "cursor-zoom-in" : "pointer-events-none"}`}
                  onClick={() => isActive && onOpenLightbox?.(images, imgIdx)}
                >
                  <Image src={images[imgIdx]} alt={`${project.title} ${imgIdx + 1}`} fill className="object-cover" draggable={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/70 via-transparent to-transparent" />
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <div className="w-10 h-10 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn size={18} className="text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {isActive && images.length > 1 && (
              <>
                <button onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold-500 hover:text-obsidian-900 transition-all">
                  <ChevronLeft size={15} />
                </button>
                <button onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold-500 hover:text-obsidian-900 transition-all">
                  <ChevronRight size={15} />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                  {images.map((_, i) => (
                    <button key={i} onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
                      className={`rounded-full transition-all duration-300 ${i === imgIdx ? "w-5 h-1.5 bg-gold-400" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"}`}
                    />
                  ))}
                </div>
              </>
            )}
            <div className="absolute top-3 right-3 z-10 font-mono text-[10px] text-white/80 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
              {imgIdx + 1} / {images.length}
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-7xl text-gold-500/8 select-none">01</span>
          </div>
        )}
      </div>

      {/* ── Body — flex col, buttons always at bottom ── */}
      <div className="flex flex-col flex-1 min-h-0">
        {/* Scrollable section: title + accordions */}
        <div className="flex-1 overflow-y-auto min-h-0 px-5 sm:px-6 pt-4 sm:pt-5">
          <div className="mb-3">
            <h3 className="font-display text-xl sm:text-2xl text-[var(--color-text-primary)] leading-snug">{project.title}</h3>
          </div>
          <div className="gold-line mb-2 opacity-40" />

          {/* About */}
          <div className="border-b border-[var(--color-border)]">
            <button onClick={() => isActive && setDesc((o) => !o)} className={`w-full flex items-center justify-between py-2.5 ${isActive ? "group" : "pointer-events-none"}`}>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] group-hover:text-gold-400 transition-colors">About</span>
              <motion.div animate={{ rotate: descOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                <ChevronDown size={14} className="text-gold-500/50" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {descOpen && (
                <motion.div key="d" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden">
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed pb-3">{project.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tech */}
          <div className="border-b border-[var(--color-border)]">
            <button onClick={() => isActive && setTech((o) => !o)} className={`w-full flex items-center justify-between py-2.5 ${isActive ? "group" : "pointer-events-none"}`}>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] group-hover:text-gold-400 transition-colors">Tech Stack</span>
              <motion.div animate={{ rotate: techOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                <ChevronDown size={14} className="text-gold-500/50" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {techOpen && (
                <motion.div key="t" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden">
                  <div className="flex flex-wrap gap-1.5 pb-3">
                    {project.techStack.map((tech) => <Badge key={tech} label={tech} variant="subtle" />)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons — always pinned at bottom, never scrolled away */}
        <div className="shrink-0 px-5 sm:px-6 py-4 sm:py-5 border-t border-[var(--color-border)]/50">
          <div className="grid grid-cols-2 gap-2.5">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-white/20 hover:bg-white/8 transition-all text-sm font-mono">
                <span>GitHub</span><Github size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 rounded-xl shimmer-btn text-obsidian-900 font-mono text-sm font-medium shadow-md shadow-gold-500/20">
                <span>Live Demo</span><ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────────────────────────
export default function Projects() {
  const [idx, setIdx]   = useState(START);
  const idxRef          = useRef(START);
  const busyRef         = useRef(false);
  const containerRef    = useRef<HTMLDivElement>(null);
  const firstCardRef    = useRef<HTMLDivElement>(null);
  const cardWRef        = useRef(0);
  const ctnWRef         = useRef(0);
  const xMV             = useMotionValue(0);
  const touchStartX     = useRef(0);
  const [lightbox, setLightbox] = useState<{ images: string[]; start: number } | null>(null);

  const getX = useCallback(
    (i: number) => -(i * (cardWRef.current + GAP)) + (ctnWRef.current - cardWRef.current) / 2,
    []
  );

  // Measure after first render and on resize
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !firstCardRef.current) return;
      cardWRef.current = firstCardRef.current.offsetWidth;
      ctnWRef.current  = containerRef.current.offsetWidth;
      xMV.set(getX(idxRef.current));
    };
    const t = setTimeout(measure, 80);
    window.addEventListener("resize", measure);
    return () => { clearTimeout(t); window.removeEventListener("resize", measure); };
  }, [getX, xMV]);

  const nav = useCallback(async (dir: 1 | -1) => {
    if (busyRef.current) return;
    busyRef.current = true;
    const next = idxRef.current + dir;
    idxRef.current = next;
    setIdx(next);
    await fmAnimate(xMV, getX(next), { type: "spring", stiffness: 260, damping: 28 });
    // Silently reset to middle copy for infinite loop
    if (next < TOTAL) {
      const r = next + TOTAL; idxRef.current = r; setIdx(r); xMV.set(getX(r));
    } else if (next >= TOTAL * 2) {
      const r = next - TOTAL; idxRef.current = r; setIdx(r); xMV.set(getX(r));
    }
    busyRef.current = false;
  }, [getX, xMV]);

  const goTo = useCallback((projIdx: number) => {
    if (busyRef.current) return;
    const target = TOTAL + projIdx;
    idxRef.current = target;
    setIdx(target);
    fmAnimate(xMV, getX(target), { type: "spring", stiffness: 260, damping: 28 });
  }, [getX, xMV]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const s = (e: TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
    const e = (ev: TouchEvent) => {
      const dx = touchStartX.current - ev.changedTouches[0].clientX;
      if (Math.abs(dx) > 50) nav(dx > 0 ? 1 : -1);
    };
    el.addEventListener("touchstart", s, { passive: true });
    el.addEventListener("touchend",   e, { passive: true });
    return () => { el.removeEventListener("touchstart", s); el.removeEventListener("touchend", e); };
  }, [nav]);

  const currentProj = idx % TOTAL;

  return (
    <section id="projects" className="h-screen flex flex-col overflow-hidden pt-20 pb-4 sm:pb-6">

      {/* Lightbox at root — outside the transformed track */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox images={lightbox.images} startIndex={lightbox.start} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>

      {/* ── Header ────────────────────────────────────────────────── */}
      <div className="shrink-0 px-5 sm:px-8 md:px-12 lg:px-20 mb-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-3">
            <div>
              <span className="font-mono text-[10px] sm:text-xs text-gold-500 tracking-[0.2em] uppercase block mb-2">
                03 · Projects
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[var(--color-text-primary)] leading-tight">
                Things I&apos;ve Built
              </h2>
            </div>
            <span className="font-mono text-xs text-[var(--color-text-muted)] pb-1 shrink-0">
              {String(currentProj + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
            </span>
          </div>
          <div className="h-px bg-white/6 relative">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-600 to-gold-300 rounded-full"
              animate={{ width: `${((currentProj + 1) / TOTAL) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            />
          </div>
        </div>
      </div>

      {/* ── Carousel ─────────────────────────────────────────────── */}
      <div ref={containerRef} className="flex-1 relative overflow-hidden min-h-0">

        {/* Side depth fades */}
        <div className="absolute left-0 inset-y-0 w-8 sm:w-14 md:w-24 lg:w-36 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-8 sm:w-14 md:w-24 lg:w-36 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

        {/* Desktop arrows — over the fades */}
        <button onClick={() => nav(-1)}
          className="hidden md:flex absolute left-2 lg:left-4 xl:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[var(--color-surface)]/90 backdrop-blur-sm border border-[var(--color-border)] items-center justify-center text-[var(--color-text-secondary)] hover:text-gold-400 hover:border-gold-500/40 transition-all shadow-xl">
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => nav(1)}
          className="hidden md:flex absolute right-2 lg:right-4 xl:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[var(--color-surface)]/90 backdrop-blur-sm border border-[var(--color-border)] items-center justify-center text-[var(--color-text-secondary)] hover:text-gold-400 hover:border-gold-500/40 transition-all shadow-xl">
          <ChevronRight size={18} />
        </button>

        {/*
         * Track: inset-y-0 fills the container height fully.
         * items-center vertically centres the cards.
         * Cards have max-h to prevent overflow.
         */}
        <motion.div
          style={{ x: xMV }}
          className="absolute inset-y-0 left-0 flex items-center gap-7"
        >
          {EXT.map((project, i) => {
            const dist     = Math.abs(i - idx);
            const isCenter = dist === 0;
            const isAdj    = dist === 1;

            return (
              <div
                key={i}
                ref={i === 0 ? firstCardRef : undefined}
                /*
                 * Card width — bigger on desktop as requested
                 * w-[82vw] mobile → up to w-[54vw] xl on desktop
                 */
                className="shrink-0 w-[82vw] sm:w-[72vw] md:w-[56vw] lg:w-[50vw] xl:w-[46vw] max-w-[680px]"
                style={{ zIndex: isCenter ? 20 : isAdj ? 10 : 5 }}
              >
                {dist <= 2 && (
                  <motion.div
                    animate={{
                      scale:   isCenter ? 1    : isAdj ? 0.88  : 0.76,
                      opacity: isCenter ? 1    : isAdj ? 0.55  : 0.18,
                      filter:  isCenter ? "blur(0px)" : isAdj ? "blur(0.5px)" : "blur(2px)",
                    }}
                    transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
                    onClick={() => { if (!isCenter) nav(i > idx ? 1 : -1); }}
                    className={`origin-center relative ${!isCenter ? "cursor-pointer" : ""}`}
                  >
                    <ProjectCard
                      project={project}
                      isActive={isCenter}
                      onOpenLightbox={
                        isCenter
                          ? (imgs, s) => setLightbox({ images: imgs, start: s })
                          : undefined
                      }
                    />

                    {/* Dark overlay on non-active cards to push them clearly "behind" */}
                    {!isCenter && (
                      <div className="absolute inset-0 rounded-2xl bg-[var(--color-bg)]/40 pointer-events-none" />
                    )}
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ── Bottom nav ────────────────────────────────────────────── */}
      <div className="shrink-0 flex items-center justify-center gap-4 pt-3">
        <button onClick={() => nav(-1)}
          className="md:hidden flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-gold-400 hover:border-gold-500/40 transition-all text-xs font-mono">
          <ChevronLeft size={14} /> Prev
        </button>

        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentProj ? "w-6 h-2 bg-gold-400" : "w-2 h-2 bg-white/20 hover:bg-white/45"
              }`}
              aria-label={`Project ${i + 1}`}
            />
          ))}
        </div>

        <button onClick={() => nav(1)}
          className="md:hidden flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-gold-400 hover:border-gold-500/40 transition-all text-xs font-mono">
          Next <ChevronRight size={14} />
        </button>

        <span className="hidden md:flex items-center gap-1 font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest uppercase absolute right-5 sm:right-8 md:right-12 lg:right-20">
          <ChevronLeft size={9} /><ChevronRight size={9} /> click side cards
        </span>
      </div>
    </section>
  );
}
