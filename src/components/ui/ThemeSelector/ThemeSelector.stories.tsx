import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSelector } from './ThemeSelector'
import { ThemeProvider } from '@/context/ThemeContext'

const meta: Meta<typeof ThemeSelector> = {
    title: 'UI/ThemeSelector',
    component: ThemeSelector,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className="w-[400px] h-[500px] flex items-start justify-center pt-10 bg-base-300 border-4 border-dashed border-base-content/20">
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof ThemeSelector>

export const Default: Story = {}