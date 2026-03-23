import * as React from 'react'
import type { MotionPreset } from '@veneer-ui/tokens'
import { cn } from '../../lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Shadow elevation level using token scale.
   * @default 'sm'
   */
  shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /**
   * Motion preset for hover transitions.
   * @default 'none'
   */
  motion?: MotionPreset
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, shadow = 'sm', motion = 'none', style, ...props }, ref) => {
    const motionStyle: React.CSSProperties =
      motion !== 'none'
        ? { transition: `all var(--veneer-motion-transition-${motion})` }
        : {}

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-[var(--veneer-radius-lg)] border border-[var(--veneer-color-border)] bg-[var(--veneer-color-card)] text-[var(--veneer-color-card-foreground)]',
          className,
        )}
        style={{
          boxShadow: `var(--veneer-shadow-${shadow})`,
          ...motionStyle,
          ...style,
        }}
        {...props}
      />
    )
  },
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-[var(--veneer-color-muted-foreground)]', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
