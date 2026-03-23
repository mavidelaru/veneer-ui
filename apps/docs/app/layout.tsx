import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Nav } from './components/Nav'

export const metadata: Metadata = {
  title: 'veneer-ui — Design System',
  description: 'A theming and customization layer on top of shadcn/ui. Build once, theme infinitely.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Nav />
            <main style={{ flex: 1 }} className="page-enter">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
