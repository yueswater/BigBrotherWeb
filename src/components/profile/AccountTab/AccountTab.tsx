import React from 'react'
import Button from '@/components/ui/Button'

export interface AccountTabProps {
    fullName: string
    username: string
    email: string
    tier: string
    loading?: boolean
    onUpdate: (data: { full_name: string; email: string }) => void
    onChange: (field: string, value: string) => void
}

export default function AccountTab({
    fullName,
    username,
    email,
    tier,
    loading,
    onUpdate,
    onChange
}: AccountTabProps) {
    const pixelButtonClass = "!rounded-none border-4 border-base-content shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all font-pixel text-xl"

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold uppercase">Full Name</label>
                    <input
                        className="p-4 bg-base-100 border-4 border-base-content text-xl focus:outline-none focus:border-primary"
                        value={fullName}
                        placeholder="Enter your full name"
                        onChange={(e) => onChange('full_name', e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2 opacity-70">
                    <label className="text-sm font-bold uppercase">Username</label>
                    <div className="p-4 bg-base-100/50 border-4 border-base-content/30 text-xl">{username}</div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold uppercase">Email Address</label>
                    <input
                        className="p-4 bg-base-100 border-4 border-base-content text-xl focus:outline-none focus:border-primary"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => onChange('email', e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold uppercase">Membership Tier</label>
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold uppercase">{tier}</span>
                        <span className="bg-primary text-primary-content px-3 py-1 text-sm font-bold uppercase tracking-widest">Active</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-end">
                <Button
                    variant="primary"
                    size="lg"
                    loading={loading}
                    onClick={() => onUpdate({ full_name: fullName, email })}
                    className={pixelButtonClass}
                >
                    Update Profile
                </Button>
            </div>
        </div>
    )
}