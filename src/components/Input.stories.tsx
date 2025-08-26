// TIP: We can also add Storybook components in the same folder of the component

import Input from '@/components/Input'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

// * Metadata
const meta = {
  title: 'components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

// * Stories
type Story = StoryObj<typeof meta>

export const NoProps: Story = {
  args: {
    placeholder: 'No Props',
  },
} // ? Should look the same as Default

export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: 'Default Variant',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    placeholder: 'Primary Variant',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    placeholder: 'Error Variant',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    placeholder: 'Warning Variant',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    placeholder: 'Success Variant',
  },
}

export const Fit: Story = {
  args: {
    width: 'fit',
    placeholder: 'Fit Width',
  },
}

export const Full: Story = {
  args: {
    width: 'full',
    placeholder: 'Full Width',
  },
}
