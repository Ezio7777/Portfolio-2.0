"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, Award, ExternalLink } from "lucide-react";
import { education, certificates } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/ui/AnimationWrapper";

const icons = { university: GraduationCap, school: School };

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-5 sm:px-8 md:px-12 lg:px-20 relative">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="05 · Education"
          title="Academic Background"
          description="The foundation that shapes how I think, build, and solve problems."
        />

        <StaggerContainer className="flex flex-col gap-5 max-w-3xl">
          {education.map((edu, i) => {
            const Icon = icons[edu.type];
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group glass glass-hover rounded-2xl p-5 sm:p-6 md:p-8 border border-[var(--color-border)] flex gap-4 sm:gap-6 md:gap-8"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-500/15 transition-all duration-500">
                    <Icon size={18} className="text-gold-500 sm:hidden" />
                    <Icon size={22} className="text-gold-500 hidden sm:block" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="font-display text-base sm:text-lg md:text-xl text-[var(--color-text-primary)] leading-snug">
                      {edu.degree}
                    </h3>
                    <span className="font-mono text-xs text-[var(--color-text-muted)] bg-white/5 px-3 py-1 rounded-full border border-white/8 shrink-0 self-start sm:self-auto whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="font-body text-gold-400/80 text-sm">{edu.institution}</p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Certificates */}
        <div className="mt-14 max-w-3xl">
          <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest uppercase mb-5">
            Certificates
          </p>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((c) => (
              <motion.a
                key={c.title}
                variants={staggerItem}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass glass-hover rounded-2xl p-5 border border-[var(--color-border)] flex items-start gap-4"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <Award size={18} className="text-gold-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-display text-sm sm:text-base text-[var(--color-text-primary)] leading-snug mb-1">
                    {c.title}
                  </h4>
                  <p className="font-mono text-xs text-gold-400/80">{c.issuer}</p>
                </div>
                <ExternalLink
                  size={13}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-400 shrink-0 mt-1"
                />
              </motion.a>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
