import type { Meta, StoryObj } from '@storybook/react-vite'
import Card from './Card'

const meta: Meta<typeof Card> = {
    title: 'UI/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
    args: {
        children: 'This is a card.',
    },
}

export const WithContent: Story = {
    args: {
        children: (
            <div className="flex flex-col gap-2">
                <div className="text-lg font-bold">Token Monitor</div>
                <div className="text-sm opacity-70">Monitoring active tokens</div>
            </div>
        ),
    },
}
