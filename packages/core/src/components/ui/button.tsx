import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--veneer-radius-md)] text-sm font-medium ring-offset-[var(--veneer-color-background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--veneer-color-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--veneer-color-primary)] text-[var(--veneer-color-primary-foreground)] hover:bg-[var(--veneer-color-primary)]/90',
        destructive:
          'bg-[var(--veneer-color-destructive)] text-[var(--veneer-color-destructive-foreground)] hover:bg-[var(--veneer-color-destructive)]/90',
        outline:
          'border border-[var(--veneer-color-input)] bg-[var(--veneer-color-background)] hover:bg-[var(--veneer-color-accent)] hover:text-[var(--veneer-color-accent-foreground)]',
        secondary:
          'bg-[var(--veneer-color-secondary)] text-[var(--veneer-color-secondary-foreground)] hover:bg-[var(--veneer-color-secondary)]/80',
        ghost:
          'hover:bg-[var(--veneer-color-accent)] hover:text-[var(--veneer-color-accent-foreground)]',
        link: 'text-[var(--veneer-color-primary)] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm:      'h-9 rounded-[var(--veneer-radius-sm)] px-3',
        lg:      'h-11 rounded-[var(--veneer-radius-lg)] px-8',
        icon:    'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
ButtonBase.displayName = 'ButtonBase'

export { ButtonBase, buttonVariants }
