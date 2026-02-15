import React from 'react'

export interface CardProps {
    children: React.ReactNode
    className?: string
}

export default function Card({
    children,
    className = '',
}: CardProps) {
    return (
        <div
            className={`bg-transparent rounded-full p-6 ${className}`}
        >
            {children}
        </div>
    )
}
