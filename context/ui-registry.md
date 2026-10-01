# UI Registry

Living document. Updated after every component is built. Read this
before building any new component and match existing patterns
exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check whether a similar component already exists under
   **Components**
2. If yes, reuse it or match its exact classes
3. If no, build it following `ui-rules.md` and `ui-tokens.md`, then
   add an entry here

After building or changing any component, update its entry with the
file path, date, and the exact classes used. Move it from **Planned
Components** to **Components**.

---

## Entry Format

Copy this block for each new component:

```
### ComponentName

File: `src/components/<area>/ComponentName.tsx`
Last updated: YYYY-MM-DD
Type: server | client
Used on: <routes>

| Property         | Class |
| ---------------- | ----- |
| Background       |       |
| Border           |       |
| Border radius    |       |
| Text primary     |       |
| Text secondary   |       |
| Spacing          |       |
| Hover / focus    |       |
| Responsive       |       |

**Props:** <name: type, ...>
**Pattern notes:** <what it does, states, edge cases>
```

---

## Canonical Patterns

Starting classes to reuse when the components below are built. If a
built component differs, record the real classes in its entry and
update the pattern here.

| Pattern            | Classes |
| ------------------ | ------- |
| Container (outer)  | `px-5 md:px-8` |
| Container (inner)  | `mx-auto w-full max-w-page` |
| Hero band          | `hero-grid text-on-brand` |
| Primary button     | `inline-flex items-center justify-center gap-2 rounded-pill bg-accent px-6 py-3 text-base font-medium text-on-accent transition-colors hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-brand` |
| Outline button     | `inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted` |
| Chip (inactive)    | `rounded-pill bg-surface-muted px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-border` |
| Chip (active)      | `rounded-pill bg-accent px-4 py-2 text-sm font-medium text-on-accent` |
| Content card       | `rounded-card border border-border bg-surface p-6` |
| Floating panel     | `rounded-panel bg-surface p-6 shadow-panel` |
| Hero meta badge    | `inline-flex items-center gap-2 rounded-pill bg-surface px-4 py-2 text-sm font-medium text-text-primary` |
| Text input         | `w-full rounded-input border border-border bg-surface-input px-4 py-3.5 text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand` |
| Field error        | `mt-1 text-sm text-error` |
| Progress track     | `h-1.5 w-full rounded-pill bg-border overflow-hidden` |
| Progress fill      | `h-full rounded-pill bg-accent` |

---

## Planned Components

Checklist derived from the nine designs. When a component is built,
remove it from this list and add its entry under **Components**.

### UI primitives (`src/components/ui`)

- [ ] Button (lime, outline, text variants)
- [ ] Chip
- [ ] Badge (hero meta, level, overlay pill, creator pill)
- [ ] Input (auth, search, newsletter variants)
- [ ] Tabs
- [ ] Pagination
- [ ] RatingStars
- [ ] ProgressBar
- [ ] AvatarStack
- [ ] Container

### Layout (`src/components/layout`)

- [ ] Header (with mobile menu)
- [ ] Footer (with newsletter form)
- [ ] HeroBand
- [ ] AuthShell (split layout, no header/footer)

### Home (`src/components/features/home`)

- [ ] HomeHero (search, floating stat cards, imagery)
- [ ] PartnerStrip
- [x] FeaturedCourses (category chips + 6 cards)
- [x] LearningPaths (category tiles)
- [x] GrowthSection (stats: students, courses, creators)
- [x] CreatorPromo ("Create & Manage Courses Easily")
- [x] CreatorCta ("Unlock Your Potential as a Creator")
- [ ] Testimonials

### Courses (`src/components/features/courses`)

- [x] CourseCard
- [ ] CourseGrid
- [ ] CourseSearchBar (input + Courses dropdown)
- [ ] FilterBar (Filter, Level, Category, sort)
- [ ] CategoryChips

### Course Detail (`src/components/features/course-detail`)

- [ ] CourseHeader (title, creator, meta badges, Share)
- [ ] VideoPreview
- [ ] CourseSidebar (lesson preview, price, Enroll Now, includes,
      creator card)
- [ ] CourseTabs
- [ ] AboutTab (description, sneak peek, key points)
- [ ] LessonsTab (module list, progress)
- [ ] ReviewsTab (RatingSummary, StarFilter, ReviewCard)

### Creators (`src/components/features/creators`)

- [ ] CreatorHero (avatar, bio, counts, Follow)
- [ ] CreatorCourseList

### Auth (`src/components/features/auth`)

- [ ] LoginForm
- [ ] RegisterForm
- [ ] SocialButtons
- [ ] AuthCollage (left side marketing visual)

### Other

- [ ] NotFoundView (gradient 404, headline, Back to Home)
- [ ] CartButton and CartDropdown

---

## Components

### CourseCard

File: `app/components/ui/CourseCard.tsx`
Last updated: 2026-10-01
Type: server
Used on: `/`, `/courses`, `/creators/[slug]`

