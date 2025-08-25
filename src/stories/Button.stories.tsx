import Button from '@/components/Button'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import type { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Button>
// TIP: You can also pass additional props here that are not part of the component props..., e.g. & { buttonText: string }

const meta: Meta<StoryProps> = {
  component: Button,

  // TIP: You can also customize how the component props appears in the Storybook UI
  // argTypes: {
  //   variant: {
  //     control: { type: 'select' },
  //     options: ['primary', 'secondary'],
  //   },
  // },
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
    className: /*tw*/ 'font-semibold',
    // onClick: () => alert('Primary Button Clicked!'),
  },
  // TIP: ...and then destructure the props in the component render
  // render: ({ buttonText }, ...args) => <Button {...args}>{buttonText}</Button>,
}
