import * as React from 'react'
import { cn } from '../../lib/utils'

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-[var(--veneer-radius-md)] border border-[var(--veneer-color-input)] bg-[var(--veneer-color-background)] px-3 py-2 text-sm ring-offset-[var(--veneer-color-background)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--veneer-color-muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--veneer-color-ring)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
InputBase.displayName = 'InputBase'

export { InputBase }
