import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LoginPage from './LoginPage'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { retry: false },
    },
})

const meta: Meta<typeof LoginPage> = {
    title: 'Pages/Auth/LoginPage',
    component: LoginPage,
    decorators: [
        (Story) => (
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </QueryClientProvider>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },
}

export default meta

type Story = StoryObj<typeof LoginPage>

export const Default: Story = {}