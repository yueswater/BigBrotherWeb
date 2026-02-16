import type { Meta, StoryObj } from '@storybook/react'
import AccountTab from './AccountTab'

const meta: Meta<typeof AccountTab> = {
    title: 'Profile/AccountTab',
    component: AccountTab,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AccountTab>

export const Default: Story = {
    args: {
        fullName: 'Anthony Sung',
        username: 'yueswater',
        email: 'sungpinyue@gmail.com',
        tier: '專業版',
        loading: false,
    },
}