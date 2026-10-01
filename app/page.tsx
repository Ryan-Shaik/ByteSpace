import HeroSection from "./components/home/HeroSection";
import PartnerStrip from "./components/home/PartnerStrip";
import FeaturedCoursesSection from "./components/home/FeaturedCoursesSection";
import LearningPathsSection from "./components/home/LearningPathsSection";
import { getFeaturedCourses, getAllCourses } from "@/src/lib/courses";
import { getCategoryFilterChips, getCategories } from "@/src/lib/categories";

export default function HomePage() {
  const featuredCourses = getFeaturedCourses();
  const allCourses = getAllCourses();
  const filterChips = getCategoryFilterChips();
  const categories = getCategories();

  return (
    <main>
      <HeroSection />
      <PartnerStrip />
      <FeaturedCoursesSection
        initialCourses={featuredCourses}
        allCourses={allCourses}
        filterChips={filterChips}
      />
      <LearningPathsSection categories={categories} />
    </main>
  );
}
