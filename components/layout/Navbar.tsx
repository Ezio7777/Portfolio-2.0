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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Force close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--color-bg)]/95 backdrop-blur-xl border-b border-[var(--color-border)] shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2.5 shrink-0">
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
              <Download size={13} />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[var(--color-text-secondary)] hover:text-gold-400 hover:bg-white/5 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[75vw] max-w-[300px] bg-[var(--color-surface)] border-l border-[var(--color-border)] flex flex-col md:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md shimmer-btn flex items-center justify-center">
                    <span className="font-display text-obsidian-900 font-bold text-xs">S</span>
                  </div>
                  <span className="font-display text-[var(--color-text-primary)] text-base">
                    {personalInfo.name.split(" ")[0]}
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-white/5 transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, ease: "easeOut" }}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[var(--color-text-secondary)] hover:text-gold-400 hover:bg-gold-500/5 hover:border-gold-500/20 border border-transparent transition-all duration-200 group"
                  >
                    <span className="font-mono text-[10px] text-gold-500/40 group-hover:text-gold-500/70 transition-colors w-5 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="font-body text-base font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </nav>

              <div className="px-4 pb-8 pt-4 border-t border-[var(--color-border)]">
                <motion.a
                  href={personalInfo.resumeUrl}
                  download
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  onClick={() => setMobileOpen(false)}
                  className="w-full shimmer-btn text-obsidian-900 font-mono font-medium text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
                >
                  Download Resume
                  <Download size={14} />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}