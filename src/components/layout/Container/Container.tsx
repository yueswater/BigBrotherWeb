import type { ReactNode } from 'react'

export interface ContainerProps {
    children: ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    center?: boolean
}

export default function Container({
    children,
    size = 'lg',
    center = true,
}: ContainerProps) {

    const sizeClass = {
        sm: 'max-w-screen-sm',
        md: 'max-w-screen-md',
        lg: 'max-w-screen-lg',
        xl: 'max-w-screen-xl',
        full: 'max-w-full',
    }[size]

    return (
        <div
            className={`
                w-full
                ${sizeClass}
                ${center ? 'mx-auto' : ''}
                px-4
            `}
        >
            {children}
        </div>
    )
}
