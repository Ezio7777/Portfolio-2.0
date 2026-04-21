"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Mail, MapPin, ArrowUpRight, Download } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/AnimationWrapper";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
  mail: Mail,
};

const socialColors: Record<string, string> = {
  github: "hover:border-gray-400/40 hover:bg-gray-400/5 hover:text-gray-300",
  linkedin: "hover:border-blue-400/40 hover:bg-blue-400/5 hover:text-blue-300",
  code: "hover:border-orange-400/40 hover:bg-orange-400/5 hover:text-orange-300",
  mail: "hover:border-gold-400/40 hover:bg-gold-400/5 hover:text-gold-300",
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="06 · Contact"
          title="Let's Connect"
          description="Whether you have a project idea, an opportunity, or just want to say hello — I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Left — Big CTA */}
          <FadeIn className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 md:p-10 border border-[var(--color-border)] h-full relative overflow-hidden group">
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl border border-gold-500/0 group-hover:border-gold-500/15 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest uppercase mb-4">
                  Say Hello
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6 leading-tight">
                  Have a project in mind? <span className="text-gradient italic">Let&apos;s talk.</span>
                </h3>

                <div className="flex items-center gap-3 mb-8">
                  <MapPin size={14} className="text-gold-500/70" />
                  <span className="font-mono text-sm text-[var(--color-text-secondary)]">
                    {personalInfo.location}
                  </span>
                </div>

                <div className="gold-line mb-8 opacity-50" />

                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="group/btn inline-flex items-center gap-3 font-display text-xl md:text-2xl text-[var(--color-text-primary)] hover:text-gold-400 transition-colors duration-300"
                  whileHover={{ x: 4 }}
                >
                  <Mail size={20} className="text-gold-500 shrink-0" />
                  {personalInfo.email}
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 group-hover/btn:opacity-100 transition-opacity text-gold-400"
                  />
                </motion.a>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="shimmer-btn text-obsidian-900 text-sm font-medium px-6 py-3 rounded-xl font-mono shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-shadow inline-flex items-center gap-2"
                  >
                    <Mail size={14} />
                    Send an Email
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="inline-flex items-center gap-2 border border-gold-500/40 text-gold-400 hover:border-gold-400 hover:bg-gold-500/5 text-sm font-medium px-6 py-3 rounded-xl font-mono transition-all duration-300"
                  >
                    <Download size={14} />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Social links */}
          <FadeIn delay={0.15} className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 border border-[var(--color-border)] h-full">
              <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest uppercase mb-6">
                Find me on
              </p>

              <StaggerContainer className="flex flex-col gap-3">
                {socialLinks.map(({ label, url, icon }) => {
                  const Icon = iconMap[icon] || Mail;
                  const colorClass = socialColors[icon] || "hover:border-gold-400/40";

                  return (
                    <motion.a
                      key={label}
                      variants={staggerItem}
                      href={url}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-all duration-300 group/social ${colorClass}`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                        <Icon size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-sm font-medium text-[var(--color-text-primary)]">
                          {label}
                        </p>
                        <p className="font-mono text-xs text-[var(--color-text-muted)] truncate">
                          {url.replace("https://", "").replace("mailto:", "")}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover/social:opacity-100 transition-opacity shrink-0"
                      />
                    </motion.a>
                  );
                })}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
