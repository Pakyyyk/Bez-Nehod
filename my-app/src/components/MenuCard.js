export default function MenuCard({ title }) {
  return (
    <button
      type="button"
      className="
        group flex h-28 w-full min-w-0 cursor-pointer items-center justify-center rounded-xl px-4
        border border-glass-border bg-glass shadow-glass backdrop-blur-xl
        transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-glass-hover
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70
        sm:h-32 sm:last:col-span-2 sm:last:w-1/2 sm:last:justify-self-center lg:last:col-span-1 lg:last:w-full
      "
    >
      <span className="text-3xl font-semibold tracking-wide text-ink transition-colors duration-300 group-hover:text-cyan-500 sm:text-4xl md:text-5xl">
        {title}
      </span>
    </button>
  );
}
