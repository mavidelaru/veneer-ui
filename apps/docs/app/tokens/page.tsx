'use client'

import { useTheme } from 'veneer-ui'

function ColorSwatch({ name, value }: { name: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <div
        style={{
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: 'var(--veneer-radius-sm)',
          backgroundColor: value,
          border: '1px solid var(--veneer-color-border)',
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--veneer-color-foreground)' }}>{name}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--veneer-color-muted-foreground)', fontFamily: 'monospace' }}>{value}</div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.25rem', color: 'var(--veneer-color-foreground)', paddingBottom: '0.75rem', borderBottom: '1px solid var(--veneer-color-border)' }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function TokensPage() {
  const { tokens, theme } = useTheme()

  const semanticColors = Object.entries(tokens.colors.semantic)
  const motionDurations = Object.entries(tokens.motion.duration)
  const motionEasings = Object.entries(tokens.motion.easing)
  const motionPresets = Object.entries(tokens.motion.transition)
  const radiusTokens = Object.entries(tokens.radius)
  const shadowTokens = Object.entries(tokens.shadows)

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--veneer-color-foreground)' }}>
        Token System
      </h1>
      <p style={{ color: 'var(--veneer-color-muted-foreground)', marginBottom: '3rem', fontSize: '1rem' }}>
        Currently showing: <strong style={{ color: 'var(--veneer-color-foreground)' }}>{theme}</strong> theme
      </p>

      <Section title="Semantic Colors">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {semanticColors.map(([name, value]) => (
            <ColorSwatch key={name} name={name} value={value} />
          ))}
        </div>
      </Section>

      <Section title="Border Radius">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-end' }}>
          {radiusTokens.map(([name, value]) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: 'var(--veneer-color-primary)',
                  borderRadius: value,
                  marginBottom: '0.375rem',
                }}
              />
              <div style={{ fontSize: '0.6875rem', color: 'var(--veneer-color-muted-foreground)' }}>{name}</div>
              <div style={{ fontSize: '0.625rem', color: 'var(--veneer-color-muted-foreground)', fontFamily: 'monospace' }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Shadows">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'flex-end' }}>
          {shadowTokens.filter(([n]) => n !== 'none' && n !== 'inner').map(([name, value]) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: 'var(--veneer-color-card)',
                  borderRadius: 'var(--veneer-radius-md)',
                  boxShadow: value,
                  marginBottom: '0.5rem',
                }}
              />
              <div style={{ fontSize: '0.6875rem', color: 'var(--veneer-color-muted-foreground)' }}>shadow-{name}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Motion Durations">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {motionDurations.map(([name, value]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '80px', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--veneer-color-foreground)' }}>{name}</div>
              <div
                style={{
                  height: '6px',
                  width: '100px',
                  backgroundColor: 'var(--veneer-color-primary)',
                  borderRadius: 'var(--veneer-radius-full)',
                  transition: `width ${value} linear`,
                }}
              />
              <div style={{ fontSize: '0.75rem', color: 'var(--veneer-color-muted-foreground)', fontFamily: 'monospace' }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Motion Transition Presets">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {motionPresets.map(([name, value]) => (
            <div key={name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--veneer-color-foreground)' }}>{name}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--veneer-color-muted-foreground)', fontFamily: 'monospace' }}>{value}</span>
              </div>
              <div
                style={{
                  height: '2px',
                  backgroundColor: 'var(--veneer-color-border)',
                  borderRadius: 'var(--veneer-radius-full)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'var(--veneer-color-primary)',
                    transform: 'translateX(-100%)',
                    transition: `transform ${value}`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Easing Curves">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {motionEasings.map(([name, value]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '100px', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--veneer-color-foreground)' }}>{name}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--veneer-color-muted-foreground)', fontFamily: 'monospace' }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
