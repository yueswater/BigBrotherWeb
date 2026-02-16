import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import chevronLeft from 'pixelarticons/svg/chevron-left.svg'
import chevronRight from 'pixelarticons/svg/chevron-right.svg'
import Stack from '../Stack'
import api from '@/services/api'

export interface SidebarItem {
    label: string
    path: string
    icon: React.ReactNode
}

export interface SidebarProps {
    items: SidebarItem[]
    className?: string
    defaultCollapsed?: boolean
    backgroundColor?: string
}

export default function Sidebar({
    items,
    className = '',
    defaultCollapsed = false,
    backgroundColor
}: SidebarProps) {
    const location = useLocation()
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
    const [healthStatus, setHealthStatus] = useState<'loading' | 'success' | 'error'>('loading')

    useEffect(() => {
        const checkHealth = async () => {
            try {
                await api.get('/health')
                setHealthStatus('success')
            } catch (error) {
                setHealthStatus('error')
            }
        }

        checkHealth()
        const interval = setInterval(checkHealth, 30000)
        return () => clearInterval(interval)
    }, [])

    return (
        <aside
            style={{ backgroundColor }}
            className={`
                relative h-full border-r-4 border-base-content bg-base-100 flex flex-col transition-all duration-150
                ${isCollapsed ? 'w-20' : 'w-64'}
                ${className}
            `}
        >
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-4 top-10 w-8 h-8 bg-base-100 border-4 border-base-content flex items-center justify-center hover:bg-base-200 z-50 active:translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] group"
            >
                <img
                    src={isCollapsed ? chevronRight : chevronLeft}
                    className="w-5 h-5 transition-all pixel-icon-filter group-hover:scale-110"
                    style={{ imageRendering: 'pixelated' }}
                    alt="toggle"
                />
            </button>

            <div className={`p-6 transition-all ${isCollapsed ? 'px-0 flex justify-center' : ''}`}>
                <span className={`font-black text-primary tracking-tighter truncate uppercase leading-none ${isCollapsed ? 'text-xs' : 'text-2xl'}`}>
                    {isCollapsed ? 'BB' : 'BigBrother'}
                </span>
            </div>

            <nav className="flex-1 px-3">
                <Stack gap="xs">
                    {items.map((item) => {
                        const isActive = location.pathname === item.path
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                title={isCollapsed ? item.label : ''}
                                className={`
                                    flex items-center transition-all border-4
                                    ${isCollapsed ? 'justify-center p-3' : 'gap-3 px-4 py-3'}
                                    ${isActive
                                        ? 'bg-primary text-primary-content border-base-content shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]'
                                        : 'text-base-content border-transparent hover:border-base-content hover:bg-base-200'}
                                `}
                            >
                                <span className="flex items-center justify-center w-6 h-6 shrink-0 pixel-icon-filter" style={{ imageRendering: 'pixelated' }}>
                                    {item.icon}
                                </span>
                                {!isCollapsed && <span className="font-bold truncate text-sm uppercase tracking-tight">{item.label}</span>}
                            </Link>
                        )
                    })}
                </Stack>
            </nav>

            <div className="p-3 mt-auto border-t-4 border-base-content">
                <div className={`bg-base-content/10 border-2 border-base-content/20 ${isCollapsed ? 'p-2 flex justify-center' : 'p-4'}`}>
                    {!isCollapsed ? (
                        <>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-base-content/50 font-black mb-2">System Status</p>
                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 border-2 border-base-content animate-[pulse_1s_steps(2)_infinite] ${healthStatus === 'success' ? 'bg-success' : healthStatus === 'error' ? 'bg-error' : 'bg-warning'
                                    }`} />
                                <span className="text-[10px] text-base-content font-black uppercase">
                                    {healthStatus === 'success' ? 'Operational' : healthStatus === 'error' ? 'Offline' : 'Checking'}
                                </span>
                            </div>
                        </>
                    ) : (
                        <div className={`w-3 h-3 border-2 border-base-content animate-[pulse_1s_steps(2)_infinite] ${healthStatus === 'success' ? 'bg-success' : healthStatus === 'error' ? 'bg-error' : 'bg-warning'
                            }`} />
                    )}
                </div>
            </div>
        </aside>
    )
}