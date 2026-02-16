import type { Meta, StoryObj } from '@storybook/react'
import Features from './Features'

const meta: Meta<typeof Features> = {
    title: 'Pages/Features',
    component: Features,
}

export default meta
type Story = StoryObj<typeof Features>

export const Default: Story = {}