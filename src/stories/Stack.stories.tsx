import Stack from '@/components/Stack'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

// * Metadata
const meta = {
  component: Stack,
} satisfies Meta<typeof Stack>

export default meta

// * Utils
// Generates 3 children elements for the stack
const children = Array.from({ length: 3 }, (_, index) => (
  <div key={index} className='rounded bg-gray-200 p-4 text-black'>
    Item {index + 1}
  </div>
))

// * Stories
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    children,
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    children,
  },
}
