import { cn } from '@/lib/utils'

type Props = React.ComponentPropsWithRef<'input'>

export default function Input({ className, type = 'text', ...props }: Props) {
  return (
    <input
      type={type}
      className={cn(
        'border-input placeholder:text-muted-(--foreground) focus-visible:ring-ring flex w-full rounded-md border bg-transparent px-3 py-2 text-base ring-offset-(--background) file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-(--foreground) focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}
