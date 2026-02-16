import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { MONITOR_LOGS } from './logs'

export default function MonitorTerminal() {
    const [logs, setLogs] = useState<string[]>([])
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            const nextLog = MONITOR_LOGS[Math.floor(Math.random() * MONITOR_LOGS.length)]
            const timestamp = new Date().toLocaleTimeString('en-GB', { hour12: false })

            setLogs(prev => {
                const updated = [...prev, `[${timestamp}] ${nextLog}`]
                return updated.slice(-12)
            })
        }, 800)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full h-full bg-[#0d0d12] p-4 font-mono text-[10px] md:text-xs overflow-hidden border-4 border-base-content text-left">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-10 bg-[length:100%_2px,2px_100%]" />

            <motion.div
                animate={{
                    x: [0, 200, -100, 300, 0],
                    y: [0, 100, 200, 50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 bg-primary/5 rounded-full blur-[80px] z-0"
            />

            <div className="relative z-20 flex flex-col h-full items-start">
                <div className="flex justify-between items-center w-full border-b border-primary/30 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary animate-ping" />
                        <span className="text-primary font-black tracking-widest uppercase">Live Surveillance</span>
                    </div>
                    <span className="text-secondary/40 text-[9px] font-pixel">B.B.OS v1.4.2</span>
                </div>

                <div className="flex-1 flex flex-col gap-1 overflow-hidden w-full items-start" ref={containerRef}>
                    <AnimatePresence mode="popLayout">
                        {logs.map((log, i) => (
                            <motion.div
                                key={`${log}-${i}`}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, filter: 'blur(4px)' }}
                                transition={{ duration: 0.2 }}
                                className={`whitespace-nowrap w-full text-left ${log.includes('WARNING') || log.includes('THREAT')
                                    ? 'text-error font-bold'
                                    : 'text-primary/70'
                                    }`}
                            >
                                {log}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    <motion.div
                        animate={{ opacity: [0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                        className="w-2 h-3 bg-primary/80 mt-1"
                    />
                </div>
            </div>
        </div>
    )
}