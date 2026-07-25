# Design System Document: The Luminal Portfolio

## 1. Overview & Creative North Star

### Creative North Star: "The Digital Architect"
This design system is built to position a web designer and AI specialist not as a mere technician, but as a high-level consultant. We move away from "standard" portfolio templates by adopting an editorial, high-end SaaS aesthetic. 

The core philosophy is **Intentional Atmosphere**. We achieve this through:
- **Asymmetric Balance:** Breaking the rigid 12-column feel with unexpected whitespace and overlapping elements (e.g., a display heading bleeding into a glassmorphism card).
- **Tonal Depth:** Replacing harsh borders with a sophisticated hierarchy of dark surfaces.
- **Kinetic Typography:** Using extreme scale shifts between `display-lg` and `label-sm` to create an authoritative, "curated" voice.

---

## 2. Colors & Surface Philosophy

The palette is rooted in a deep, nocturnal base (`#060e20`) to allow the Electric Purple and Cyber Blue accents to feel like light sources rather than flat colors.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be established solely through:
1. **Background Shifts:** Placing a `surface-container-low` section against a `surface` background.
2. **Negative Space:** Using the `16` (5.5rem) or `20` (7rem) spacing tokens to create mental "blocks" of content.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-opaque materials.
*   **Base Level:** `surface` (#060e20) – The infinite canvas.
*   **Low Level:** `surface-container-low` (#091328) – For secondary content blocks.
*   **Elevated Level:** `surface-container-high` (#141f38) – For interactive cards and modals.
*   **Interactive Layer:** Use `surface-bright` (#1f2b49) for hover states to create a "glow" effect from beneath.

### The Glass & Gradient Rule
To achieve a "Cyber-High-End" vibe, utilize **Glassmorphism**. Floating elements (like navigation bars or floating action buttons) should use `surface-container-highest` with a `40%` opacity and a `20px` backdrop-blur. 

**Signature Accents:** Main CTAs should not be flat. Use a linear gradient: `primary` (#ba9eff) to `primary_dim` (#8455ef) at a 135-degree angle to provide "visual soul."

---

## 3. Typography: The Editorial Voice

We use two distinct sans-serifs to balance technical precision with human-centric design.

*   **Manrope (Display & Headlines):** Chosen for its modern, geometric structure. 
    *   *Usage:* Apply `letter-spacing: -0.02em` for `display-lg` to create a tight, professional "logo-like" feel.
*   **Inter (Body & Labels):** Chosen for maximum readability at small scales.
    *   *Usage:* For `body-md`, use `line-height: 1.6` to ensure the portfolio feels airy and expensive.

**Hierarchy Strategy:**
*   **The Power Gap:** Pair a `display-lg` headline with a `label-md` uppercase sub-header. The massive contrast in size communicates authority and confidence.

---

## 4. Elevation & Depth

### The Layering Principle
Avoid "Drop Shadows" which look dated. Instead, use **Tonal Layering**. 
*   **Example:** A project card (`surface-container-highest`) sitting on a section background (`surface-container-low`). The 12% difference in lightness creates a natural lift.

### Ambient Shadows
If a card must float (e.g., a featured AI case study), use an **Ambient Shadow**:
*   **Color:** `on-background` at 6% opacity.
*   **Blur:** `40px` to `60px`.
*   **Spread:** `-10px` to keep the shadow tucked and sophisticated.

### The "Ghost Border" Fallback
If contrast is required for accessibility, use a **Ghost Border**: 1px stroke using `outline-variant` (#40485d) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons: The "Light-Source" CTA
*   **Primary:** Gradient of `primary` to `primary-dim`. `rounded-md` (0.375rem). No border. On hover, add a `0 0 20px` outer glow using the `primary` color at 30% opacity.
*   **Secondary:** Ghost style. Transparent background, `outline` border at 20% opacity. `on-surface` text.
*   **Tertiary:** `label-md` text with a 1px underline that expands from the center on hover.

### Cards: The Portfolio Grid
*   **Standard Card:** `surface-container-highest` background, `rounded-xl`. 
*   **Interactive State:** On hover, the background shifts to `surface-bright` and the "Ghost Border" opacity increases to 40%.
*   **Content Spacing:** Never use dividers. Use `spacing-6` (2rem) of internal padding to let imagery breathe.

### Input Fields: Minimalist Utility
*   **Base:** `surface-container-lowest` (pure black) with a subtle `outline-variant` bottom border only.
*   **Focus State:** The bottom border transforms into a 2px `secondary` (#699cff) line with a soft glow.

### Signature Component: The "AI Pulse" Chip
*   A selection chip using `secondary-container` background with a `secondary` text color. Include a small, 4px pulsing dot next to the text to signify "Live AI Integration."

---

## 6. Do's and Don'ts

### Do:
*   **Embrace the Void:** Use the `24` (8.5rem) spacing token between major sections to emphasize the "Minimalist" brand.
*   **Use Intentional Asymmetry:** Align text to the left while placing supporting imagery slightly offset to the right-center.
*   **Mix Accents:** Use `primary` (Purple) for "Creative/Web" sections and `secondary` (Blue) for "Technical/AI" sections to color-code the user's expertise.

### Don't:
*   **Don't use Divider Lines:** If you feel the need to separate two pieces of content, increase the spacing token or shift the surface color. 
*   **Don't use Pure White:** Use `on-surface` (#dee5ff) for text. Pure white (#ffffff) is too harsh on a `#060e20` background and causes visual vibration.
*   **Don't use Standard Shadows:** Never use high-opacity, small-radius shadows. They break the high-end SaaS "glass" illusion.