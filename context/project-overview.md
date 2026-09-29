# ByteSpace

## Overview

ByteSpace is an online course marketplace where learners browse and
"enroll" in video courses published by independent creators, and
creators showcase their catalog through a public profile. This
repository is a **frontend-only build for an assessment**: it
reproduces the nine provided designs pixel-faithfully and
responsively, driven entirely by typed mock data. There is no backend,
database, real authentication, or payment processing.

## Goals

1. Implement all 9 designed screens (Home, Courses/Search, Course
   Details with About/Lessons/Reviews tabs, Creator Profile, Login,
   Register, 404) matching the design's layout, colors, and typography.
2. Make every page fully responsive (mobile, tablet, desktop).
3. Provide working client-side interactions: search and filtering,
   sorting, pagination, tab switching, review star filtering, form
   validation, and cart/enroll state.
4. Keep the codebase clean, typed (TypeScript strict), componentized,
   and passing `npm run build` and lint with zero errors.

## Core User Flow

1. Visitor lands on Home and sees the hero, featured courses, and
   learning paths.
2. Visitor searches by keyword or picks a category, arriving at the
   Courses page with results filtered.
3. Visitor refines results with Level, Category, sort, and pagination.
4. Visitor opens a course and reads About, Lessons, and Reviews.
5. Visitor clicks the creator name or "See Full Profile" to view the
   creator's profile and their other courses.
6. Visitor clicks "Enroll Now" (adds the course to the cart / marks as
   enrolled in mock client state) or goes to Sign In / Join Us.
7. Visitor submits Login or Register forms (validated client-side,
   mock success only).
8. Any unknown URL shows the 404 page with a "Back to Home" button.

## Features

### Discovery

- Home hero with course search box and Search button
- Partner logo strip, category chips, and a 6-course featured grid
- "Explore Diverse Learning Paths" category tiles (Design,
  Development, IT & Software, Business, Marketing, Photography)
- Courses page with search input, "Courses" type dropdown, Filter,
  Level, Category controls, "Most relevant" sort, category chips, a
  3-column card grid, and pagination

### Course Detail

- Header: title, subtitle, creator link, level / rating / student
  badges, Share button
- Video preview card and sidebar (lesson preview list, price,
  Enroll Now, included features, creator card with See Full Profile)
- Tabs: **About** (description, sneak peek images, key points),
  **Lessons** (module list, lesson content, progress bar),
  **Reviews** (rating summary, per-star breakdown, star filter,
  review cards)

### Creators

- Creator profile banner with avatar, bio, product and follower
  counts, Follow toggle
- Creator's course grid with Filter / Level / Category / sort

### Account (UI only)

- Login form (email, password, Facebook and Google buttons)
- Register form (full name, email, password)
- Client-side validation and mock submission feedback

### Shared

- Header with logo, nav, Sign In, Join Us, cart icon
- Footer with newsletter signup (client-side validation only), link
  columns, and legal links
- 404 page with grid background and gradient "404"

## Scope

### In Scope

- All 9 designed screens and their responsive variants
- Typed mock data for courses, creators, lessons, and reviews
- Client-side state for search, filters, sort, pagination, tabs,
  cart/enrolled courses, follow, and mock auth session
- Form validation and empty / loading / error states where the
  interaction needs them
- Basic accessibility (semantic HTML, labels, focus states, alt text)

### Out of Scope

- Any backend, API routes, database, or server-side persistence
- Real authentication, OAuth (Facebook/Google buttons are visual only),
  password reset, and email delivery
- Payments, checkout, and a dedicated cart page (no design provided)
- Video playback (the play button opens nothing or a simple mock state)
- Creators listing page, category landing pages, and static pages
  (About, Help, Contact, Privacy, Terms, Affiliate) — footer links
  point to placeholder routes or `#`
- Course creation / creator dashboard ("Become a Creator" is a link
  only)

## Success Criteria

1. Every route matches its design at desktop width and remains usable
   at 375px width with no horizontal scroll.
2. Searching, filtering, sorting, and paginating on `/courses` update
   the visible cards correctly using mock data.
3. Switching tabs on a course page shows the correct About, Lessons,
   or Reviews content, and the tab is reflected in the URL.
4. Review star filters show only matching reviews, and rating numbers
   are consistent everywhere (header, summary, breakdown, cards).
5. Login and Register show inline validation errors and a mock
   success state; no network requests are made.
6. Unknown routes render the 404 page.
7. `npm run build` and `npm run lint` pass with no errors.
