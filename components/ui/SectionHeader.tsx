import { FadeIn } from "@/components/ui/AnimationWrapper";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 md:mb-20">
      <FadeIn>
        <span className="font-mono text-xs text-gold-500 tracking-[0.25em] uppercase">
          {eyebrow}
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] mt-3 mb-4 leading-tight">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        </FadeIn>
      )}
      <FadeIn delay={0.25}>
        <div className="gold-line mt-6 w-24" />
      </FadeIn>
    </div>
  );
}
