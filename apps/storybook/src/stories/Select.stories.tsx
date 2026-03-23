import type { Meta, StoryObj } from '@storybook/react'
import {
  Select, SelectTrigger, SelectValue, SelectContent,
  SelectGroup, SelectLabel, SelectItem, SelectSeparator,
} from 'veneer-ui'

const meta: Meta = {
  title: 'Components/Select',
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj = {
  render: () => (
    <Select>
      <SelectTrigger style={{ width: '200px' }}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithGroups: StoryObj = {
  render: () => (
    <Select>
      <SelectTrigger style={{ width: '240px' }}>
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>React ecosystem</SelectLabel>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectItem value="gatsby">Gatsby</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vue ecosystem</SelectLabel>
          <SelectItem value="nuxt">Nuxt</SelectItem>
          <SelectItem value="vite">Vite + Vue</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}
