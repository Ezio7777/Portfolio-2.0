"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)] shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-max px-6 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg shimmer-btn flex items-center justify-center">
              <span className="font-display text-obsidian-900 font-bold text-sm">
                S
              </span>
            </div>
            <span className="font-display text-[var(--color-text-primary)] text-lg group-hover:text-gold-400 transition-colors duration-300">
              {personalInfo.name.split(" ")[0]}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="font-body text-sm text-[var(--color-text-secondary)] hover:text-gold-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="shimmer-btn text-obsidian-900 text-xs font-medium px-4 py-2 rounded-lg font-mono tracking-wide shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-shadow duration-300 flex items-center gap-2"
            >
              Resume
              <Download size={14} />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[var(--color-text-secondary)] hover:text-gold-400 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-display text-4xl text-[var(--color-text-primary)] hover:text-gold-400 transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="shimmer-btn text-obsidian-900 text-sm font-medium px-8 py-3 rounded-xl font-mono mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
