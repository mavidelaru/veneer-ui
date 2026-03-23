import type { MotionPreset } from '@veneer-ui/tokens'

/**
 * Returns the CSS var() reference for a given token path.
 * @example tokenVar('color', 'primary') → 'var(--veneer-color-primary)'
 */
export function tokenVar(...segments: string[]): string {
  return `var(--veneer-${segments.join('-')})`
}

/**
 * Maps a MotionPreset to the corresponding CSS transition value reference.
 */
export function motionTransition(preset: MotionPreset): string | undefined {
  if (preset === 'none') return undefined
  return `all var(--veneer-motion-transition-${preset})`
}
