"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/ui/AnimationWrapper";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-5 sm:px-8 md:px-12 lg:px-20 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-gold-500/4 blur-[100px]" />
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="04 · Skills"
          title="My Toolbox"
          description="Technologies and tools I work with to craft high-quality products."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group glass rounded-2xl p-5 sm:p-6 border border-[var(--color-border)] hover:border-gold-500/25 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5"
              whileHover={{ y: -3, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-display text-sm sm:text-base text-[var(--color-text-primary)] group-hover:text-gold-200 transition-colors leading-snug">
                  {cat.category}
                </h3>
              </div>

              <div className="gold-line mb-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300" />

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 + j * 0.03 }}
                    className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/4 border border-white/8 text-[10px] sm:text-xs font-mono text-[var(--color-text-secondary)] hover:bg-gold-500/10 hover:border-gold-500/30 hover:text-gold-300 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
