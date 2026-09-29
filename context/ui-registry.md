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
- [ ] FeaturedCourses (category chips + 6 cards)
- [ ] LearningPaths (category tiles)
- [ ] GrowthSection (stats: students, courses, creators)
- [ ] CreatorPromo ("Create & Manage Courses Easily")
- [ ] CreatorCta ("Unlock Your Potential as a Creator")
- [ ] Testimonials

### Courses (`src/components/features/courses`)

- [ ] CourseCard
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

No components built yet. Entries are added here as each component is
completed.
