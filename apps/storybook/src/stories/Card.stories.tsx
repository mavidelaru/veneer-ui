import type { Meta, StoryObj } from '@storybook/react'
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Button, Badge,
} from 'veneer-ui'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    shadow: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    motion: {
      control: 'select',
      options: ['none', 'subtle', 'default', 'expressive'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: (args) => (
    <Card {...args} style={{ maxWidth: '380px' }}>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>A description of what this card is about.</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: '0.875rem' }}>Card content goes here. You can put any content inside a card.</p>
      </CardContent>
      <CardFooter style={{ gap: '0.5rem' }}>
        <Button size="sm">Action</Button>
        <Button size="sm" variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  ),
  args: { shadow: 'sm' },
}

export const WithBadge: Story = {
  render: () => (
    <Card style={{ maxWidth: '380px' }}>
      <CardHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <CardTitle>Feature card</CardTitle>
          <Badge variant="secondary">New</Badge>
        </div>
        <CardDescription>Introducing a new feature to the system.</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: '0.875rem' }}>This card demonstrates combining components together.</p>
      </CardContent>
    </Card>
  ),
}

export const ShadowScale: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <Card key={s} shadow={s} style={{ width: '120px', padding: '1rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600 }}>shadow-{s}</p>
        </Card>
      ))}
    </div>
  ),
}
