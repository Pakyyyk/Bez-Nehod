'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import AuroraBackground from '../../../components/AuroraBackground';
import MainHeading from '../../../components/MainHeading';
import BottomControlBar from '../../../components/BottomControlBar';
import { LEARNING_CATEGORIES } from '../../../data/questionsData';

function KategorieContent() {
  const searchParams = useSearchParams();
  const categoryId = Number(searchParams.get('id')) || 1;
  const category = LEARNING_CATEGORIES.find((c) => c.id === categoryId) || LEARNING_CATEGORIES[0];

  const [lessonIndex, setLessonIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const lesson = category.lessons[lessonIndex] || category.lessons[0];

  return (
    <main className="relative z-10 flex-1 flex flex-col items-center justify-between w-full max-w-6xl mx-auto px-4 sm:px-8 pt-14 pb-6 gap-6 min-h-screen">
      <MainHeading title={category.title} className="mb-0" />

      <div className="w-full max-w-4xl flex flex-col items-center gap-6 my-auto">
        <div className="relative w-full aspect-[16/9] max-h-[340px] rounded-2xl border border-glass-border bg-glass shadow-glass backdrop-blur-xl overflow-hidden flex items-center justify-center p-8 text-center">
          <div className="absolute inset-0 pointer-events-none opacity-15">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.3" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.3" />
            </svg>
          </div>

          <p className="relative z-10 text-lg sm:text-xl font-medium text-ink max-w-xl">
            {showDetail ? lesson.detail : `Lekce ${lessonIndex + 1} / ${category.lessons.length}: ${lesson.heading}`}
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-ink text-center">
          {lesson.heading}
        </h2>
      </div>

      <BottomControlBar
        centerLabel={showDetail ? 'skrýt detail' : 'vysvětlení do detailu'}
        accentColor="rose"
        onCenterClick={() => setShowDetail((prev) => !prev)}
        onPrev={() => {
          setShowDetail(false);
          setLessonIndex((i) => i - 1);
        }}
        onNext={() => {
          setShowDetail(false);
          setLessonIndex((i) => i + 1);
        }}
        prevDisabled={lessonIndex === 0}
        nextDisabled={lessonIndex === category.lessons.length - 1}
      />
    </main>
  );
}

export default function DetailKategoriePage() {
  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col justify-between relative overflow-hidden transition-colors duration-300">
      <AuroraBackground theme="Učení" />
      <Navbar />
      <Suspense fallback={null}>
        <KategorieContent />
      </Suspense>
    </div>
  );
}