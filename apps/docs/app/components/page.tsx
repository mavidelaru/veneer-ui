'use client'

import {
  Button, Badge, Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter, Input, Switch, Select, SelectTrigger,
  SelectValue, SelectContent, SelectItem,
  Tooltip, TooltipTrigger, TooltipContent, TooltipProvider,
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogFooter,
} from 'veneer-ui'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2
        style={{
          fontSize: '1.125rem',
          fontWeight: 600,
          marginBottom: '1.25rem',
          color: 'var(--veneer-color-foreground)',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid var(--veneer-color-border)',
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function ComponentsPage() {
  return (
    <TooltipProvider>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--veneer-color-foreground)' }}>
          Components
        </h1>
        <p style={{ color: 'var(--veneer-color-muted-foreground)', marginBottom: '3rem', fontSize: '1rem' }}>
          All components respond to the active theme. Switch themes in the nav to see the difference.
        </p>

        <Section title="Button">
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Section>

        <Section title="Badge">
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="muted">Muted</Badge>
          </div>
        </Section>

        <Section title="Input">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '360px' }}>
            <Input placeholder="Default input" />
            <Input type="email" placeholder="Email input" />
            <Input type="password" placeholder="Password input" />
            <Input disabled placeholder="Disabled input" />
          </div>
        </Section>

        <Section title="Switch">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {(['subtle', 'default', 'expressive'] as const).map((m) => (
              <div key={m} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Switch motion={m} defaultChecked={m !== 'subtle'} />
                <span style={{ fontSize: '0.875rem', color: 'var(--veneer-color-muted-foreground)' }}>
                  motion="{m}"
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Select">
          <Select>
            <SelectTrigger style={{ width: '240px' }}>
              <SelectValue placeholder="Select a framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="remix">Remix</SelectItem>
              <SelectItem value="vite">Vite</SelectItem>
              <SelectItem value="astro">Astro</SelectItem>
            </SelectContent>
          </Select>
        </Section>

        <Section title="Tooltip">
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
              <Tooltip key={side}>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">{side}</Button>
                </TooltipTrigger>
                <TooltipContent side={side}>
                  <p>Tooltip on {side}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </Section>

        <Section title="Card">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {(['xs', 'sm', 'md', 'lg'] as const).map((shadow) => (
              <Card key={shadow} shadow={shadow}>
                <CardHeader>
                  <CardTitle style={{ fontSize: '1rem' }}>shadow-{shadow}</CardTitle>
                  <CardDescription>A card with {shadow} shadow elevation.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p style={{ fontSize: '0.875rem' }}>Content area.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">Action</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Dialog">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1rem 0' }}>
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Section>
      </div>
    </TooltipProvider>
  )
}
