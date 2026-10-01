and # UI Tokens

Design tokens for ByteSpace, extracted from the nine delivered
screens. Use these exact tokens throughout the codebase. Never
hardcode colors or use Tailwind's built-in color classes in
components.

Hex values are **estimates read from the design images**. If you get
exact values (Figma, eyedropper), change them here first and only
here; components pick them up automatically.

---

## How to Use

This project uses **Tailwind CSS v4**. Tokens live in `@theme` inside
`src/app/globals.css`. There is no `tailwind.config.ts` for colors or
tokens.

Tailwind v4 generates utilities from each token:

- `--color-brand` → `bg-brand`, `text-brand`, `border-brand`
- `--color-accent` → `bg-accent`, `text-accent`
- `--radius-card` → `rounded-card`
- `--container-page` → `max-w-page`

```tsx
// Correct: token utilities
className="bg-accent text-on-accent rounded-pill"

// Correct: direct variable reference for dynamic values
style={{ width: `${percent}%` }}

// Never: hardcoded hex
className="bg-[#D4FF1E]"

// Never: built-in palette
className="bg-blue-700 text-gray-600"
```

---

## globals.css: Complete Token Definition

```css
@import "tailwindcss";

@theme {
  /* Brand blue (hero bands, links, prices, check icons) */
  --color-brand: #0038e0;
  --color-brand-dark: #002bb0;
  --color-brand-line: #3a63ea; /* grid overlay lines on blue */

  /* Accent lime (all primary actions, active states, progress) */
  --color-accent: #d4ff1e;
  --color-accent-hover: #c2ee0a;

  /* Surfaces */
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-surface-muted: #f4f4f6; /* partner strip, inactive chips/tabs */
  --color-surface-input: #f9fafb; /* auth form inputs */
  --color-surface-overlay: rgba(246, 246, 246, 0.6); /* course card image overlay pills (#F6F6F699) */

  /* Borders */
  --color-border: #e5e7eb;
  --color-border-strong: #d1d5db; /* empty stars, progress track */

  /* Text */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #4b5563; /* body paragraphs */
  --color-text-muted: #6b7280; /* meta, placeholders, "1 year ago" */
  --color-text-pill: #4f4f4f; /* course card overlay pills */
  --color-on-brand: #ffffff; /* text on blue */
  --color-on-accent: #1a1a1a; /* text on lime */
  --color-link: #0038e0;

  /* Rating */
  --color-star: #1a1a1a;
  --color-star-empty: #d1d5db;

  /* Feedback */
  --color-success: #16a34a;
  --color-success-light: #f0fdf4;
  --color-error: #dc2626;
  --color-error-light: #fef2f2;

  /* Radius */
  --radius-input: 12px;
  --radius-media: 12px; /* images inside cards */
  --radius-card: 16px;
  --radius-panel: 24px; /* video, sidebar card, auth card */
  --radius-pill: 9999px;

  /* Shadow */
  --shadow-panel: 0 8px 32px rgba(0, 0, 0, 0.08);

  /* Layout */
  --container-page: 75rem; /* 1200px content width */
}

/* next/font injects --font-poppins; map it into the theme */
@theme inline {
  --font-sans: var(--font-poppins), ui-sans-serif, system-ui, sans-serif;
}

/* Non-theme variables */
:root {
  --grid-size: 120px;
}

/* Blue hero band with the grid overlay, reused on every page */
@layer components {
  .hero-grid {
    background-color: var(--color-brand);
    background-image:
      linear-gradient(to right, var(--color-brand-line) 1px, transparent 1px),
      linear-gradient(to bottom, var(--color-brand-line) 1px, transparent 1px);
    background-size: var(--grid-size) var(--grid-size);
    background-position: calc(50% + var(--grid-size) / 2) -2px;
  }
}

/* Smaller grid cells on mobile */
@media (max-width: 767px) {
  :root {
    --grid-size: 60px;
  }
}
```

The grid lines are visible but soft (about 30% lighter than the
blue). If they look too strong, adjust `--color-brand-line` only.

---

## Color Usage Guide

### Page and Surfaces

