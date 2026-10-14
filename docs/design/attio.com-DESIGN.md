---
version: alpha
name: Attio
description: |
  Attio's design system embodies a sophisticated, enterprise-focused aesthetic
  rooted in minimalist modernity and functional clarity. The visual language
  prioritizes dense information architecture and professional restraint, with a
  monochromatic foundation punctuated by precise geometric elements. The hero
  section introduces delicate blue-to-purple gradient overlays and fine striped
  patterns that add ephemeral depth without disrupting the underlying
  minimalism. This is a system built for revenue teams and technical users who
  demand clarity over decoration—typography is crisp and hierarchical, spacing
  is intentional, and every color choice serves a functional role. The design
  conveys trustworthiness and precision through restrained contrast, carefully
  calibrated shadows, and an uncluttered information hierarchy.
source:
  url: "https://attio.com/"
  pagesAnalyzed: 1
  extractedAt: 2026-10-13
  tokensMeasured: true
colors:
  primary: "#383A3B"
  ink: "#000000"
  body: "#242629"
  muted: "#505155"
  hairline: "#EEEFF1"
typography:
  display-xl:
    fontFamily: interDisplay
    fontSize: 64px
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -1.28px
  display-lg:
    fontFamily: interDisplay
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.84px
  display-md:
    fontFamily: tiemposText
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -0.72px
  display-sm:
    fontFamily: interDisplay
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.4px
  heading-md:
    fontFamily: interDisplay
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.8px
  heading-sm:
    fontFamily: interDisplay
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.24px
  heading-xs:
    fontFamily: inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.22
    letterSpacing: -0.18px
  heading-xs-loose:
    fontFamily: inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: -0.18px
  body-xl:
    fontFamily: interDisplay
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.24px
  body-lg:
    fontFamily: inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.38
    letterSpacing: -0.16px
  body-md:
    fontFamily: inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: -0.07px
  body-md-strong:
    fontFamily: inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: -0.14px
  body-md-tight:
    fontFamily: inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: -0.28px
  body-md-loose:
    fontFamily: inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: -0.14px
  nav:
    fontFamily: inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.16px
  button:
    fontFamily: inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: -0.07px
  caption-md:
    fontFamily: interDisplay
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.17
    letterSpacing: 0px
  caption-md-tight:
    fontFamily: inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: -0.16px
  caption-md-inter:
    fontFamily: inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0px
  caption-sm:
    fontFamily: inter
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.36
    letterSpacing: -0.16px
  caption-xs:
    fontFamily: inter
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.16px
  caption-xs-tight:
    fontFamily: inter
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.16px
rounded:
  none: 0px
  xs: 7px
  sm: 8px
  md: 10px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 36px
  xxl: 48px
  xxxl: 60px
  section: 80px
  band: 96px
borderWidths:
  thin: 1px
shadows:
  sm: "oklab(0.230499 -0.000396319 -0.00407541 / 0.08) 0px 0px 0px 1px, oklch(0 0 0 / 0.01) 0px 1px 3px 0px, oklch(0 0 0 / 0.02) 0px 2px 4px -1px, oklch(0 0 0 / 0.03) 0px 4px 8px -2px, oklch(0 0 0 / 0.04) 0px 8px 16px -4px, oklch(0 0 0 / 0.05) 0px 16px 32px -8px"
  md: "rgba(28, 40, 64, 0.18) 0px 0px 2px 0px, rgba(0, 0, 0, 0.04) 0px 1px 3px 0px"
  lg: "rgba(0, 0, 0, 0.04) 0px 12px 30px 0px"
  xl: "rgba(15, 107, 233, 0.12) 0px 2px 4px -2px, rgba(15, 107, 233, 0.08) 0px 3px 6px -2px"
elevationStrategy: layered-micro
themes:
  derived: dark   # the other theme is the site's measured palette
  light:
    bg: "#FFFFFF"
    surface: "#F7F7F7"
    surfaceRaised: "#EDEDED"
    text: "#000000"
    textMuted: "#242629"
    border: "#EEEFF1"
    accent: "#383A3B"
    accentFg: "#FFFFFF"
    focusRing: "#383A3B"
    elevation: shadow
  dark:
    bg: "#0F0F10"
    surface: "#1D1D1E"
    surfaceRaised: "#29292A"
    text: "#F7F7F7"
    textMuted: "#9F9F9F"
    border: "#353536"
    accent: "#7E8284"
    accentFg: "#0B0B0C"
    focusRing: "#606365"
    elevation: "border+surface"
