'use client';

import { useState, useEffect } from 'react';

export default function SettingsModal({ isOpen, onClose }) {
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined' ? localStorage.getItem('theme') !== 'light' : true
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', localStorage.getItem('theme') !== 'light');
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleTheme = () => {
    const nextDark = !isDark;
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    setIsDark(nextDark);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-overlay backdrop-blur-md p-4 transition-colors"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-2xl border border-glass-border bg-surface/90 p-6 text-ink shadow-glass backdrop-blur-[28px] backdrop-saturate-[180%]"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-base font-semibold tracking-wider uppercase text-ink">
            Settings
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Zavřít nastavení"
            className="cursor-pointer rounded-lg p-1 text-ink-muted transition-colors hover:bg-glass-hover hover:text-ink"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-glass-border bg-glass px-4 py-3">
          <div>
            <div className="text-sm font-medium text-ink">Barevný režim</div>
            <div className="text-xs text-ink-muted">
              {isDark ? 'Tmavý režim' : 'Světlý režim'}
            </div>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={isDark}
            aria-label="Přepnout tmavý nebo světlý režim"
            onClick={toggleTheme}
            className={`relative inline-flex h-7 w-12 cursor-pointer items-center rounded-full border border-glass-border transition-colors ${
              isDark ? 'bg-cyan-500/80' : 'bg-slate-300'
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