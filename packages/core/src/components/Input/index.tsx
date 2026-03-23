import * as React from 'react'
import type { MotionPreset } from '@veneer-ui/tokens'
import { cn } from '../../lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Motion preset applied to focus/hover transitions.
   * @default 'subtle'
   */
  motion?: MotionPreset
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, motion = 'subtle', style, ...props }, ref) => {
    const motionStyle: React.CSSProperties =
      motion !== 'none'
        ? { transition: `all var(--veneer-motion-transition-${motion})` }
        : {}

    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-[var(--veneer-radius-md)] border border-[var(--veneer-color-input)] bg-[var(--veneer-color-background)] px-3 py-2 text-sm text-[var(--veneer-color-foreground)] ring-offset-[var(--veneer-color-background)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--veneer-color-muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--veneer-color-ring)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        style={{ ...motionStyle, ...style }}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
