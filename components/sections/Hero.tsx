"use client";

import { motion } from "framer-motion";
import { Eye, Github, Linkedin, Code2, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
  mail: Mail,
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-28 md:py-32 px-5 sm:px-8 md:px-12 lg:px-20"
    >
      {/* Background glow blobs — contained so they don't cause overflow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-gold-600/4 blur-[100px]" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">

        {/* ── Image — shown FIRST on mobile (order-first), LAST on desktop ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="shrink-0 relative order-first lg:order-last"
        >
          {/* Avatar card — smaller on mobile so badges don't overflow viewport */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
            {/* Glow ring — clipped to parent so it doesn't bleed */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-500/30 to-gold-800/10 blur-xl scale-105 animate-pulse-slow" />

            {/* Card */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl shadow-gold-500/10">
              <Image
                src="/images/profile.jpg"
                alt="Sunit Pal"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
              />
              {/* Bottom overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/50 via-transparent to-transparent" />
            </div>

            {/* Floating badge — bottom right, positioned INSIDE parent bounds on mobile */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 glass rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 border border-gold-500/20 shadow-xl"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[10px] sm:text-xs text-[var(--color-text-secondary)] whitespace-nowrap">
                  Open to work
                </span>
              </div>
            </motion.div>

            {/* Floating badge — top left, safe on mobile */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 glass rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 border border-gold-500/20 shadow-xl"
            >
              <span className="font-mono text-[10px] sm:text-xs text-gold-400 whitespace-nowrap">React Dev</span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Text content ── */}
        <div className="flex-1 text-center lg:text-left min-w-0">
          {/* Eyebrow — truncated on very small screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-5 max-w-full"
          >
            <span className="w-6 h-px bg-gold-500 shrink-0" />
            <span className="font-mono text-[10px] sm:text-xs text-gold-500 tracking-[0.2em] sm:tracking-[0.3em] uppercase truncate">
              Available for opportunities
            </span>
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse shrink-0" />
          </motion.div>

          {/* Name — scales down gracefully */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--color-text-primary)] leading-[0.95] mb-4"
          >
            {personalInfo.name.split(" ")[0]}
            <br />
            <span className="text-gradient italic">{personalInfo.name.split(" ")[1]}</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-mono text-[10px] sm:text-xs text-[var(--color-text-secondary)] tracking-widest uppercase mb-5"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            <Button
              variant="primary"
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<Eye size={15} />}
            >
              View Resume
            </Button>
            <Button
              variant="outline"
              href="#contact"
              icon={<MessageCircle size={15} />}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-3 justify-center lg:justify-start"
          >
            {socialLinks.map(({ label, url, icon }) => {
              const Icon = iconMap[icon] || Mail;
              return (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg glass flex items-center justify-center text-[var(--color-text-muted)] hover:text-gold-400 hover:border-gold-500/30 transition-all duration-300"
                >
                  <Icon size={15} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-[var(--color-border)] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gold-500 opacity-70" />
        </motion.div>
        <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
