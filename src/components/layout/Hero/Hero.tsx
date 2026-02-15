import Button from '@/components/ui/Button'
import Stack from '../Stack'

export interface HeroProps {
    title?: React.ReactNode
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
        <section className="py-20 overflow-hidden">
            <Stack align="center" gap="xl" className="text-center">
                <div className="space-y-6 max-w-4xl">
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-base-content tracking-tight leading-[1.1]">
                        {title}
                    </h1>
                    <p className="text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="px-10" onClick={onCtaClick}>
                        {ctaText}
                    </Button>
                    <Button variant="ghost" size="lg" className="px-10" onClick={onSecondaryCtaClick}>
                        {secondaryCtaText}
                    </Button>
                </div>

                <div className="relative mt-12 w-full max-w-5xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-10"></div>
                    <div className="relative bg-base-300 rounded-xl border border-base-100 shadow-2xl overflow-hidden aspect-video flex items-center justify-center border-dashed">
                        <div className="flex flex-col items-center gap-2 text-secondary/40 font-mono">
                            <p>Dashboard Preview Area</p>
                        </div>
                    </div>
                </div>
            </Stack>
        </section>
    )
}