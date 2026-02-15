import type { Meta, StoryObj } from '@storybook/react'
import Toast from './Toast'

const meta: Meta<typeof Toast> = {
    title: 'UI/Toast',
    component: Toast,
    tags: ['autodocs'],
    argTypes: {
        onClose: { action: 'closed' }
    }
}

export default meta
type Story = StoryObj<typeof Toast>

export const Success: Story = {
    args: {
        message: 'Instance created successfully!',
        type: 'success',
    },
}

export const Error: Story = {
    args: {
        message: 'Failed to connect to provider.',
        type: 'error',
    },
}