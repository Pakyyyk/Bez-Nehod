"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import MenuCard from "../components/MenuCard";
import AuroraBackground from "../components/AuroraBackground";

export default function Home() {
  const [activeTheme, setActiveTheme] = useState("default");

  return (
    <div className="min-h-screen bg-surface text-ink flex items-center justify-center relative overflow-hidden transition-colors duration-300">
      <AuroraBackground theme={activeTheme} />
      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-center gap-16 w-full px-8">
        <h1 className="text-6xl sm:text-8xl md:text-[130px] font-black tracking-widest text-center leading-none text-ink drop-shadow-md transition-colors duration-300">
          BEZ NEHOD
        </h1>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          <div
            className="w-full flex justify-center"
            onMouseEnter={() => setActiveTheme("Teorie")}
            onMouseLeave={() => setActiveTheme("default")}
          >
            <MenuCard title="Teorie" href="/teorie" />
          </div>

          <div
            className="w-full flex justify-center"
            onMouseEnter={() => setActiveTheme("Praxe")}
            onMouseLeave={() => setActiveTheme("default")}
          >
            <MenuCard title="Praxe" href="/praxe" />
          </div>

          <div
            className="w-full flex justify-center sm:col-span-2 sm:w-1/2 lg:col-span-1 lg:w-full"
            onMouseEnter={() => setActiveTheme("Učení")}
            onMouseLeave={() => setActiveTheme("default")}
          >
            <MenuCard title="Učení" href="/uceni" />
          </div>
        </div>
      </main>
    </div>
  );
}