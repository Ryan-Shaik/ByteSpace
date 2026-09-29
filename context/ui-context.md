# UI Context

## Theme

Light content areas with bold electric-blue hero sections. Every page
opens with a saturated blue band overlaid with a subtle square grid
of thin lighter lines. A neon lime accent marks all primary actions,
active states, and highlights. Content sections sit on white (or a
very light grey for the partner-logo strip). Shapes are heavily
rounded: pill buttons, pill chips, and rounded bordered cards. The
home and auth pages add playful 3D-style decorative shapes (rings,
cones, squiggles) in lime and white. No dark mode.

Hex values below are **estimates read from the design images**. If a
design file or eyedropper gives exact values, update the tokens here
first, then the code.

## Colors

All components must use these tokens. No hardcoded hex values.

| Role                     | CSS Variable        | Value     |
| ------------------------ | ------------------- | --------- |
| Page background          | `--bg-base`         | `#FFFFFF` |
| Muted section background | `--bg-muted`        | `#F4F4F6` |
| Hero / brand blue        | `--brand-blue`      | `#0038E0` |
| Hero grid line           | `--brand-blue-line` | `#2F5BEA` |
| Primary accent (lime)    | `--accent-primary`  | `#D4FF1E` |
| Primary text             | `--text-primary`    | `#1A1A1A` |
| Muted text               | `--text-muted`      | `#6B7280` |
| Text on blue             | `--text-on-brand`   | `#FFFFFF` |
| Text on lime             | `--text-on-accent`  | `#1A1A1A` |
| Link / price / creator   | `--text-link`       | `#0038E0` |
| Border                   | `--border-default`  | `#E5E7EB` |
| Star (filled)            | `--star-fill`       | `#1A1A1A` |
| Star (empty)             | `--star-empty`      | `#D1D5DB` |
| Error                    | `--state-error`     | `#DC2626` |
| Success                  | `--state-success`   | `#16A34A` |

Usage notes:

- Lime buttons and active chips use `--text-on-accent` text.
- Prices ($25), inline links, creator names on cards, and lesson
  durations use `--text-link` on white.
- Creator name in the course header ("by purepearl studio") uses
  `--accent-primary` on blue.
- The 404 numerals use a vertical gradient from `--accent-primary`
  fading toward `--brand-blue`.
- Progress bars use `--accent-primary` for the fill over a light grey
  track (`--border-default`).

## Typography

| Role       | Font                              | Variable      |
| ---------- | --------------------------------- | ------------- |
| UI text    | Poppins (geometric sans-serif)    | `--font-sans` |
| Code/mono  | Not used                          | —             |

Scale (approximate):

| Element               | Style                                    |
| --------------------- | ---------------------------------------- |
| Home hero title       | 56–64px desktop, semibold, centered      |
| 404 numerals          | ~300px desktop, bold, gradient           |
| Page / course title   | 32–40px, semibold                        |
| Section heading       | 32px (home), 20–24px (inside pages)      |
| Card title            | 18–20px, semibold                        |
| Body                  | 14–16px, regular, `--text-muted`         |
| Small / meta          | 12–13px                                  |

Scale down headings proportionally on mobile.

## Border Radius

| Context                       | Class               |
| ----------------------------- | ------------------- |
| Buttons, chips, badges, tabs  | `rounded-full`      |
| Inputs (auth forms)           | `rounded-xl`        |
| Newsletter input              | `rounded-full`      |
| Course / review / stat cards  | `rounded-2xl`       |
| Card images                   | `rounded-xl`        |
| Video preview, sidebar card   | `rounded-3xl`       |
| Auth card                     | `rounded-3xl`       |

## Component Library

No third-party component library. Build small custom components in
`src/components/ui` styled with Tailwind and the tokens above. Core
primitives: `Button` (variants: lime, white, outline), `Chip`
(selected / unselected), `Badge` (with leading icon), `Input`,
`Tabs`, `Pagination`, `RatingStars`, `ProgressBar`, `AvatarStack`
(overlapping avatars with "26+" counter), `CourseCard`.

## Layout Patterns

- **Container**: content max-width about 1200px, centered, with
  horizontal padding that shrinks on mobile.
- **Header**: transparent over the blue hero; logo left, centered
  nav (Home, Courses, Creators; active item is bolder), right side
  Sign In, Join Us, and a bag icon. Collapses into a menu button on
  mobile.
- **Hero band**: full-bleed blue with the grid overlay; title,
  subtitle, and search or metadata centered or left aligned per page.
- **Course grid**: 3 columns desktop, 2 tablet, 1 mobile. Card =
  image with overlay pills (lessons, duration, comments), title with
  rating at right, "by creator" link, level badge with avatar stack,
  price with "/lifetime".
- **Course detail**: two columns on desktop; the right sidebar card
  overlaps the bottom edge of the blue hero. On mobile the sidebar
  stacks below the video.
- **Tabs**: pill tabs (About, Lessons, Reviews); the active tab is
  lime, inactive tabs are light grey.
- **Filter bar**: pill buttons (Filter, Level, Category) on the left,
  sort button ("Most relevant") on the right. Category chip row
  below on the Courses page; scrolls horizontally on mobile.
- **Auth pages**: full-viewport blue grid, no header or footer.
  Desktop is a split layout: marketing text and card collage on the
  left, white form card on the right. Mobile shows only the form card.
- **Footer**: white; logo and newsletter (email input with lime
  button) on the left; three link columns on the right; hairline
  divider; copyright and legal links on the bottom row.
- **404**: blue grid full-width band with giant gradient "404",
  overlapping white headline, helper text, and lime "Back to Home"
  button, followed by the standard footer.

## Icons

Lucide React, stroke-based only. Sizes: `h-4 w-4` inline (badges,
chips), `h-5 w-5` in buttons and header. Social icons (Facebook,
Google) use simple inline SVGs. The ByteSpace logo and decorative 3D
shapes are static image/SVG assets in `public`.