| Element                          | Token                       |
| -------------------------------- | --------------------------- |
| Page, cards, footer, auth card   | `bg-surface`                |
| Hero bands (all pages)           | `hero-grid` (uses `brand`)  |
| Partner logo strip               | `bg-surface-muted`          |
| Inactive chip / tab              | `bg-surface-muted`          |
| Auth form input                  | `bg-surface-input`          |
| Card and input borders           | `border-border`             |

### Text

| Element                              | Token                    |
| ------------------------------------ | ------------------------ |
| Headings on white                    | `text-text-primary`      |
| Body paragraphs                      | `text-text-secondary`    |
| Meta, placeholder, timestamps        | `text-text-muted`        |
| Any text on blue                     | `text-on-brand`          |
| Text on lime buttons/chips           | `text-on-accent`         |
| Prices, "by creator" links, durations| `text-link`              |
| Creator name inside blue hero        | `text-accent`            |

### Accent (Lime)

Used for: primary buttons (Enroll Now, Follow, Share, Search,
Continue, Sign In, Back to Home), active chip and tab, rating box,
progress and rating bars, overflow avatar counter on cards.

| Element              | Token                                 |
| -------------------- | ------------------------------------- |
| Background           | `bg-accent`, hover `bg-accent-hover`  |
| Text on it           | `text-on-accent`                      |

### Brand (Blue)

Used for: hero backgrounds, inline links, prices, lesson duration
text, check icons in Key Points, star icon in the hero rating badge,
footer and form links ("Create an account", "Login").

### Rating

| Element                         | Token                          |
| ------------------------------- | ------------------------------ |
| Filled star (cards, reviews)    | `text-star`                    |
| Empty star                      | `text-star-empty`              |
| Star inside the blue hero badge | `text-brand`                   |
| Breakdown bar fill / track      | `bg-accent` / `bg-border`      |

### Feedback

| State            | Background          | Text            |
| ---------------- | ------------------- | --------------- |
| Form error       | `bg-error-light`    | `text-error`    |
| Success message  | `bg-success-light`  | `text-success`  |

---

## Typography

Font: **Poppins**, weights 400, 500, 600, 700, imported with
`next/font/google` (`variable: "--font-poppins"`). Sizes below are
desktop; scale down on mobile as noted.

| Element                | Size (desktop / mobile) | Weight | Line height | Color token            |
| ---------------------- | ----------------------- | ------ | ----------- | ---------------------- |
| Logo wordmark          | 24px                    | 700    | 32px        | `text-on-brand` / `text-text-primary` |
| 404 numerals           | 300px / 140px           | 700    | 1           | gradient (see below)   |
| Home hero title        | 60px / 36px             | 600    | 1.15        | `text-on-brand`        |
| 404 headline           | 64px / 32px             | 600    | 1.15        | `text-on-brand`        |
| Course page title      | 36px / 26px             | 600    | 1.2         | `text-on-brand`        |
| Section heading (home) | 36px / 26px             | 600    | 1.2         | `text-text-primary`    |
| Auth card title        | 48px / 32px             | 600    | 1.1         | `text-text-primary`    |
| Card / block heading   | 20px                    | 600    | 28px        | `text-text-primary`    |
| Course card title      | 18px                    | 600    | 24px        | `text-text-primary`    |
| Price                  | 24px                    | 600    | 32px        | `text-link`            |
| Body paragraph         | 16px                    | 400    | 26px        | `text-text-secondary`  |
| Nav / button / chip    | 14–16px                 | 500    | 20–24px     | varies                 |
| Meta / footer / legal  | 12–14px                 | 400    | 16–20px     | `text-text-muted`      |

### 404 Gradient

The giant "404" uses a vertical gradient from lime at the top fading
into blue at the bottom, clipped to the text:

```
bg-linear-to-b from-accent to-brand bg-clip-text text-transparent
```

The white headline overlaps the lower part of the numerals.

---

## Spacing

| Value        | Usage                                          |
| ------------ | ---------------------------------------------- |
| `gap-2` (8)  | Badge and chip icon gaps, avatar overlap       |
| `gap-3` (12) | Filter chips row, tab pills                    |
| `gap-4` (16) | Inside cards, form field spacing               |
| `gap-6` (24) | Card grid gutter, sidebar block spacing        |
| `gap-8` (32) | Between page blocks                            |
| `py-16 md:py-24` | Home section vertical padding              |
| `px-5 md:px-8`   | Page horizontal padding (mobile / tablet+) |

