import type { Meta, StoryObj } from '@storybook/react-vite'
import Modal from './Modal'
import { useState } from 'react'
import Button from '../Button'

const meta: Meta<typeof Modal> = {
    title: 'UI/Modal',
    component: Modal,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Modal>

function ModalDemo() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                Open Modal
            </Button>

            <Modal
                open={open}
                title="Confirm Action"
                onClose={() => setOpen(false)}
                onConfirm={() => setOpen(false)}
            >
                Are you sure?
            </Modal>
        </>
    )
}

export const Default: Story = {
    render: () => <ModalDemo />,
}
