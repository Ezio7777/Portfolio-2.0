import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: "gold" | "subtle" | "outline";
  className?: string;
}

export default function Badge({
  label,
  variant = "subtle",
  className,
}: BadgeProps) {
  const variants = {
    gold: "bg-gold-500/15 text-gold-300 border-gold-500/30",
    subtle: "bg-white/5 text-obsidian-300 border-white/8",
    outline: "bg-transparent text-obsidian-400 border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border tracking-wide",
        variants[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
