'use client'

type Props = {
  value: number // 0-100
  duration: number // in milliseconds
}

export default function Progress({ value, duration }: Props) {
  // Clamp value between 0 and 100
  const clamped = Math.max(0, Math.min(100, value))

  return (
    <div
      className='h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700'
      role='progressbar'
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-2.5 rounded-full bg-blue-600 transition-all`}
        style={{ width: `${clamped}%`, transitionDuration: `${duration}ms` }}
      ></div>
    </div>
  )
}