| Property         | Class |
| ---------------- | ----- |
| Background       | `bg-surface`, overlay pills: `bg-surface-overlay` (`rgba(246, 246, 246, 0.6)` #F6F6F699) with `backdrop-blur-[8px]` |
| Border           | `border border-border hover:border-border-strong` |
| Border radius    | Card: `rounded-card` (16px), media: `rounded-media` (12px), overlay pills/level badge: `rounded-pill` |
| Text — primary   | `text-text-primary`, price: `text-link` |
| Text — secondary | `text-text-muted`, `text-text-secondary`, overlay pills: `text-text-pill` (`#4F4F4F`) |
| Spacing          | Card: `p-3.5`, gap-1 overlay, mt-3.5 title row, mt-4 meta row, mt-3.5 pt-3 price border |
| Hover state      | `hover:shadow-md hover:border-border-strong`, image: `group-hover:scale-105` |
| Shadow           | Card hover: `hover:shadow-md`, overlay pills: `shadow-xs` |
| Accent usage     | Lime badge `bg-accent text-on-accent` for `26+` student counter |

**Props:** `course: Course`
**Pattern notes:**
- Exact Figma specification applied: overlay pills use `bg-surface-overlay` (#F6F6F699), blur 8px (`backdrop-blur-[8px]`), and text `#4F4F4F` (`text-text-pill`).
- Level badge uses Lucide React's `BarChart` (`ChartNoAxesColumnIncreasing`) with `strokeWidth={2.8}` for 3 solid ascending rounded vertical bars matching the Figma cellular signal design.
- Full-card click target overlays with `absolute inset-0 z-0` while creator link uses `relative z-10 hover:underline` to avoid nested anchors.

### FeaturedCoursesSection

File: `app/components/home/FeaturedCoursesSection.tsx`
Last updated: 2026-10-01
Type: client
Used on: `/`

| Property         | Class |
| ---------------- | ----- |
| Background       | `bg-surface`, chip inactive: `bg-surface-muted`, chip active: `bg-accent` |
| Border           | None on chips; grid cards use `CourseCard` border |
| Border radius    | Chips: `rounded-pill` |
| Text — primary   | `text-text-primary` |
| Text — secondary | `text-text-muted`, chip active: `text-on-accent`, "+ More": `text-link` |
| Spacing          | Section: `py-16 md:py-24`, gap-2.5 wrap on chips, grid: `gap-6 mt-12` |
| Hover state      | Chips: `hover:bg-border/60 hover:text-text-primary`, "+ More": `hover:underline` |
| Shadow           | Active chip: `shadow-xs` |
| Accent usage     | Active category chip: `bg-accent text-on-accent font-semibold` |

**Props:** `initialCourses: Course[], allCourses: Course[], filterChips: string[]`
**Pattern notes:**
- Handles client-side category filtering with "Featured" default. Displays 6 course cards in 3-column grid (`sm:grid-cols-2 lg:grid-cols-3`).

### LearningPathsSection

File: `app/components/home/LearningPathsSection.tsx`
Last updated: 2026-10-01
Type: server
Used on: `/`

| Property         | Class |
| ---------------- | ----- |
| Background       | `bg-surface`, category tile: `bg-surface`, icon container: `bg-accent` |
| Border           | Tile: `border border-border hover:border-brand/40` |
| Border radius    | Tile: `rounded-2xl`, icon container: `rounded-full` |
| Text — primary   | `text-text-primary group-hover:text-brand` |
| Text — secondary | `text-text-muted` |
| Spacing          | Section: `py-16 md:py-24`, grid: `gap-4 md:gap-5 mt-10`, tile: `p-6` |
| Hover state      | Tile: `hover:-translate-y-1 hover:border-brand/40 hover:shadow-md`, icon container: `group-hover:scale-110` |
| Shadow           | Tile hover: `hover:shadow-md`, icon container: `shadow-xs` |
| Accent usage     | Circular icon badge: `bg-accent text-on-accent` |

**Props:** `categories: Category[]`
**Pattern notes:**
- 6 curated learning path cards (Design, Development, IT & Software, Business, Marketing, Photography) linking to `/courses?category=[slug]`. Responsive across 2 cols (mobile), 3 cols (tablet), 6 cols (desktop).

### CreatorCtaSection

File: `app/components/home/CreatorCtaSection.tsx`
Last updated: 2026-10-01
Type: server
Used on: `/`

| Property         | Class |
| ---------------- | ----- |
| Background       | `hero-grid`, full bleed overlay: `object-cover object-center` on `/assets/Group 6.png` with `sizes="100vw"` |
| Border           | None |
| Border radius    | Button: `rounded-pill` |
| Text — primary   | Headline: `text-on-brand`, button: `text-on-accent` |
| Text — secondary | Description: `text-on-brand/80` |
| Spacing          | Section: `py-16 sm:py-20 lg:py-0 lg:h-[488px]`, button: `px-8 py-3.5 mt-7 sm:mt-8` |
| Hover state      | Button: `hover:bg-accent-hover` |
| Shadow           | None |
| Accent usage     | CTA button: `bg-accent text-on-accent hover:bg-accent-hover` |

**Props:** `cta: CreatorCta`
**Pattern notes:**
- Full-width call-to-action banner matching `CTA_Frame.png`. Spans 100% of viewport width without side gaps by utilizing `Group 6.png` directly inside `absolute inset-0` with `object-cover`.
- Clean semantic heading, token-compliant Poppins typography, and link to `/register`.