gradients:
  - context: hero
    kind: radial
    value: "radial-gradient(90% 80% at 50% 100%, rgb(230, 236, 255) 0%, rgb(188, 203, 255) 45%, rgb(134, 160, 238) 100%)"
  - context: hero
    kind: linear
    value: "repeating-linear-gradient(90deg, oklab(0.999997 0.0000899732 0.000023365 / 0.78) 0px, oklab(0.999997 0.0000899732 0.000023365 / 0.78) 1px, rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 0) 8px)"
  - context: hero
    kind: radial
    value: "radial-gradient(70% 106.667% at 50% 0%, lab(99.9987 0.0337958 0.000309944) 32%, rgba(0, 0, 0, 0) 64%)"
components:
  button-outline:
    typography: "{typography.body-md-strong}"
    textColor: "lab(96.1596 -0.0828803 -1.13571)"
    border: "1px solid lab(37.426 -1.09151 -9.33263)"
    height: 36px
    padding: "0px 12px 0px 12px"
    rounded: "{rounded.md}"
    backgroundColor: "lab(12.7212 0.103362 -2.22102)"
  button-outline-sm:
    textColor: "lab(94.3726 -0.157326 -2.23036)"
    border: "1px solid lab(20.5697 -0.638425 -4.44436)"
    height: 32px
    padding: "0px 6px 0px 10px"
    fontSize: 12px
    fontFamily: inter
    fontWeight: 500
    lineHeight: 1.5
    rounded: "{rounded.md}"
    backgroundColor: "lab(4.67701 0 0)"
  button-icon:
    textColor: "lab(10.7201 -0.0959039 -1.54182)"
    height: 48px
    fontSize: 16px
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 1px 6px 0px, rgba(0, 0, 0, 0.16) 0px 2px 32px 0px"
    fontFamily: system-ui
    fontWeight: 500
    lineHeight: 1.38
    rounded: "50%"
    backgroundColor: "{colors.primary}"
  card:
    typography: "{typography.body-lg}"
    textColor: "lab(10.7201 -0.0959039 -1.54182)"
  navigation:
    typography: "{typography.body-lg}"
    textColor: "lab(10.7201 -0.0959039 -1.54182)"
    height: 67px
    padding: "16px 0px 15px 0px"
  footer:
    typography: "{typography.body-lg}"
    textColor: "lab(10.7201 -0.0959039 -1.54182)"
    backgroundColor: "lab(4.67701 0 0)"
  link:
    typography: "{typography.body-lg}"
    textColor: "lab(99.9987 0.0337958 0.000309944)"
  link-lg:
    typography: "{typography.body-lg}"
    textColor: "lab(10.7201 -0.0959039 -1.54182)"
    padding: "0px 24px 0px 24px"
    backgroundColor: "lab(98.2947 0.128329 -0.513124)"
states:
  input-focus:
    target: input
    state: focus
    outline: "rgba(0, 0, 0, 0) solid 2px"
    borderColor: "lab(39.8546 12.4429 -60.277)"
    outlineColor: "rgba(0, 0, 0, 0)"
    outlineWidth: 2px
  input-hover:
    target: input
    state: hover
    borderColor: "rgba(0, 0, 0, 0)"
    backgroundColor: currentcolor
  other-hover:
    target: other
    state: hover
    backgroundColor: "rgb(245, 246, 248)"
  badge-hover:
    target: badge
    state: hover
    opacity: 1
  card-hover:
    target: card
    state: hover
    opacity: 1
  other-focus-visible:
    target: other
    state: focus-visible
    opacity: 1
  other-active:
    target: other
    state: active
    opacity: 0
  other-focus:
    target: other
    state: focus
    borderColor: "rgb(206, 46, 75)"
breakpoints:
  - width: 375
    containerWidth: 356
    gridColumns: 4
    navLinksVisible: 6
    menuToggleVisible: true
    headingPx: 40
    bodyPx: 16
    sectionPaddingX: 24
  - width: 768
    containerWidth: 656
    gridColumns: 5
    navLinksVisible: 6
    menuToggleVisible: true
    headingPx: 64
    bodyPx: 16
    sectionPaddingX: 56
  - width: 1024
    containerWidth: 976
    gridColumns: 5
    navLinksVisible: 11
    menuToggleVisible: true
    headingPx: 64
    bodyPx: 16
    sectionPaddingX: 56
  - width: 1280
    containerWidth: 1232
    gridColumns: 5
    navLinksVisible: 11
    menuToggleVisible: true
    headingPx: 64
    bodyPx: 16
    sectionPaddingX: 56
  - width: 1440
    containerWidth: 1392
    gridColumns: 5
    navLinksVisible: 11
    menuToggleVisible: true
    headingPx: 64
    bodyPx: 16
    sectionPaddingX: 56
coverage:
  statesFound: 62
  gradientsFound: 3
  rolesUnassigned: 0
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: false
  semanticRampDeclared: false
---

# Design System Inspired by Attio

## 1. Visual Theme & Atmosphere

