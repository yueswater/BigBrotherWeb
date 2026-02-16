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
    cancelText = 'Close',
}: ModalProps) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-base-100 border-8 border-base-content shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] w-full max-w-xl p-8 flex flex-col gap-6 animate-in zoom-in-95 duration-200">

                {title && (
                    <div className="text-3xl font-bold uppercase tracking-tighter border-b-4 border-base-content/10 pb-4">
                        {title}
                    </div>
                )}

                <div className="flex-1">
                    {children}
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        className="!rounded-none border-4 border-base-content font-pixel uppercase"
                    >
                        {cancelText}
                    </Button>

                    {onConfirm && (
                        <Button
                            variant="primary"
                            onClick={onConfirm}
                            className="!rounded-none border-4 border-base-content shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] font-pixel uppercase"
                        >
                            {confirmText}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}