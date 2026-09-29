# AI Workflow Rules

## Approach

Build ByteSpace incrementally using a spec-driven workflow. The
context files define what to build (`project-overview.md`), how it is
structured (`architecture.md`), how code is written
(`code-standards.md`), how it looks (`ui-context.md`), and the
current state of progress (`progress-tracker.md`). Always implement
against these specs and the reference designs in `design/`; do not
infer or invent behavior from scratch.

This is a frontend-only assessment project. Never add backend code,
real auth, or external services.

## Scoping Rules

- Work on one feature unit at a time (one page, or one shared
  component group)
- Prefer small, verifiable increments over large speculative changes
- Do not combine unrelated system boundaries in a single
  implementation step
- Build shared foundations first (tokens, layout, UI primitives, mock
  data), then pages that consume them

## When to Split Work

Split an implementation step if it combines:

- Shared layout or primitive changes and a full new page
- Multiple unrelated pages or routes
- Data model changes and UI changes that are not needed together
- Behavior not clearly defined in the context files or designs

If a change cannot be verified end to end quickly (visually against
the design and via `npm run build`), the scope is too broad; split it.

## Handling Missing Requirements

- Do not invent product behavior not defined in the context files or
  designs
- If a requirement is ambiguous, resolve it in the relevant context
  file before implementing
- If a requirement is missing, add it as an open question in
  `progress-tracker.md` before continuing
- If the design contradicts itself (e.g. rating numbers, tab labels),
  follow the decision recorded in `progress-tracker.md` under
  Architecture Decisions

## Protected Files

Do not modify the following unless explicitly instructed:

- `design/*` — reference design images
- Files inside `node_modules` and generated `.next` output
- Lockfiles, except through package manager commands
- The six context files, except as described in Keeping Docs in Sync

## Keeping Docs in Sync

Update the relevant context file whenever implementation changes:

- System architecture or boundaries (`architecture.md`)
- Data model or mock data structure (`architecture.md`, and
  `code-standards.md` if conventions change)
- Code conventions or standards (`code-standards.md`)
- Design tokens or component patterns (`ui-context.md`)
- Feature scope (`project-overview.md`)
- Progress, decisions, and open questions (`progress-tracker.md`)

## Before Moving to the Next Unit

1. The current unit works end to end within its defined scope and
   matches its design at desktop and mobile widths
2. No invariant defined in `architecture.md` was violated
3. `progress-tracker.md` reflects the completed work
4. `npm run build` and `npm run lint` pass
