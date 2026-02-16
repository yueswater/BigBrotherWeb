import type { Meta, StoryObj } from '@storybook/react'
import SecurityTab from './SecurityTab'

const meta: Meta<typeof SecurityTab> = {
    title: 'Profile/SecurityTab',
    component: SecurityTab,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SecurityTab>

export const Default: Story = {
    args: {
        passwordData: {
            old_password: '',
            new_password: '',
            confirm_password: '',
        },
        loading: false,
    },
}