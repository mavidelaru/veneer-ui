import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-[var(--veneer-radius-full)] border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--veneer-color-ring)] focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[var(--veneer-color-primary)] text-[var(--veneer-color-primary-foreground)] hover:opacity-80',
        secondary:
          'border-transparent bg-[var(--veneer-color-secondary)] text-[var(--veneer-color-secondary-foreground)] hover:opacity-80',
        destructive:
          'border-transparent bg-[var(--veneer-color-destructive)] text-[var(--veneer-color-destructive-foreground)] hover:opacity-80',
        outline:
          'border-[var(--veneer-color-border)] text-[var(--veneer-color-foreground)]',
        muted:
          'border-transparent bg-[var(--veneer-color-muted)] text-[var(--veneer-color-muted-foreground)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
