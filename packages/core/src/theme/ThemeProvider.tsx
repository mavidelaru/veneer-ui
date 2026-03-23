'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { ThemeTokens, VeneerTheme } from '@veneer-ui/tokens'
import { tokensToCSSVars, renderCSSBlock } from '../tokens/css-vars'

// ─── Context types ─────────────────────────────────────────────────────────────

interface ThemeContextValue {
  /** Name of the currently active theme */
  theme: string
  /** Switch to a different theme by name */
  setTheme: (name: string) => void
  /** All registered theme names */
  themes: string[]
  /** Token values for the currently active theme */
  tokens: ThemeTokens
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

// ─── ThemeProvider ─────────────────────────────────────────────────────────────

export interface ThemeProviderProps {
  /**
   * One or more theme definitions.
   * If an array, the first item is used as the default unless `defaultTheme` is set.
   */
  theme: VeneerTheme | VeneerTheme[]
  /** Name of the theme to use initially */
  defaultTheme?: string
  children: React.ReactNode
  /**
   * The DOM element to apply data-veneer-theme to.
   * Defaults to document.documentElement.
   * Pass a ref if you want theme scoping inside a subtree.
   */
  target?: React.RefObject<HTMLElement>
}

const useIsomorphicEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function ThemeProvider({
  theme,
  defaultTheme,
  children,
  target,
}: ThemeProviderProps) {
  const themes = useMemo(
    () => (Array.isArray(theme) ? theme : [theme]),
    [theme],
  )

  const themeMap = useMemo(
    () => new Map(themes.map((t) => [t.name, t])),
    [themes],
  )

  const initialTheme = defaultTheme ?? themes[0]?.name ?? ''
  const [activeThemeName, setActiveThemeName] = useState(initialTheme)

  // Inject all theme CSS var blocks as a single <style> tag
  const styleRef = useRef<HTMLStyleElement | null>(null)

  useIsomorphicEffect(() => {
    if (typeof document === 'undefined') return

    if (!styleRef.current) {
      const style = document.createElement('style')
      style.setAttribute('data-veneer-themes', '')
      document.head.appendChild(style)
      styleRef.current = style
    }

    const css = themes
      .map((t) => {
        const vars = tokensToCSSVars(t.tokens)
        return renderCSSBlock(`[data-veneer-theme="${t.name}"]`, vars)
      })
      .join('\n\n')

    styleRef.current.textContent = css

    return () => {
      styleRef.current?.remove()
      styleRef.current = null
    }
    // We intentionally only re-run when themes change, not on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themes])

  // Apply data-veneer-theme attribute to the target element
  useIsomorphicEffect(() => {
    const el = target?.current ?? document.documentElement
    el.setAttribute('data-veneer-theme', activeThemeName)
    return () => {
      el.removeAttribute('data-veneer-theme')
    }
  }, [activeThemeName, target])

  const setTheme = useCallback(
    (name: string) => {
      if (!themeMap.has(name)) {
        console.warn(`[veneer-ui] Unknown theme "${name}". Available: ${[...themeMap.keys()].join(', ')}`)
        return
      }
      setActiveThemeName(name)
    },
    [themeMap],
  )

  const activeTheme = themeMap.get(activeThemeName) ?? themes[0]
  const tokens = activeTheme?.tokens

  if (!tokens) {
    throw new Error('[veneer-ui] ThemeProvider: no valid theme provided')
  }

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme: activeThemeName,
      setTheme,
      themes: themes.map((t) => t.name),
      tokens,
    }),
    [activeThemeName, setTheme, themes, tokens],
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// ─── useTheme ──────────────────────────────────────────────────────────────────

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('[veneer-ui] useTheme must be used inside <ThemeProvider>')
  }
  return ctx
}
