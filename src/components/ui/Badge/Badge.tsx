export type BadgeVariant =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'success'
    | 'warning'
    | 'error'
    | 'neutral'

export interface BadgeProps {
    children: React.ReactNode
    variant?: BadgeVariant
}

export default function Badge({
    children,
    variant = 'primary',
}: BadgeProps) {
    const variantClass = {
        primary: 'bg-primary text-primary-content',
        secondary: 'bg-secondary text-secondary-content',
        accent: 'bg-accent text-accent-content',
        success: 'bg-success text-success-content',
        warning: 'bg-warning text-warning-content',
        error: 'bg-error text-error-content',
        neutral: 'bg-base-300 text-base-content',
    }[variant]

    return (
        <span
            className={`
                ${variantClass}
                px-2.5 py-0.5
                
                text-xs
                font-medium
                inline-flex
                items-center
            `}
        >
            {children}
        </span>
    )
}
