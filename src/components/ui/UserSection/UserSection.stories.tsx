import type { Meta, StoryObj } from '@storybook/react'
import UserSection from './UserSection'

const meta: Meta<typeof UserSection> = {
    title: 'UI/UserSection',
    component: UserSection,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof UserSection>

export const Default: Story = {
    args: { username: '品岳' }
}