# UI Rules

Concise rules for building ByteSpace UI. The design images in
`design/` are the source of truth for visual decisions; these rules
cover the patterns and constraints that keep every page consistent.
Token names come from `ui-tokens.md`.

---

## Font

Import Poppins once in the root layout with `next/font/google` and
apply its variable class to the `<html>` tag.

```typescript
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
```

`--font-sans` in `@theme inline` maps to this variable. Never load
fonts through CSS `@import` or `<link>` tags.

---

## Layout

- Content width is 1200px (`max-w-page`), centered. Horizontal page
  padding is `px-5` on mobile and `md:px-8` from tablet up.
- Build a single `Container` component (outer padding, inner
  `mx-auto max-w-page`) and use it everywhere; do not repeat the
  padding classes by hand.
- Every page except Login and Register uses the same shell: Header,
  `main`, Footer. Auth pages use a separate full-viewport shell with
  no header or footer.
- Page sections on white are separated by generous vertical space
  (`py-16 md:py-24` on Home, `gap-8` on inner pages).
- Grids: course cards are 3 columns on `lg`, 2 on `sm`/`md`, 1 on
  mobile, always with `gap-6`.

---

## Hero Band

- Every non-auth page starts with the blue hero band using the
  shared `hero-grid` class. Do not recreate the grid per page.
- The header sits on top of the hero band (transparent background,
  white text). Header content is vertically centered in a band of
  about 96px on desktop and 72px on mobile.
- Hero contents by page: Home (centered title, subtitle, search),
  Courses (centered title, search with "Courses" dropdown), Course
  Details (left-aligned title, subtitle, creator, meta badges),
  Creator Profile (avatar, name with "Creator" pill, bio, counts,
  Follow), 404 (giant gradient numerals with headline).
- Hero text is `text-on-brand`. Never place body-size dark text
  directly on the blue.

---

## Header

- Left: logo. Center: Home, Courses, Creators. Right: Sign In,
  Join Us, bag icon.
- Active nav item is `font-medium`; inactive is normal weight with
  reduced emphasis. No underline. Active state is weight/opacity
  only.
- On mobile, collapse nav and account links into a menu button that
  opens a panel below the header. The panel uses a solid
  `bg-brand` background with `text-on-brand` links.
- The bag icon shows a small `bg-accent` count badge when the cart
  has items.

---

## Footer

- White background, hairline `border-border` above the bottom row.
- Left: logo, one line of newsletter copy, pill email input with a
  lime **Subscribe** button, and the consent note in
  `text-text-muted text-xs`.
- Right: three link columns (courses, categories, creator/help).
  Stack on mobile.
- Bottom row: copyright on the left, Privacy Policy, Terms of
  Service, and Cookies Settings on the right; stack on mobile.
- Newsletter form validates the email inline and shows a success
  message; it never sends a request.

---

## Course Card

One shared `CourseCard` component is used on Home, Courses, and the
Creator Profile.

- Card: `rounded-card border border-border bg-surface p-3`.
- Image: `rounded-media`, aspect ratio about 16/9, with three
  overlay pills at the bottom (lessons, duration, comments).
- Title row: title (`font-semibold`, truncated with ellipsis) on
  the left, filled star and rating on the right.
- "by creator" line in `text-link text-xs`.
- Meta row: level badge and avatar stack with lime "26+" counter.
- Price: `text-link text-2xl font-semibold` with "/lifetime" in
  `text-text-muted text-xs`.
- Whole card is one link to `/courses/[slug]`; the creator name is a
  separate link to `/creators/[slug]` and must not nest inside the
  card link (use an overlay link technique).

---

## Course Details Page

- Two-column layout on `lg` (content left, sidebar right); single
  column on smaller screens with the sidebar below the video.
- The blue hero band is a background layer that ends below the video
  preview. The white sidebar card starts level with the video and
  overlaps out of the blue into the white area. Achieve this with
  one page-level grid and an absolutely positioned blue layer, not
  with negative margins on a separate section.
- Sidebar: lesson preview list (3 items + "N more videos"), price,
  full-width lime **Enroll Now**, "This course includes" list, and
  the creator card with **See Full Profile**. It may be
  `lg:sticky`.
