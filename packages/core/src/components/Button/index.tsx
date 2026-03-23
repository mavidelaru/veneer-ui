import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { MotionPreset } from '@veneer-ui/tokens'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-[var(--veneer-color-background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--veneer-color-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--veneer-color-primary)] text-[var(--veneer-color-primary-foreground)] hover:opacity-90',
        destructive:
          'bg-[var(--veneer-color-destructive)] text-[var(--veneer-color-destructive-foreground)] hover:opacity-90',
        outline:
          'border border-[var(--veneer-color-input)] bg-[var(--veneer-color-background)] hover:bg-[var(--veneer-color-accent)] hover:text-[var(--veneer-color-accent-foreground)]',
        secondary:
          'bg-[var(--veneer-color-secondary)] text-[var(--veneer-color-secondary-foreground)] hover:opacity-80',
        ghost:
          'hover:bg-[var(--veneer-color-accent)] hover:text-[var(--veneer-color-accent-foreground)]',
        link: 'text-[var(--veneer-color-primary)] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm:      'h-9 px-3 text-xs',
        lg:      'h-11 px-8 text-base',
        icon:    'h-10 w-10',
      },
      rounded: {
        theme:  'rounded-[var(--veneer-radius-md)]',
        none:   'rounded-none',
        sm:     'rounded-[var(--veneer-radius-sm)]',
        full:   'rounded-[var(--veneer-radius-full)]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'theme',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  /**
   * Motion preset for hover/active transitions.
   * Maps to the veneer motion token system.
   * @default 'default'
   */
  motion?: MotionPreset
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      asChild = false,
      motion = 'default',
      style,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    const motionStyle: React.CSSProperties =
      motion !== 'none'
        ? { transition: `all var(--veneer-motion-transition-${motion})` }
        : {}

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        style={{ ...motionStyle, ...style }}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
