import { Category } from "@/src/types";
import { CATEGORIES, FILTER_CHIPS } from "@/src/data/categories";

export function getCategories(): Category[] {
  return CATEGORIES;
}

export function getCategoryFilterChips(): string[] {
  return FILTER_CHIPS;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}
