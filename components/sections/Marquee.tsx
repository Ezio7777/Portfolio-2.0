"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";

const TILE_W = 420;
const TILE_H = 270;
const GAP = 12;

// Round-robin so neighbouring tiles come from different projects
const all: { src: string; alt: string }[] = [];
const maxLen = Math.max(...projects.map((p) => p.images?.length ?? 0));
for (let i = 0; i < maxLen; i++) {
  for (const p of projects) {
    const src = p.images?.[i];
    if (src) all.push({ src, alt: `${p.title} screenshot ${i + 1}` });
  }
}
const row1 = all.filter((_, i) => i % 2 === 0);
const row2 = all.filter((_, i) => i % 2 === 1);

function Row({ items, trackRef }: { items: typeof all; trackRef: React.RefObject<HTMLDivElement> }) {
  const setWidth = items.length * (TILE_W + GAP);
  const tripled = [...items, ...items, ...items];
  return (
    <div className="flex gap-3" ref={trackRef} style={{ marginLeft: -setWidth, willChange: "transform" }}>
      {tripled.map((img, i) => (
        <div
          key={i}
          className="relative shrink-0 rounded-2xl overflow-hidden bg-[#1b262c]"
          style={{ width: TILE_W, height: TILE_H }}
        >
          <Image src={img.src} alt={img.alt} fill sizes="420px" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !r1.current || !r2.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      const offset = (-top + window.innerHeight) * 0.3;
      r1.current.style.transform = `translateX(${offset - 200}px)`;
      r2.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className="bg-[var(--color-bg)] pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3"
      style={{ overflowX: "clip" }}
    >
      <Row items={row1} trackRef={r1} />
      <Row items={row2} trackRef={r2} />
    </section>
  );
}
