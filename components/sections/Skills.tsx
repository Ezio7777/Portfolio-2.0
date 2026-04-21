"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/ui/AnimationWrapper";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-gold-500/4 blur-[100px]" />
      </div>

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="04 · Skills"
          title="My Toolbox"
          description="Technologies and tools I work with to craft high-quality products."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group glass rounded-2xl p-6 border border-[var(--color-border)] hover:border-gold-500/25 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-display text-base text-[var(--color-text-primary)] group-hover:text-gold-200 transition-colors">
                  {cat.category}
                </h3>
              </div>

              {/* Divider */}
              <div className="gold-line mb-5 opacity-30 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + j * 0.04 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-xs font-mono text-[var(--color-text-secondary)] hover:bg-gold-500/10 hover:border-gold-500/30 hover:text-gold-300 transition-all duration-300 cursor-default"
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
