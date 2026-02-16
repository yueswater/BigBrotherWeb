import { useNavigate } from 'react-router-dom'
import Container from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import Grid from '@/components/layout/Grid'
import Stack from '@/components/layout/Stack'
import Card from '@/components/ui/Card'

import zap from 'pixelarticons/svg/zap.svg'
import shield from 'pixelarticons/svg/shield.svg'
import chartBar from 'pixelarticons/svg/chart-bar.svg'
import deviceLaptop from 'pixelarticons/svg/device-laptop.svg'

export default function HomePage() {
    const navigate = useNavigate()

    const features = [
        {
            icon: zap,
            title: "Real-time Monitoring",
            description: "Track every token consumed by your AI agents with millisecond precision."
        },
        {
            icon: shield,
            title: "Security & Proxy",
            description: "Secure your API keys behind a robust proxy layer with granular access control."
        },
        {
            icon: chartBar,
            title: "Usage Analytics",
            description: "Visualize cost distribution across OpenAI, Anthropic, and Google Gemini."
        },
        {
            icon: deviceLaptop,
            title: "Self-Hosted",
            description: "Full control over your data. Deploy on your own infrastructure easily."
        }
    ]

    return (
        <div className="bg-transparent font-pixel">
            <Container size="xl">
                <Hero
                    onCtaClick={() => navigate('/register')}
                    onSecondaryCtaClick={() => window.open('https://github.com', '_blank')}
                />

                <section className="py-20 border-t-4 border-base-content/10">
                    <Stack gap="xl">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-4xl font-bold tracking-tight uppercase">Everything you need to manage LLMs</h2>
                            <p className="text-base-content/60 mt-4 uppercase text-sm">Powerful features designed for developers and researchers working with multiple AI providers.</p>
                        </div>

                        <Grid cols={4} gap="lg">
                            {features.map((feature, index) => (
                                <Card key={index} className="p-8 border-4 border-base-content shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group bg-base-100">
                                    <Stack gap="md">
                                        <div className="p-3 bg-primary border-4 border-base-content w-fit group-hover:scale-110 transition-transform">
                                            <img
                                                src={feature.icon}
                                                width={32}
                                                height={32}
                                                className="brightness-0 invert"
                                                style={{ imageRendering: 'pixelated' }}
                                                alt={feature.title}
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold uppercase">{feature.title}</h3>
                                        <p className="text-xs text-base-content/70 leading-relaxed uppercase">
                                            {feature.description}
                                        </p>
                                    </Stack>
                                </Card>
                            ))}
                        </Grid>
                    </Stack>
                </section>

                <section className="py-20 mb-20 bg-primary/10 border-4 border-base-content overflow-hidden relative shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)] text-base-content">
                    <Stack align="center" gap="lg" className="text-center px-8">
                        <h2 className="text-5xl font-black tracking-tight uppercase">Ready to take control?</h2>
                        <p className="text-lg opacity-70 max-w-xl uppercase">
                            Start monitoring your AI costs and performance in minutes.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={() => navigate('/register')}
                                className="bg-primary text-primary-content border-4 border-base-content px-12 py-4 text-2xl font-bold uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                            >
                                Get Started for Free
                            </button>
                        </div>
                    </Stack>
                </section>
            </Container>
        </div>
    )
}