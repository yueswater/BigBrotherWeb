import type { Meta, StoryObj } from '@storybook/react'
import Hero from './Hero'

const meta: Meta<typeof Hero> = {
    title: 'Layout/Hero',
    component: Hero,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {}

export const CustomContent: Story = {
    args: {
        title: <>Watching Every <span className="text-primary">Prompt</span></>,
        description: "Secure, fast, and transparent AI proxy service for enterprise teams.",
        ctaText: "Join the Beta",
    },
}