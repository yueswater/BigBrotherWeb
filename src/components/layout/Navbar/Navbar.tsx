import { Link } from 'react-router-dom'
import LanguageSelector from '@/components/ui/LanguageSelector'
import ThemeToggle from '@/components/ui/ThemeToggle'
import UserSection from '@/components/ui/UserSection'
import { useAuth } from '@/context/AuthContext'

export interface NavLink {
    label: string
    path: string
}

export interface NavbarProps {
    isAuthenticated: boolean
    username?: string
    links?: NavLink[]
    onUserClick?: () => void
    children?: React.ReactNode
}

export default function Navbar({
    isAuthenticated,
    username = '品岳',
    links = [],
    onUserClick,
    children
}: NavbarProps) {
    const { user } = useAuth()

    const currentAvatarUrl = user?.avatar_seed
        ? `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.avatar_seed}`
        : undefined

    return (
        <nav className="w-full border-b-4 border-base-content bg-base-100/80 backdrop-blur-md sticky top-0 z-50 font-pixel">
            <div className="px-6 w-full mx-auto">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-3xl font-bold text-base-content tracking-tighter hover:text-primary transition-colors uppercase">
                            BigBrother
                        </Link>

                        <div className="hidden md:flex items-center gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-sm font-bold text-base-content/60 hover:text-primary transition-colors px-2 py-1 uppercase"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <LanguageSelector />
                            <ThemeToggle />

                            {isAuthenticated && (
                                <UserSection
                                    username={user?.username || username}
                                    avatarSrc={currentAvatarUrl}
                                    onClick={onUserClick}
                                />
                            )}
                        </div>

                        {children && (
                            <div className="flex items-center gap-2 border-l-4 border-base-content/10 pl-6">
                                {children}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}