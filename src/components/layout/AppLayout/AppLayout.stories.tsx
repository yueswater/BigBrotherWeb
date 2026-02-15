import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import AppLayout from './AppLayout'
import Hero from '../Hero'

const meta: Meta<typeof AppLayout> = {
    title: 'Layout/AppLayout',
    component: AppLayout,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <AuthProvider>
                    <Story />
                </AuthProvider>
            </BrowserRouter>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },
}

export default meta

type Story = StoryObj<typeof AppLayout>

export const LandingPage: Story = {
    args: {
        isAuthenticated: false,
        children: <Hero />,
    },
}

export const DashboardView: Story = {
    args: {
        isAuthenticated: true,
        username: '品岳',
        children: (
            <div className="p-8">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-base-content">System Overview</h1>
                    <p className="text-secondary">Welcome back to the command center.</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-40 bg-base-100 rounded-3xl border border-base-300 flex items-center justify-center shadow-sm text-secondary font-mono">
                            Widget {i}
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
}