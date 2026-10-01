import Image from "next/image";
import { BarChart } from "lucide-react";
import type { Course } from "@/src/types";

/** Miniature course-preview card that floats over the male student image. */
export default function MiniCourseCard({ course }: { course: Course }) {
  return (
    <div className="w-[200px] rounded-card bg-surface p-2.5 shadow-panel border border-border/40">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-media bg-surface-muted">
        <Image
          src={course.thumbnailUrl}
          alt={course.title}
          fill
          sizes="200px"
          className="object-cover"
        />
        <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center gap-1 pointer-events-none">
          <span className="rounded-pill bg-surface-overlay px-2 py-0.5 text-[9px] font-medium text-text-pill backdrop-blur-[8px]">
            {course.lessonCount} Lessons
          </span>
          <span className="rounded-pill bg-surface-overlay px-2 py-0.5 text-[9px] font-medium text-text-pill backdrop-blur-[8px]">
            {course.durationFormatted}
          </span>
        </div>
      </div>

      <h4 className="mt-2 truncate text-xs font-semibold text-text-primary">
        {course.title}
      </h4>
      <p className="mt-0.5 text-[10px] text-text-muted">
        by <span className="font-medium text-link">{course.creatorName}</span>
      </p>

      <div className="mt-2 inline-flex items-center gap-1 rounded-pill bg-surface-muted px-2 py-0.5 text-[10px] font-medium text-text-secondary">
        <BarChart className="h-3 w-3 shrink-0" strokeWidth={2.8} aria-hidden="true" />
        <span>{course.level}</span>
      </div>

      <div className="mt-2 flex items-baseline border-t border-border pt-2">
        <span className="text-sm font-bold text-link">${course.price}</span>
        <span className="ml-0.5 text-[10px] text-text-muted">/ lifetime</span>
      </div>
    </div>
  );
}
