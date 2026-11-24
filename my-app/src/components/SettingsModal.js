'use client';

import { useState, useEffect } from 'react';

export default function SettingsModal({ isOpen, onClose }) {
  const [isDark, setIsDark] = useState(true);

  // Načtení uloženého motivu při startu aplikace
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  // Zavírání klávesou ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
    >
      {/* Samotný popup – stopPropagation zabrání zavření při kliknutí dovnitř */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-2xl border border-sky-300/25 bg-[#0a1324]/90 p-6 text-white shadow-[0_0_50px_rgba(23,62,115,0.6)] backdrop-blur-xl"
      >
        {/* Hlavička popupu */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold tracking-wider uppercase text-white/95">
            Settings
          </h2>
          <button
            onClick={onClose}
            aria-label="Zavřít nastavení"
            className="p-1 text-white/60 hover:text-white transition cursor-pointer"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Přepínač Tmavý / Světlý režim */}
        <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-sky-300/20 bg-sky-950/40">
          <div>
            <div className="text-sm font-medium text-white">Vzhled aplikace</div>
            <div className="text-xs text-white/60">
              {isDark ? 'Tmavý režim' : 'Světlý režim'}
            </div>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Přepnout tmavý nebo světlý režim"
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors cursor-pointer ${
              isDark ? 'bg-sky-500' : 'bg-zinc-600'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                isDark ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}