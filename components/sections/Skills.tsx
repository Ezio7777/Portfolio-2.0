"use client";

import { motion, MotionConfig } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/*
 * One IntersectionObserver for the whole grid. Cards and chips inherit the
 * "hidden" → "show" state through variants, so only opacity/transform animate
 * (GPU friendly) and no per-chip observers are created.
 */
const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, staggerChildren: 0.03, delayChildren: 0.25 },
  },
};

const chip = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

export default function Skills() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="skills" className="py-24 md:py-32 px-5 sm:px-8 md:px-12 lg:px-20 relative">
        {/* radial gradient instead of a giant blur filter: same look, far cheaper to paint */}
        <div
          className="absolute top-1/2 left-0 w-[640px] h-[640px] -translate-y-1/2 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(50,130,184,0.14) 0%, transparent 65%)",
          }}
        />

        <div className="w-full max-w-6xl mx-auto relative z-10">
          <SectionHeader
            eyebrow="04 · Skills"
            title="My Toolbox"
            description="Technologies and tools I work with to craft high-quality products."
          />

          <motion.div
            variants={grid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            {skillCategories.map((cat) => (
              <motion.div key={cat.category} variants={card}>
                {/* hover lives on an inner element so it never fights framer's inline transform */}
                <div className="group h-full rounded-2xl p-5 sm:p-6 border border-white/[0.07] bg-white/[0.025] transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-[0_24px_50px_-24px_rgba(50,130,184,0.5)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-base sm:text-lg transition-transform duration-500 ease-out group-hover:scale-110">
                      {cat.icon}
                    </div>
                    <h3 className="font-display text-sm sm:text-base text-[var(--color-text-primary)] group-hover:text-gold-200 transition-colors duration-300 leading-snug">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="gold-line mb-4 opacity-30 group-hover:opacity-70 transition-opacity duration-500" />

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={chip}
                        className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] sm:text-xs font-mono text-[var(--color-text-secondary)] transition-colors duration-300 hover:bg-gold-500/10 hover:border-gold-500/30 hover:text-gold-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
