import Stack from '@/components/Stack'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

type Props = React.ComponentProps<typeof Stack> & { numberOfChildren: number }
// TIP: `numberOfChildren` is an additional prop only for the Storybook stories

// * Metadata
const meta: Meta<Props> = {
  title: 'components/Stack',
  component: Stack,
  argTypes: {
    numberOfChildren: {
      options: [1, 2, 3, 5, 10],
      control: { type: 'select' },
    },
  },
  // Set defaults for additional props
  args: {
    numberOfChildren: 3,
  },
}

export default meta

// * Utils
// Generates children elements for the stack
function createChildren(numberOfChildren: number) {
  return Array.from({ length: numberOfChildren }, (_, index) => (
    <div key={index} className='rounded bg-gray-200 p-4 text-black'>
      Item {index + 1}
    </div>
  ))
}

// * Stories
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    numberOfChildren: 5,
  },

  // TIP: Instead of passing a `children` prop, we can also render children like so (it is useful when we have additional props like `numberOfChildren`)
  render: ({ numberOfChildren, ...args }) => (
    <Stack {...args}>{createChildren(numberOfChildren)}</Stack>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    numberOfChildren: 3,
  },
  render: ({ numberOfChildren, ...args }) => (
    <Stack {...args}>{createChildren(numberOfChildren)}</Stack>
  ),
}
