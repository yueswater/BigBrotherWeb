import type { Meta, StoryObj } from '@storybook/react'
import TokenStatusBadge from './TokenStatusBadge'

const meta: Meta<typeof TokenStatusBadge> = {
    title: 'Token/TokenStatusBadge',
    component: TokenStatusBadge,
    tags: ['autodocs'],
    args: {
        status: 'active',
    },
    argTypes: {
        status: {
            control: 'select',
            options: ['active', 'stopped', 'error', 'pending'],
        },
    },
}

export default meta

type Story = StoryObj<typeof TokenStatusBadge>

export const Active: Story = {
    args: {
        status: 'active',
    },
}

export const Stopped: Story = {
    args: {
        status: 'stopped',
    },
}

export const Error: Story = {
    args: {
        status: 'error',
    },
}

export const Pending: Story = {
    args: {
        status: 'pending',
    },
}
