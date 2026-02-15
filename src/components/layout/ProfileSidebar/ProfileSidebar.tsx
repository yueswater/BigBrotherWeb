import React from 'react'
import { Link } from 'react-router-dom'
import { X, LucideIcon } from 'lucide-react'
import Avatar from '@/components/ui/Avatar'
import Stack from '@/components/layout/Stack'

export interface ProfileMenuItem {
    label: string
    path: string
    icon: LucideIcon
}

export interface ProfileSidebarProps {
    isOpen: boolean
    onClose: () => void
    username: string
    email: string
    items: ProfileMenuItem[]
    footerAction: {
        label: string
        icon: LucideIcon
        onClick: () => void
        variant?: 'danger' | 'primary'
    }
    backgroundColor?: string
    title?: string
}

export default function ProfileSidebar({
    isOpen,
    onClose,
    username,
    email,
    items,
    footerAction,
    backgroundColor = 'bg-transparent',
    title = 'Profile'
}: ProfileSidebarProps) {
    const footerVariantClasses = {
        danger: 'bg-red-50 text-red-500 hover:bg-red-100',
        primary: 'bg-primary/10 text-primary hover:bg-primary/20',
    }[footerAction.variant || 'danger']

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/5 backdrop-blur-lg transition-opacity z-[100] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={onClose}
            />

            <aside
                className={`fixed top-4 right-4 h-[calc(100vh-2rem)] w-80 rounded-[2rem] z-[101] transition-transform duration-500 ease-in-out transform flex flex-col ${backgroundColor} ${isOpen ? 'translate-x-0' : 'translate-x-[120%]'
                    }`}
            >
                <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-xl font-black text-base-content">{title}</h2>
                        <button
                            onClick={onClose}
                            className="p-1 hover:bg-base-200 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex flex-col items-center text-center mb-12">
                        <Avatar fallback={username} size="lg" className="w-24 h-24 mb-4 ring-4 ring-base-200" />
                        <h3 className="text-lg font-black text-base-content">{username}</h3>
                        <p className="text-sm text-secondary font-medium">{email}</p>
                    </div>

                    <nav className="flex-1">
                        <Stack gap="xs">
                            {items.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={onClose}
                                    className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-base-100 transition-all text-base-content font-bold group"
                                >
                                    <item.icon size={20} className="text-secondary group-hover:text-primary" />
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </Stack>
                    </nav>

                    <div className="mt-auto pt-6 border-t border-base-100">
                        <button
                            onClick={() => {
                                footerAction.onClick();
                                onClose();
                            }}
                            className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all ${footerVariantClasses}`}
                        >
                            <footerAction.icon size={18} />
                            <span>{footerAction.label}</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}