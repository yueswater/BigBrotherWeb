import type { Meta, StoryObj } from '@storybook/react'
import MonitorStatus from './MonitorStatus'

const meta: Meta<typeof MonitorStatus> = {
    title: 'Monitor/MonitorStatus',
    component: MonitorStatus,
}

export default meta

type Story = StoryObj<typeof MonitorStatus>

export const Running: Story = {
    args: {
        status: 'running',
    },
}

export const Stopped: Story = {
    args: {
        status: 'stopped',
    },
}

export const Error: Story = {
    args: {
        status: 'error',
    },
}
