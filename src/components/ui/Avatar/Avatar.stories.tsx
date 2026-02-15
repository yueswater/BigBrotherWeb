import type { Meta, StoryObj } from '@storybook/react'
import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
    title: 'UI/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {
        fallback: 'Admin',
        size: 'md',
    },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
    args: {
        fallback: '品岳',
    },
}

export const WithImage: Story = {
    args: {
        src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        fallback: '品岳',
    },
}