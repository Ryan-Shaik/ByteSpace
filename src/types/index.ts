export type CourseLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export interface Creator {
  id: string;
  slug: string;
  name: string;
  avatarUrl: string;
  bio: string;
  role?: string;
  studentsCount?: number;
  rating?: number;
  coursesCount?: number;
}

export interface Lesson {
  id: string;
  title: string;
  durationMinutes: number;
  isFree?: boolean;
}

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  lessons: Lesson[];
}

export interface Review {
  id: string;
  courseId: string;
  userName: string;
  userAvatarUrl: string;
  rating: number; // 1 to 5
  comment: string;
  createdAt: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  iconName: "PenTool" | "Code" | "Laptop" | "Building2" | "Megaphone" | "Camera";
  courseCount?: number;
}

export interface RawCourse {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  categoryId: string;
  categoryName: string;
  creatorId: string;
  creatorName: string;
  creatorSlug: string;
  level: CourseLevel;
  price: number;
  isLifetime: boolean;
  thumbnailUrl: string;
  commentsCount: number;
  studentCountBadge: string;
  studentAvatars: string[];
  isFeatured: boolean;
  tags: string[];
  modules: CourseModule[];
  reviews: Review[];
}

export interface Course extends RawCourse {
  lessonCount: number;
  durationFormatted: string;
  rating: number;
  reviewCount: number;
}
