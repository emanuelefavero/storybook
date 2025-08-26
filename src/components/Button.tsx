import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import type { ComponentPropsWithRef } from 'react'

const variants = cva(
  'cursor-pointer rounded-lg border-none transition duration-250 outline-none active:scale-[.97]',
  {
    variants: {
      variant: {
        primary: /*tw*/ 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: /*tw*/ 'bg-gray-500 text-white hover:bg-gray-600',
      },
      size: {
        sm: /*tw*/ 'px-2 py-1 text-sm',
        md: /*tw*/ 'px-4 py-2 text-base',
        lg: /*tw*/ 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type Props = ComponentPropsWithRef<'button'> & {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}: Props) {
  return (
    <button className={cn(variants({ variant, size }), className)} {...props}>
      {children}
    </button>
  )
}
