---
version: alpha
name: Lemon Squeezy
description: |
  Lemon Squeezy combines playful citrus branding with a confident, editorial
  SaaS aesthetic. Warm yellow accents, high-contrast dark typography, spacious
  marketing layouts, expressive illustrations, and clear product screenshots
  make complex payment infrastructure feel approachable. This document is an
  implementation-oriented interpretation, not a measured CSS extraction.
source:
  url: "https://www.lemonsqueezy.com/"
  references:
    - "https://www.lemonsqueezy.com/brand"
    - "https://docs.lemonsqueezy.com/help/online-store/customization"
    - "https://www.lemonsqueezy.com/ecommerce/checkout-overlays"
  researchedAt: 2026-10-13
  pagesAnalyzed: 0
  tokensMeasured: false
  status: "inferred visual guidance; verify against live browser inspection"
colors:
  primary: "#FFC233" # proposed citrus yellow
  primaryHover: "#F3B51B" # proposed
  ink: "#171717" # proposed
  body: "#333333" # proposed
  muted: "#707070" # proposed
  canvas: "#FFFFFF" # proposed
  warmSurface: "#FFF9E9" # proposed
  surface: "#F7F7F5" # proposed
  hairline: "#E7E7E4" # proposed
  success: "#25835A" # proposed, not brand-verified
  danger: "#C94545" # proposed, not brand-verified
