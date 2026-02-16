import type { Meta, StoryObj } from '@storybook/react'
import ProfileInfoCard from './ProfileInfoCard'

const meta: Meta<typeof ProfileInfoCard> = {
    title: 'Profile/ProfileInfoCard',
    component: ProfileInfoCard,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProfileInfoCard>

export const Default: Story = {
    args: {
        username: 'yueswater',
        tier: '專業版',
        avatarUrl: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=yueswater'
    },
}