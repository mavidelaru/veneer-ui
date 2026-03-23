'use client'

import Link from 'next/link'
import { useTheme } from 'veneer-ui'

export function Nav() {
  const { theme, setTheme, themes } = useTheme()

  return (
    <header
      style={{
        borderBottom: '1px solid var(--veneer-color-border)',
        backgroundColor: 'var(--veneer-color-background)',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        transition: 'background-color var(--veneer-motion-transition-default)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link
            href="/"
            style={{
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'var(--veneer-color-foreground)',
              textDecoration: 'none',
            }}
          >
            veneer-ui
          </Link>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { label: 'Components', href: '/components' },
              { label: 'Tokens', href: '/tokens' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--veneer-color-muted-foreground)',
                  textDecoration: 'none',
                  transition: 'color var(--veneer-motion-transition-subtle)',
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--veneer-color-muted-foreground)', marginRight: '0.25rem' }}>
            Theme:
          </span>
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              style={{
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--veneer-radius-full)',
                fontSize: '0.75rem',
                fontWeight: 500,
                cursor: 'pointer',
                border: '1px solid',
                transition: 'all var(--veneer-motion-transition-subtle)',
                borderColor: theme === t ? 'var(--veneer-color-primary)' : 'var(--veneer-color-border)',
                backgroundColor: theme === t ? 'var(--veneer-color-primary)' : 'transparent',
                color: theme === t ? 'var(--veneer-color-primary-foreground)' : 'var(--veneer-color-foreground)',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
