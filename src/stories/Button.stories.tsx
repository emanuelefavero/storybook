import Button from '@/components/Button'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import type { ComponentProps } from 'react'

type StoryProps = Pick<
  ComponentProps<typeof Button>,
  'variant' | 'size' | 'children' | 'className' | 'onClick'
>

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
    className: '',
    // onClick: () => alert('Primary Button Clicked!'),
  },
}