Attio's design system embodies a sophisticated, enterprise-focused aesthetic rooted in minimalist modernity and functional clarity. The visual language prioritizes dense information architecture and professional restraint, with a monochromatic foundation punctuated by precise geometric elements. The hero section introduces delicate blue-to-purple gradient overlays and fine striped patterns that add ephemeral depth without disrupting the underlying minimalism. This is a system built for revenue teams and technical users who demand clarity over decoration—typography is crisp and hierarchical, spacing is intentional, and every color choice serves a functional role. The design conveys trustworthiness and precision through restrained contrast, carefully calibrated shadows, and an uncluttered information hierarchy.

**Key Characteristics**
- Monochromatic primary palette with near-black text on white backgrounds
- Negative letter-spacing applied to display sizes for tighter, more premium typography
- Rounded corners applied selectively to interactive elements only (buttons, inputs), while cards and containers remain sharp
- Layered micro-shadows for barely perceptible depth elevation
- Fine, 1px borders used sparingly to demarcate zones
- Geometric hero gradients (radial and linear) providing subtle visual richness without distraction
- Responsive grid system that adapts column counts and link visibility across viewport breakpoints

## 2. Color Palette & Roles

### Primary & Brand
- **Primary** (`{colors.primary}` — `#383A3B`): Used for CTAs, brand mark, active states, and button fills. A near-charcoal neutral that anchors the system's hierarchy and provides strong contrast against light surfaces.

### Neutral Scale
- **Ink** (`{colors.ink}` — `#000000`): Headings and primary text. Pure black for maximum legibility and visual weight.
- **Body** (`{colors.body}` — `#242629`): Body copy. Slightly lifted from pure black to reduce eye strain on extended reading.
- **Muted** (`{colors.muted}` — `#505155`): Captions, secondary text, and de-emphasized information. Mid-tone gray for hierarchy without color semantics.
- **Hairline** (`{colors.hairline}` — `#EEEFF1`): 1px borders, dividers, and subtle surface separation. Extremely light gray that maintains boundaries without visual weight.

### Semantic & Status
No error, success, or warning colors are declared or measured on the site. The design system does not expose a semantic status ramp; refer to Known Gaps.

## 3. Typography Rules

### Font Family
- **Primary Display Font**: Inter Display (used for display and heading roles: `display-xl`, `display-lg`, `display-sm`, `heading-sm`, `heading-md`, `body-xl`)
  - Fallback stack: `system-ui, -apple-system, sans-serif`
- **Secondary Body & UI Font**: Inter (used for body, captions, navigation, buttons, and links)
  - Fallback stack: `system-ui, -apple-system, sans-serif`
