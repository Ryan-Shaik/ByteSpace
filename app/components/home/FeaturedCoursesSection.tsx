"use client";

import { useState } from "react";
import Link from "next/link";
import CourseCard from "../ui/CourseCard";
import Container from "../ui/Container";
import { Course } from "@/src/types";

interface FeaturedCoursesSectionProps {
  initialCourses: Course[];
  allCourses: Course[];
  filterChips: string[];
}

export default function FeaturedCoursesSection({
  initialCourses,
  allCourses,
  filterChips,
}: FeaturedCoursesSectionProps) {
  const [selectedChip, setSelectedChip] = useState<string>("Featured");

  // Filter courses based on the selected chip
  const displayedCourses = (() => {
    if (selectedChip === "Featured") {
      return initialCourses;
    }
    const query = selectedChip.toLowerCase();
    const filtered = allCourses.filter(
      (c) =>
        c.categoryName.toLowerCase() === query ||
        c.tags.some((t) => t.toLowerCase() === query)
    );
    return filtered.length > 0 ? filtered : [];
  })();

  return (
    <section className="bg-surface py-16 md:py-24" aria-labelledby="featured-heading">
      <Container>
        {/* Section Header */}
        <div className="text-center">
          <h2
            id="featured-heading"
            className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-[44px] md:leading-[1.2]"
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>

        {/* Filter Chips Container */}
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {filterChips.map((chip) => {
            const isActive = selectedChip === chip;
            return (
              <button
                key={chip}
                type="button"
                onClick={() => setSelectedChip(chip)}
                aria-pressed={isActive}
                className={`cursor-pointer rounded-pill px-4 py-2 text-xs font-medium transition-all sm:px-5 sm:text-sm ${
                  isActive
                    ? "bg-accent font-semibold text-on-accent shadow-xs"
                    : "bg-surface-muted text-text-primary hover:bg-border/60 hover:text-text-primary"
                }`}
              >
                {chip}
              </button>
            );
          })}
          {/* + More link */}
          <Link
            href="/courses"
            className="inline-flex cursor-pointer items-center px-3 py-2 text-xs font-semibold text-link transition-colors hover:underline sm:text-sm"
          >
            + More
          </Link>
        </div>

        {/* Course Cards Grid */}
        {displayedCourses.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-card border border-border bg-surface-muted p-12 text-center">
            <p className="text-base font-medium text-text-secondary">
              No courses found for &ldquo;{selectedChip}&rdquo; yet.
            </p>
            <button
              type="button"
              onClick={() => setSelectedChip("Featured")}
              className="mt-4 inline-flex items-center justify-center rounded-pill bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover cursor-pointer"
            >
              Reset to Featured Courses
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
