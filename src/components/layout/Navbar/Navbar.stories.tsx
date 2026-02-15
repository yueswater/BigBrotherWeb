import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter, Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Navbar from './Navbar'

const meta: Meta<typeof Navbar> = {
    title: 'Layout/Navbar',
    component: Navbar,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <div className="bg-base-200 min-h-screen font-sans">
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Guest: Story = {
    args: {
        isAuthenticated: false,
        links: [
            { label: '功能', path: '/features' },
            { label: '價格', path: '/pricing' },
            { label: '常見問題', path: '/faq' },
        ],
        children: (
            <Link to="/login">
                <Button variant="primary" className="rounded-xl px-8 font-bold">Login</Button>
            </Link>
        )
    },
}

export const Authenticated: Story = {
    args: {
        isAuthenticated: true,
        username: '品岳',
        onUserClick: () => alert('Open Profile Sidebar'),
        children: (
            <Button
                variant="ghost"
                size="sm"
                className="font-bold text-error hover:bg-error/10"
            >
                Logout
            </Button>
        )
    },
}