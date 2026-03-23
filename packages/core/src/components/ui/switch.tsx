import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '../../lib/utils'

const SwitchBase = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--veneer-color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--veneer-color-background)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--veneer-color-primary)] data-[state=unchecked]:bg-[var(--veneer-color-input)]',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-[var(--veneer-color-background)] shadow-[var(--veneer-shadow-sm)] ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      )}
    />
  </SwitchPrimitive.Root>
))
SwitchBase.displayName = SwitchPrimitive.Root.displayName

export { SwitchBase }
