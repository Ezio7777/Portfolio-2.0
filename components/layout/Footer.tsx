import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10 px-6 md:px-12 lg:px-20">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
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
