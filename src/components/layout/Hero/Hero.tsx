import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Stack from '../Stack'
import MonitorTerminal from '@/components/monitor/MonitorTerminal'

export interface HeroProps {
    title?: string
    description?: string
    ctaText?: string
    secondaryCtaText?: string
    onCtaClick?: () => void
    onSecondaryCtaClick?: () => void
}

export default function Hero({
    title = "Monitor Your AI Tokens in Real-time",
    description = "The ultimate proxy and monitoring dashboard for OpenAI, Claude, and Gemini. Take full control of your API usage, latency, and costs.",
    ctaText = "Get Started",
    secondaryCtaText = "Documentation",
    onCtaClick,
    onSecondaryCtaClick,
}: HeroProps) {
    return (
        <section className="py-20 overflow-hidden relative font-pixel">
            <Stack align="center" gap="xl" className="text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 max-w-4xl"
                >
                    <h1 className="text-5xl lg:text-7xl font-black text-base-content tracking-tighter uppercase leading-none">
                        AI <span className="text-primary underline decoration-8 underline-offset-8">Big Brother</span> Is Watching
                    </h1>
                    <p className="text-lg text-base-content/60 max-w-2xl mx-auto uppercase tracking-widest">
                        {description}
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    <Button
                        size="lg"
                        onClick={onCtaClick}
                        className="bg-primary text-primary-content !rounded-none border-4 border-base-content shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all px-10 py-4 text-xl"
                    >
                        {ctaText}
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={onSecondaryCtaClick}
                        className="!rounded-none border-4 border-base-content hover:bg-base-content/5 px-10 py-4 text-xl"
                    >
                        {secondaryCtaText}
                    </Button>
                </div>

                <div className="relative mt-16 w-full max-w-4xl group">
                    <div className="absolute -inset-4 border-4 border-dashed border-primary/20 animate-[spin_30s_linear_infinite] rounded-full pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="relative z-10 bg-[#0d0d12] border-8 border-base-content shadow-[24px_24px_0px_0px_rgba(0,0,0,0.2)] aspect-video"
                    >
                        <MonitorTerminal />
                    </motion.div>

                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-8 border-l-8 border-primary z-20" />
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-8 border-r-8 border-primary z-20" />
                </div>
            </Stack>
        </section>
    )
}