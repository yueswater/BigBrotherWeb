import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Stack from '../Stack'

export interface SidebarItem {
    label: string
    path: string
    icon: React.ReactNode
}

export interface SidebarProps {
    items: SidebarItem[]
    className?: string
    defaultCollapsed?: boolean
}

export default function Sidebar({
    items,
    className = '',
    defaultCollapsed = false
}: SidebarProps) {
    const location = useLocation()
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

    return (
        <aside
            className={`
                relative h-full border-r border-base-300 bg-base-100 flex flex-col transition-all duration-300 ease-in-out
                ${isCollapsed ? 'w-20' : 'w-64'}
                ${className}
            `}
        >
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-3 top-10 w-6 h-6 bg-base-100 border border-base-300 rounded-full flex items-center justify-center hover:bg-base-200 z-10"
            >
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>

            <div className={`p-6 transition-all duration-300 ${isCollapsed ? 'items-center px-0 flex justify-center' : ''}`}>
                <span className={`font-bold text-primary tracking-tighter truncate ${isCollapsed ? 'text-sm' : 'text-xl'}`}>
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
                                    flex items-center rounded-xl transition-all duration-200
                                    ${isCollapsed ? 'justify-center p-3' : 'gap-3 px-4 py-3'}
                                    ${isActive
                                        ? 'bg-primary text-primary-content shadow-lg shadow-primary/20'
                                        : 'text-secondary hover:bg-base-200 hover:text-base-content'}
                                `}
                            >
                                <span className="flex items-center justify-center w-5 h-5 shrink-0">{item.icon}</span>
                                {!isCollapsed && <span className="font-medium truncate">{item.label}</span>}
                            </Link>
                        )
                    })}
                </Stack>
            </nav>

            <div className="p-3 mt-auto border-t border-base-300">
                <div className={`bg-base-200/50 rounded-xl transition-all duration-300 ${isCollapsed ? 'p-2 flex justify-center' : 'p-4'}`}>
                    {!isCollapsed ? (
                        <>
                            <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">System</p>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                <span className="text-xs text-base-content font-medium">Operational</span>
                            </div>
                        </>
                    ) : (
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    )}
                </div>
            </div>
        </aside>
    )
}