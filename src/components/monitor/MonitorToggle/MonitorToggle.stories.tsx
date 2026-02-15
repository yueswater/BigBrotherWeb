import type { Meta, StoryObj } from '@storybook/react'
import MonitorToggle from './MonitorToggle'

const meta: Meta<typeof MonitorToggle> = {
    title: 'Monitor/MonitorToggle',
    component: MonitorToggle,
}

export default meta

type Story = StoryObj<typeof MonitorToggle>

export const Running: Story = {
    args: {
        running: true,
    },
}

export const Stopped: Story = {
    args: {
        running: false,
    },
}

export const Loading: Story = {
    args: {
        running: false,
        loading: true,
    },
}
