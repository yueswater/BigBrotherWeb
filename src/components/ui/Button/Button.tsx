export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'neutral'
    | 'danger'
    | 'ghost'

export type ButtonSize =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'

export interface ButtonProps {
    children: React.ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
    loading?: boolean
    disabled?: boolean
    className?: string
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    className = '',
    type = 'button',
    onClick,
}: ButtonProps) {

    const variantClass = {
        primary: "bg-primary text-primary-content",
        secondary: "bg-secondary text-secondary-content",
        accent: "bg-accent text-accent-content",
        neutral: "bg-neutral text-neutral-content",
        danger: "bg-error text-error-content",
        ghost: "bg-transparent text-base-content border border-base-300",
    }[variant]

    const sizeClass = {
        xs: "px-2 py-1 text-xs",
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    }[size]

    return (
        <button
            type={type}
            className={`
                ${variantClass}
                ${sizeClass}
                ${className}
                
                font-semibold
                transition
                hover:opacity-90
                active:scale-95
                disabled:opacity-50
                disabled:cursor-not-allowed
                flex items-center gap-2
            `}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {loading && (
                <span className="w-4 h-4 border-2 border-current border-t-transparent  animate-spin"></span>
            )}
            {children}
        </button>
    )
}