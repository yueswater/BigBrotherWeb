import React from 'react'

export interface ProfileInfoCardProps {
    username: string
    tier: string
    avatarUrl: string
    onAvatarClick?: () => void
}

export default function ProfileInfoCard({
    username,
    tier,
    avatarUrl,
    onAvatarClick
}: ProfileInfoCardProps) {
    return (
        <div className="border-4 border-base-content bg-base-100 p-8 flex flex-col items-center gap-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <div
                className="relative group cursor-pointer transition-transform active:scale-95"
                onClick={onAvatarClick}
            >
                <div className="w-48 h-48 border-4 border-base-content overflow-hidden bg-base-200 shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                    <img
                        src={avatarUrl}
                        alt={username}
                        className="w-full h-full object-cover"
                        style={{ imageRendering: 'pixelated' }}
                    />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary p-2 border-4 border-base-content shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                    <i className="pixelarticons pixelarticons-camera text-primary-content text-xl" />
                </div>
            </div>

            <div className="text-center space-y-1">
                <h2 className="text-4xl font-bold uppercase tracking-tighter text-base-content">{username}</h2>
                <div className="flex items-center justify-center gap-2">
                    <span className="text-primary font-bold text-lg tracking-widest uppercase">{tier}</span>
                </div>
            </div>
        </div>
    )
}