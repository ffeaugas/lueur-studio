import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "relative cursor-pointer bg-creme text-[18px] font-sprat-regular text-black py-2 px-4 inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive group border border-transparent",
  {
    variants: {
      variant: {
        default:
          'hover:text-creme hover:bg-transparent hover:border-creme hover:border transition-all duration-500',
        rounded:
          'hover:text-creme hover:bg-transparent hover:border-creme hover:border rounded-full transition-all duration-500',
        discover:
          'bg-black/70 text-creme rounded-md px-[10px] text-[16px] tracking-[-0.06em] font-sprat-light discover-button-shadow flex flex-row items-center justify-center',
        purple:
          'font-helvetica-regular bg-dark-purple rounded-full text-creme text-[15px] !py-4 border border-light-purple',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {variant === 'default' ||
        (variant === 'rounded' && (
          <div
            className="absolute inset-0 h-[30px] w-full top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2 blur-[15px] bg-light-purple z-0 opacity-0 group-hover:opacity-100 transition-all duration-500 active:opacity-0"
          />
        ))}
      <span className="relative z-10 flex flex-row items-center justify-center gap-2">
        {children}
      </span>
    </Comp>
  );
}

export { Button, buttonVariants };
