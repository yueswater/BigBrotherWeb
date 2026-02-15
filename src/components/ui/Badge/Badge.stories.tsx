import type { Meta, StoryObj } from '@storybook/react-vite'
import Badge from './Badge'

const meta: Meta<typeof Badge> = {
    title: 'UI/Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        children: 'Badge',
        variant: 'primary',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'accent',
                'neutral',
                'success',
                'warning',
                'error',
            ],
        },
    },
}

export default meta

type Story = StoryObj<typeof Badge>

export const Primary: Story = {}

export const Secondary: Story = {
    args: { variant: 'secondary' },
}

export const Accent: Story = {
    args: { variant: 'accent' },
}

export const Neutral: Story = {
    args: { variant: 'neutral' },
}

export const Success: Story = {
    args: { variant: 'success' },
}

export const Warning: Story = {
    args: { variant: 'warning' },
}

export const Error: Story = {
    args: { variant: 'error' },
}
