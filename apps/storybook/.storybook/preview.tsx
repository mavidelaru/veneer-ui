import React from 'react'
import type { Preview } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import { ThemeProvider, neutralTheme, vibrantTheme } from 'veneer-ui'
import 'veneer-ui/styles'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        neutral: 'neutral',
        vibrant: 'vibrant',
      },
      defaultTheme: 'neutral',
      attributeName: 'data-veneer-theme',
    }),
    (Story, context) => {
      const themeName = (context.globals['theme'] as string) ?? 'neutral'
      const theme = themeName === 'vibrant' ? vibrantTheme : neutralTheme
      return (
        <ThemeProvider theme={[neutralTheme, vibrantTheme]} defaultTheme={themeName}>
          <div style={{ padding: '1.5rem', minHeight: '100vh', backgroundColor: 'var(--veneer-color-background)', color: 'var(--veneer-color-foreground)' }}>
            <Story />
          </div>
        </ThemeProvider>
      )
    },
  ],
}

export default preview
