import type { Meta, StoryObj } from '@storybook/react'
import TokenCard from './TokenCard'

const meta: Meta<typeof TokenCard> = {
    title: 'Token/TokenCard',
    component: TokenCard,
    tags: ['autodocs'],
    args: {
        name: 'OpenAI GPT-4o',
        symbol: 'sk-proj-...8a1f',
        status: 'active',
        balance: 750000,
        limit: 1000000,
        lastUpdated: '2026-02-14 10:30',
    },
    argTypes: {
        status: {
            control: 'select',
            options: ['active', 'stopped', 'error'],
        },
        onStart: { action: 'started' },
        onStop: { action: 'stopped' },
    },
}

export default meta

type Story = StoryObj<typeof TokenCard>

export const Active: Story = {
    args: {
        status: 'active',
        balance: 450000,
    },
}

export const LowBalance: Story = {
    args: {
        status: 'active',
        balance: 950000,
        limit: 1000000,
    },
}

export const Stopped: Story = {
    args: {
        status: 'stopped',
        name: 'Claude 3.5 Sonnet',
        symbol: 'ant-api-...b2c1',
        balance: 12000,
        limit: 200000,
    },
}

export const Error: Story = {
    args: {
        status: 'error',
        name: 'Gemini 1.5 Pro',
        symbol: 'goog-ai-...992d',
        balance: 0,
        limit: 5000000,
    },
}