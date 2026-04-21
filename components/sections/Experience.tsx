"use client";

import { motion } from "framer-motion";
import { ExternalLink, Briefcase, CheckCircle2, FileText } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/ui/AnimationWrapper";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/[0.02] to-transparent pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="02 · Work Experience"
          title="Where I've Worked"
          description="Roles that shaped my craft — from building enterprise-grade React Native apps to engineering full-stack web platforms."
        />

        <StaggerContainer className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] md:left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/40 via-gold-500/20 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group relative flex gap-6 md:gap-10"
              >
                {/* Timeline dot */}
                <div className="relative shrink-0 hidden sm:flex flex-col items-center">
                  <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border-2 border-gold-500/50 bg-[var(--color-bg)] flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-500/10 transition-all duration-500 mt-1 z-10">
                    <Briefcase size={12} className="text-gold-500 md:hidden" />
                    <Briefcase size={16} className="text-gold-500 hidden md:block" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass glass-hover rounded-2xl p-6 md:p-8 border border-[var(--color-border)]">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-display text-xl md:text-2xl text-[var(--color-text-primary)]">
                          {exp.role}
                        </h3>
                        {/* {i === 0 && (
                          <span className="px-2.5 py-0.5 rounded-full bg-green-400/10 border border-green-400/30 text-green-400 text-[10px] font-mono tracking-wide">
                            Current
                          </span>
                        )} */}
                      </div>
                      {/* Company link */}
                      <div className="flex items-center gap-2">
                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1 group/link"
                          >
                            {exp.company}
                            <ExternalLink
                              size={12}
                              className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                            />
                          </a>
                        ) : (
                          <span className="font-body text-gold-400">{exp.company}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <span className="font-mono text-xs text-[var(--color-text-muted)] bg-white/5 px-3 py-1 rounded-full border border-white/8">
                        {exp.duration}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-wider uppercase">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="gold-line mb-6 opacity-50" />

                  {/* Bullets */}
                  <ul className="flex flex-col gap-3 mb-6">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2
                          size={14}
                          className="text-gold-500/60 shrink-0 mt-1"
                        />
                        <span className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Fix 4: Offer Letter / Certificate button */}
                  {exp.certLink && (
                    <div className="pt-2 border-t border-[var(--color-border)]">
                      <a
                        href={exp.certLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gold-500/30 text-gold-400 hover:border-gold-400 hover:bg-gold-500/8 hover:text-gold-300 transition-all duration-300 text-xs font-mono group/cert"
                      >
                        <FileText size={13} className="shrink-0" />
                        View Offer Letter
                        <ExternalLink
                          size={11}
                          className="opacity-0 group-hover/cert:opacity-100 transition-opacity"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