typography:
  display-xl: {fontFamily: "sans-serif", fontSize: "72px", fontWeight: 700, lineHeight: 0.98, letterSpacing: "-2.5px"}
  display-lg: {fontFamily: "sans-serif", fontSize: "56px", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-1.7px"}
  display-md: {fontFamily: "sans-serif", fontSize: "44px", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-1.1px"}
  heading-md: {fontFamily: "sans-serif", fontSize: "32px", fontWeight: 650, lineHeight: 1.15, letterSpacing: "-0.6px"}
  heading-sm: {fontFamily: "sans-serif", fontSize: "24px", fontWeight: 650, lineHeight: 1.2, letterSpacing: "-0.3px"}
  body-lg: {fontFamily: "sans-serif", fontSize: "18px", fontWeight: 400, lineHeight: 1.55, letterSpacing: "0px"}
  body-md: {fontFamily: "sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.55, letterSpacing: "0px"}
  body-sm: {fontFamily: "sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: 1.5, letterSpacing: "0px"}
  button: {fontFamily: "sans-serif", fontSize: "15px", fontWeight: 650, lineHeight: 1.2, letterSpacing: "0px"}
  caption: {fontFamily: "sans-serif", fontSize: "12px", fontWeight: 600, lineHeight: 1.4, letterSpacing: "0.5px"}
rounded:
  none: "0px"
  xs: "6px"
  sm: "10px"
  md: "14px"
  lg: "20px"
  xl: "28px"
  full: "9999px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  xxxl: "64px"
  section: "96px"
  band: "128px"
borderWidths:
  thin: "1px"
  emphasis: "2px"
shadows:
  sm: "0 2px 8px rgba(0,0,0,0.05)"
  md: "0 8px 24px rgba(0,0,0,0.08)"
  lg: "0 20px 60px rgba(0,0,0,0.12)"
elevationStrategy: "flat-surfaces-with-selective-soft-elevation"
themes:
  light:
    bg: "#FFFFFF"
    surface: "#F7F7F5"
    surfaceRaised: "#FFF9E9"
    text: "#171717"
    textMuted: "#707070"
    border: "#E7E7E4"
    accent: "#FFC233"
    accentFg: "#171717"
    focusRing: "#171717"
  dark:
    status: "proposed alternative; not verified on marketing site"
    bg: "#171717"
    surface: "#252525"
    surfaceRaised: "#303030"
    text: "#FFFFFF"
    textMuted: "#BDBDBD"
    border: "#444444"
    accent: "#FFC233"
    accentFg: "#171717"
    focusRing: "#FFC233"
gradients:
  - context: "optional warm hero atmosphere"
    kind: radial
    value: "radial-gradient(circle at 50% 35%, #FFF2C7 0%, #FFFFFF 70%)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    height: "48px"
    padding: "0 24px"
    rounded: "{rounded.md}"
    typography: "{typography.button}"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
    height: "48px"
    padding: "0 24px"
    rounded: "{rounded.md}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "1px solid #171717"
    height: "48px"
    padding: "0 24px"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "32px"
  input:
    backgroundColor: "#FFFFFF"
    border: "1px solid {colors.hairline}"
    height: "48px"
    padding: "0 16px"
    rounded: "{rounded.sm}"
  navigation:
    height: "80px"
    backgroundColor: "#FFFFFF"
    padding: "0 32px"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
states:
  button-hover: {target: button, state: hover, backgroundColor: "#F3B51B"}
  button-disabled: {target: button, state: disabled, opacity: 0.5}
  input-focus: {target: input, state: focus, outline: "2px solid #171717", outlineOffset: "2px"}
  card-hover: {target: card, state: hover, boxShadow: "0 8px 24px rgba(0,0,0,0.08)"}
breakpoints:
  - {width: 375, containerWidth: 327, gridColumns: 4, headingPx: 40, bodyPx: 16, sectionPaddingX: 24}
  - {width: 768, containerWidth: 704, gridColumns: 8, headingPx: 52, bodyPx: 16, sectionPaddingX: 32}
  - {width: 1024, containerWidth: 928, gridColumns: 12, headingPx: 64, bodyPx: 16, sectionPaddingX: 48}
  - {width: 1440, containerWidth: 1280, gridColumns: 12, headingPx: 72, bodyPx: 16, sectionPaddingX: 80}
coverage:
  status: "qualitative interpretation"
  measuredCssTokens: 0
  responsiveMeasured: false
  authenticatedSurfacesAnalyzed: false
---

# Design System Inspired by Lemon Squeezy

## 1. Visual Theme & Atmosphere

Lemon Squeezy balances a cheerful, memorable citrus identity with the clarity expected of a financial infrastructure platform. The public site emphasizes accessible explanations of complicated commerce concepts, confident oversized headings, product-led visuals, and bold calls to action. Its design should feel energetic without compromising payment-related trust.

**Key characteristics**
- Bright yellow accents against near-black and white.
- Large, bold editorial headlines and compact technical labels.
- Spacious sections with alternating light and dark visual bands.
- Friendly illustrative elements paired with realistic interface imagery.
- Rounded interactive surfaces and restrained depth.
- Playful language with professional information hierarchy.

**Evidence boundary:** These are design directions inferred from public brand and marketing material. The numerical tokens in the YAML above are **recommended reconstruction values**, not pixel measurements of the production site.

## 2. Color Palette & Roles

| Token | Proposed hex | Intended role |
|---|---|---|
| `primary` | `#FFC233` | Citrus brand accent, CTA highlights, illustrations |
| `primaryHover` | `#F3B51B` | Primary button hover |
| `ink` | `#171717` | Main headings, dark sections, strong controls |
| `body` | `#333333` | Body text |
| `muted` | `#707070` | Supporting labels and descriptions |
| `canvas` | `#FFFFFF` | Main page background |
| `warmSurface` | `#FFF9E9` | Warm editorial background |
| `surface` | `#F7F7F5` | Subtle cards and alternate sections |
| `hairline` | `#E7E7E4` | Borders and dividers |
| `success` | `#25835A` | Suggested positive feedback, not brand-measured |
| `danger` | `#C94545` | Suggested destructive feedback, not brand-measured |

Use yellow as a purposeful accent, not as the default background of every card. Dark ink against yellow creates a stronger signature than white text on yellow. Lemon Squeezy provides official downloadable brand assets and requests that its logos retain their original proportions and appearance. [Brand assets](https://www.lemonsqueezy.com/brand)

## 3. Typography Rules

### Font families

The exact production font families and licensed font files were **not verified**. Use a clean, modern grotesk or geometric sans-serif with a heavy display weight. Suitable *substitutes* include Inter, Manrope, or a comparable commercially licensed sans-serif. Do not describe a substitute as Lemon Squeezy's official font.

### Hierarchy

| Role | Size | Weight | Line height | Tracking | Use |
|---|---:|---:|---:|---:|---|
| `display-xl` | 72px | 700 | 0.98 | -2.5px | Hero headlines |
| `display-lg` | 56px | 700 | 1.04 | -1.7px | Major feature introductions |
| `display-md` | 44px | 700 | 1.10 | -1.1px | Section statements |
| `heading-md` | 32px | 650 | 1.15 | -0.6px | Feature cards |
| `heading-sm` | 24px | 650 | 1.20 | -0.3px | Subsections |
| `body-lg` | 18px | 400 | 1.55 | 0 | Introductory paragraphs |
| `body-md` | 16px | 400 | 1.55 | 0 | Standard text |
| `body-sm` | 14px | 400 | 1.50 | 0 | Supporting text |
| `button` | 15px | 650 | 1.20 | 0 | Controls |
| `caption` | 12px | 600 | 1.40 | +0.5px | Eyebrows, indexes, metadata |

### Principles

- Use a short, forceful headline and a more restrained explanatory paragraph.
- Tighten tracking at display sizes, but keep body text neutral.
- Use small labels and section numbers as editorial navigational cues.
- Avoid overly thin headline weights or dense all-caps body paragraphs.

## 4. Component Stylings

### Buttons

**Primary citrus:** Yellow fill, dark text, 48px height, 24px horizontal padding, 14px radius. Hover darkens yellow. Best for the most important action in a section.

**Secondary dark:** Near-black fill, white text, same dimensions. Useful on light backgrounds when yellow is already visually prominent.

**Outline:** Transparent fill, 1px dark border, dark text. Reserve for supporting actions, such as viewing documentation or learning more.

**States:** Show keyboard focus with a visible 2px outline; disabled buttons should reduce emphasis without losing readable labels. Prefer 150–200ms transitions for color and shadow.

### Cards and containers

Use white or warm-neutral surfaces, approximately 20px radius, 1px subtle borders, and 24–32px internal padding. Product showcases can be larger and use stronger contrast than utility cards. Avoid adding shadow to every card; use shadow primarily on elevated product screenshots and hoverable surfaces.

### Inputs and forms

Use 48px minimum field height, 10px radius, 16px horizontal padding, persistent labels, explicit error text, and clear focus outlines. Checkout forms must prioritize legibility and predictability over decorative styling.

### Navigation and footer

Marketing navigation should keep the logo prominent, provide a limited number of clear destinations, and emphasize the main CTA. Use an approximately 80px desktop header as a starting point. A dark footer can create a clear final visual boundary, with grouped navigation, support, legal, and product links.

### Checkout and billing surfaces

**Do not assume the public marketing theme is the checkout theme.** Lemon Squeezy supports hosted checkouts and embedded overlays, and merchants can customize theme and button colors independently. Its design settings also allow per-page overrides for storefront, checkout, overlay, customer portal, and email surfaces. [Checkout guide](https://docs.lemonsqueezy.com/guides/developer-guide/taking-payments) · [Customization](https://docs.lemonsqueezy.com/help/online-store/customization)

For checkout-inspired UI, prioritize clear order summaries, payment method selection, form validation, pricing totals, trust messaging, and a prominent submit action. Do not reproduce real checkout fields as decorative mock controls in a production payment flow.

## 5. Layout Principles

### Spacing system

Use a 4px-based spacing scale: 4, 8, 12, 16, 24, 32, 48, and 64px. Reserve 96–128px for major desktop sections. Keep paragraphs at a comfortable reading width and avoid letting marketing copy span the full viewport.

### Grid and container

Use a 12-column desktop grid with a recommended 1280px maximum content width. At tablet widths, use 8 columns; on mobile, 4 columns. Desktop hero layouts can pair copy with a product image or illustration, while mobile should stack the elements vertically.

### Whitespace philosophy

Create contrast between expansive marketing sections and dense interface previews. Use whitespace to frame illustrations, statistics, and product screens, rather than filling every gap with decorative elements.

### Border radius

Use 6px for small tags, 10px for inputs, 14px for buttons, 20px for cards, and 28px for oversized product showcase panels. These are proposed design tokens, not verified source values.

## 6. Depth & Elevation

| Level | Proposed shadow | Application |
|---|---|---|
| Flat | none | Main content and simple feature sections |
| Small | `0 2px 8px rgba(0,0,0,.05)` | Compact floating UI |
| Medium | `0 8px 24px rgba(0,0,0,.08)` | Hover cards and product panels |
| Large | `0 20px 60px rgba(0,0,0,.12)` | Product screenshots and overlays |

Prefer restrained soft shadows over dramatic black drops. For product imagery, layering and contrast are often more important than shadow strength. Treat the warm radial gradient in the YAML as optional decorative guidance, not an extracted brand gradient.

## 7. Do's and Don'ts

### Do

- Use high-contrast citrus yellow with dark typography.
- Let large headings establish hierarchy before adding illustration.
- Alternate neutral and accent sections to maintain rhythm.
- Use real product screenshots when demonstrating functionality.
- Keep checkout and account experiences simpler than the marketing site.
- Preserve official logos and badges without modification.
- Include visible keyboard focus and clear validation messages.

### Don't

- Do not saturate every background with yellow.
- Do not use light text over bright yellow without checking contrast.
- Do not substitute arbitrary emoji for official brand illustrations.
- Do not treat marketing-site tokens as authenticated dashboard measurements.
- Do not make checkout controls playful at the expense of clarity.
- Do not invent official font names or claim proposed values were measured.
- Do not distort the Lemon Squeezy logo or official badges.

## 8. Responsive Behavior

| Viewport | Container | Grid | Display headline | Side padding |
|---|---:|---:|---:|---:|
| 375px | 327px | 4 | 40px | 24px |
| 768px | 704px | 8 | 52px | 32px |
| 1024px | 928px | 12 | 64px | 48px |
| 1440px | 1280px | 12 | 72px | 80px |

These are **recommended target breakpoints**, not observed responsive measurements.

At small widths, collapse the desktop navigation, stack split sections, reduce headline size, and allow CTA buttons to expand to full width. For touch interactions, target at least 44px of effective hit area. Ensure checkout totals and critical form controls remain visible and usable on narrow screens.

## 9. Agent Prompt Guide

When implementing a Lemon Squeezy-inspired experience:

1. Begin with white backgrounds, near-black text, and citrus yellow accents.
2. Set strong, tightly tracked sans-serif display headlines.
3. Use short section labels and clear explanatory paragraphs.
4. Organize content into large, spacious editorial bands.
5. Introduce friendly illustration only when it supports the message.
6. Pair feature copy with authentic interface screenshots or carefully labeled mockups.
7. Keep cards lightly bordered and softly rounded.
8. Make the primary CTA unmistakable without overusing yellow.
9. Design mobile as a first-class layout, not a shrunken desktop view.
10. Validate color contrast, keyboard navigation, and checkout readability.

**Implementation brief:** Build a playful yet trustworthy SaaS marketing interface inspired by Lemon Squeezy. Use warm yellow accents, confident dark headings, generous whitespace, rounded controls, and product-led visuals. Follow the proposed tokens in this document as a starting point, but verify all brand-specific details against current official assets before claiming pixel fidelity.

## 10. Known Gaps

- **No live CSS extraction:** Font families, hex colors, spacing, and component measurements were not inspected in browser developer tools.
- **No authenticated dashboard audit:** Dashboard tables, sidebars, analytics, and merchant settings are not covered as measured surfaces.
- **No verified breakpoint behavior:** Responsive values above are suggested implementation targets.
- **No official semantic palette:** Success, warning, and error colors are proposals.
- **No verified dark theme:** The dark palette is an optional extrapolation.
- **Checkout is configurable:** Store-specific themes can differ significantly from the Lemon Squeezy marketing site.
- **No interaction timing measurements:** Transition durations are recommendations.
- **No asset redistribution:** Use assets from the official brand page under its usage guidance.
- **Accessibility not audited:** WCAG compliance requires separate testing.

## Sources

- [Lemon Squeezy public website](https://www.lemonsqueezy.com/)
- [Official brand assets and usage rules](https://www.lemonsqueezy.com/brand)
- [Store and checkout customization](https://docs.lemonsqueezy.com/help/online-store/customization)
- [Hosted and overlay checkout integration](https://docs.lemonsqueezy.com/guides/developer-guide/taking-payments)
- [Checkout overlays product page](https://www.lemonsqueezy.com/ecommerce/checkout-overlays)

---

**End of Design System Inspired by Lemon Squeezy**
