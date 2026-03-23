// ─── Theme ────────────────────────────────────────────────────────────────────
export { ThemeProvider, useTheme } from './theme/ThemeProvider'
export type { ThemeProviderProps } from './theme/ThemeProvider'

// ─── Token utilities ──────────────────────────────────────────────────────────
export { tokenVar, motionTransition } from './tokens/token-utils'
export { tokensToCSSVars } from './tokens/css-vars'

// ─── Components ───────────────────────────────────────────────────────────────
export { Button, buttonVariants } from './components/Button'
export type { ButtonProps } from './components/Button'

export { Input } from './components/Input'
export type { InputProps } from './components/Input'

export { Badge, badgeVariants } from './components/Badge'
export type { BadgeProps } from './components/Badge'

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './components/Card'
export type { CardProps } from './components/Card'

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './components/Dialog'
export type { DialogContentProps } from './components/Dialog'

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from './components/Select'

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './components/Tooltip'
export type { TooltipContentProps } from './components/Tooltip'

export { Switch } from './components/Switch'
export type { SwitchProps } from './components/Switch'

// ─── Token re-exports ─────────────────────────────────────────────────────────
export type {
  VeneerTheme,
  ThemeTokens,
  MotionPreset,
  ColorTokens,
  TypographyTokens,
  SpacingTokens,
  RadiusTokens,
  ShadowTokens,
  MotionTokens,
} from '@veneer-ui/tokens'

export { neutralTheme, vibrantTheme } from '@veneer-ui/tokens'
