import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { MotionPreset } from '@veneer-ui/tokens'
import { cn } from '../../lib/utils'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  /**
   * Motion preset that controls the delay before the tooltip appears.
   * 'subtle' → fast delay, 'expressive' → slower reveal
   * @default 'subtle'
   */
  motion?: MotionPreset
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, motion = 'subtle', ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-[var(--veneer-radius-md)] border border-[var(--veneer-color-border)] bg-[var(--veneer-color-popover)] px-3 py-1.5 text-xs text-[var(--veneer-color-popover-foreground)] shadow-[var(--veneer-shadow-md)] animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      style={
        motion !== 'none'
          ? { animationDuration: `var(--veneer-motion-duration-${motion === 'subtle' ? 'fast' : motion === 'expressive' ? 'slow' : 'normal'})` }
          : undefined
      }
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = 'TooltipContent'

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent }
