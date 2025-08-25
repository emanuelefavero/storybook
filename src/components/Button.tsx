import { cn } from '@/lib/utils'
import type { ComponentPropsWithRef, ReactNode } from 'react'

type Variant = 'primary' | 'secondary'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = ComponentPropsWithRef<'button'> & {
  children?: ReactNode
  variant?: Variant
  size?: Size
}

export default function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const variants: Record<Variant, string> = {
    primary: /*tw*/ 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: /*tw*/ 'bg-gray-500 text-white hover:bg-gray-600',
  }

  const sizes: Record<Size, string> = {
    sm: /*tw*/ 'px-2 py-1 text-sm',
    md: /*tw*/ 'px-4 py-2 text-md',
    lg: /*tw*/ 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={cn(
        'cursor-pointer rounded-lg border-none transition duration-250 outline-none active:scale-[.97]',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
