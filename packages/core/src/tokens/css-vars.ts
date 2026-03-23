import type { ThemeTokens } from '@veneer-ui/tokens'

type CSSVarMap = Record<string, string>

/**
 * Converts a ThemeTokens object into a flat map of CSS custom property names → values.
 * e.g. tokens.colors.semantic.primary → '--veneer-color-primary': 'oklch(...)'
 */
export function tokensToCSSVars(tokens: ThemeTokens): CSSVarMap {
  const vars: CSSVarMap = {}

  // ── Colors: primitives ───────────────────────────────────────────────────
  for (const [scale, steps] of Object.entries(tokens.colors.primitives)) {
    for (const [step, value] of Object.entries(steps as unknown as Record<string, string>)) {
      vars[`--veneer-color-${scale}-${step}`] = value
    }
  }

  // ── Colors: semantic ─────────────────────────────────────────────────────
  for (const [key, value] of Object.entries(tokens.colors.semantic)) {
    // camelCase → kebab-case
    const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase()
    vars[`--veneer-color-${kebab}`] = value
  }

  // ── Typography ────────────────────────────────────────────────────────────
  for (const [prop, values] of Object.entries(tokens.typography)) {
    for (const [key, value] of Object.entries(values as Record<string, string>)) {
      const kebabProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase()
      vars[`--veneer-font-${kebabProp}-${key}`] = value
    }
  }

  // ── Spacing ───────────────────────────────────────────────────────────────
  for (const [key, value] of Object.entries(tokens.spacing)) {
    vars[`--veneer-space-${key}`] = value
  }

  // ── Radius ────────────────────────────────────────────────────────────────
  for (const [key, value] of Object.entries(tokens.radius)) {
    vars[`--veneer-radius-${key}`] = value
  }

  // ── Shadows ───────────────────────────────────────────────────────────────
  for (const [key, value] of Object.entries(tokens.shadows)) {
    vars[`--veneer-shadow-${key}`] = value
  }

  // ── Motion: duration ──────────────────────────────────────────────────────
  for (const [key, value] of Object.entries(tokens.motion.duration)) {
    vars[`--veneer-motion-duration-${key}`] = value
  }

  // ── Motion: easing ────────────────────────────────────────────────────────
  for (const [key, value] of Object.entries(tokens.motion.easing)) {
    vars[`--veneer-motion-easing-${key}`] = value
  }

  // ── Motion: transition presets ────────────────────────────────────────────
  for (const [key, value] of Object.entries(tokens.motion.transition)) {
    vars[`--veneer-motion-transition-${key}`] = value
  }

  return vars
}

/**
 * Renders a CSS vars map as an inline CSS string for a given selector.
 */
export function renderCSSBlock(selector: string, vars: CSSVarMap): string {
  const declarations = Object.entries(vars)
    .map(([prop, value]) => `  ${prop}: ${value};`)
    .join('\n')
  return `${selector} {\n${declarations}\n}`
}