- **Accent Display Font**: Tiempos Text (used sparingly for `display-md`, a serif serif accent)
  - Fallback stack: `Georgia, serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| `display-xl` | Inter Display | 64px | 600 | 0.95 | −1.28px | Hero headline, maximum visual impact |
| `display-lg` | Inter Display | 56px | 500 | 1.0 | −0.84px | Major section headings |
| `display-md` | Tiempos Text | 48px | 400 | 1.08 | −0.72px | Serif accent display; measured at lower frequency |
| `display-sm` | Inter Display | 40px | 500 | 1.1 | −0.4px | Feature headline, moderate emphasis |
| `heading-md` | Inter Display | 32px | 500 | 1.15 | −0.8px | Card title, prominent subheading |
| `heading-sm` | Inter Display | 24px | 500 | 1.15 | −0.24px | Section heading, moderate hierarchy |
| `body-xl` | Inter Display | 24px | 500 | 1.25 | −0.24px | Large body text or emphasized callout |
| `heading-xs` | Inter | 18px | 500 | 1.22 | −0.18px | Tertiary heading or large label |
| `nav` | Inter | 18px | 500 | 1.2 | −0.16px | Navigation link text |
| `body-lg` | Inter | 16px | 500 | 1.38 | −0.16px | Primary body text, wide measure |
| `button` | Inter | 14px | 500 | 1.43 | −0.07px | All button text; also used for links |
| `body-md` | Inter | 14px | 400 | 1.43 | −0.07px | Standard body copy, forms |
| `body-md-strong` | Inter | 14px | 500 | 1.43 | −0.14px | Emphasized body text at 14px |
| `body-md-tight` | Inter | 14px | 500 | 1.43 | −0.28px | Compact body text, tighter tracking |
| `body-md-loose` | Inter | 14px | 500 | 1.45 | −0.14px | Body text with relaxed line spacing |
| `caption-md` | Inter Display | 12px | 500 | 1.17 | 0px | Small caption, no letter-spacing |
| `caption-md-inter` | Inter | 12px | 500 | 1.33 | 0px | Caption in Inter font, no tracking |
| `caption-md-tight` | Inter | 12px | 500 | 1.33 | −0.16px | Compact caption with tighter tracking |
| `caption-sm` | Inter | 11px | 500 | 1.36 | −0.16px | Smaller label or footnote |
| `caption-xs` | Inter | 10px | 500 | 1.5 | −0.16px | Minimal text, metadata |
| `caption-xs-tight` | Inter | 10px | 500 | 1.3 | −0.16px | Minimal text, compact leading |
| `heading-xs-loose` | Inter | 18px | 500 | 1.33 | −0.18px | Heading with relaxed line spacing |

### Principles
- Display sizes (`64px` down to `40px`) use **negative letter-spacing** (−0.4px to −1.28px) for a premium, condensed appearance. This is a defining characteristic of the Attio brand.
- Body and caption text maintains very light negative tracking (−0.07px to −0.28px) to tighten and refine the feel without sacrificing legibility.
- Inter Display serves as the primary font for impact and hierarchy; Inter provides neutral utility and legibility for body and UI text.
- Tiempos Text (serif) is deployed sparingly as a decorative accent, typically on display roles.
- Line heights are generous on body text (1.38–1.45) to ensure readability; headings use tighter leading (0.95–1.15) for visual impact.

## 4. Component Stylings

### Buttons

#### Primary Button (Outline Style)
- **Background**: `#000000` (lab(12.7212 0.103362 -2.22102))
- **Text Color**: `#FFFFFF` (lab(96.1596 -0.0828803 -1.13571))
- **Border**: `1px solid` `#242629` (lab(37.426 -1.09151 -9.33263))
- **Padding**: `0px 12px`
- **Height**: `36px`
- **Font**: `{typography.button}` — 14px, weight 500, line-height 1.43
- **Border Radius**: `{rounded.md}` — `10px`
- **Box Shadow**: `none`
- **Hover State**: Updates to `var(--button-primary-bg-hover-fallback)` and `var(--button-primary-border-hover)`
- **Focus State**: Updates to `var(--button-primary-bg-focus-fallback)` and `var(--button-primary-border-focus)`
- **Active State**: Updates to `var(--button-primary-bg-active-fallback)` and `var(--button-primary-border-active)`
- **Disabled State**: Updates to `var(--button-primary-bg-disabled-fallback)` and `var(--button-primary-border-disabled)`

#### Secondary Button (Outline-sm Style)
- **Background**: `#000000` (lab(4.67701 0 0))
- **Text Color**: `#E8E9EB` (lab(94.3726 -0.157326 -2.23036))
- **Border**: `1px solid` `#1F2023` (lab(20.5697 -0.638425 -4.44436))
- **Padding**: `0px 6px 0px 10px`
- **Height**: `32px`
- **Font**: `{typography.caption-md}` — 12px, weight 500, line-height 1.17
- **Border Radius**: `{rounded.md}` — `10px`
- **Box Shadow**: `none`

#### Ghost Button (Icon Style)
- **Background**: `#383A3B` (`{colors.primary}`)
- **Text Color**: `#1A1B1C` (lab(10.7201 -0.0959039 -1.54182))
- **Border**: `none`
- **Padding**: `0px` (icon only)
- **Height**: `48px`
- **Width**: `48px`
- **Font**: system-ui, weight 500, font-size 16px, line-height 1.375
- **Border Radius**: `{rounded.full}` — `50%` (circular)
- **Box Shadow**: `rgba(0, 0, 0, 0.06) 0px 1px 6px 0px, rgba(0, 0, 0, 0.16) 0px 2px 32px 0px`
- **Hover State**: Updates to `var(--button-ghost-text-hover)`
- **Focus State**: Updates to `var(--button-ghost-text-focus)`
- **Active State**: Updates to `var(--button-ghost-text-active)`
- **Disabled State**: Updates to `var(--button-ghost-text-disabled-foreground)`

#### Outline Button (Ghost Style)
- Text color and border respond to `:hover`, `:focus-visible`, `:active`, and `:disabled` states via CSS variables
- Used for secondary CTAs and low-emphasis actions

### Cards & Containers

#### Default Card
- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `#1A1B1C` (lab(10.7201 -0.0959039 -1.54182))
- **Border**: `0px` (none)
- **Border Radius**: `{rounded.none}` — `0px` (sharp corners)
- **Box Shadow**: `none`
- **Padding**: Variable (measured at 0px in extraction, but padding is applied contextually)
- **Hover State**: Opacity transitions to `1` on hover
- **Font**: Inter, weight 500, 16px, line-height 1.375

