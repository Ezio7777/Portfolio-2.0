interface LiveProjectButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export default function LiveProjectButton({
  href,
  label = "Live Project",
  className = "",
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#BBE1FA] text-[#BBE1FA] font-medium uppercase tracking-widest whitespace-nowrap px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-300 hover:bg-[#BBE1FA]/10 ${className}`}
    >
      {label}
    </a>
  );
}
