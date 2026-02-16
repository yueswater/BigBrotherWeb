import React from 'react'

export interface ProfileFieldProps {
    label: string
    value: string
    isEditable?: boolean
}

export default function ProfileField({ label, value, isEditable = false }: ProfileFieldProps) {
    return (
        <div className="flex flex-col gap-2 mb-6">
            <label className="text-[10px] uppercase font-bold text-secondary">{label}</label>
            <div className={`p-3 border-2 border-base-content bg-base-100 font-bold ${isEditable ? 'hover:bg-base-200 cursor-text' : 'opacity-70'}`}>
                {value}
            </div>
        </div>
    )
}