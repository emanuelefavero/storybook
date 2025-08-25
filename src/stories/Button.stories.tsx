import Button from '@/components/Button'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import type { ComponentProps } from 'react'

type StoryProps = Pick<
  ComponentProps<typeof Button>,
  'variant' | 'size' | 'children' | 'className' | 'onClick'
>
// TIP: You can also pass additional props here that are not part of the component props..., e.g. & { buttonText: string }

const meta: Meta<StoryProps> = {
  component: Button,
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
