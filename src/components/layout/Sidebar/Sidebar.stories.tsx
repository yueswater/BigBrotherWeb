import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { LayoutDashboard, Key, History, Settings } from 'lucide-react'
import Sidebar from './Sidebar'

const meta: Meta<typeof Sidebar> = {
    title: 'Layout/Sidebar',
    component: Sidebar,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <div className="h-screen bg-base-200 flex">
                    <Story />
                    <div className="flex-1 p-8 text-secondary">Main Content Area</div>
                </div>
            </BrowserRouter>
        ),
    ],
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Sidebar>

const defaultItems = [
    { label: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { label: 'API Keys', path: '/keys', icon: <Key size={20} /> },
    { label: 'Usage Logs', path: '/logs', icon: <History size={20} /> },
    { label: 'Settings', path: '/settings', icon: <Settings size={20} /> },
]

export const Default: Story = {
    args: {
        items: defaultItems,
        defaultCollapsed: false,
    },
}

export const Collapsed: Story = {
    args: {
        items: defaultItems,
        defaultCollapsed: true,
    },
}