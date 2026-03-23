import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import type { MotionPreset } from '@veneer-ui/tokens'
import { cn } from '../../lib/utils'

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /**
   * Motion preset for the thumb slide animation.
   * @default 'default'
   */
  motion?: MotionPreset
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, motion = 'default', ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--veneer-color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--veneer-color-background)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--veneer-color-primary)] data-[state=unchecked]:bg-[var(--veneer-color-input)]',
      className,
    )}
    style={
      motion !== 'none'
        ? { transition: `background-color var(--veneer-motion-transition-${motion})` }
        : undefined
    }
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-[var(--veneer-color-background)] shadow-[var(--veneer-shadow-sm)] ring-0 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      )}
      style={
        motion !== 'none'
          ? { transition: `transform var(--veneer-motion-transition-${motion})` }
          : undefined
      }
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = 'Switch'

export { Switch }
