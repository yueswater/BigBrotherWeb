import type { Meta, StoryObj } from '@storybook/react'
import AvatarSelectorModal from './AvatarSelectorModal'

const meta: Meta<typeof AvatarSelectorModal> = {
    title: 'Profile/AvatarSelectorModal',
    component: AvatarSelectorModal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AvatarSelectorModal>

export const Default: Story = {
    args: {
        isOpen: true,
        currentSeed: 'Aidan',
        onClose: () => console.log('Modal closed'),
        onSelect: (seed: string) => console.log('Selected seed:', seed),
    },
}

export const ManySelected: Story = {
    args: {
        isOpen: true,
        currentSeed: 'Mochi',
        onClose: () => { },
        onSelect: () => { },
    },
}