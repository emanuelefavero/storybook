import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

type Props = React.ComponentPropsWithRef<'input'> & {
  variant?: 'default' | 'primary' | 'error' | 'warning' | 'success'
  width?: 'fit' | 'full'
}

const variants = cva(
  'flex rounded-lg border px-3 py-2 text-base ring-offset-(--background) placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-(--foreground) focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-(--foreground) bg-gray-500/5',
        primary: 'border-blue-500 bg-blue-500/5',
        error: 'border-red-500 bg-red-500/5',
        warning: 'border-yellow-500 bg-yellow-500/5',
        success: 'border-green-500 bg-green-500/5',
      },
      width: {
        fit: 'w-fit',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      width: 'full',
    },
  },
)

export default function Input({
  variant,
  className,
  type = 'text',
  ...props
}: Props) {
  return (
    <input
      type={type}
      className={cn(variants({ variant }), className)}
      {...props}
    />
  )
}
