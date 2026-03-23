'use client'

import { ThemeProvider, neutralTheme, vibrantTheme } from 'veneer-ui'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={[neutralTheme, vibrantTheme]} defaultTheme="neutral">
      {children}
    </ThemeProvider>
  )
}
