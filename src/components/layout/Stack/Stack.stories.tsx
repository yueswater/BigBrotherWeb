import type { Meta, StoryObj } from '@storybook/react'
import Stack from './Stack'

const meta: Meta<typeof Stack> = {
    title: 'Layout/Stack',
    component: Stack,
    tags: ['autodocs'],
    args: {
        children: [
            <div key="1" className="bg-primary p-4 text-white">Item 1</div>,
            <div key="2" className="bg-secondary p-4 text-white">Item 2</div>,
            <div key="3" className="bg-accent p-4 text-white">Item 3</div>,
        ],
        direction: 'col',
        gap: 'md',
        align: 'stretch',
        justify: 'start',
        className: '',
    },
    argTypes: {
        direction: {
            control: 'radio',
            options: ['row', 'col'],
        },
        gap: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        align: {
            control: 'select',
            options: ['start', 'center', 'end', 'stretch'],
        },
        justify: {
            control: 'select',
            options: ['start', 'center', 'end', 'between'],
        },
        className: {
            control: 'text',
        },
    },
}

export default meta

type Story = StoryObj<typeof Stack>

export const Vertical: Story = {
    args: {
        direction: 'col',
    },
}

export const Horizontal: Story = {
    args: {
        direction: 'row',
    },
}

export const RowWithSpaceBetween: Story = {
    args: {
        direction: 'row',
        justify: 'between',
        align: 'center',
        className: 'w-full',
    },
}

export const LargeGap: Story = {
    args: {
        gap: 'xl',
    },
}

export const CustomClassName: Story = {
    args: {
        className: 'border-2 border-dashed border-primary p-4',
    },
}