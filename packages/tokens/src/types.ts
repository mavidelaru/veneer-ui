// ─── Primitive Color Scale ────────────────────────────────────────────────────

export interface ColorScale {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

// ─── Semantic Color Tokens ────────────────────────────────────────────────────

export interface SemanticColorTokens {
  /** Page background */
  background: string
  /** Default text color */
  foreground: string
  /** Card/surface background */
  card: string
  cardForeground: string
  /** Popover/overlay background */
  popover: string
  popoverForeground: string
  /** Primary action color */
  primary: string
  primaryForeground: string
  /** Secondary/muted action */
  secondary: string
  secondaryForeground: string
  /** Muted backgrounds and text */
  muted: string
  mutedForeground: string
  /** Accent highlights */
  accent: string
  accentForeground: string
  /** Destructive/error actions */
  destructive: string
  destructiveForeground: string
  /** Border color */
  border: string
  /** Input border */
  input: string
  /** Focus ring */
  ring: string
}

export interface ColorTokens {
  primitives: {
    gray: ColorScale
    blue: ColorScale
    purple: ColorScale
    pink: ColorScale
    green: ColorScale
    red: ColorScale
    yellow: ColorScale
  }
  semantic: SemanticColorTokens
}

// ─── Typography Tokens ────────────────────────────────────────────────────────

export interface TypographyTokens {
  fontFamily: {
    sans: string
    mono: string
    display: string
  }
  fontSize: {
    xs: string
    sm: string
    base: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
    '4xl': string
    '5xl': string
  }
  fontWeight: {
    normal: string
    medium: string
    semibold: string
    bold: string
    extrabold: string
  }
  lineHeight: {
    none: string
    tight: string
    snug: string
    normal: string
    relaxed: string
    loose: string
  }
  letterSpacing: {
    tighter: string
    tight: string
    normal: string
    wide: string
    wider: string
    widest: string
  }
}

// ─── Spacing Tokens ───────────────────────────────────────────────────────────

export interface SpacingTokens {
  0: string
  px: string
  0.5: string
  1: string
  1.5: string
  2: string
  2.5: string
  3: string
  3.5: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
  11: string
  12: string
  14: string
  16: string
  20: string
  24: string
  28: string
  32: string
  36: string
  40: string
  44: string
  48: string
  52: string
  56: string
  60: string
  64: string
  72: string
  80: string
  96: string
}

// ─── Border Radius Tokens ─────────────────────────────────────────────────────

export interface RadiusTokens {
  none: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  full: string
}

// ─── Shadow Tokens ────────────────────────────────────────────────────────────

export interface ShadowTokens {
  none: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  inner: string
}

// ─── Motion Tokens ────────────────────────────────────────────────────────────

export interface DurationTokens {
  instant: string
  fast: string
  normal: string
  slow: string
  slower: string
}

export interface EasingTokens {
  linear: string
  easeIn: string
  easeOut: string
  easeInOut: string
  /** Bouncy spring feel */
  spring: string
}

export interface TransitionPresetTokens {
  /** fast + easeOut — micro-interactions, hover states */
  subtle: string
  /** normal + easeInOut — most UI transitions */
  default: string
  /** slow + spring — hero animations, emphasis */
  expressive: string
}

export interface MotionTokens {
  duration: DurationTokens
  easing: EasingTokens
  transition: TransitionPresetTokens
}

// ─── Composed Theme Tokens ────────────────────────────────────────────────────

export interface ThemeTokens {
  colors: ColorTokens
  typography: TypographyTokens
  spacing: SpacingTokens
  radius: RadiusTokens
  shadows: ShadowTokens
  motion: MotionTokens
}

// ─── Theme Definition ─────────────────────────────────────────────────────────

export interface VeneerTheme {
  name: string
  tokens: ThemeTokens
}

// ─── Motion Prop ─────────────────────────────────────────────────────────────

export type MotionPreset = 'subtle' | 'default' | 'expressive' | 'none'
