import Container from '@/components/layout/Container'
import Stack from '@/components/layout/Stack'
import Grid from '@/components/layout/Grid'
import Card from '@/components/ui/Card'
import zap from 'pixelarticons/svg/zap.svg'
import shield from 'pixelarticons/svg/shield.svg'
import chartBar from 'pixelarticons/svg/chart-bar.svg'
import deviceLaptop from 'pixelarticons/svg/device-laptop.svg'
import eye from 'pixelarticons/svg/eye.svg'
import coin from 'pixelarticons/svg/coin.svg'

const FEATURES_DATA = [
    { icon: zap, title: "REAL-TIME TRACKING", desc: "Monitor every single token as it flows through your agents." },
    { icon: shield, title: "SECURITY PROXY", desc: "Keep your API keys hidden behind our military-grade proxy layer." },
    { icon: chartBar, title: "ADVANCED ANALYTICS", desc: "Deep dive into usage patterns across OpenAI, Claude, and Gemini." },
    { icon: deviceLaptop, title: "SELF-HOSTED", desc: "Deploy on your own infrastructure for maximum privacy and control." },
    { icon: eye, title: "AUDIT LOGS", desc: "Complete history of all requests for compliance and debugging." },
    { icon: coin, title: "COST OPTIMIZATION", desc: "Identify expensive queries and reduce your monthly AI spend." }
]

export default function Features() {
    return (
        <section className="py-24 bg-base-200 font-pixel">
            <Container size="xl">
                <Stack gap="xl" align="center">
                    <div className="text-center max-w-3xl">
                        <h1 className="text-5xl font-black uppercase tracking-tighter mb-6">System Capabilities</h1>
                        <p className="text-xl opacity-60 uppercase">Advanced monitoring tools for the next generation of AI developers.</p>
                    </div>
                    <Grid cols={3} gap="lg" className="w-full">
                        {FEATURES_DATA.map((f, i) => (
                            <Card key={i} className="p-8 border-4 border-base-content bg-base-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <Stack gap="md">
                                    <div className="p-3 bg-primary border-4 border-base-content w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                                        <img src={f.icon} width={32} height={32} className="brightness-0 invert" style={{ imageRendering: 'pixelated' }} alt={f.title} />
                                    </div>
                                    <h3 className="text-xl font-black uppercase">{f.title}</h3>
                                    <p className="text-sm opacity-70 leading-relaxed uppercase">{f.desc}</p>
                                </Stack>
                            </Card>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </section>
    )
}