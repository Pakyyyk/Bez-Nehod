export default function MenuCard({ title }) {
  return (
    <button className="group flex h-28 w-full min-w-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-4 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.1] hover:shadow-[0_12px_40px_rgba(34,211,238,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 sm:h-32 sm:last:col-span-2 sm:last:w-1/2 sm:last:justify-self-center lg:last:col-span-1 lg:last:w-full">
      
      <span 
        className="text-3xl font-semibold tracking-wide text-white/90 transition-colors duration-300 group-hover:text-cyan-50 sm:text-4xl md:text-5xl"
      >
        {title}
      </span>

    </button>
  )
}