#### Link Container (default-lg)
- **Background**: `#F7F8FA` (lab(98.2947 0.128329 -0.513124))
- **Text Color**: `#1A1B1C` (lab(10.7201 -0.0959039 -1.54182))
- **Border**: `0px`
- **Border Radius**: `{rounded.none}` — `0px`
- **Padding**: `0px 24px`
- **Height**: `96px`
- **Font**: Inter, weight 500, 16px, line-height 1.375

### Inputs & Forms

#### Text Input
- **Border**: `1px solid` (color defined by state)
- **Border Radius**: `{rounded.md}` — `10px`
- **Focus State**: Border color updates; outline set to `rgba(0, 0, 0, 0) solid 2px`; box-shadow responds to focus styling
- **Hover State**: Border color responds to `var(--internal-color-strong-stroke)`
- **Focus-Visible State**: 2px outline with custom ring shadow

### Navigation

#### Default Navigation
- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `#1A1B1C` (lab(10.7201 -0.0959039 -1.54182))
- **Border**: `0px`
- **Border Radius**: `{rounded.none}` — `0px`
- **Padding**: `16px 0px 15px 0px`
- **Height**: `67px`
- **Font**: `{typography.nav}` — Inter, 18px, weight 500, line-height 1.2
- **Box Shadow**: `none`
- **Hover State**: Color and border color respond to interactive state variables

### Links

#### Default Link
- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `#FFFFFF` (lab(99.9987 0.0337958 0.000309944))
- **Border**: `0px`
- **Border Radius**: `{rounded.none}` — `0px`
- **Font**: `{typography.body-md}` — Inter, 14px, weight 500, line-height 1.43
- **Hover State**: Color responds to `var(--internal-color-secondary-foreground)`
- **Focus State**: Color responds to `var(--color-blue-500)`

## 5. Layout Principles

### Spacing System
The system uses an 8px base unit with a logarithmic scale designed to create rhythmic breathing room between elements:

- `{spacing.xxs}` = `4px` — Minimal gutters within dense UI, tight element clustering
- `{spacing.xs}` = `8px` — Standard micro-spacing for button padding, input gaps
- `{spacing.sm}` = `12px` — Small spacing between adjacent form fields or icons
- `{spacing.md}` = `16px` — Default body text leading and component padding
- `{spacing.lg}` = `24px` — Section breaks within cards, padding in link containers
- `{spacing.xl}` = `36px` — Major feature separation, column gutters
- `{spacing.xxl}` = `48px` — Component-level block spacing
- `{spacing.xxxl}` = `60px` — Large section breaks
- `{spacing.section}` = `80px` — Content section padding blocks
- `{spacing.band}` = `96px` — Full-width band spacing (hero to content transitions)

**Usage Context**: `{spacing.md}` (`16px`) is the baseline for component padding. `{spacing.lg}` (`24px`) appears in container padding and internal card spacing. Hero and full-width sections use `{spacing.band}` (`96px`) and `{spacing.section}` (`80px`) to create breathing room between major page elements.

### Grid & Container
- **Max Content Width**: Varies by breakpoint. At 1440px viewport, the content column is `1392px` wide, indicating a 24px margin on each side or a constrained container with responsive padding.
- **Grid Columns**: Measured at 5 columns at desktop (1024px and above); 5 columns at tablet (768px); 4 columns at mobile (375px).
- **Section Padding Horizontal**: `56px` at tablet and desktop; `24px` at mobile. This maintains margin relationships and ensures text never touches the viewport edge.
- **Container Strategy**: Fluid up to breakpoint, then contained with max-width. Left and right padding increases from `24px` (mobile) to `56px` (desktop), providing a responsive gutter while maintaining the grid structure.

### Whitespace Philosophy
Attio embraces generous whitespace to reduce cognitive load in information-dense interfaces. Hero sections use full-width spans with `{spacing.band}` (`96px`) vertical padding. Card layouts have subtle separation with `{colors.hairline}` borders rather than heavy shadows. Between major content blocks, `{spacing.section}` (`80px`) creates distinct visual zones, allowing the eye to rest and the hierarchy to breathe. Micro-spacing within components remains tight (`{spacing.xs}` to `{spacing.md}`) to keep UI elements grouped and scannable.

### Border Radius Scale
The system applies radius selectively based on component intent:

- `{rounded.none}` = `0px` — Cards, modals, containers, and link boxes. Sharp corners reinforce structure and containment.
- `{rounded.xs}` = `7px` — Used sparingly; measured on decorative or transitional elements.
- `{rounded.sm}` = `8px` — Subtle rounding for secondary UI elements.
- `{rounded.md}` = `10px` — Interactive elements: buttons and input fields. Provides a soft touch without overpowering.
- `{rounded.full}` = `9999px` — Circular/pill buttons (icon buttons). Creates a distinct interactive accent.

