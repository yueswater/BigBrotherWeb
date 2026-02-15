import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'
import AppLayout from '@/components/layout/AppLayout'

const meta: Meta<typeof HomePage> = {
    title: 'Pages/Home/HomePage',
    component: HomePage,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <AppLayout>
                    <Story />
                </AppLayout>
            </BrowserRouter>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },
}

export default meta

type Story = StoryObj<typeof HomePage>

export const Default: Story = {}