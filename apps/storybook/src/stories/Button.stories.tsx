import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'veneer-ui'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    rounded: {
      control: 'select',
      options: ['theme', 'none', 'sm', 'full'],
    },
    motion: {
      control: 'select',
      options: ['none', 'subtle', 'default', 'expressive'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: { children: 'Button', variant: 'default' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const MotionPresets: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <Button motion="none">No motion</Button>
      <Button motion="subtle">Subtle</Button>
      <Button motion="default">Default</Button>
      <Button motion="expressive">Expressive</Button>
    </div>
  ),
}

export const Rounded: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <Button rounded="none">Square</Button>
      <Button rounded="sm">Small radius</Button>
      <Button rounded="theme">Theme radius</Button>
      <Button rounded="full">Pill</Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
}
