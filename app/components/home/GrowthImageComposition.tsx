import Image from "next/image";
import MiniCourseCard from "@/app/components/ui/MiniCourseCard";
import LearningProgressCard from "@/app/components/ui/LearningProgressCard";
import type { Course } from "@/src/types";

/**
 * Right-column image composition for the Growth Stats row.
 * Contains the male student, mini course card, learning progress card,
 * and the squiggly lime decoration — all absolutely positioned inside
 * a fixed-height relative container so nothing collapses.
 */
export default function GrowthImageComposition({ course }: { course: Course }) {
  return (
    <div className="relative mx-auto h-[420px] sm:h-[480px] lg:h-[480px] w-full max-w-[500px]">
      {/* ---- Mini course card — left side, BEHIND student ---- */}
      <div className="absolute left-0 sm:-left-3 top-[10%] z-0">
        <MiniCourseCard course={course} />
      </div>

      {/* ---- Squiggly lime decoration — top-right, BEHIND student ---- */}
      <div
        className="pointer-events-none absolute right-1 sm:right-3 top-0 z-0 select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/squiggly-line-lime2.png"
          alt=""
          width={120}
          height={130}
          className="w-[85px] sm:w-[105px] lg:w-[115px] h-auto drop-shadow-sm"
        />
      </div>

      {/* ---- Male student (anchored centre-bottom, large, IN FRONT of course card) ---- */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center lg:justify-end lg:right-0">
        <Image
          src="/assets/male.png"
          alt="Student with headphones and laptop"
          width={516}
          height={483}
          className="h-[380px] sm:h-[440px] lg:h-[440px] w-auto object-contain object-bottom"
          priority={false}
        />
      </div>

      {/* ---- Learning Progress card — right side, near top, IN FRONT of student ---- */}
      <div className="absolute right-1 sm:right-3 top-[18%] z-20">
        <LearningProgressCard />
      </div>
    </div>
  );
}
