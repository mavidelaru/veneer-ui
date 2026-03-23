import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from 'veneer-ui'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    motion: {
      control: 'select',
      options: ['none', 'subtle', 'default', 'expressive'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: { motion: 'default' },
}

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Switch id="notifications" />
      <label htmlFor="notifications" style={{ fontSize: '0.875rem', cursor: 'pointer' }}>
        Enable notifications
      </label>
    </div>
  ),
}

export const MotionPresets: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {(['none', 'subtle', 'default', 'expressive'] as const).map((m) => (
        <div key={m} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Switch motion={m} defaultChecked={m !== 'none'} />
          <span style={{ fontSize: '0.875rem' }}>motion="{m}"</span>
        </div>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true, defaultChecked: true },
}
