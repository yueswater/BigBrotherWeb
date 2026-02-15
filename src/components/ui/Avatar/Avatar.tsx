import React from 'react'

export interface AvatarProps {
    src?: string
    alt?: string
    fallback: string
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

export default function Avatar({
    src,
    alt = 'User Avatar',
    fallback,
    size = 'md',
    className = '',
}: AvatarProps) {
    const sizeClasses = {
        sm: 'w-8 h-8 text-[10px]',
        md: 'w-10 h-10 text-xs',
        lg: 'w-12 h-12 text-sm',
    }[size]

    const initial = fallback ? fallback.charAt(0).toUpperCase() : '?'

    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-[#94a3b8] rounded-full shrink-0 ${sizeClasses} ${className}`}>
            {src ? (
                <img className="w-full h-full object-cover" src={src} alt={alt} />
            ) : (
                <span className="font-bold text-white select-none italic">
                    {initial}
                </span>
            )}
        </div>
    )
}