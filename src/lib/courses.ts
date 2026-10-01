import { RawCourse, Course } from "@/src/types";
import { RAW_COURSES } from "@/src/data/courses";

export function getCourseLessonCount(course: RawCourse): number {
  return course.modules.reduce((total, mod) => total + mod.lessons.length, 0);
}

export function getCourseDurationMinutes(course: RawCourse): number {
  return course.modules.reduce(
    (total, mod) =>
      total + mod.lessons.reduce((subTotal, les) => subTotal + les.durationMinutes, 0),
    0
  );
}

export function formatDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0 && minutes > 0) {
    return `${hours} hours ${minutes} mins`;
  }
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  }
  return `${minutes} mins`;
}

export function getCourseRating(course: RawCourse): number {
  if (!course.reviews || course.reviews.length === 0) {
    return 0;
  }
  const total = course.reviews.reduce((sum, rev) => sum + rev.rating, 0);
  return Number((total / course.reviews.length).toFixed(1));
}

export function hydrateCourse(raw: RawCourse): Course {
  const lessonCount = getCourseLessonCount(raw);
  const durationMinutes = getCourseDurationMinutes(raw);
  const durationFormatted = formatDuration(durationMinutes);
  const rating = getCourseRating(raw);
  const reviewCount = raw.reviews.length;

  return {
    ...raw,
    lessonCount,
    durationFormatted,
    rating,
    reviewCount,
  };
}

export function getAllCourses(): Course[] {
  return RAW_COURSES.map(hydrateCourse);
}

export function getFeaturedCourses(): Course[] {
  return getAllCourses().filter((c) => c.isFeatured);
}

export function getCourseBySlug(slug: string): Course | undefined {
  const raw = RAW_COURSES.find((c) => c.slug === slug);
  return raw ? hydrateCourse(raw) : undefined;
}

export function getCoursesByCategory(categoryName: string): Course[] {
  const all = getAllCourses();
  if (!categoryName || categoryName === "Featured" || categoryName === "All") {
    return getFeaturedCourses();
  }
  const normalized = categoryName.toLowerCase();
  return all.filter(
    (c) =>
      c.categoryName.toLowerCase() === normalized ||
      c.tags.some((t) => t.toLowerCase() === normalized)
  );
}
