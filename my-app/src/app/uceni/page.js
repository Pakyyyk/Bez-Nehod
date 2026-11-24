import Navbar from '../../components/Navbar';
import AuroraBackground from '../../components/AuroraBackground';
import MainHeading from '../../components/MainHeading';
import LearningCategoryCard from '../../components/LearningCategoryCard';
import { LEARNING_CATEGORIES } from '../../data/questionsData';

export default function UceniPage() {
  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col relative overflow-hidden transition-colors duration-300">
      <AuroraBackground theme="Učení" />
      <Navbar />

      <main className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 pt-14 pb-16">
        <MainHeading title="KATEGORIE" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {LEARNING_CATEGORIES.map((cat) => (
            <LearningCategoryCard
              key={cat.id}
              title={cat.title}
              href={`/uceni/kategorie?id=${cat.id}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}