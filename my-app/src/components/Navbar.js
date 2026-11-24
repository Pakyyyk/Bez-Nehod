'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SettingsModal from './SettingsModal';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Teorie', href: '/teorie' },
  { label: 'Praxe', href: '/praxe' },
  { label: 'Učení', href: '/uceni' },
];

export default function Navbar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 group">
        {/* Hover zóna u horního okraje obrazovky */}
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
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium sm:text-base">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 ${
                    isActive
                      ? 'text-ink font-semibold underline decoration-cyan-400 decoration-2 underline-offset-8'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
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