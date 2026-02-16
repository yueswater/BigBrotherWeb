import Avatar from '@/components/ui/Avatar'

export interface UserSectionProps {
    username: string
    avatarSrc?: string
    onClick?: () => void
}

export default function UserSection({ username, avatarSrc, onClick }: UserSectionProps) {
    return (
        <div
            className="flex items-center gap-3 ml-2 px-3 py-1 hover:bg-base-content/10 transition-colors cursor-pointer group border-l-2 border-transparent active:border-primary"
            onClick={onClick}
        >
            <div className="text-right hidden sm:block">
                <p className="text-[10px] text-primary leading-none uppercase font-bold opacity-60 group-hover:opacity-100">User</p>
                <p className="text-sm font-bold text-base-content uppercase tracking-tighter">{username}</p>
            </div>
            <Avatar src={avatarSrc} fallback={username} size="sm" />
        </div>
    )
}