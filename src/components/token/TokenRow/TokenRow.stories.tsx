import type { Meta, StoryObj } from '@storybook/react'
import TokenRow from './TokenRow'

const meta: Meta<typeof TokenRow> = {
    title: 'Token/TokenRow',
    component: TokenRow,
    decorators: [
        (Story) => (
            <table className="w-full">
                <tbody>
                    <Story />
                </tbody>
            </table>
        ),
    ],
    args: {
        name: 'Ethereum',
        symbol: 'ETH',
        balance: 1.45,
        status: 'active',
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

type Story = StoryObj<typeof TokenRow>

export const Active: Story = {
    args: {
        status: 'active',
    },
}

export const Stopped: Story = {
    args: {
        status: 'stopped',
        name: 'Bitcoin',
        symbol: 'BTC',
        balance: 0.05,
    },
}

export const Error: Story = {
    args: {
        status: 'error',
        name: 'Solana',
        symbol: 'SOL',
        balance: 25.12,
    },
}