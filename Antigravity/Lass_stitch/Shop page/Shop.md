```markdown
# Design System Strategy: The Architectural Illumination

## 1. Overview & Creative North Star
**Creative North Star: The Chiaroscuro Gallery**
This design system is not a mere utility; it is a digital exhibition. Inspired by the interplay of light and shadow in high-end architecture, the "Chiaroscuro Gallery" approach treats every screen as a physical space. We move beyond the rigid, "boxed-in" nature of traditional web templates by utilizing intentional asymmetry, expansive whitespace, and tonal depth.

The system is defined by its refusal to use heavy structural lines. Instead, it relies on "visual silence"—large gaps of negative space that allow high-contrast product photography to breathe. Like an elite interior design studio, the interface should feel expensive, quiet, and profoundly intentional.

---

## 2. Colors & Tonal Depth
The palette is rooted in the "Abyss and Amber" philosophy: a foundation of absolute blacks and charcoal grays, punctuated by the warmth of artificial light.

### Surface Hierarchy & The "No-Line" Rule
To maintain a premium architectural feel, **standard 1px solid borders are strictly prohibited for sectioning.** 
- **Boundaries:** Define distinct areas using background shifts. A section using `surface-container-low` (#1c1b1b) should sit directly against the `background` (#131313) to create a subtle, sophisticated transition.
- **Nesting:** Treat the UI as layers of fine material. Place a `surface-container-highest` (#353534) element inside a `surface-container` (#201f1f) to denote prominence.
- **The Glass Rule:** For floating navigation or overlays, use `surface` colors at 70% opacity with a `20px` backdrop-blur. This "frosted glass" effect ensures the UI feels integrated into the environment.

### Signature Accents
- **Primary (`#e9c176`):** Reserved for "the glow." Use this for active states and critical CTAs.
- **Gradients:** Use a subtle linear gradient from `primary` to `primary-container` (#c5a059) at a 45-degree angle to mimic the natural fall-off of a spotlight.

---

## 3. Typography: Editorial Authority
The typographic scale is designed to mimic a high-fashion architectural monograph.

- **Display & Headlines (Noto Serif):** These are your "statement pieces." Use `display-lg` (3.5rem) with reduced letter-spacing for a dramatic, editorial impact. These elements should often be placed asymmetrically to break the grid.
- **Body (Manrope):** The "functional blueprint." Manrope provides a clean, technical contrast to the Serif headlines. 
- **The "High-Kerning" Rule:** For `label-md` and `title-sm`, increase letter-spacing (0.1em to 0.15em) and use uppercase to evoke the feeling of architectural floor plans and luxury branding.

---

## 4. Elevation & Depth
In this system, light creates form. We do not use "drop shadows" in the traditional sense; we use "Ambient Glows."

- **The Layering Principle:** Use the Tonal Scale (Lowest to Highest) to create lift. A `surface-container-lowest` (#0e0e0e) card on a `surface` background creates a "sunken" or "carved" effect, while `surface-bright` creates a "raised" effect.
- **Ambient Shadows:** For floating elements, use a shadow with a 40px blur and 6% opacity, tinted with `primary` (#e9c176). This creates a warm, atmospheric halo rather than a muddy gray shadow.
- **The Ghost Border:** If a boundary is required for accessibility, use `outline-variant` (#4e4639) at 20% opacity. It must feel like a whisper, not a wall.

---

## 5. Components

### Buttons
- **Primary:** Background `primary` (#e9c176), text `on-primary` (#412d00). **Hover State:** Apply a `0 0 15px` outer glow using the primary color to simulate a light being switched on.
- **Secondary:** Transparent background with a `0.5px` border of `outline`. **Hover State:** Transition background to `surface-container-high`.
- **Shape:** All buttons must have a `0px` border-radius (Sharp edges).

### Cards & Lists
- **The Spacing Rule:** Forbid the use of divider lines. Separate items in a list using `spacing-8` (2.75rem) or a subtle shift from `surface` to `surface-container-low`.
- **Imagery:** Product cards should feature high-contrast photography. Images should bleed to the edge of the card container to emphasize the "architectural" frame.

### Input Fields
- **Styling:** Bottom-border only (`0.5px` using `outline-variant`). 
- **Focus State:** Border color transitions to `primary` (#e9c176) with a faint `1px` glow underneath the line.

### Navigation (The "Architectural Rail")
- Utilize a thin, vertical navigation rail on the far left or right. Use `label-sm` text rotated 90 degrees to maximize whitespace and reinforce the design-studio aesthetic.

---

## 6. Do's and Don'ts

### Do:
- **Use "Golden" Ratios:** Utilize the `spacing-20` and `spacing-24` tokens to create expansive, luxurious breathing room between sections.
- **Embrace Asymmetry:** Align a headline to the left and the body text to a narrow column on the right to create an editorial flow.
- **Treat Imagery as Light:** Choose photos where the light source is visible or creates sharp, geometric shadows.

### Don't:
- **No Rounded Corners:** `0px` is the absolute standard. Rounded corners break the architectural precision of the brand.
- **No Heavy Borders:** Never use a 100% opaque `outline` for a container. It traps the design and makes it feel "templated."
- **No "Full" Grids:** Avoid filling the width of the screen with content. Keep the content width narrow to emphasize the surrounding "luxurious void."

---
*Director's Note: Remember, we are not just building an interface; we are lighting a space. Every pixel should feel as though it was placed by an architect.*```