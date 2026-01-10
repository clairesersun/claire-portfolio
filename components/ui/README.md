# UI Component Library

Reusable components implementing the portfolio's rainbow color system and editorial design aesthetic.

## Philosophy

This component library consolidates repeated patterns into systematic, accessible, and maintainable components. All components follow these principles:

- **Accessibility first**: WCAG AAA compliant with proper ARIA, semantic HTML, and keyboard navigation
- **Rainbow color system**: Consistent use of the 5-color palette (violet, cyan, green, yellow, coral)
- **Editorial aesthetic**: Bookish design with generous spacing and comfortable typography
- **Reduced motion support**: All animations respect `prefers-reduced-motion`
- **TypeScript**: Full type safety with documented props

---

## Components

### Tag

Colorful labels for categorizing content with automatic rainbow color rotation.

**Usage:**
```tsx
import { Tag } from '@/components/ui'

// Basic usage - automatically cycles through rainbow colors
<Tag colorIndex={0}>Accessibility</Tag>
<Tag colorIndex={1}>React</Tag>
<Tag colorIndex={2}>TypeScript</Tag>

// Bold variant for emphasis
<Tag colorIndex={0} variant="bold">Featured</Tag>
```

**Props:**
- `children` (ReactNode, required): Tag text content
- `colorIndex` (number, default: 0): Rainbow color index (0-4, automatically cycles)
- `variant` ('subtle' | 'bold', default: 'subtle'): Visual style
- `className` (string): Additional CSS classes

**Color Mapping:**
- 0: Violet (`#5B21B6` / `#C4B5FD`)
- 1: Cyan (`#0C5A6D` / `#67E8F9`)
- 2: Green (`#065F46` / `#6EE7B7`)
- 3: Yellow (`#92400E` / `#FCD34D`)
- 4: Coral (`#991B1B` / `#FCA5A5`)

**When to use:**
- Project tags on case studies
- Skill/technology labels
- Category markers
- Any content that benefits from color-coded organization

---

### Button

Polymorphic button component that renders as Link, anchor, or button based on props.

**Usage:**
```tsx
import { Button } from '@/components/ui'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

// Internal navigation (renders Next.js Link)
<Button href="/about" variant="primary">
  Learn More
</Button>

// External link (renders anchor with target="_blank")
<Button
  externalHref="https://linkedin.com"
  icon={faArrowUpRightFromSquare}
  iconPosition="left"
>
  LinkedIn
</Button>

// Button action (renders button element)
<Button onClick={handleClick} variant="primary" icon={faEnvelope}>
  Contact
</Button>
```

**Props:**
- `children` (ReactNode, required): Button text
- `variant` ('default' | 'primary', default: 'default'): Visual style
  - `default`: Outlined with border
  - `primary`: Gradient-filled with cool gradient (violet → cyan)
- `icon` (IconDefinition): Optional FontAwesome icon
- `iconPosition` ('left' | 'right', default: 'left'): Icon placement
- `href` (string): For internal navigation (renders Link)
- `externalHref` (string): For external links (renders anchor)
- `type` ('button' | 'submit' | 'reset', default: 'button'): Button type
- `onClick` (function): Click handler for button elements
- `disabled` (boolean): Disabled state
- `className` (string): Additional CSS classes
- `ariaLabel` (string): Accessibility label

**Visual Effects:**
- Default: Subtle ripple effect on hover, border color change, lift animation
- Primary: Cool gradient background, rainbow border on hover
- All effects respect `prefers-reduced-motion`

**When to use:**
- Primary CTAs (use `variant="primary"`)
- Navigation links (use `href`)
- External links (use `externalHref`)
- Form submissions (use `type="submit"`)
- Interactive actions (use `onClick`)

---

### Card

Flexible card component with multiple variants for different content types.

