# Architecture Context

This is a **frontend-only** application. All "backend" behavior is
simulated with typed mock data and client-side state.

## Stack

| Layer      | Technology                    | Role                                                        |
| ---------- | ----------------------------- | ----------------------------------------------------------- |
| Framework  | Next.js (App Router) + TypeScript | Routing, layouts, server/client component split, 404 page |
| UI         | Tailwind CSS                  | Styling via utility classes mapped to CSS variable tokens   |
| Fonts      | `next/font` (Poppins)         | Self-hosted geometric sans-serif                            |
| Icons      | Lucide React                  | Stroke-based icons (search, star, share, bag, etc.)         |
| Data       | Typed mock modules in `src/data` | Stand-in for a database and API                          |
| State      | React Context + `useState`    | Cart/enrolled courses, mock session, follow state           |
| Forms      | Native controlled inputs + Zod (optional) | Client-side validation for login, register, newsletter |
| Persistence| `localStorage` (client only)  | Optional persistence of cart and mock session               |

## System Boundaries

- `src/app` — Routes, layouts, and page composition only. Pages
  fetch from `src/lib` and render components; no business logic.
- `src/components/layout` — Header, Footer, and page shells shared
  across routes (auth pages use a separate split-layout shell).
- `src/components/ui` — Small reusable primitives: Button, Pill/Chip,
  Badge, Input, Tabs, Pagination, RatingStars, ProgressBar, Avatar
  stack.
- `src/components/features` — Feature-specific components grouped by
  area: `home/`, `courses/`, `course-detail/`, `creators/`, `auth/`.
- `src/data` — Static typed mock data (courses, creators, lessons,
  reviews, categories, testimonials). The only place content lives.
- `src/lib` — Data accessors (`getCourses`, `getCourseBySlug`, ...),
  filtering/sorting/pagination helpers, validators, and formatters.
- `src/context` — Client providers for cart and mock auth.
- `src/types` — Shared TypeScript interfaces (`Course`, `Creator`,
  `Lesson`, `Review`, `Category`).
- `public` — Static assets: logo, decorative 3D shapes, placeholder
  course and avatar images.
- `design/` — Reference design PNGs. Read-only; not imported by code.

## Storage Model

- **Mock data modules (`src/data`)**: All course, creator, lesson,
  review, category, and testimonial content. Read through `src/lib`
  accessors so a real API could replace them later.
- **Browser `localStorage`** (optional): Cart contents and mock
  signed-in flag, so state survives refresh. Always read defensively
  after mount to avoid hydration mismatches.
- **Static assets (`public`)**: Images and decorative graphics.
- **No database, no server storage, no cookies for auth.**

## Auth and Access Model

- There is no real authentication. Login and Register validate input
  on the client and, on success, set a mock user in context.
- The mock session only changes the header (e.g. show user state
  instead of Sign In / Join Us if implemented) and the Enroll button
  state. No route is truly protected.
- Facebook and Google buttons are visual only and show a
  "not available in this demo" message.
- Ownership concepts (creator owns courses) exist only as data
  relations in mock data (`course.creatorId`).

## Invariants

1. No backend code: no API routes, server actions that persist data,
   database clients, or external network calls.
2. All content comes from `src/data` through `src/lib` accessors;
   components never import raw data files directly and never hardcode
   course, creator, or review content.
3. Derived values are computed, not duplicated: a course's rating
   average and review count come from its review breakdown, and
   lesson count/duration come from its modules, so the UI never
   shows conflicting numbers.
4. Server components are the default; `"use client"` is added only
   for interactivity (tabs, filters, forms, cart, carousels).
5. No hardcoded hex colors in components; all colors come from CSS
   variable tokens defined in `ui-context.md`.
6. Every page renders correctly at 375px, 768px, and 1280px widths
   with no horizontal scrolling.
7. Anything reading `localStorage` or `window` runs only on the
   client after mount.
