import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '../../lib/utils'

const DialogBase = DialogPrimitive.Root
const DialogTriggerBase = DialogPrimitive.Trigger
const DialogPortalBase = DialogPrimitive.Portal
const DialogCloseBase = DialogPrimitive.Close

const DialogOverlayBase = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
))
DialogOverlayBase.displayName = DialogPrimitive.Overlay.displayName

const DialogContentBase = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortalBase>
    <DialogOverlayBase />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-[var(--veneer-color-border)] bg-[var(--veneer-color-background)] p-6 shadow-[var(--veneer-shadow-lg)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-[var(--veneer-radius-lg)]',
        className,
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortalBase>
))
DialogContentBase.displayName = DialogPrimitive.Content.displayName

const DialogHeaderBase = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
    {...props}
  />
)
DialogHeaderBase.displayName = 'DialogHeaderBase'

const DialogFooterBase = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
)
DialogFooterBase.displayName = 'DialogFooterBase'

const DialogTitleBase = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
DialogTitleBase.displayName = DialogPrimitive.Title.displayName

const DialogDescriptionBase = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-[var(--veneer-color-muted-foreground)]', className)}
    {...props}
  />
))
DialogDescriptionBase.displayName = DialogPrimitive.Description.displayName

export {
  DialogBase,
  DialogPortalBase,
  DialogOverlayBase,
  DialogCloseBase,
  DialogTriggerBase,
  DialogContentBase,
  DialogHeaderBase,
  DialogFooterBase,
  DialogTitleBase,
  DialogDescriptionBase,
}
