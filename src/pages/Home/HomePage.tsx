import { useNavigate } from 'react-router-dom'
import Container from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import Grid from '@/components/layout/Grid'
import Stack from '@/components/layout/Stack'
import Card from '@/components/ui/Card'
import { Shield, Zap, BarChart3, Lock } from 'lucide-react'

export default function HomePage() {
    const navigate = useNavigate()

    const features = [
        {
            icon: <Zap className="text-primary" size={32} />,
            title: "Real-time Monitoring",
            description: "Track every token consumed by your AI agents with millisecond precision."
        },
        {
            icon: <Shield className="text-primary" size={32} />,
            title: "Security & Proxy",
            description: "Secure your API keys behind a robust proxy layer with granular access control."
        },
        {
            icon: <BarChart3 className="text-primary" size={32} />,
            title: "Usage Analytics",
            description: "Visualize cost distribution across OpenAI, Anthropic, and Google Gemini."
        },
        {
            icon: <Lock className="text-primary" size={32} />,
            title: "Self-Hosted",
            description: "Full control over your data. Deploy on your own infrastructure easily."
        }
    ]

    return (
        <div className="bg-transparent">
            <Container size="xl">
                <Hero
                    onCtaClick={() => navigate('/register')}
                    onSecondaryCtaClick={() => window.open('https://github.com', '_blank')}
                />

                <section className="py-20 border-t border-base-300">
                    <Stack gap="xl">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold tracking-tight">Everything you need to manage LLMs</h2>
                            <p className="text-secondary mt-4">Powerful features designed for developers and researchers working with multiple AI providers.</p>
                        </div>

                        <Grid cols={4} gap="lg">
                            {features.map((feature, index) => (
                                <Card key={index} className="p-8 hover:border-primary/50 transition-colors group">
                                    <Stack gap="md">
                                        <div className="p-3 bg-primary/10 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold">{feature.title}</h3>
                                        <p className="text-sm text-secondary leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </Stack>
                                </Card>
                            ))}
                        </Grid>
                    </Stack>
                </section>

                <section className="py-20 mb-20 bg-primary/5 rounded-[3rem] border border-primary/10 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />
                    <Stack align="center" gap="lg" className="text-center px-8">
                        <h2 className="text-4xl font-bold tracking-tight">Ready to take control?</h2>
                        <p className="text-lg text-secondary max-w-xl">
                            Join 品岳 and other developers today. Start monitoring your AI costs and performance in minutes.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={() => navigate('/register')}
                                className="btn btn-primary btn-lg rounded-full px-12"
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