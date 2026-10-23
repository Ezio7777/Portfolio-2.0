"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/types";
import LiveProjectButton from "@/components/ui/LiveProjectButton";

const RADIUS = "rounded-[28px] sm:rounded-[44px] md:rounded-[60px]";
const TOTAL = projects.length;

function StackCard({
  project,
  index,
  progress,
}: {
  project: Project;
  index: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / TOTAL, 1], [1, targetScale]);
  const imgs = project.images ?? [];
  const a = imgs[1] ?? imgs[0];
  const b = imgs[2] ?? imgs[0];
  const c = imgs[0];

  return (
    <div
      className="sticky h-[85vh] [--stack-top:6rem] md:[--stack-top:8rem]"
      style={{ top: `calc(var(--stack-top) + ${index * 28}px)` }}
    >
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        className={`border-2 border-[#3282b8] bg-[#1b262c] p-4 sm:p-6 md:p-8 ${RADIUS}`}
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 px-1 sm:px-2">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 min-w-0">
            <span
              className="hero-heading font-black leading-none shrink-0"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="font-light uppercase tracking-wider text-[#BBE1FA]/60 text-xs sm:text-sm md:text-base">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#BBE1FA] leading-tight"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#3282b8] flex items-center justify-center text-[#BBE1FA] hover:bg-[#bbe1fa]/10 transition-colors"
              >
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && <LiveProjectButton href={project.liveUrl} />}
          </div>
        </div>

        {/* Image grid */}
        <div className="mt-5 sm:mt-6 flex gap-3 sm:gap-4">
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4">
            <div
              className={`relative w-full overflow-hidden bg-[#0a0f13] ${RADIUS}`}
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              <Image src={a} alt={`${project.title} preview 2`} fill sizes="(min-width: 768px) 28vw, 40vw" className="object-cover" />
            </div>
            <div
              className={`relative w-full overflow-hidden bg-[#0a0f13] ${RADIUS}`}
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            >
              <Image src={b} alt={`${project.title} preview 3`} fill sizes="(min-width: 768px) 28vw, 40vw" className="object-cover" />
            </div>
          </div>
          <div className={`relative w-[60%] overflow-hidden bg-[#0a0f13] ${RADIUS}`}>
            <Image src={c} alt={`${project.title} preview 1`} fill sizes="(min-width: 768px) 50vw, 60vw" className="object-cover object-top" />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative bg-[var(--color-bg)] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32"
    >
      <h2
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Projects
      </h2>

      <div ref={listRef} className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <StackCard key={project.title} project={project} index={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
