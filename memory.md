# Memory — Home Page Category Chips, Featured Courses & Learning Paths

Last updated: 2026-10-01 06:42

## What was built

- Created shared TypeScript interfaces in `src/types/index.ts` for `Course`, `RawCourse`, `Category`, `Creator`, `Lesson`, `CourseModule`, and `Review`.
- Created typed mock data modules:
  - `src/data/courses.ts`: 6 courses matching `Category.PNG` (Learn Figma from Basic, Build Digital Asset, the Power of Big Data, Balancing Productivity and Life, Mastering Money Management, From Idea to Startup Success).
  - `src/data/categories.ts`: 6 curated categories (Design, Development, IT & Software, Business, Marketing, Photography) and 18 category discovery filter chips.
  - `src/data/creators.ts`: author data for "purepearl studio".
- Created pure accessor and computation functions in `src/lib/courses.ts` and `src/lib/categories.ts`:
  - Computed lesson count (17), duration formatting ("2 hours 16 mins"), and rating (4.5) derived from module and review structures so UI never duplicates or conflicts.
- Created reusable UI primitives and sections:
  - `app/components/ui/Container.tsx`: 1200px max-width container with responsive padding (`px-5 md:px-8`).
  - `app/components/ui/CourseCard.tsx`: course card with exact Figma overlay pills (`#F6F6F699` / `bg-surface-overlay`, 8px blur, `#4F4F4F` / `text-text-pill`), creator link overlay, avatar stack with lime `26+` counter, price ($25 / lifetime), and Lucide `BarChart` (`strokeWidth={2.8}`) 3-bar ascending signal level icon.
  - `app/components/home/FeaturedCoursesSection.tsx`: interactive category filter chips with lime active state, "+ More" link, and responsive 3-column course grid.
  - `app/components/home/LearningPathsSection.tsx`: 6 curated category cards with circular lime icon badges.
- Updated `app/globals.css` and `context/ui-tokens.md` with new design tokens:
  - `--color-surface-overlay: rgba(246, 246, 246, 0.6)` (#F6F6F699)
  - `--color-text-pill: #4f4f4f`
- Imprinted `CourseCard`, `FeaturedCoursesSection`, and `LearningPathsSection` into `context/ui-registry.md`.
- Updated `context/progress-tracker.md`.
- Scaffolded and switched to the official `main` branch tracking `origin/main`.

## Decisions made

- Mapped the overlay pills in `CourseCard` to dedicated design tokens (`bg-surface-overlay`, `backdrop-blur-[8px]`, `text-text-pill`) to honor the zero-hardcoded-colors rule while matching Figma `#F6F6F699` and `#4F4F4F`.
- Used Lucide React's `BarChart` (`ChartNoAxesColumnIncreasing`) with `strokeWidth={2.8}` for 3 solid ascending rounded vertical bars, providing vector sharpness across all resolutions without static image dependency.
- Kept `LearningPathsSection` as a lightweight Server Component and `FeaturedCoursesSection` with a small client leaf for chip filter state.
- Set up primary integration branch as `main` tracking `origin/main`.

## Problems solved

- Resolved Figma overlay pill styling with exact background opacity and text color tokens.
- Addressed level badge cellular signal icon with Lucide React `BarChart` (`strokeWidth={2.8}`).
- Verified `npm run build` with Turbopack and strict TypeScript passing in <3s with 0 errors.
- Verified `npm run lint` passing with 0 errors.

## Current state

- Hero section, Partner Logo Strip, Category Filter Chips & Featured Courses grid (6 cards), and Learning Paths section (6 categories) are complete and live on `main`.
- Fully responsive across desktop (1440px), tablet (768px), and mobile (375px) with zero horizontal overflow.

## Next session starts with

- Growth stats section ("Join thousands of learners..."), Creator promotional sections, and Testimonials on the Home page.

## Open questions

- None.
