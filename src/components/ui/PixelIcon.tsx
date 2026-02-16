import React from 'react'

export interface PixelIconProps {
    name: string
    size?: number | string
    className?: string
    color?: string
}

export default function PixelIcon({ name, size = 20, className = "", color }: PixelIconProps) {
    return (
        <i
            className={`za za-${name} ${className}`}
            style={{
                fontSize: size,
                color: color || 'currentColor',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                imageRendering: 'pixelated'
            }}
        />
    )
}