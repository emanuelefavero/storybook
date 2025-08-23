import type { ComponentPropsWithRef, ReactNode } from 'react'

type Variant = 'primary' | 'secondary'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = ComponentPropsWithRef<'button'> & {
  children?: ReactNode
  variant?: Variant
  size?: Size
  // onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const variants: Record<Variant, string> = {
    primary: /*tw*/ 'bg-blue-500 text-white',
    secondary: /*tw*/ 'bg-gray-500 text-white',
  }

  const sizes: Record<Size, string> = {
    sm: /*tw*/ 'px-2 py-1 text-sm',
    md: /*tw*/ 'px-4 py-2 text-md',
    lg: /*tw*/ 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={`${variants[variant]} ${sizes[size]} outline-none border-none cursor-pointer rounded-lg`}
      {...props}
    >
      {children}
    </button>
  )
}