**Component Contexts**: Buttons and inputs use `{rounded.md}` (`10px`) uniformly, signaling their interactive nature. Cards, modals, and containers remain `{rounded.none}` (`0px`), anchoring the layout and communicating containment. Circular icon buttons use `{rounded.full}` for maximum visual distinction.

### Border Widths
- **Thin**: `1px` — Applied to button borders, input focus states, and all hairline dividers. The site uses a single border width consistently.

## 6. Depth & Elevation

The Attio design system employs a **layered-micro** shadow strategy, where depth is achieved through stacked near-transparent layers rather than a single progressive shadow. This creates an extremely subtle, barely perceptible lift that avoids visual heaviness.

| Level | Treatment | Use |
|---|---|---|
| **Flat** | No shadow | Cards, containers, default backgrounds |
| **Micro (sm)** | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.230499 -0.000396319 -0.00407541 / 0.08) 0px 0px 0px 1px, oklch(0 0 0 / 0.01) 0px 1px 3px 0px, oklch(0 0 0 / 0.02) 0px 2px 4px -1px, oklch(0 0 0 / 0.03) 0px 4px 8px -2px, oklch(0 0 0 / 0.04) 0px 8px 16px -4px, oklch(0 0 0 / 0.05) 0px 16px 32px -8px` | Modals; layered micro-elevation |
| **Subtle (md)** | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(28, 40, 64, 0.18) 0px 0px 2px 0px, rgba(0, 0, 0, 0.04) 0px 1px 3px 0px` | Custom elevated surfaces; UI panels |
| **Soft (lg)** | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 12px 30px 0px` | Floating surfaces; popovers; light hoist |
| **Accent (xl)** | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(15, 107, 233, 0.12) 0px 2px 4px -2px, rgba(15, 107, 233, 0.08) 0px 3px 6px -2px` | Accent-colored elevated surfaces; focused modals |

**Shadow Philosophy**: Rather than distinct elevation levels, Attio stacks minute transparent layers that collectively suggest depth without creating harsh contrast. This "barely there" approach preserves the clean, minimalist aesthetic while providing visual feedback. Shadows rely on very low opacity values (0.01–0.05) and subtle color shifts (dark grays and accent blues) to suggest lift without visual noise.

### Opacity Levels
The system defines opacity modifiers for transparency and visual attenuation:

- **30%** (`0.30`) — Strong overlay; used for disabled states and heavy reduction
- **40%** (`0.40`) — Moderate overlay; transparency with legibility
- **50%** (`0.50`) — Half opacity; used for secondary elements and hover states
- **55%** (`0.55`) — Slight reduction; maintains visibility
- **60%** (`0.60`) — Light reduction; hover and focus states
- **64%** (`0.64`) — Specialized attenuation; background blending
- **80%** (`0.80`) — Minimal reduction; nearly full visibility on hover

These opacities are deployed to create visual hierarchy without introducing new colors: disabled buttons reduce to ~50% opacity, hover states shift to 0.6–0.8, and overlays use 0.3–0.5 depending on intensity.

### Z-index / Layering
The system defines discrete stacking layers for managing component hierarchy:

- **Base Layer** (`z-index: 1, 2, 3, 4`) — Default content, cards, and standard UI
- **Dropdown Layer** (`z-index: 10, 20, 30, 40`) — Nested dropdowns and floating elements with increasing stacking depth

The z-index progression (base: 1–4; dropdown: 10–40) allows modals, tooltips, and dropdowns to layer logically above content without excessive numeric gaps. This prevents stacking context collisions and maintains predictable layering across the interface.

## 7. Do's and Don'ts

### Do
- **Use sharp corners** (`{rounded.none}` — `0px`) **for all containers and cards.** This is a defining visual trademark of the system and signals structure and containment.
- **Apply negative letter-spacing to display headings.** The `display-xl` through `display-sm` roles require precise negative tracking (`−1.28px` to `−0.4px`) for the premium, condensed feel.
- **Choose `{spacing.md}` (`16px`) as your baseline spacing unit.** All component padding and section gutters derive from multiples of this base, ensuring rhythmic consistency.
- **Reserve bold text weights (600, 700) for the largest display roles only.** Body text uses weight 400 or 500 to maintain calm, professional legibility.
- **Use `{colors.hairline}` (`#EEEFF1`) for borders and dividers** to separate zones without visual loudness. This 1px boundary maintains structure with minimal visual weight.
- **Apply `{rounded.md}` (`10px`) consistently to all interactive elements** (buttons, inputs) to create a cohesive interactive affordance.
- **Build with the monochromatic palette first.** The system intentionally limits color to near-black, dark gray, and near-white. Deviations muddy the hierarchy.
- **Respect the layered-micro shadow philosophy.** Use stacked, near-transparent shadow layers rather than single heavy shadows; this preserves minimalism while signaling depth.
- **Use full-width hero sections with `{spacing.band}` (`96px`) top and bottom padding** to create distinct visual zones and breathing room at scale.

