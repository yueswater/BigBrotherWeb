import type { Meta, StoryObj } from '@storybook/react-vite'
import Spinner from './Spinner'

const meta: Meta<typeof Spinner> = {
    title: 'UI/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
        },
    },
}

export default meta

type Story = StoryObj<typeof Spinner>

export const XS: Story = {
    args: { size: 'xs' },
}

export const SM: Story = {
    args: { size: 'sm' },
}

export const MD: Story = {
    args: { size: 'md' },
}

export const LG: Story = {
    args: { size: 'lg' },
}
