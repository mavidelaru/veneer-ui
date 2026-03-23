# veneer-ui

> A theming and customization layer on top of shadcn/ui — build once, theme infinitely.

[![npm](https://img.shields.io/npm/v/veneer-ui)](https://www.npmjs.com/package/veneer-ui)
[![license](https://img.shields.io/badge/license-MIT-blue)](#license)
[![GitHub](https://img.shields.io/badge/source-github-black)](https://github.com/mavidelaru/veneer-ui)

---

## The problem

`shadcn/ui` is excellent for bootstrapping a product UI, but it has structural gaps for teams managing multiple products or white-label theming:

- **No multi-theme runtime switching** — CSS variables are global and flat. Switching identities means replacing `globals.css`.
- **No design token system** — `--primary` is a semantic alias, not a structured token hierarchy.
- **No motion system** — animation values are arbitrary and component-by-component.
- **Copy-paste model** — components can't be packaged and shared across repos.

`veneer-ui` solves all of this while staying close to the shadcn/ui API surface.

---

## Architecture

See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for full decisions. The short version:

- **CSS custom properties** as the runtime primitive — no JS-in-CSS, no rebuild required to switch themes
- **TypeScript token objects** as the source of truth — types enforce token shape, CSS vars are generated output
- **`[data-veneer-theme="name"]` scoping** — each theme is a CSS block, switching is a single `setAttribute` call
- **Radix UI primitives** under the hood — full accessibility, keyboard navigation, composability inherited
- **tsup** for dual ESM/CJS build with tree-shakeable named exports

---

## Installation

```bash
npm install veneer-ui
# or
pnpm add veneer-ui
```

Import the base CSS once in your app entry:

```tsx
import 'veneer-ui/styles'
```

---

## Quick start

```tsx
import { ThemeProvider, Button, Input } from 'veneer-ui'
import { neutralTheme } from 'veneer-ui'
import 'veneer-ui/styles'

export function App() {
  return (
    <ThemeProvider theme={neutralTheme}>
      <Button>Hello veneer-ui</Button>
      <Input placeholder="Type something..." />
    </ThemeProvider>
  )
}
```

---

## Multi-theme setup

Pass an array of themes and switch at runtime:

```tsx
import { ThemeProvider, useTheme, neutralTheme, vibrantTheme } from 'veneer-ui'

function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme()
  return (
    <div>
      {themes.map((t) => (
        <button key={t} onClick={() => setTheme(t)} aria-pressed={theme === t}>
          {t}
        </button>
      ))}
    </div>
  )
}

export function App() {
  return (
    <ThemeProvider theme={[neutralTheme, vibrantTheme]} defaultTheme="neutral">
      <ThemeSwitcher />
      {/* rest of app */}
    </ThemeProvider>
  )
}
```

---

## Creating a custom theme

### 1. Scaffold with the CLI

```bash
npx veneer-ui init
```

This creates a `veneer.config.ts` starter file in your project.

### 2. Define your tokens

```ts
// veneer.config.ts
import type { VeneerTheme } from 'veneer-ui'

const myTheme: VeneerTheme = {
  name: 'my-brand',
  tokens: {
    colors: {
      primitives: {
        // your full color scales (50–950 steps)
        gray: { 50: '#f9fafb', /* ... */ 950: '#030712' },
        // ...
      },
      semantic: {
        background:          '#ffffff',
        foreground:          '#0a0a0a',
        primary:             '#6d28d9',
        primaryForeground:   '#ffffff',
        // ... all semantic slots
      },
    },
    typography: {
      fontFamily: { sans: '"Inter", sans-serif', mono: '"Fira Code", monospace', display: '"Cal Sans", sans-serif' },
      fontSize:   { xs: '0.75rem', sm: '0.875rem', base: '1rem', /* ... */ },
      // ...
    },
    radius: { none: '0px', sm: '4px', md: '8px', lg: '14px', full: '9999px', /* ... */ },
    shadows: { none: 'none', sm: '0 1px 3px rgb(0 0 0 / 0.1)', /* ... */ },
    spacing: { 0: '0px', 1: '4px', 2: '8px', /* ... */ },
    motion: {
      duration:   { instant: '0ms', fast: '100ms', normal: '200ms', slow: '400ms', slower: '700ms' },
      easing:     { linear: 'linear', easeOut: 'cubic-bezier(0, 0, 0.2, 1)', /* ... */ },
      transition: { subtle: '100ms cubic-bezier(0, 0, 0.2, 1)', default: '200ms cubic-bezier(0.4, 0, 0.2, 1)', expressive: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)' },
    },
  },
}

export default myTheme
```

### 3. Pass to ThemeProvider

```tsx
import myTheme from './veneer.config'
import { ThemeProvider } from 'veneer-ui'

<ThemeProvider theme={myTheme}>
  <App />
</ThemeProvider>
```

---

## Component API

All components accept standard HTML/Radix props plus veneer extensions.

### Common props

| Prop | Type | Description |
|------|------|-------------|
| `motion` | `'none' \| 'subtle' \| 'default' \| 'expressive'` | Motion preset for transitions |
| `className` | `string` | Additional Tailwind/CSS classes |

### Button

```tsx
<Button
  variant="default | destructive | outline | secondary | ghost | link"
  size="default | sm | lg | icon"
  rounded="theme | none | sm | full"
  motion="subtle | default | expressive | none"
  asChild={false}
>
  Click me
</Button>
```

### Input

```tsx
<Input
  type="text | email | password | ..."
  motion="subtle | default | expressive | none"
  placeholder="..."
/>
```

### Badge

```tsx
<Badge variant="default | secondary | destructive | outline | muted">
  Label
</Badge>
```

### Card

```tsx
<Card shadow="none | xs | sm | md | lg | xl" motion="...">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Dialog

```tsx
<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent motion="subtle | default | expressive">
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Select

```tsx
<Select>
  <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </SelectContent>
</Select>
```

### Tooltip

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button>Hover</Button></TooltipTrigger>
    <TooltipContent motion="subtle">Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Switch

```tsx
<Switch
  motion="default"
  defaultChecked
  onCheckedChange={(checked) => console.log(checked)}
/>
```

---

## Motion system

Three presets are available via the `motion` prop:

| Preset | Duration | Easing | Use case |
|--------|----------|--------|----------|
| `subtle` | fast (100ms) | easeOut | Hover states, micro-interactions |
| `default` | normal (200ms) | easeInOut | Most UI transitions |
| `expressive` | slow (400ms) | spring | Page transitions, emphasis |

Themes can override the underlying values in `tokens.motion`. For example, the `vibrant` theme uses a more bouncy spring (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for a more playful feel.

---

## CLI

```bash
# Scaffold a veneer.config.ts starter file
npx veneer-ui init

# Force overwrite if file already exists
npx veneer-ui init --force
```

---

## Monorepo structure

```
veneer-ui/
├── packages/
│   ├── core/       → veneer-ui (npm package)
│   └── tokens/     → @veneer-ui/tokens (type definitions & theme data)
├── apps/
│   ├── docs/       → Next.js documentation site
│   └── storybook/  → Storybook 8 component explorer
├── ARCHITECTURE.md
└── README.md
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run docs site
pnpm --filter @veneer-ui/docs dev

# Run Storybook
pnpm --filter @veneer-ui/storybook dev

# Type check everything
pnpm type-check
```

---

## License

MIT © [mavidelaru](https://github.com/mavidelaru)
