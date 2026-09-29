---
description: Instructions for building the ByteSpace frontend
globs: *
alwaysApply: true
---

# ByteSpace: Agent Instructions

ByteSpace is an online course marketplace. This repository is a
**frontend-only assessment project** built from nine provided design
screens. There is no backend, database, real authentication, or
payment processing. Everything is driven by typed mock data and
client-side state.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Read Before Anything Else

Read these in this exact order before any implementation:

1. `context/project-overview.md` (what we are building and scope)
2. `context/architecture.md` (stack, boundaries, invariants)
3. `context/ui-context.md` (design tokens, layout patterns)
4. `context/code-standards.md` (conventions)
5. `context/ai-workflow-rules.md` (how to scope and verify work)
6. `context/progress-tracker.md` (current state, decisions, open
   questions)

Then open the relevant screen(s) in `design/` for the unit you are
building. The design images are the visual source of truth; the
context files are the source of truth for behavior and decisions.

## Rules That Never Change

- **Frontend only.** Never add API routes, route handlers, server
  actions that persist data, database clients, BaaS SDKs, or any
  external network calls. If a feature seems to need a backend,
  simulate it with mock data in `src/data` and log the assumption in
  `progress-tracker.md`.
- **No hardcoded hex values or raw Tailwind color classes** (e.g.
  `bg-blue-600`). Use the CSS variable tokens defined in
  `ui-context.md`.
- **All content comes from `src/data` through `src/lib` accessors.**
  Never hardcode course, creator, lesson, or review content inside
  components, and never import data files directly in components.
- **Derive, do not duplicate.** Ratings, review counts, star
  breakdowns, lesson counts, and durations are computed from source
  data so the UI can never show conflicting numbers.
- **Follow the recorded decisions** in `progress-tracker.md` under
  Architecture Decisions, including the fixes for design
  inconsistencies (4.8 rating over 172 reviews, "Lessons" tab label,
  modules numbered 1 to 7, "Subscribe" newsletter button).
- **Server components by default.** Add `"use client"` only for
  real interactivity and keep those components small.
- **Do not invent behavior.** If something is not in the context
  files or the designs, add it to Open Questions in
  `progress-tracker.md` and use the stated default.
- **Do not upgrade major versions** of Next.js, React, or Tailwind
  once the project is scaffolded.
- **Update `progress-tracker.md` after every completed unit**, and
  update the other context files whenever your change makes them
  inaccurate.
- If the same problem persists after one corrective attempt, stop,
  state what you tried, and ask before continuing rather than
  layering workarounds.

## Design Reference

The nine screens in `design/`:

| Screen        | Route                    |
| ------------- | ------------------------ |
| Home          | `/`                      |
| Search Page   | `/courses`               |
| Course Details (About) | `/courses/[slug]`  |
| Course Lessons | `/courses/[slug]?tab=lessons` |
| Course Reviews | `/courses/[slug]?tab=reviews` |
| Creator Profile | `/creators/[slug]`     |
| Login         | `/login`                 |
| Register      | `/register`              |
| 404 Not Found | `not-found.tsx`          |

Layout notes:

- Auth pages (Login, Register) have **no header or footer**; every
  other page has both.
- Every page except auth starts with the blue hero band with the grid
  overlay; reuse one shared component for it.
- Match the design at desktop width, then make it work at 768px and
  375px. No horizontal scrolling at any width.

## Working Loop

For each unit of work:

1. Read the relevant context files and the design screen
2. Confirm the unit is small enough (see `ai-workflow-rules.md`)
3. Build shared pieces first (tokens, primitives, layout), then the
   page that uses them
4. Compare against the design at desktop and mobile widths
5. Run `npm run build` and `npm run lint`; both must pass
6. Update `progress-tracker.md` (Completed, Next Up, decisions,
   open questions)

## Protected Files

Do not modify unless explicitly asked:

- `design/*` (reference images)
- `node_modules`, `.next`, and lockfiles (except via package manager
  commands)
- The context files, except to keep them in sync as described above

## Commands

```bash
npm run dev     # local development
npm run build   # must pass before a unit is considered done
npm run lint    # must pass before a unit is considered done
```

## Definition of Done for a Unit

- Matches its design at desktop and mobile widths
- Uses tokens and shared primitives, no hardcoded colors or content
- Types are strict with no `any`
- Interactive elements have labels, focus states, and correct
  semantics
- Build and lint pass, and `progress-tracker.md` is updated
