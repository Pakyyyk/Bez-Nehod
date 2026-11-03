"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import MenuCard from '../components/MenuCard';

const themes = {
  default: {
    blob1: 'bg-blue-600/60',
    blob2: 'bg-purple-600/60',
    blob3: 'bg-cyan-500/40',
  },
  Teorie: {
    blob1: 'bg-emerald-600/60',
    blob2: 'bg-green-500/60',
    blob3: 'bg-teal-400/40',
  },
  Praxe: {
    blob1: 'bg-orange-600/60',
    blob2: 'bg-amber-500/60',
    blob3: 'bg-yellow-500/40',
  },
  Učení: {
    blob1: 'bg-red-600/60',
    blob2: 'bg-rose-600/60',
    blob3: 'bg-pink-500/40',
  },
};

export default function Home() {
  const [activeTheme, setActiveTheme] = useState('default');
  const currentColors = themes[activeTheme] || themes.default;

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] pointer-events-none z-0">
        <div
          className={`absolute top-1/2 left-1/2 w-[600px] h-[600px] ${currentColors.blob1} filter blur-[140px] opacity-80 animate-aurora-1 transition-colors duration-1000 ease-in-out`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 w-[500px] h-[500px] ${currentColors.blob2} filter blur-[140px] opacity-80 animate-aurora-2 transition-colors duration-1000 ease-in-out`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 w-[700px] h-[700px] ${currentColors.blob3} filter blur-[140px] opacity-80 animate-aurora-3 transition-colors duration-1000 ease-in-out`}
        ></div>
      </div>
    </div>
    /*
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] pointer-events-none z-0">
        <div
          className={`absolute top-1/2 left-1/2 w-[600px] h-[600px] ${currentColors.blob1} filter blur-[140px] opacity-80 animate-aurora-1 transition-colors duration-1000 ease-in-out`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 w-[500px] h-[500px] ${currentColors.blob2} filter blur-[140px] opacity-80 animate-aurora-2 transition-colors duration-1000 ease-in-out`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 w-[700px] h-[700px] ${currentColors.blob3} filter blur-[140px] opacity-80 animate-aurora-3 transition-colors duration-1000 ease-in-out`}
        ></div>
      </div>

      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-center gap-16 w-full px-8">
        <h1 className="
          text-8xl md:text-[130px] font-black tracking-widest text-center leading-none text-white
          [-webkit-text-stroke:0.75px_rgba(255,255,255,0.4)]
          drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]
        ">
          BEZ NEHOD
        </h1>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          <div
            className="w-full flex justify-center"
            onMouseEnter={() => setActiveTheme('Teorie')}
            onMouseLeave={() => setActiveTheme('default')}
          >
            <MenuCard title="Teorie" />
          </div>

          <div
            className="w-full flex justify-center"
            onMouseEnter={() => setActiveTheme('Praxe')}
            onMouseLeave={() => setActiveTheme('default')}
          >
            <MenuCard title="Praxe" />
          </div>

          <div
            className="w-full flex justify-center"
            onMouseEnter={() => setActiveTheme('Učení')}
            onMouseLeave={() => setActiveTheme('default')}
          >
            <MenuCard title="Učení" />
          </div>
        </div>
      </main>
    </div>
    */
  );
}