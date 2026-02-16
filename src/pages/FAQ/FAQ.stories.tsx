import type { Meta, StoryObj } from '@storybook/react'
import FAQ from './FAQ'

const meta: Meta<typeof FAQ> = {
    title: 'Pages/FAQ',
    component: FAQ,
}

export default meta
type Story = StoryObj<typeof FAQ>

export const Default: Story = {}