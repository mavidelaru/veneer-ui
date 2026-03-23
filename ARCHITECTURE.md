# veneer-ui — Architecture Decisions

## Why this exists

`shadcn/ui` is excellent for bootstrapping a product UI, but it has structural limitations for teams maintaining multiple products or needing white-label theming:

1. **Single theme at a time** — the CSS variable set in `globals.css` is global and flat. Switching visual identities means replacing the entire file.
2. **No token system** — values like `--primary` are semantic aliases, not a structured token hierarchy. You can't express "this button's shadow should use our elevation scale."
3. **No motion system** — animation durations and easings are hardcoded or arbitrary. There's no way to express "this component uses our `expressive` motion preset."
4. **Copy-paste model** — components live in your codebase. Sharing a themed version across repos means duplicating files manually with no upgrade path.
5. **No multi-theme runtime switching** — you can't switch between a "neutral" and "vibrant" theme at runtime without a full page reload or complex CSS gymnastics.

`veneer-ui` solves all five.

---

## Token Architecture

### Decision: CSS custom properties over JS token objects

**Why:** CSS custom properties enable true runtime theming without a rebuild. A `ThemeProvider` injects a `<style>` block; swapping the `data-veneer-theme` attribute on `<html>` instantly applies a new theme via CSS cascade. No React re-renders, no flicker, no FOUC.

**Trade-off:** Loss of type safety at the CSS level. Mitigated by generating CSS from a typed TypeScript token object — the TS types are the source of truth, CSS vars are the output.

### Token hierarchy

```
Primitive tokens  →  Semantic tokens  →  Component tokens
(raw values)         (role-based)         (component-specific)

color.purple.600  →  color.primary       →  button.background
                  →  color.interactive   →  input.focus-ring
```

Consumers only reference semantic tokens. Primitive tokens are internal to theme definitions.

### Naming convention

```
--veneer-color-{scale}-{step}        # primitives: --veneer-color-purple-600
--veneer-color-{semantic}            # semantic:   --veneer-color-primary
--veneer-radius-{size}               # --veneer-radius-md
--veneer-shadow-{size}               # --veneer-shadow-lg
--veneer-font-size-{step}            # --veneer-font-size-lg
--veneer-motion-duration-{speed}     # --veneer-motion-duration-normal
--veneer-motion-easing-{curve}       # --veneer-motion-easing-spring
--veneer-motion-transition-{preset}  # --veneer-motion-transition-expressive
```

The `veneer-` prefix prevents collisions with shadcn's `--primary`, `--background`, etc. Both systems can coexist.

---

## Multi-Theme Strategy

Each theme is a named CSS block scoped to `[data-veneer-theme="name"]`:

```css
[data-veneer-theme="neutral"] {
  --veneer-color-primary: oklch(30% 0.02 250);
  --veneer-radius-md: 6px;
  /* ... */
}

[data-veneer-theme="vibrant"] {
  --veneer-color-primary: hsl(270 80% 55%);
  --veneer-radius-md: 14px;
  /* ... */
}
```

`ThemeProvider` generates these blocks from TypeScript theme objects at mount time. Switching themes is a single `setAttribute('data-veneer-theme', name)` call — no re-renders of the component tree.

---

## Component Wrapping Strategy

Components are thin wrappers over Radix UI primitives (the same primitives shadcn uses). The wrapping layer:

1. Applies `className` composed via `cva` (class-variance-authority) that references `--veneer-*` CSS vars
2. Adds the `motion` prop (`'subtle' | 'default' | 'expressive'`) which maps to a transition CSS variable preset
3. Forwards all original props — consumers get full Radix accessibility, keyboard navigation, and composability for free
4. Re-exports the original component type so TypeScript doesn't complain about prop mismatches

**We do not use shadcn's CLI.** We own the component source. This means we can publish to npm — shadcn's copy-paste model can't be packaged.

---

## Motion System

Motion is treated as a first-class token category, not an afterthought.

### Token structure
```
duration: instant(0ms) | fast(100ms) | normal(200ms) | slow(400ms) | slower(700ms)
easing:   linear | easeIn | easeOut | easeInOut | spring (cubic-bezier)
```

### Presets (transition shorthand)
```
subtle:      fast duration + easeOut — micro-interactions, hover states
default:     normal duration + easeInOut — most UI transitions
expressive:  slow duration + spring — hero animations, page transitions
```

The `motion` prop on components maps to these presets:
```tsx
<Button motion="expressive">Click me</Button>
// → applies transition: all var(--veneer-motion-transition-expressive)
```

---

## Package Export Strategy

`packages/core` (published as `veneer-ui`) uses dual ESM/CJS output via `tsup`. Exports are explicit to enable tree-shaking:

```json
"exports": {
  ".": { "import": "./dist/index.mjs", "require": "./dist/index.js", "types": "./dist/index.d.ts" },
  "./styles": "./dist/styles.css"
}
```

Consumers import styles once in their app entry point:
```tsx
import 'veneer-ui/styles'
```

Components are individually re-exported from `src/index.ts` using named exports so bundlers can eliminate unused components.

---

## CLI Design

`veneer-ui init` scaffolds a `veneer.config.ts` in the consumer project:

```ts
import type { VeneerTheme } from 'veneer-ui'

const myTheme: VeneerTheme = {
  name: 'my-brand',
  tokens: {
    // ... override any tokens
  }
}

export default myTheme
```

The CLI uses `commander` for argument parsing and writes the config file with sensible defaults. Future versions will support `veneer-ui add <component>` for selective installs.

---

## Dependency Philosophy

- **Zero runtime deps beyond React** — `clsx`, `tailwind-merge`, `class-variance-authority`, and `@radix-ui/*` are peer/dev deps
- **No CSS-in-JS** — CSS custom properties + Tailwind utility classes. No runtime style injection beyond the theme `<style>` block
- **Radix UI as the accessibility foundation** — we don't reinvent ARIA patterns
- **Tailwind as a utility layer** — components use Tailwind classes that reference CSS vars, so consumers can extend the design via their own `tailwind.config`
