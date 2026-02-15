import type { Meta, StoryObj } from '@storybook/react'
import Container from './Container'

const meta: Meta<typeof Container> = {
    title: 'Layout/Container',
    component: Container,
    tags: ['autodocs'],
    args: {
        children: (
            <div className="bg-primary/10 border-2 border-dashed border-primary p-10 text-center">
                Container Content
            </div>
        ),
        size: 'lg',
        center: true,
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl', 'full'],
        },
    },
}

export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {}

export const Small: Story = {
    args: {
        size: 'sm',
    },
}

export const Medium: Story = {
    args: {
        size: 'md',
    },
}

export const ExtraLarge: Story = {
    args: {
        size: 'xl',
    },
}

export const FullWidth: Story = {
    args: {
        size: 'full',
    },
}

export const LeftAligned: Story = {
    args: {
        center: false,
    },
}