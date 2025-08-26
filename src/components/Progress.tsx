'use client'

import { cn } from '@/lib/utils'
import { type ComponentPropsWithRef } from 'react'

type Props = ComponentPropsWithRef<'div'> & {
  value: number // 0-100
  duration: number // in milliseconds
  bgClassName?: string
}

export default function Progress({
  value = 0,
  duration = 300,
  bgClassName,
  className,
}: Props) {
  // Clamp value between 0 and 100
  const clamped = Math.max(0, Math.min(100, value))

  return (
    <div
      className={cn(
        'h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700',
        bgClassName,
      )}
      role='progressbar'
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn('h-2 rounded-full bg-blue-600 transition-all', className)}
        style={{ width: `${clamped}%`, transitionDuration: `${duration}ms` }}
      ></div>
    </div>
  )
}
