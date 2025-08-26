import Progress from '@/components/Progress'
import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'

// * Metadata
const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
}

export default meta

// * Utils
// Custom hook to animate the progress value continuously from 0 to 100 over a specified duration
const useAnimatedValue = (duration: number) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(0)
    let frame: number
    const start = performance.now()

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(100, (elapsed / duration) * 100)
      setValue(progress)

      if (progress < 100) {
        frame = requestAnimationFrame(animate)
      }
    }

    frame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frame)
  }, [duration])

  return Math.round(value)
}

// * Stories
type Story = StoryObj<typeof Progress>

export const Fast: Story = {
  name: 'Fast (300ms)',
  render: function FastStory() {
    const value = useAnimatedValue(300)
    return <Progress value={value} duration={300} />
  },
}

// TIP: Let the duration prop control the animation speed by simply setting the value to 100 after a short delay
export const Slow: Story = {
  name: 'Slow (2000ms)',
  render: function SlowStory() {
    const [value, setValue] = useState(0) // Start at 0

    useEffect(() => {
      const timeout = setTimeout(() => setValue(100), 200)
      return () => clearTimeout(timeout)
    }, [])

    return <Progress value={value} duration={2000} />
  },
}
