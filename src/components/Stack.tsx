import type { PropsWithChildren } from 'react'

type Orientation = 'horizontal' | 'vertical'

type StackProps = PropsWithChildren & {
  orientation?: Orientation
}

export default function Stack({
  children,
  orientation = 'horizontal',
}: StackProps) {
  const orientations: Record<Orientation, string> = {
    horizontal: /*tw*/ 'flex-row',
    vertical: /*tw*/ 'flex-col',
  }

  return (
    <div className={`flex ${orientations[orientation] || ''} gap-4`}>
      {children}
    </div>
  )
}
