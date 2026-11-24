'use client';

import { useState } from 'react';
import SettingsModal from './SettingsModal';

export default function Navbar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 group">
        {/* Hover */}
        <div className="absolute top-0 left-0 w-full h-6 bg-transparent z-40" />

        <nav
          className="
            relative z-50 flex w-full flex-wrap items-center justify-between gap-4
            border-b border-glass-border
            bg-glass
            px-6 py-4
            backdrop-blur-[28px] backdrop-saturate-[180%]
            shadow-glass
            transition-all duration-500 ease-out
            -translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0
          "
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium text-ink-muted sm:text-base">
            <a
              href="#"
              className="transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
            >
              Home
            </a>
            <a
              href="#"
              className="transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
            >
              Teorie
            </a>
            <a
              href="#"
              className="transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
            >
              Praxe
            </a>
            <a
              href="#"
              className="transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
            >
              Učení
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg border border-glass-border bg-glass px-4 py-2 text-xs font-medium tracking-wider text-ink shadow-glass backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-glass-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 sm:text-sm"
            >
              LOG IN
            </button>
            <button
              type="button"
              onClick={() => setIsSettingsOpen(true)}
              className="cursor-pointer rounded-lg border border-glass-border bg-glass px-4 py-2 text-xs font-medium tracking-wider text-ink shadow-glass backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-glass-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 sm:text-sm"
            >
              SETTINGS
            </button>
          </div>
        </nav>
      </div>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
}