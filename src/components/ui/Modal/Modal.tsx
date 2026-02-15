import React from 'react'
import Button from '../Button'

export interface ModalProps {
    open: boolean
    title?: string
    children: React.ReactNode
    onClose: () => void
    onConfirm?: () => void
    confirmText?: string
    cancelText?: string
}

export default function Modal({
    open,
    title,
    children,
    onClose,
    onConfirm,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
}: ModalProps) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 flex flex-col gap-4">

                {title && (
                    <div className="text-lg font-bold text-bb-primary">
                        {title}
                    </div>
                )}

                <div>
                    {children}
                </div>

                <div className="flex justify-end gap-2">
                    <Button variant="secondary" onClick={onClose}>
                        {cancelText}
                    </Button>

                    {onConfirm && (
                        <Button variant="primary" onClick={onConfirm}>
                            {confirmText}
                        </Button>
                    )}
                </div>

            </div>
        </div>
    )
}