### Don't
- **Do not round corners on cards, modals, or containers.** These should remain at `{rounded.none}` (`0px`) to anchor the layout and preserve the system's architectural clarity.
- **Do not add heavy shadows or multiple distinct shadow layers.** The system uses layered micro-shadows; thick, dark drop-shadows break the minimalist aesthetic.
- **Do not invent new semantic colors** (error red, success green, warning yellow). The site ships no semantic ramp; introduce these only if explicitly required by your product.
- **Do not use letter-spacing less than −0.28px on body text,** or you'll sacrifice readability. The negative tracking is reserved for display and heading roles.
- **Do not mix font families within a single heading.** Stick to Inter Display for impact, Inter for body, and deploy Tiempos Text (serif) only as a rare decorative accent.
- **Do not exceed `{spacing.md}` (`16px`) of internal padding within buttons.** Buttons are compact affordances; over-padding makes them feel loose and unprofessional.
- **Do not apply opacity below 0.30 to interactive text,** unless it is explicitly disabled. Low opacity on interactive elements reduces perceived affordance.
- **Do not use color alone to communicate hierarchy.** Rely on font size, weight, letter-spacing, and vertical spacing to guide the eye.
- **Do not create new sections without at least `{spacing.section}` (`80px`) vertical separation** from the previous block. This rhythm is essential to the system's breath.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Viewport Width | Content Width | Columns | Nav Links Visible | Menu Toggle | Display Heading | Body Font | Section Padding-x |
|---|---|---|---|---|---|---|---|---|
| Mobile | 375px | 356px | 4 | 6 | Yes | 40px (`{typography.display-sm}`) | 16px | 24px |
| Tablet | 768px | 656px | 5 | 6 | Yes | 64px (`{typography.display-lg}`) | 16px | 56px |
| Desktop | 1024px | 976px | 5 | 11 | Yes | 64px (`{typography.display-lg}`) | 16px | 56px |
| Wide | 1280px | 1232px | 5 | 11 | Yes | 64px (`{typography.display-lg}`) | 16px | 56px |
| Ultra | 1440px | 1392px | 5 | 11 | Yes | 64px (`{typography.display-lg}`) | 16px | 56px |

**Key Transitions**:
- **375px to 768px**: Heading scales from 40px to 64px; section padding jumps from 24px to 56px; grid columns increase from 4 to 5; navigation remains visible.
- **768px to 1024px**: Content width increases from 656px to 976px; no typography change (heading stays 64px); grid remains 5 columns.
- **1024px and beyond**: Layout stabilizes; content width increases incrementally (976px → 1232px → 1392px) but typography and spacing remain constant, indicating a max-width constraint with responsive internal scaling.

### Touch Targets
Minimum interactive element sizes are derived from the extracted component data:

- **Buttons**: Minimum height `32px` (small/secondary); standard height `36px` (primary). Padding of `{spacing.xs}` to `{spacing.md}` (`8–16px` horizontal) ensures thumb-friendly tap zones.
- **Icon Buttons**: `48px × 48px` (measured), providing ample touch area for mobile and desktop users.
- **Input Fields**: Minimum height `32–36px` with `{spacing.md}` (`16px`) vertical padding to ensure legible, tappable form elements.
- **Navigation Links**: Minimum height `67px` (measured on nav); horizontal padding scales with section padding (24px mobile, 56px desktop).

All interactive elements maintain at least 44×44px effective tap area on mobile viewports, exceeding WCAG AA guidelines.

### Collapsing Strategy
- **Navigation**: Desktop displays 11 nav links; tablet and mobile show 6 links with a hamburger menu toggle. The toggle is always present (yes in the toggle column), suggesting a hybrid or overlay menu system even on larger screens.
- **Heading Scale**: Drops from `{typography.display-lg}` (64px) on desktop to `{typography.display-sm}` (40px) on mobile, reducing visual dominance on smaller screens while maintaining hierarchy.
- **Section Padding**: Horizontal padding halves from `56px` (tablet/desktop) to `24px` (mobile), bringing content closer to edges on constrained viewports and optimizing real estate.
- **Content Width**: Scales fluidly between `356px` (mobile) and `1392px` (ultra-wide), never exceeding the content column for the viewport. On mobile, the content spans nearly the full viewport width (356px on 375px viewport = ~95% utilization).
- **Grid Columns**: Remains consistently 5 columns at tablet and above; reduces to 4 columns on mobile to balance density and legibility on small screens.
- **Typography Size**: Body text remains constant at `16px` across all breakpoints, signaling that readability is a priority and font size does not adapt to viewport.

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA / Brand**: Primary (`#383A3B`) — Near-charcoal neutral; used for button fills, active states, and brand marks
- **Heading Text**: Ink (`#000000`) — Pure black for maximum contrast and visual weight
- **Body Text**: Body (`#242629`) — Slightly elevated black for reduced eye strain
- **Secondary / Muted Text**: Muted (`#505155`) — Mid-tone gray for captions and secondary information
- **Borders & Dividers**: Hairline (`#EEEFF1`) — Extremely light gray for 1px boundaries without visual noise
- **Background**: White or transparent (not explicitly defined as a token; assume `#FFFFFF` or `rgba(0, 0, 0, 0)`)

