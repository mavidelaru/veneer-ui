#!/usr/bin/env node
import { Command } from 'commander'
import fs from 'node:fs'
import path from 'node:path'

const program = new Command()

program
  .name('veneer-ui')
  .description('veneer-ui CLI — scaffold and manage your design system theme')
  .version('0.1.0')

program
  .command('init')
  .description('Scaffold a veneer.config.ts starter file in the current directory')
  .option('-f, --force', 'Overwrite existing veneer.config.ts', false)
  .action((options: { force: boolean }) => {
    const targetPath = path.join(process.cwd(), 'veneer.config.ts')

    if (fs.existsSync(targetPath) && !options.force) {
      console.error(
        '✖  veneer.config.ts already exists. Use --force to overwrite.',
      )
      process.exit(1)
    }

    const template = `import type { VeneerTheme } from 'veneer-ui'

const myTheme: VeneerTheme = {
  name: 'my-brand',
  tokens: {
    colors: {
      primitives: {
        // Define your color scales here
        // Each scale should have steps: 50, 100, 200 ... 900, 950
        gray: {
          50:  '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        blue:   { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554' },
        purple: { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87', 950: '#3b0764' },
        pink:   { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843', 950: '#500724' },
        green:  { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d', 950: '#052e16' },
        red:    { 50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337', 950: '#4c0519' },
        yellow: { 50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047', 400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207', 800: '#854d0e', 900: '#713f12', 950: '#422006' },
      },
      semantic: {
        background:            '#ffffff',
        foreground:            '#0a0a0a',
        card:                  '#ffffff',
        cardForeground:        '#0a0a0a',
        popover:               '#ffffff',
        popoverForeground:     '#0a0a0a',
        primary:               '#0a0a0a',
        primaryForeground:     '#fafafa',
        secondary:             '#f5f5f5',
        secondaryForeground:   '#0a0a0a',
        muted:                 '#f5f5f5',
        mutedForeground:       '#737373',
        accent:                '#f5f5f5',
        accentForeground:      '#0a0a0a',
        destructive:           '#ef4444',
        destructiveForeground: '#fafafa',
        border:                '#e5e5e5',
        input:                 '#e5e5e5',
        ring:                  '#0a0a0a',
      },
    },
    typography: {
      fontFamily: {
        sans:    'system-ui, -apple-system, sans-serif',
        mono:    '"JetBrains Mono", monospace',
        display: 'system-ui, -apple-system, sans-serif',
      },
      fontSize: {
        xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem',
        xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '5xl': '3rem',
      },
      fontWeight: {
        normal: '400', medium: '500', semibold: '600', bold: '700', extrabold: '800',
      },
      lineHeight: {
        none: '1', tight: '1.25', snug: '1.375', normal: '1.5', relaxed: '1.625', loose: '2',
      },
      letterSpacing: {
        tighter: '-0.05em', tight: '-0.025em', normal: '0em',
        wide: '0.025em', wider: '0.05em', widest: '0.1em',
      },
    },
    spacing: {
      0: '0px', px: '1px', 0.5: '2px', 1: '4px', 1.5: '6px', 2: '8px', 2.5: '10px',
      3: '12px', 3.5: '14px', 4: '16px', 5: '20px', 6: '24px', 7: '28px', 8: '32px',
      9: '36px', 10: '40px', 11: '44px', 12: '48px', 14: '56px', 16: '64px', 20: '80px',
      24: '96px', 28: '112px', 32: '128px', 36: '144px', 40: '160px', 44: '176px',
      48: '192px', 52: '208px', 56: '224px', 60: '240px', 64: '256px', 72: '288px',
      80: '320px', 96: '384px',
    },
    radius: {
      none: '0px', xs: '2px', sm: '4px', md: '6px', lg: '8px',
      xl: '12px', '2xl': '16px', '3xl': '24px', full: '9999px',
    },
    shadows: {
      none: 'none',
      xs:    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      sm:    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md:    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg:    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl:    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    },
    motion: {
      duration: {
        instant: '0ms', fast: '100ms', normal: '200ms', slow: '400ms', slower: '700ms',
      },
      easing: {
        linear: 'linear',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      transition: {
        subtle:     '100ms cubic-bezier(0, 0, 0.2, 1)',
        default:    '200ms cubic-bezier(0.4, 0, 0.2, 1)',
        expressive: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
}

export default myTheme
`

    fs.writeFileSync(targetPath, template, 'utf-8')
    console.log('✔  Created veneer.config.ts')
    console.log('')
    console.log('Next steps:')
    console.log('  1. Customize the tokens in veneer.config.ts')
    console.log('  2. Import and pass your theme to <ThemeProvider>:')
    console.log('')
    console.log("     import myTheme from './veneer.config'")
    console.log("     import { ThemeProvider } from 'veneer-ui'")
    console.log('')
    console.log('     <ThemeProvider theme={myTheme}>')
    console.log('       <App />')
    console.log('     </ThemeProvider>')
  })

program.parse()