Content width is 1200px (`max-w-page`). On a 1440px canvas this
leaves 120px side margins, matching the design.

---

## Component Tokens

### Cards (course card, review card, stat/testimonial cards)

```
background: bg-surface
border: border border-border
border-radius: rounded-card
padding: p-3 (course card, image on top) / p-6 (text cards)
shadow: none (flat, border only)
```

### Panels (video preview, course sidebar, auth card)

```
background: bg-surface
border-radius: rounded-panel
shadow: shadow-panel
padding: p-6 (sidebar) / p-8 md:p-10 (auth card)
```

### Buttons

**Primary (lime):**

```
background: bg-accent  hover: hover:bg-accent-hover
text: text-on-accent
border-radius: rounded-pill
padding: px-6 py-3
font: text-base font-medium
```

**Secondary (outline, on white):**

```
background: bg-surface
border: border border-border
text: text-text-primary
border-radius: rounded-pill
padding: px-4 py-2
```

**Text link (header Sign In / Join Us):**

```
text: text-on-brand, hover:underline
font: text-base font-normal
```

### Chips (category filters) and Tabs

```
border-radius: rounded-pill
padding: px-4 py-2
font: text-sm font-medium
active: bg-accent text-on-accent
inactive: bg-surface-muted text-text-primary hover:bg-border
```

### Filter / Sort buttons (Filter, Level, Category, Most relevant)

```
background: bg-surface
border: border border-border
border-radius: rounded-pill
padding: px-4 py-2
text: text-sm font-medium text-text-primary
icon: h-4 w-4
```

### Badges

**Hero meta badge (Intermediate, 4.8, 199 Students):**

```
background: bg-surface
text: text-text-primary text-sm font-medium
border-radius: rounded-pill
padding: px-4 py-2
icon: h-4 w-4 text-brand
```

**Card level badge (Beginner):**

```
background: bg-surface-muted
border-radius: rounded-pill
padding: px-3 py-1
text: text-xs font-medium text-text-primary
```

**Image overlay pills (17 Lessons, 2 hours 16 mins, 59 Comments):**

```
background: bg-surface-muted/80 (semi-transparent)
border-radius: rounded-pill
padding: px-3 py-1
text: text-xs text-text-secondary
```

### Inputs

**Auth inputs:**

```
background: bg-surface-input
border: border border-border
border-radius: rounded-input
padding: px-4 py-3.5
text: text-base text-text-primary
placeholder: placeholder:text-text-muted
focus: focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand
error: border-error, message in text-error text-sm below the field
```

**Search and newsletter inputs:** same as above but
`rounded-pill`, `bg-surface` (white), `px-5 py-3`.

### Progress and Rating Bars

```
height: h-1.5 (course progress) / h-2 (rating breakdown)
border-radius: rounded-pill
track: bg-border
fill: bg-accent (width set inline as a percentage)
```

### Avatar Stack

```
avatar: h-8 w-8 rounded-pill border-2 border-surface, overlap -ml-2
counter (course cards): bg-accent text-on-accent text-xs font-medium ("26+")
counter (auth collage): bg-text-primary text-on-brand ("2K+")
```

### Rating Summary Box (Reviews tab)

```
box: bg-accent text-on-accent rounded-card p-6, label "Ratings"
number: text-4xl font-semibold
```

### Pagination

```
item: h-9 w-9 rounded-pill text-sm
current: bg-accent text-on-accent
other: text-text-primary hover:bg-surface-muted
arrows: h-10 w-10 rounded-pill border border-border
```

---

## Invariants

- Never use hex values directly in components; always use token
  utilities. Raw `rgba()` is only allowed inside `globals.css`.
- Never use Tailwind's built-in palette (`bg-blue-700`,
  `text-gray-600`, `border-gray-200`).
- Lime (`--color-accent`) is the only action color; blue
  (`--color-brand`) is for hero backgrounds, links, prices, and
  small accent icons. Never use lime for body text on white.
- Text on lime is always `text-on-accent`; text on blue is always
  `text-on-brand`. Never put white text on lime.
- Font is Poppins via `next/font/google`; never rely on a system
  font as the primary font.
- The hero grid is one shared class (`hero-grid`); do not redraw it
  per page.
- Changing a token means editing this file and `globals.css`
  together, then noting it in `progress-tracker.md`.
