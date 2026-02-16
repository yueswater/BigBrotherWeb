import React from 'react'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

export default function Input({
    label,
    error,
    ...props
}: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label className="text-sm font-semibold text-bb-primary">
                    {label}
                </label>
            )}

            <input
                className={`px-4 py-2  border bg-white text-bb-primary outline-none transition-all
        border-bb-base-300
        focus:border-bb-primary focus:ring-2 focus:ring-bb-primary/20
        ${error ? 'border-bb-error focus:ring-bb-error/20' : ''}`}
                {...props}
            />

            {error && (
                <span className="text-xs text-bb-error">
                    {error}
                </span>
            )}
        </div>
    )
}
