import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded shimmer-btn flex items-center justify-center">
            <span className="font-display text-obsidian-900 font-bold text-xs">S</span>
          </div>
          <span className="font-display text-[var(--color-text-secondary)] text-sm">
            {personalInfo.name}
          </span>
        </div>
        <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-wider">
          Crafted with precision · {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-[var(--color-text-muted)]">
          Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
