import Image from "next/image";
import Link from "next/link";
import { Star, BarChart } from "lucide-react";
import { Course } from "@/src/types";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-card border border-border bg-surface p-3.5 transition-all duration-200 hover:shadow-md hover:border-border-strong">
      <div>
        {/* Course Thumbnail with Floating Overlay Pills */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-media bg-surface-muted">
          <Image
            src={course.thumbnailUrl}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Floating Pill Overlay */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 pointer-events-none">
            <span className="rounded-pill bg-surface-overlay px-2.5 py-1 text-[11px] font-medium text-text-pill backdrop-blur-[8px] shadow-xs">
              {course.lessonCount} Lessons
            </span>
            <span className="rounded-pill bg-surface-overlay px-2.5 py-1 text-[11px] font-medium text-text-pill backdrop-blur-[8px] shadow-xs">
              {course.durationFormatted}
            </span>
            <span className="rounded-pill bg-surface-overlay px-2.5 py-1 text-[11px] font-medium text-text-pill backdrop-blur-[8px] shadow-xs">
              {course.commentsCount} Comments
            </span>
          </div>
        </div>

        {/* Title and Rating Row */}
        <div className="mt-3.5 flex items-start justify-between gap-2">
          <h3 className="truncate text-base font-semibold text-text-primary transition-colors group-hover:text-brand sm:text-[17px]">
            {course.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-text-primary">
            <span>{course.rating.toFixed(1)}</span>
            <Star className="h-3.5 w-3.5 fill-star text-star" aria-hidden="true" />
          </div>
        </div>

        {/* Creator Link */}
        <p className="mt-1 text-xs text-text-muted">
          by{" "}
          <Link
            href={`/creators/${course.creatorSlug}`}
            className="relative z-10 font-medium text-link transition-colors hover:underline"
          >
            {course.creatorName}
          </Link>
        </p>

        {/* Meta Row: Level Badge & Avatar Stack */}
        <div className="mt-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 rounded-pill bg-surface-muted px-2.5 py-1 text-xs font-medium text-text-secondary">
            <BarChart className="h-3.5 w-3.5 shrink-0" strokeWidth={2.8} aria-hidden="true" />
            <span>{course.level}</span>
          </div>

          <div className="flex items-center">
            {course.studentAvatars.slice(0, 4).map((avatar, idx) => (
              <div
                key={idx}
                className="relative -ml-2 h-6 w-6 overflow-hidden rounded-full border-2 border-surface shadow-xs first:ml-0"
              >
                <Image
                  src={avatar}
                  alt="Student avatar"
                  fill
                  sizes="24px"
                  className="object-cover"
                />
              </div>
            ))}
            <span className="relative z-10 -ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-on-accent ring-2 ring-surface">
              {course.studentCountBadge}
            </span>
          </div>
        </div>
      </div>

      {/* Price Footer */}
      <div className="mt-3.5 flex items-baseline border-t border-border pt-3">
        <span className="text-xl font-bold text-link">${course.price}</span>
        <span className="ml-1 text-xs font-normal text-text-muted">/ lifetime</span>
      </div>

      {/* Accessible Full-Card Click Target */}
      <Link
        href={`/courses/${course.slug}`}
        className="absolute inset-0 z-0 rounded-card"
        aria-label={`View course: ${course.title}`}
      />
    </div>
  );
}
