import React from 'react'

export type SpinnerSize =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'

export interface SpinnerProps {
    size?: SpinnerSize
}

export default function Spinner({
    size = 'md',
}: SpinnerProps) {
    const sizeClass = {
        xs: 'w-3 h-3 border-2',
        sm: 'w-4 h-4 border-2',
        md: 'w-6 h-6 border-3',
        lg: 'w-8 h-8 border-4',
    }[size]

    return (
        <span
            className={`inline-block border-bb-primary border-t-transparent border-solid  animate-spin ${sizeClass}`}
        />
    )
}
