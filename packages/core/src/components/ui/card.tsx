import * as React from 'react'
import { cn } from '../../lib/utils'

const CardBase = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-[var(--veneer-radius-lg)] border border-[var(--veneer-color-border)] bg-[var(--veneer-color-card)] text-[var(--veneer-color-card-foreground)] shadow-[var(--veneer-shadow-sm)]',
      className,
    )}
    {...props}
  />
))
CardBase.displayName = 'CardBase'

const CardHeaderBase = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeaderBase.displayName = 'CardHeaderBase'

const CardTitleBase = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
CardTitleBase.displayName = 'CardTitleBase'

const CardDescriptionBase = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-[var(--veneer-color-muted-foreground)]', className)}
    {...props}
  />
))
CardDescriptionBase.displayName = 'CardDescriptionBase'

const CardContentBase = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContentBase.displayName = 'CardContentBase'

const CardFooterBase = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooterBase.displayName = 'CardFooterBase'

export {
  CardBase,
  CardHeaderBase,
  CardTitleBase,
  CardDescriptionBase,
  CardContentBase,
  CardFooterBase,
}
