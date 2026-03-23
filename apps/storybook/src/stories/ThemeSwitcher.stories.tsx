import type { Meta, StoryObj } from '@storybook/react'
import {
  Button, Badge, Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter, Input, Switch,
} from 'veneer-ui'

const meta: Meta = {
  title: 'Overview/Theme Comparison',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

function ComponentShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', backgroundColor: 'var(--veneer-color-background)', minHeight: '100%' }}>
      <div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--veneer-color-foreground)' }}>
          Buttons
        </h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--veneer-color-foreground)' }}>
          Badges
        </h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="muted">Muted</Badge>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--veneer-color-foreground)' }}>
          Inputs & Controls
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '320px' }}>
          <Input placeholder="Text input" />
          <Input placeholder="Email" type="email" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Switch id="toggle" defaultChecked />
            <label htmlFor="toggle" style={{ fontSize: '0.875rem', color: 'var(--veneer-color-foreground)' }}>Toggle switch</label>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--veneer-color-foreground)' }}>
          Card
        </h2>
        <Card style={{ maxWidth: '360px' }}>
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>A description of this card component.</CardDescription>
          </CardHeader>
          <CardContent>
            <p style={{ fontSize: '0.875rem', color: 'var(--veneer-color-muted-foreground)' }}>
              Content area with some text demonstrating the card layout.
            </p>
          </CardContent>
          <CardFooter style={{ gap: '0.5rem' }}>
            <Button size="sm">Confirm</Button>
            <Button size="sm" variant="outline">Cancel</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export const SideBySide: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div data-veneer-theme="neutral">
        <div style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', background: 'var(--veneer-color-muted)', color: 'var(--veneer-color-muted-foreground)' }}>
          Neutral theme
        </div>
        <ComponentShowcase />
      </div>
      <div data-veneer-theme="vibrant" style={{ borderLeft: '1px solid var(--veneer-color-border)' }}>
        <div style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', background: 'var(--veneer-color-muted)', color: 'var(--veneer-color-muted-foreground)' }}>
          Vibrant theme
        </div>
        <ComponentShowcase />
      </div>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
}
