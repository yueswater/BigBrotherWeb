import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { User, LayoutDashboard, Settings, LogOut, Shield } from 'lucide-react'
import ProfileSidebar from './ProfileSidebar'

const meta: Meta<typeof ProfileSidebar> = {
    title: 'Layout/ProfileSidebar',
    component: ProfileSidebar,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <div className="bg-base-200 min-h-[600px] w-full">
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProfileSidebar>

export const Default: Story = {
    args: {
        isOpen: true,
        username: 'yueswater',
        email: 'sungpinyue@gmail.com',
        backgroundColor: 'bg-white',
        items: [
            { label: '個人資料', path: '/profile', icon: User },
            { label: '儀表板', path: '/dashboard', icon: LayoutDashboard },
            { label: '設定', path: '/settings', icon: Settings },
        ],
        footerAction: {
            label: '登出',
            icon: LogOut,
            onClick: () => alert('Logout clicked'),
            variant: 'danger'
        }
    },
}

export const CustomStyle: Story = {
    args: {
        isOpen: true,
        title: 'Account Manager',
        username: 'Admin Admin',
        email: 'admin@bigbrother.io',
        backgroundColor: 'bg-slate-50',
        items: [
            { label: 'Admin Panel', path: '/admin', icon: Shield },
            { label: 'System Logs', path: '/logs', icon: Settings },
        ],
        footerAction: {
            label: 'Switch Account',
            icon: User,
            onClick: () => alert('Switch clicked'),
            variant: 'primary'
        }
    },
}