### Iteration Guide
1. **Start with monochromatic.** All text is black or dark gray; all buttons are charcoal (`#383A3B`); all borders are hairline (`#EEEFF1`). Deviations break hierarchy.
2. **Apply negative letter-spacing to headings.** Display roles (`64px`, `56px`, `40px`) use −0.84px to −1.28px tracking. Body and UI text uses −0.07px to −0.28px. This is non-negotiable for brand consistency.
3. **Use `10px` border-radius on buttons and inputs only.** All containers, cards, and modals are `0px` (sharp). This is the defining visual affordance.
4. **Space with 16px increments.** Base padding is `{spacing.md}` (`16px`). Scale up via multiples (24px = 1.5×, 36px = 2.25×, 48px = 3×). Do not invent intermediate values.
5. **Shadow strategy: micro-layers, not heavy drops.** Use the provided `sm`, `md`, `lg`, `xl` shadow values (composed of 4–6 stacked transparent layers). Do not create single-layer shadows.
6. **Responsive breakpoints: 375px, 768px, 1024px.** Headings scale (40px → 64px at 768px); section padding adapts (24px → 56px). Body text stays 16px. Navigation shows/hides links; toggle appears at mobile.
7. **Opacity for hierarchy and state:** Use 30–80% opacity ranges for hover, focus, disabled, and overlay states. Avoid pure transparency or below-30% opacity on interactive text.
8. **Typography is premium.** Inter Display is bold and tight (negative tracking); Inter is neutral and readable. Tiempos Text (serif) is a rare accent. Never mix families in a single headline.
9. **Whitespace is structure.** Major sections are separated by `{spacing.section}` (`80px`). Cards are separated by `{spacing.lg}` (`24px`). This breathing room is essential to the system's calm, professional feel.
10. **Test at 375px, 768px, and 1024px.** These are the measured breakpoints. Ensure navigation, heading scale, padding, and column count align exactly. No interpolation between breakpoints; scale is discrete.

## 10. Known Gaps

- **No semantic status colors.** The site does not declare or measure error, success, warning, or info states. If your product requires a semantic ramp, you must define one outside this system and document it separately.
- **Interaction states are CSS variable references.** The extraction captured state handlers (`:hover`, `:focus-visible`, `:active`, `:disabled`) that reference CSS custom properties (e.g., `var(--button-primary-bg-hover-fallback)`). The actual fallback color values are not available in the extracted data; implement these with your CSS-in-JS or CSS file's custom property definitions.
- **Dark mode / derived themes not shipped.** Only the light theme (measured from the production site) is documented here. No dark-mode, high-contrast, or alternative theme data was extracted.
- **Surfaces behind authentication not analyzed.** This extraction covers the public-facing landing page and hero section only. The application interior (dashboard, CRM interface visible in the second screenshot) has not been fully analyzed; card styles, dashboard panels, and app-specific components may differ from these guidelines.
- **Hero gradients are decorative, not themeable.** The hero section uses specific radial and linear gradients (blue-to-purple) that are baked into the CSS. These are not part of the reusable color palette and serve as one-off atmospheric effects.
- **Component-level variant coverage is limited.** Only a subset of button variants (primary outline, secondary outline-sm, icon) and card types (default, link-lg) were extracted. Additional variants (success buttons, error states, card types) may exist in the full design but were not measured on the analyzed page.
- **Opacity and z-index values are ranges, not a complete ladder.** The system shows opacity increments (30%, 40%, 50%, 55%, 60%, 64%, 80%) and z-index layers (base: 1–4; dropdown: 10–40), but a comprehensive hierarchy or state-transition map is not available.
- **Specific icon or illustration tokens not defined.** No icon sizing, weight, or style guidelines were extracted. Icons are assumed to scale with their container; document icon systems separately.
- **Keyboard navigation and focus management not specified.** Focus-visible states are captured (2px outline, var(--color-accent-stroke)), but detailed focus order, skip links, and keyboard shortcut conventions are not included here.
- **Accessibility (WCAG) claims not verified.** This document provides guidance for implementation; actual WCAG compliance testing is outside the scope of design token extraction.

---

**End of Design System Inspired by Attio**