import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,

    tags: ['autodocs'],

    parameters: {
        layout: 'centered',
    },

    args: {
        children: 'Button',
        variant: 'primary',
        size: 'md',
        loading: false,
        disabled: false,
    },

    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'accent', 'neutral', 'danger', 'ghost'],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
        },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
        onClick: { action: 'clicked' },
    },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {}

export const Secondary: Story = {
    args: { variant: 'secondary' },
}

export const Large: Story = {
    args: { size: 'lg' },
}

export const Small: Story = {
    args: { size: 'sm' },
}

export const Loading: Story = {
    args: { loading: true },
}

export const Disabled: Story = {
    args: { disabled: true },
}
