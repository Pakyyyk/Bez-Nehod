export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 group">
      
      <div className="absolute top-0 left-0 w-full h-5 bg-transparent z-40"></div>

      <nav className="relative z-50 flex w-full flex-wrap items-center justify-between gap-4 border-b border-white/15 bg-white/[0.06] px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-transform duration-500 ease-in-out -translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0">
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75 sm:text-base">
          <a href="#" className="transition-colors hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70">Home</a>
          <a href="#" className="transition-colors hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70">Teorie</a>
          <a href="#" className="transition-colors hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70">Praxe</a>
          <a href="#" className="transition-colors hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70">Učení</a>
        </div>

        <div className="flex gap-2">
          <button className="rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-white/85 transition-colors hover:border-cyan-200/40 hover:bg-white/[0.1] hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 sm:text-sm">
            PROFILE
          </button>
          <button className="rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-white/85 transition-colors hover:border-cyan-200/40 hover:bg-white/[0.1] hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 sm:text-sm">
            SETTINGS
          </button>
        </div>
      </nav>
    </div>
  )
}