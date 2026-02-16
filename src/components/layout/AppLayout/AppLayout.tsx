import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { LayoutDashboard, Globe, User as UserIcon, Settings, LogOut } from 'lucide-react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import ProfileSidebar from '../ProfileSidebar'
import Button from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'

interface AppLayoutProps {
    children: React.ReactNode
    isAuthenticated: boolean
    username?: string
}

export default function AppLayout({
    children,
    isAuthenticated,
    username = "Admin"
}: AppLayoutProps) {
    const location = useLocation()
    const { logout, user } = useAuth()
    const [isProfileOpen, setIsProfileOpen] = useState(false)

    const isAuthPage = location.pathname === '/login' || location.pathname === '/register'
    const isHomePage = location.pathname === '/'
    const isProfilePage = location.pathname === '/profile'

    const isFullWidthPage = isHomePage || isAuthPage || isProfilePage
    const showSidebar = isAuthenticated && !isFullWidthPage

    const sidebarItems = [
        { label: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { label: 'Proxies', path: '/proxies', icon: <Globe size={20} /> },
    ]

    const navLinks = isAuthenticated ? [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Proxies', path: '/proxies' },
    ] : [
        { label: 'Features', path: '/features' },
        { label: 'Pricing', path: '/pricing' },
        { label: 'FAQ', path: '/faq' },
    ]

    const displayUsername = user?.username || username
    const displayEmail = user?.email || ""
    const currentAvatarUrl = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user?.avatar_seed || displayUsername}`

    if (isAuthPage) {
        return <>{children}</>
    }

    return (
        <div className="flex flex-col h-screen bg-base-200 overflow-hidden text-base-content font-sans">
            <Navbar
                isAuthenticated={isAuthenticated}
                username={displayUsername}
                links={navLinks}
                onUserClick={() => setIsProfileOpen(true)}
            >
                {!isAuthenticated ? (
                    <Link to="/login">
                        <Button variant="primary" className=" px-8 font-bold">Login</Button>
                    </Link>
                ) : (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={logout}
                        className="font-bold text-error hover:bg-error/10"
                    >
                        Logout
                    </Button>
                )}
            </Navbar>

            <ProfileSidebar
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
                username={displayUsername}
                email={displayEmail}
                avatarUrl={currentAvatarUrl}
                title='Profile'
                backgroundColor="transparent"
                items={[
                    { label: 'Profile', path: '/profile', icon: UserIcon },
                    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
                    { label: 'Settings', path: '/settings', icon: Settings },
                ]}
                footerAction={{
                    label: 'Logout',
                    icon: LogOut,
                    onClick: logout,
                    variant: 'danger'
                }}
            />

            <div className="flex flex-1 overflow-hidden relative">
                {showSidebar && (
                    <Sidebar
                        items={sidebarItems}
                        backgroundColor="transparent"
                        className="!bg-transparent"
                    />
                )}

                <main className="flex-1 flex flex-col overflow-y-auto bg-base-200">
                    <div className="flex-1 w-full min-h-fit">
                        {children}
                    </div>
                    {(isHomePage || isProfilePage) && <Footer />}
                </main>
            </div>
        </div>
    )
}