import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RegisterPage from './RegisterPage'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { retry: false },
    },
})

const meta: Meta<typeof RegisterPage> = {
    title: 'Pages/Auth/RegisterPage',
    component: RegisterPage,
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

type Story = StoryObj<typeof RegisterPage>

export const Default: Story = {}