**Usage:**
```tsx
import { Card } from '@/components/ui'
import { faWheelchairMove } from '@fortawesome/free-solid-svg-icons'

// Belief card with large icon and rainbow accent
<Card variant="belief" icon={faWheelchairMove} rainbowIndex={0}>
  <h3>Accessibility is Foundational</h3>
  <p>Not a feature to bolt on later...</p>
</Card>

// Case study card with chapter marker
<Card variant="caseStudy" href="/work/project-slug">
  <h3>Project Title</h3>
  <p>Project description</p>
</Card>

// Default card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

**Props:**
- `children` (ReactNode, required): Card content
- `variant` ('default' | 'belief' | 'caseStudy', default: 'default'): Visual style
- `href` (string): Makes entire card clickable as a link
- `icon` (IconDefinition): Icon for belief variant (44px size)
- `rainbowIndex` (number, 0-2): Rainbow accent color for belief cards
- `className` (string): Additional CSS classes
- `noHover` (boolean): Disable hover effects

**Variant Details:**

**`default`**: Basic card with border
- Subtle hover lift and shadow
- Border color changes to blue on hover
- Good for general content blocks

**`belief`**: Large icon card (homepage beliefs section)
- 44px FontAwesome icon
- Rainbow border on hover (color based on `rainbowIndex`)
- Stronger lift animation (4px vs 2px)

**`caseStudy`**: Vertical list item with chapter marker
- 4px left border (transparent at rest)
- Rainbow gradient border reveals on hover
- Editorial/bookish aesthetic

**When to use:**
- `belief`: Core values, principles, key features (3-card grid recommended)
- `caseStudy`: Portfolio projects, case studies, blog posts
- `default`: General content cards, info blocks

---

## Design Tokens

### Rainbow Utility Tokens

These CSS custom properties are available in `globals.css` for creating custom components:

**Light Mode Backgrounds:**
```css
--rainbow-0-bg: rgba(91, 33, 182, 0.06);   /* Violet */
--rainbow-1-bg: rgba(12, 90, 109, 0.07);   /* Cyan */
--rainbow-2-bg: rgba(6, 95, 70, 0.06);     /* Green */
--rainbow-3-bg: rgba(146, 64, 14, 0.08);   /* Yellow */
--rainbow-4-bg: rgba(153, 27, 27, 0.06);   /* Coral */
```

**Bold Variant (Higher Opacity):**
```css
--rainbow-0-bg-bold: rgba(91, 33, 182, 0.15);
--rainbow-1-bg-bold: rgba(12, 90, 109, 0.15);
--rainbow-2-bg-bold: rgba(6, 95, 70, 0.15);
--rainbow-3-bg-bold: rgba(146, 64, 14, 0.18);
--rainbow-4-bg-bold: rgba(153, 27, 27, 0.15);
```

**Dark Mode:** Token names remain the same but values automatically adjust via `[data-theme="dark"]`

### Rainbow Gradient Tokens

```css
--gradient-rainbow: linear-gradient(135deg, violet → blue → cyan → green);
--gradient-rainbow-horizontal: linear-gradient(90deg, all 6 colors);
--gradient-cool: linear-gradient(135deg, violet → cyan);
--gradient-warm: linear-gradient(135deg, yellow → coral);
```

---

## Import Patterns

**Named imports (recommended):**
```tsx
import { Tag, Button, Card } from '@/components/ui'
```

**Individual imports:**
```tsx
import { Button } from '@/components/ui/Button'
import type { ButtonProps } from '@/components/ui/Button'
```

---

## Migration Guide

### Before (Old Pattern)
```tsx
// Homepage - Old tag implementation
<ul className={styles.tagList}>
  {tags.map(tag => (
    <li key={tag} className={styles.tag}>{tag}</li>
  ))}
</ul>

// CSS file had 75+ lines of rainbow nth-child selectors
```

### After (New Component)
```tsx
// Homepage - New Tag component
<ul className={styles.tagList}>
  {tags.map((tag, index) => (
    <li key={tag}>
      <Tag colorIndex={index}>{tag}</Tag>
    </li>
  ))}
</ul>

// CSS file now has 2 lines for the list container
// Rainbow colors are handled by the Tag component
```

**Benefits:**
- ✅ 100+ lines of CSS eliminated across 3 files
- ✅ Consistent rainbow coloring everywhere
- ✅ Easy to add new rainbow-colored elements
- ✅ Single source of truth for color values
- ✅ Type safety with TypeScript

---

## Accessibility Features

All components include:
- **Semantic HTML**: Proper element usage (nav, article, button vs div)
- **ARIA labels**: Screen reader support via aria-label, aria-hidden
- **Keyboard navigation**: All interactive elements are keyboard accessible
- **Focus management**: 3px focus ring with 3px offset
- **Color contrast**: WCAG AAA compliant (7:1 ratio)
- **Reduced motion**: All animations respect `prefers-reduced-motion: reduce`

---

## Future Components

Patterns identified but not yet extracted (use threshold: 3+ instances):

### Breadcrumb Component
Currently used only in case study detail pages. Will extract when needed in 2+ more locations.

### ChapterMarker Component
The 4px vertical rainbow gradient border pattern. Currently inline in Card component but could be extracted if used independently.

### ProjectCard Component
Archive page has a unique card variant (`projectCard`) that differs from the general Card component. Might warrant a separate component if the pattern is reused.

---

## Contributing

When adding new components to this library:

1. **Identify the pattern**: Is it used 3+ times or likely to be reused?
2. **Design the API**: What props make sense? Keep it simple but flexible
3. **Maintain consistency**: Follow existing naming conventions and structure
4. **Document thoroughly**: Add examples, prop descriptions, and "when to use"
5. **Consider accessibility**: ARIA labels, semantic HTML, keyboard nav, reduced motion
6. **Test thoroughly**: Verify visual parity with old implementation
7. **Migrate systematically**: Replace all instances, then delete old CSS

---

## Questions?

This design system is a living system. Extract patterns as they emerge, enrich them thoughtfully, and maintain them consistently.

For questions about component usage or to propose new components, refer to the individual component files - they include inline documentation and TypeScript types.
