import { Link } from 'react-router-dom'
import Container from '../Container'
import LanguageSelector from '@/components/ui/LanguageSelector'
import ThemeToggle from '@/components/ui/ThemeToggle'
import UserSection from '@/components/ui/UserSection'

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
    return (
        <nav className="w-full border-b border-base-300 bg-base-100/80 backdrop-blur-md sticky top-0 z-50">
            <div className="px-6 w-full mx-auto">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-2xl font-bold text-base-content tracking-tighter hover:text-primary transition-colors">
                            BigBrother
                        </Link>

                        <div className="hidden md:flex items-center gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-sm font-bold text-secondary hover:text-primary transition-colors px-2 py-1"
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
                                <div onClick={onUserClick} className="cursor-pointer">
                                    <UserSection username={username} />
                                </div>
                            )}
                        </div>

                        {children && (
                            <div className="flex items-center gap-2 border-l border-base-300 pl-6">
                                {children}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}