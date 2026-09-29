# Code Standards

## General

- Keep modules small and single-purpose; one component per file
- Fix root causes; do not layer workarounds or CSS hacks
- Do not mix unrelated concerns in one component (data shaping,
  layout, and interaction belong in separate places)
- Prefer composition over configuration flags; extract a component
  when markup repeats three or more times (e.g. `CourseCard`)
- No dead code, commented-out blocks, or unused files
- Match the design first; when a design detail is ambiguous or
  inconsistent, follow `ui-context.md` and log the decision in
  `progress-tracker.md`

## TypeScript

- Strict mode is required throughout the project
- Avoid `any`; use explicit interfaces from `src/types` or narrowly
  scoped types
- Type component props explicitly; export prop types only when reused
- Validate all form input before trusting it (Zod schema or small
  typed validator functions in `src/lib/validators`)
- Model mock data with the same interfaces a real API would return

## Next.js

- Default to server components
- Add `"use client"` only when browser interactivity requires it
  (tabs, filters, forms, cart, mobile menu, `localStorage`)
- Keep client components small and push them to the leaves of the
  tree
- Use `next/image` for all images with explicit `alt` text and
  sizes; use `next/link` for internal navigation
- Use `next/font` for Poppins; do not load fonts via CSS `@import`
- Course tabs are driven by the `?tab=about|lessons|reviews` search
  param so tab state is shareable and works with the back button
- Provide `not-found.tsx` for the 404 screen and `notFound()` for
  unknown course or creator slugs
- No API routes, route handlers, or server actions that persist
  data

## Styling

- Use CSS custom property tokens from `ui-context.md`, mapped in the
  Tailwind theme; no hardcoded hex values in components
- Follow the border radius scale defined in `ui-context.md`
- Mobile-first: write base styles for small screens and add `md:` /
  `lg:` overrides
- Avoid arbitrary pixel values when a Tailwind scale value is close
  enough; use arbitrary values only for design-specific sizes
- Do not use inline `style` except for truly dynamic values (e.g.
  progress bar width, star breakdown bar width)
- Keep the hero grid overlay as a single reusable class or
  component

## Accessibility

- Use semantic elements (`header`, `nav`, `main`, `footer`,
  `section`, `button`, `a`)
- Every input has a visible `label` or `aria-label`
- Icon-only buttons (cart, share, pagination arrows) have
  `aria-label`
- Interactive elements show a visible focus state
- Tabs use `role="tablist"` / `role="tab"` / `aria-selected`
- Text on lime and blue backgrounds must keep sufficient contrast

## Forms and Client State

- Controlled inputs with inline error messages under the field
- Validate on submit and on blur; disable submit only while
  submitting
- Login and Register never send network requests; they set mock
  state and show a success message
- Access `localStorage` only inside `useEffect` or event handlers,
  wrapped in try/catch
- Keep context providers minimal: `CartProvider` and `AuthProvider`
  only

## Data and Mock Content

- All content lives in `src/data`; components receive data via props
- Access data only through `src/lib` functions, never by importing
  data files inside components
- Derive computed values (average rating, review count, lesson
  count, total duration) from source data instead of storing
  duplicates
- Use stable string slugs for routes (`/courses/[slug]`,
  `/creators/[slug]`)
- Filtering, sorting, and pagination are pure functions in
  `src/lib` with no side effects

## File Organization

- `src/app/` — Routes, layouts, `not-found.tsx`, global CSS
- `src/components/ui/` — Reusable primitives (Button, Chip, Badge,
  Input, Tabs, Pagination, RatingStars, ProgressBar, AvatarStack)
- `src/components/layout/` — Header, Footer, MobileMenu, page shells
- `src/components/features/` — Feature components by area (`home`,
  `courses`, `course-detail`, `creators`, `auth`)
- `src/data/` — Typed mock data
- `src/lib/` — Data accessors, filter/sort/paginate helpers,
  validators, formatters
- `src/context/` — Client context providers
- `src/types/` — Shared interfaces
- `public/` — Logo, decorative shapes, placeholder images
- Naming: components `PascalCase.tsx`, utilities `camelCase.ts`,
  route folders `kebab-case`
