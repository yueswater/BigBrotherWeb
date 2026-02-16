import React, { useState, useRef, useEffect } from 'react'
import { useTheme, Theme } from '@/context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import paintBucket from 'pixelarticons/svg/paint-bucket.svg'

const THEME_OPTIONS: { id: Theme; name: string; colors: string[] }[] = [
    { id: 'seafoam', name: 'Seafoam', colors: ['#6aae9d', '#f4e9d4'] },
    { id: 'retrotronic', name: 'Retrotronic', colors: ['#bb474f', '#d1bfb0'] },
    { id: 'oil-6', name: 'Oil 6', colors: ['#494d7e', '#fbf5ef'] },
    { id: 'ink', name: 'Ink', colors: ['#413a42', '#eaf0d8'] },
    { id: 'hope-diamond', name: 'Hope Diamond', colors: ['#4f5a64', '#150e10'] },
    { id: 'gothic-bit', name: 'Gothic Bit', colors: ['#535373', '#0e0e12'] },
    { id: 'cloudfrenzy', name: 'Cloudfrenzy', colors: ['#af7fc2', '#61567d'] },
    { id: 'arch', name: 'Arch', colors: ['#fdc5c6', '#323348'] },
]

export const ThemeSelector = () => {
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative inline-block" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 transition-all rounded-none bg-transparent flex items-center justify-center border-2 border-transparent hover:border-base-content hover:bg-base-200 active:translate-y-0.5 group"
            >
                <img
                    src={paintBucket}
                    width={20}
                    height={20}
                    style={{
                        imageRendering: 'pixelated',
                        filter: 'contrast(0) brightness(2)' // 強制轉為亮色，或依據需求調整
                    }}
                    className="opacity-80 group-hover:opacity-100"
                    alt="Switch Theme"
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.1, ease: "linear" }}
                        className="absolute right-0 mt-3 w-56 bg-base-100 border-[3px] border-base-content z-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
                    >
                        <div className="p-1 bg-base-content text-base-100 text-[10px] px-3 py-1 font-bold uppercase">
                            Select System Theme
                        </div>
                        <div className="max-h-[300px] overflow-y-auto">
                            {THEME_OPTIONS.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => {
                                        setTheme(opt.id)
                                        setIsOpen(false)
                                    }}
                                    className={`group flex items-center justify-between w-full px-3 py-3 text-left transition-colors border-b-2 border-base-content/10 last:border-b-0 ${theme === opt.id
                                            ? 'bg-primary text-primary-content'
                                            : 'text-base-content hover:bg-base-200'
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        {theme === opt.id && <span className="text-xs">▶</span>}
                                        <span className="text-xs font-medium tracking-tight uppercase">{opt.name}</span>
                                    </div>
                                    <div className="flex border-2 border-base-content bg-base-content p-[1px] gap-[1px]">
                                        <div className="w-3 h-3" style={{ backgroundColor: opt.colors[0] }} />
                                        <div className="w-3 h-3" style={{ backgroundColor: opt.colors[1] }} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}