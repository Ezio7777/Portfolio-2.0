"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  target,
  rel,
  download,
  icon,
}: ButtonProps) {
  const base =
    "relative inline-flex items-center gap-2.5 px-6 py-3 rounded-lg font-body font-medium text-sm transition-all duration-300 overflow-hidden select-none";

  const variants = {
    primary:
      "shimmer-btn text-obsidian-900 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border border-gold-500/40 text-gold-400 hover:border-gold-400 hover:bg-gold-500/5 hover:text-gold-300 hover:shadow-lg hover:shadow-gold-500/10 active:scale-[0.98]",
    ghost:
      "text-obsidian-300 hover:text-gold-400 hover:bg-white/5 active:scale-[0.98]",
  };

  const classes = cn(base, variants[variant], className);

  const inner = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={classes}
        whileHover={{ scale: variant !== "ghost" ? 1.02 : 1 }}
        whileTap={{ scale: 0.97 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: variant !== "ghost" ? 1.02 : 1 }}
      whileTap={{ scale: 0.97 }}
    >
      {inner}
    </motion.button>
  );
}
