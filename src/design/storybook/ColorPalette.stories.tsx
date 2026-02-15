import type { Meta } from '@storybook/react'
import { colors } from '../tokens/colors'

const meta: Meta = {
    title: 'Design System/Color Palette',
}

export default meta

function Swatch({
    name,
    value,
}: {
    name: string
    value: string
}) {
    return (
        <div
            style={{
                background: value,
                height: 120,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 600,
                borderRadius: 8,
            }}
        >
            {name}
            <br />
            {value}
        </div>
    )
}

export const Palette = () => {
    return (
        <div
            style={{
                padding: 32,
                display: 'grid',
                gap: 16,
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            }}
        >
            {Object.entries(colors).map(([group, values]) =>
                Object.entries(values).map(([name, value]) => (
                    <Swatch
                        key={`${group}-${name}`}
                        name={`${group}.${name}`}
                        value={value}
                    />
                ))
            )}
        </div>
    )
}
