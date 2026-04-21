"use client";

import { motion } from "framer-motion";
import { Github, Radio, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { StaggerContainer, staggerItem } from "@/components/ui/AnimationWrapper";

const projectGradients = [
  "from-blue-500/10 via-purple-500/5 to-transparent",
  "from-emerald-500/10 via-teal-500/5 to-transparent",
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="03 · Projects"
          title="Things I've Built"
          description="A selection of projects that demonstrate my range — from AI-powered document systems to full-stack trading platforms."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group relative glass rounded-2xl p-6 md:p-8 border border-[var(--color-border)] overflow-hidden flex flex-col"
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              {/* Gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${projectGradients[i % projectGradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />
              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border border-gold-500/0 group-hover:border-gold-500/20 transition-all duration-500 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1">
                {/* Index number */}
                <div className="mb-5">
                  <span className="font-mono text-3xl font-bold text-gold-500/15 group-hover:text-gold-500/25 transition-colors duration-300 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl text-[var(--color-text-primary)] mb-3 group-hover:text-gold-100 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Divider */}
                <div className="gold-line mb-5 opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} label={tech} variant="subtle" />
                  ))}
                </div>

                {/* Updated: Two buttons — Icon on the right, visible always */}
                <div className="grid grid-cols-2 gap-3">
                  {/* GitHub button */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-white/20 hover:bg-white/8 transition-all duration-300 text-sm font-mono"
                    >
                      <span>GitHub</span>
                      <Github size={15} className="shrink-0" />
                    </a>
                  )}

                  {/* Live Demo button */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl shimmer-btn text-obsidian-900 font-mono text-sm shadow-md shadow-gold-500/20 hover:shadow-gold-500/40 transition-shadow duration-300 font-medium"
                    >
                      <span>Live Demo</span>
                      <Radio size={14} className="shrink-0" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/Ezio7777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-secondary)] hover:text-gold-400 transition-colors group"
          >
            <Github size={16} />
            View all projects on GitHub
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}