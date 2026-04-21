"use client";

import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/ui/AnimationWrapper";

const icons = {
  university: GraduationCap,
  school: School,
};

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="05 · Education"
          title="Academic Background"
          description="The foundation that shapes how I think, build, and solve problems."
        />

        <StaggerContainer className="flex flex-col gap-6 max-w-3xl">
          {education.map((edu, i) => {
            const Icon = icons[edu.type];
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group glass glass-hover rounded-2xl p-6 md:p-8 border border-[var(--color-border)] flex gap-5 md:gap-8"
              >
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-500/15 transition-all duration-500">
                    <Icon size={22} className="text-gold-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg md:text-xl text-[var(--color-text-primary)] leading-snug">
                      {edu.degree}
                    </h3>
                    <span className="font-mono text-xs text-[var(--color-text-muted)] bg-white/5 px-3 py-1 rounded-full border border-white/8 shrink-0">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="font-body text-gold-400/80 text-sm">{edu.institution}</p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
