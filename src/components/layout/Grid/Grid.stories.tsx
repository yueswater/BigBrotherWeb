import type { Meta, StoryObj } from '@storybook/react'
import Grid from './Grid'

const meta: Meta<typeof Grid> = {
    title: 'Layout/Grid',
    component: Grid,
    tags: ['autodocs'],
    args: {
        children: Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-primary/20 border border-primary p-4 text-center">
                Item {i + 1}
            </div>
        )),
        cols: 3,
        gap: 'md',
    },
    argTypes: {
        cols: {
            control: { type: 'select' },
            options: [1, 2, 3, 4, 5, 6],
        },
        gap: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
    },
}

export default meta

type Story = StoryObj<typeof Grid>

export const Default: Story = {}

export const TwoColumns: Story = {
    args: {
        cols: 2,
    },
}

export const SixColumns: Story = {
    args: {
        cols: 6,
    },
}

export const LargeGap: Story = {
    args: {
        gap: 'xl',
    },
}

export const SmallGap: Story = {
    args: {
        gap: 'xs',
    },
}