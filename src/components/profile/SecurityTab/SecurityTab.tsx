import React from 'react'
import Button from '@/components/ui/Button'

export interface SecurityTabProps {
    passwordData: {
        old_password: string
        new_password: string
        confirm_password: string
    }
    loading?: boolean
    onUpdate: () => void
    onChange: (field: string, value: string) => void
}

export default function SecurityTab({
    passwordData,
    loading,
    onUpdate,
    onChange
}: SecurityTabProps) {
    const pixelButtonClass = "!rounded-none border-4 border-base-content shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all font-pixel text-xl"

    return (
        <div className="flex flex-col gap-8 max-w-2xl animate-in fade-in duration-300">
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase">Current Password</label>
                <input
                    type="password"
                    className="p-4 bg-base-100 border-4 border-base-content text-xl focus:outline-none focus:border-primary"
                    value={passwordData.old_password}
                    placeholder="Enter current password"
                    onChange={(e) => onChange('old_password', e.target.value)}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold uppercase">New Password</label>
                    <input
                        type="password"
                        className="p-4 bg-base-100 border-4 border-base-content text-xl focus:outline-none focus:border-primary"
                        value={passwordData.new_password}
                        placeholder="Enter new password"
                        onChange={(e) => onChange('new_password', e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold uppercase">Confirm New Password</label>
                    <input
                        type="password"
                        className="p-4 bg-base-100 border-4 border-base-content text-xl focus:outline-none focus:border-primary"
                        value={passwordData.confirm_password}
                        placeholder="Confirm new password"
                        onChange={(e) => onChange('confirm_password', e.target.value)}
                    />
                </div>
            </div>
            <div className="mt-8 flex justify-start">
                <Button
                    variant="neutral"
                    size="lg"
                    loading={loading}
                    onClick={onUpdate}
                    className={pixelButtonClass}
                >
                    Update Password
                </Button>
            </div>
        </div>
    )
}