export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 group">
      {/* Hover zóna u horního okraje obrazovky */}
      <div className="absolute top-0 left-0 w-full h-6 bg-transparent z-40" />

      <nav
        className="
          relative z-50 flex w-full flex-wrap items-center justify-between gap-4
          border-b border-white/20
          bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.02]
          px-6 py-4
          backdrop-blur-[28px] backdrop-saturate-[180%]
          shadow-[0_16px_40px_rgba(0,0,0,0.35),inset_0_1px_0_0_rgba(255,255,255,0.22)]
          transition-transform duration-500 ease-out
          -translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0
        "
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium text-white/80 sm:text-base">
          <a
            href="#"
            className="transition-colors hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70"
          >
            Home
          </a>
          <a
            href="#"
            className="transition-colors hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70"
          >
            Teorie
          </a>
          <a
            href="#"
            className="transition-colors hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70"
          >
            Praxe
          </a>
          <a
            href="#"
            className="transition-colors hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70"
          >
            Učení
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-medium tracking-wider text-white/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-md transition-all hover:border-cyan-200/45 hover:bg-white/[0.12] hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 sm:text-sm"
          >
            LOG IN
          </button>
          <button
            type="button"
            className="rounded-lg border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-medium tracking-wider text-white/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-md transition-all hover:border-cyan-200/45 hover:bg-white/[0.12] hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 sm:text-sm"
          >
            SETTINGS
          </button>
        </div>
      </nav>
    </div>
  );
}
