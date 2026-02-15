import Avatar from '@/components/ui/Avatar'

export interface UserSectionProps {
    username: string
    avatarSrc?: string
}

export default function UserSection({ username, avatarSrc }: UserSectionProps) {
    return (
        <div className="flex items-center gap-3 ml-2 px-2 py-1 rounded-xl hover:bg-base-200 transition-colors cursor-pointer">
            <div className="text-right hidden sm:block">
                <p className="text-[10px] text-secondary leading-none uppercase font-bold opacity-60">User</p>
                <p className="text-sm font-bold text-base-content">{username}</p>
            </div>
            <Avatar src={avatarSrc} fallback={username} size="sm" />
        </div>
    )
}