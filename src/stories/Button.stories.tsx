import Button from '@/components/Button'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

// * Metadata
const meta = {
  title: 'components/Button', // ? Here you can set the category and name of the component to differentiate between components with same name
  component: Button,
  tags: ['autodocs'], // ? Add auto documentation generation @see Storybook UI

  // TIP: You can also customize how the component props appears in the Storybook UI
  // argTypes: {
  //   variant: {
  //     control: { type: 'select' },
  //     options: ['primary', 'secondary'],
  //   },
  // },
} satisfies Meta<typeof Button>

export default meta

// * Stories
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
    className: /*tw*/ 'font-semibold',
    // onClick: () => alert('Primary Button Clicked!'),
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
}