- Tabs (About, Lessons, Reviews) are pill tabs, driven by the
  `?tab=` search param. Default tab is About.
- **About:** Description, Sneak Peek (4 images), Key Points with
  blue check icons.
- **Lessons:** module list with lime icon squares, lesson content
  and progress sections, progress bar (static display value).
- **Reviews:** rating box plus per-star bars, star filter chips
  ("All rating", 5 to 1), review cards.
- Enroll Now adds the course to the mock cart and changes to a
  disabled "Enrolled" state; it never redirects anywhere.

---

## Forms (Login, Register, Newsletter)

- Labels sit above inputs, `text-sm font-medium`. Every input has a
  visible label.
- Validate on blur and on submit. Show messages under the field in
  `text-error text-sm`; do not use browser default validation
  bubbles (`noValidate` on the form).
- Rules: name required; email valid format; password at least 8
  characters. Login and Register on success show a short success
  message and set the mock session; they never navigate to a
  server.
- Facebook and Google buttons are circular outline buttons that show
  an inline "Not available in this demo" message when pressed.
- Submit buttons show a disabled state while submitting.

---

## Cards, Panels, and Radius

- Content cards are white with a 1px `border-border` border and no
  shadow. Use `shadow-panel` only on floating panels (course
  sidebar, auth card).
- Never use colored card backgrounds except the lime rating box and
  lime "Happy Students" style highlight cards from the designs.
- Pill shape (`rounded-pill`) for buttons, chips, tabs, badges, and
  search/newsletter inputs. Cards `rounded-card`, panels
  `rounded-panel`, form inputs `rounded-input`.
- Never nest more than two levels of rounded corners inside each
  other (e.g. card, then image).

---

## Decorative Elements

- The 3D-style rings, cones, and squiggles on Home and auth pages
  are static assets in `public/shapes/`, rendered with `next/image`,
  `aria-hidden`, and `pointer-events-none`.
- Hide or shrink decorative shapes on mobile so they never cause
  horizontal scroll or cover content.
- Do not add extra decoration that is not in the designs.

---

## Empty, Loading, and Error States

- Courses with no results: centered `text-text-muted` message
  ("No courses match your search") and a **Clear filters** button.
- Reviews with no match for a star filter: short message in the
  list area.
- Cart with no items: message in the dropdown.
- Unknown course or creator slug: `notFound()` renders the 404
  page.
- Images use `alt` text and a neutral `bg-surface-muted` placeholder
  while loading.
- Never show raw error messages or stack traces to the user.

---

## Responsive Rules

- Design at 1440px, verify at 1024px, 768px, and 375px.
- No horizontal scrolling at any width. Wide items (category chip
  rows) scroll inside their own `overflow-x-auto` container.
- Scale hero titles and the 404 numerals down on mobile per
  `ui-tokens.md`.
- Touch targets are at least 40px tall on mobile.

---

## Accessibility

- Semantic elements (`header`, `nav`, `main`, `footer`, `section`).
- Icon-only buttons and links have `aria-label` (bag, share,
  pagination arrows).
- Tabs use `role="tablist"`, `role="tab"`, and `aria-selected`.
- All interactive elements have a visible focus ring
  (`focus-visible:ring-2`, ring color `ring-brand` on white and
  `ring-accent` on blue).
- Lime buttons always use `text-on-accent` to keep contrast.

---

## Tailwind v4 Note

This project uses Tailwind v4. Tokens are defined with `@theme` in
`globals.css`; no `tailwind.config.ts` is used for colors. Always add
new tokens with `@theme`. In v4, gradient utilities are
`bg-linear-to-*` (not `bg-gradient-to-*`).

---

## Do Nots

- Never use Tailwind's built-in color classes (`bg-blue-600`,
  `text-gray-500`); use project tokens only
- Never use hardcoded hex or raw `rgba()` outside `globals.css`
- Never use lime for text on white backgrounds
- Never add gradients except the 404 numerals
- Never use more than one font weight in a single text element
- Never invent UI states, copy, or components that are not in the
  designs or the context files
- Never leave placeholder copy such as "[Creator's Name]" in the
  UI; always render real values from mock data
- Never use `<img>` for content images; use `next/image`
- Never fix layout with fixed pixel heights on text containers
