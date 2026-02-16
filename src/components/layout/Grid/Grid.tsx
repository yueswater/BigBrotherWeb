import type { ReactNode } from 'react'

export interface GridProps {
    children: ReactNode
    cols?: 1 | 2 | 3 | 4 | 5 | 6
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    className?: string
}

export default function Grid({
    children,
    cols = 3,
    gap = 'md',
    className = ''
}: GridProps) {
    const colsClass = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
    }[cols]

    const gapClass = {
        xs: 'gap-1',
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6',
        xl: 'gap-8',
    }[gap]

    return (
        <div className={`grid ${colsClass} ${gapClass} ${className}`}>
            {children}
        </div>
    )
}