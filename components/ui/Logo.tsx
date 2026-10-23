interface LogoProps {
  size?: number;
  className?: string;
}

/** Glossy purple monogram. Pair with a parent `group` for the hover tilt. */
export default function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110 ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.3,
        background:
          "linear-gradient(135deg, #6bb4e3 0%, #3282b8 36%, #0f4c75 72%, #0a2f49 100%)",
        boxShadow:
          "inset 0 1px 1px rgba(255,255,255,0.55), inset 0 -6px 10px rgba(8,32,50,0.45), 0 8px 22px -4px rgba(50,130,184,0.6), 0 0 0 1px rgba(187,225,250,0.25)",
      }}
    >
      {/* gloss highlight */}
      <span
        aria-hidden
        className="absolute left-0 right-0 -top-1/2 h-full rounded-full bg-white/25 blur-[2px]"
      />
      <span
        className="relative font-black leading-none text-white"
        style={{ fontSize: size * 0.58, textShadow: "0 2px 6px rgba(8,32,50,0.6)" }}
      >
        S
      </span>
    </span>
  );
}
