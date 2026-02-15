import type { Meta, StoryObj } from '@storybook/react'
import TokenTable from './TokenTable'

const meta: Meta<typeof TokenTable> = {
    title: 'Token/TokenTable',
    component: TokenTable,
    tags: ['autodocs'],
    args: {
        tokens: [
            {
                name: 'OpenAI GPT-4o',
                symbol: 'gpt-4o',
                balance: 750000,
                limit: 1000000,
                status: 'active',
                lastUpdated: '2026-02-14 10:30',
            },
            {
                name: 'Anthropic Claude 3.5',
                symbol: 'claude-3-5',
                balance: 185000,
                limit: 200000,
                status: 'active',
                lastUpdated: '2026-02-14 09:15',
            },
            {
                name: 'Google Gemini 1.5 Pro',
                symbol: 'gemini-1.5',
                balance: 4800000,
                limit: 5000000,
                status: 'error',
                lastUpdated: '2026-02-13 22:00',
            },
            {
                name: 'Meta Llama 3',
                symbol: 'llama-3',
                balance: 50000,
                limit: 500000,
                status: 'stopped',
                lastUpdated: '2026-02-13 20:00',
            },
        ],
    },
}

export default meta

type Story = StoryObj<typeof TokenTable>

export const Default: Story = {}

export const Empty: Story = {
    args: {
        tokens: [],
    },
}