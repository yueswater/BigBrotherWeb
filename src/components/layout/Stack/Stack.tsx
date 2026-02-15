import type { ReactNode } from 'react'

export interface StackProps {
    children: ReactNode
    direction?: 'row' | 'col'
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    align?: 'start' | 'center' | 'end' | 'stretch'
    justify?: 'start' | 'center' | 'end' | 'between'
    className?: string
}

export default function Stack({
    children,
    direction = 'col',
    gap = 'md',
    align = 'stretch',
    justify = 'start',
    className = '',
}: StackProps) {

    const directionClass = {
        row: 'flex-row',
        col: 'flex-col',
    }[direction]

    const gapClass = {
        xs: 'gap-1',
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6',
        xl: 'gap-8',
    }[gap]

    const alignClass = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
    }[align]

    const justifyClass = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
    }[justify]

    return (
        <div
            className={`
                flex
                ${directionClass}
                ${gapClass}
                ${alignClass}
                ${justifyClass}
                ${className} 
            `}
        >
            {children}
        </div>
    )
}