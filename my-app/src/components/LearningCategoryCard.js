import Link from 'next/link';

export default function LearningCategoryCard({ title = "název kategorie", href = "/uceni/kategorie" }) {
  return (
    <Link
      href={href}
      className="group relative aspect-square w-full cursor-pointer flex flex-col items-center justify-center rounded-xl border border-glass-border bg-glass p-3 shadow-glass backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/50 hover:bg-glass-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/70"
    >
      <div className="absolute inset-0 pointer-events-none opacity-15 group-hover:opacity-25 transition-opacity">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <span className="relative z-10 text-sm sm:text-base font-bold tracking-wide text-ink text-center leading-snug group-hover:text-rose-500 transition-colors">
        {title}
      </span>
    </Link>
  );
}