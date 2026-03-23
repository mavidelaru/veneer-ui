import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            borderRadius: 'var(--veneer-radius-full)',
            border: '1px solid var(--veneer-color-border)',
            fontSize: '0.75rem',
            fontWeight: 500,
            color: 'var(--veneer-color-muted-foreground)',
            marginBottom: '1.5rem',
          }}
        >
          v0.1.0 — Early preview
        </div>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            color: 'var(--veneer-color-foreground)',
            marginBottom: '1.25rem',
          }}
        >
          Build once.
          <br />
          <span style={{ color: 'var(--veneer-color-primary)' }}>Theme infinitely.</span>
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--veneer-color-muted-foreground)',
            maxWidth: '560px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.6,
          }}
        >
          veneer-ui is a theming and customization layer on top of shadcn/ui.
          Design tokens as first-class citizens. Runtime theme switching. Zero build-step overhead.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/components"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.625rem 1.5rem',
              borderRadius: 'var(--veneer-radius-md)',
              backgroundColor: 'var(--veneer-color-primary)',
              color: 'var(--veneer-color-primary-foreground)',
              fontWeight: 500,
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'opacity var(--veneer-motion-transition-subtle)',
            }}
          >
            Browse components
          </Link>
          <a
            href="https://github.com/mavidelaru/veneer-ui"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.625rem 1.5rem',
              borderRadius: 'var(--veneer-radius-md)',
              border: '1px solid var(--veneer-color-border)',
              color: 'var(--veneer-color-foreground)',
              fontWeight: 500,
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'background-color var(--veneer-motion-transition-subtle)',
            }}
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Quick install */}
      <div
        style={{
          backgroundColor: 'var(--veneer-color-card)',
          borderRadius: 'var(--veneer-radius-lg)',
          border: '1px solid var(--veneer-color-border)',
          padding: '1.5rem 2rem',
          marginBottom: '4rem',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          color: 'var(--veneer-color-foreground)',
          boxShadow: 'var(--veneer-shadow-sm)',
        }}
      >
        <span style={{ color: 'var(--veneer-color-muted-foreground)', userSelect: 'none' }}>$ </span>
        npm install veneer-ui
      </div>

      {/* Feature grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {[
          {
            title: 'Design tokens first',
            description:
              'Colors, typography, spacing, radius, shadows, and motion — all as typed TypeScript tokens that compile to CSS custom properties.',
          },
          {
            title: 'Runtime theme switching',
            description:
              'Switch between N themes at runtime with a single attribute change. No rebuilds, no flicker, no FOUC.',
          },
          {
            title: 'Motion system',
            description:
              'Duration, easing, and transition presets as tokens. Three built-in presets: subtle, default, and expressive.',
          },
          {
            title: 'Type-safe & tree-shakeable',
            description:
              'Strict TypeScript throughout. Named exports only — import exactly what you use.',
          },
          {
            title: 'shadcn/ui compatible',
            description:
              "Built on the same Radix UI primitives as shadcn. You get full accessibility and keyboard navigation out of the box.",
          },
          {
            title: 'CLI tool included',
            description:
              'Run `npx veneer-ui init` to scaffold a typed theme config file in your project.',
          },
        ].map(({ title, description }) => (
          <div
            key={title}
            style={{
              padding: '1.5rem',
              borderRadius: 'var(--veneer-radius-lg)',
              border: '1px solid var(--veneer-color-border)',
              backgroundColor: 'var(--veneer-color-card)',
              boxShadow: 'var(--veneer-shadow-xs)',
              transition: 'box-shadow var(--veneer-motion-transition-subtle), transform var(--veneer-motion-transition-subtle)',
            }}
          >
            <h3
              style={{
                fontWeight: 600,
                fontSize: '0.9375rem',
                marginBottom: '0.5rem',
                color: 'var(--veneer-color-foreground)',
              }}
            >
              {title}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--veneer-color-muted-foreground)', lineHeight: 1.6 }}>
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
