import type { Meta, StoryObj } from '@storybook/react-vite'
import Input from './Input'

const meta: Meta<typeof Input> = {
    title: 'UI/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        placeholder: 'Enter text...',
    },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const WithLabel: Story = {
    args: {
        label: 'Token Address',
        placeholder: 'Enter token address',
    },
}

export const WithError: Story = {
    args: {
        label: 'Token Address',
        error: 'Invalid address',
        placeholder: 'Enter token address',
    },
}

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        disabled: true,
        placeholder: 'Disabled input',
    },
}
