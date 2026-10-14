# Product Design

Status: Template — current starter styling remains until concrete changes are agreed.

Use this document to give the product a different visual identity while reusing the existing
components in `src/components/ui/`. A design reference is inspiration, not an instruction to
install its libraries, copy branding, or replace accessible controls.

## Direction and references

- Desired visual character: TODO
- Reference documents, screenshots, or URLs and the specific qualities to borrow: TODO
- Qualities to avoid: TODO
- Design acceptance owner: TODO

Local inspiration: [reference index](docs/design/design-list.md),
[Attio](docs/design/attio.com-DESIGN.md), [Lemon Squeezy](docs/design/lemonsqueezy-DESIGN.md).

## Existing UI foundation

- Keep Base UI behavior, Lucide icons, the shared Button, and the flat `src/components/ui/` library.
- Use existing components before adding controls; do not introduce shadcn or a second UI library.
- The current typography is normal Inter, with neutral primary actions and semantic danger/status.
- Keep small control radii and the Button's existing size, disabled, loading, and link semantics.
- Preserve labels, associated errors, keyboard navigation, focus management, and reduced motion.
- Keep cookie-persisted light/dark mode, contrasting checked controls, and theme-aware portals.
- Keep the sandbox public with one searchable component list; do not add runtime design controls.

Define product differences below: layout, density, spacing, surfaces, typography hierarchy,
and static token values. If a design intentionally changes a foundation rule, record that
decision explicitly and align AGENTS.md before implementation; do not infer it from a screenshot.

## Tokens and styling

Token names should reference actual CSS variables found in the repository.

| Concern | Current baseline | Product decision | Implementation location |
| --- | --- | --- | --- |
| Colors and semantic foregrounds | Neutral primary; danger/status colors | TODO | Shared token files |
| Typography | Inter; existing hierarchy | TODO | Shared token files |
| Spacing and density | Existing component geometry | TODO | Shared styles and layouts |
| Radii, borders, shadows | Beautiful UI foundation | TODO | Shared token files |
| Responsive layout | Existing responsive controls | TODO | Product feature components |
| Motion | Existing transitions; reduced motion | TODO | Shared or feature styles |

Foundation tokens/component CSS: `src/components/ui/globals.css`.
App aliases and matching overrides: `src/app/globals.css`.
Keep semantic colors, light/dark contrast, and a single shared implementation.

## Screen specifications

For each PRD screen, record:
1. The requirement/journey IDs and route.
2. Page regions, layout, content hierarchy, spacing, and mobile behavior.
3. Existing component names and required variants/states.
4. Exact new or adapted component behavior, if existing controls cannot cover it.
5. Visual acceptance criteria for light/dark themes, keyboard use, and 360 px layouts.

TODO

## Component mapping and gaps

| Screen or interaction | Existing component and file | Adaptation or justified gap |
| --- | --- | --- |
| TODO | TODO | TODO |

Add reusable gaps to `src/components/ui/` and the sandbox with working demos.
Feature-specific compositions belong in their feature's `components/` folder.

## Decisions and open questions

TODO

Related: [requirements](PRD.md), [agent rules](AGENTS.md), [backlog](BACKLOG.md),
[team workflow](docs/team-workflow.md).
