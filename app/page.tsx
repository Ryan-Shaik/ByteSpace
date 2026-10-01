import HeroSection from "./components/home/HeroSection";
import PartnerStrip from "./components/home/PartnerStrip";
import FeaturedCoursesSection from "./components/home/FeaturedCoursesSection";
import LearningPathsSection from "./components/home/LearningPathsSection";
import GrowthAndCreatorSection from "@/app/components/home/GrowthAndCreatorSection";
import { getFeaturedCourses, getAllCourses } from "@/src/lib/courses";
import { getCategoryFilterChips, getCategories } from "@/src/lib/categories";
import { getPlatformStats, getCreatorBenefits } from "@/src/lib/platform";

export default function HomePage() {
  const featuredCourses = getFeaturedCourses();
  const allCourses = getAllCourses();
  const filterChips = getCategoryFilterChips();
  const categories = getCategories();
  const platformStats = getPlatformStats();
  const creatorBenefits = getCreatorBenefits();

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
      <GrowthAndCreatorSection
        stats={platformStats}
        benefits={creatorBenefits}
        previewCourse={featuredCourses[0]}
      />
    </main>
  );
}
