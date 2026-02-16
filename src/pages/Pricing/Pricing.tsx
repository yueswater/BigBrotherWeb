import Container from '@/components/layout/Container'
import Stack from '@/components/layout/Stack'
import Grid from '@/components/layout/Grid'
import Button from '@/components/ui/Button'

const PLANS = [
    { name: "Starter", price: "0", features: ["1,000 requests/mo", "Basic Analytics", "Single API Key", "Community Support"] },
    { name: "Pro", price: "29", features: ["Unlimited requests", "Advanced Analytics", "Multiple API Keys", "Priority Support", "Custom Proxy Nodes"], popular: true },
    { name: "Enterprise", price: "99", features: ["Self-hosted Option", "Audit Logs", "SLA Guarantee", "Dedicated Account Manager"] }
]

export default function Pricing() {
    return (
        <section className="py-24 bg-base-200 font-pixel">
            <Container size="xl">
                <Stack gap="xl" align="center">
                    <div className="text-center">
                        <h1 className="text-5xl font-black uppercase mb-4">Choose Your Plan</h1>
                        <p className="opacity-60 uppercase">Scalable pricing for projects of all sizes.</p>
                    </div>
                    <Grid cols={3} gap="lg" className="w-full">
                        {PLANS.map((plan, i) => (
                            <div key={i} className={`p-10 border-8 border-base-content flex flex-col ${plan.popular ? 'bg-primary/10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] scale-105 z-10' : 'bg-base-100 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'}`}>
                                {plan.popular && <span className="bg-primary text-primary-content self-start px-3 py-1 text-xs font-bold uppercase mb-4">Most Popular</span>}
                                <h3 className="text-2xl font-black uppercase mb-2">{plan.name}</h3>
                                <div className="mb-8">
                                    <span className="text-5xl font-black">${plan.price}</span>
                                    <span className="opacity-60 uppercase text-sm">/mo</span>
                                </div>
                                <ul className="flex-1 space-y-4 mb-10">
                                    {plan.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm uppercase font-bold">
                                            <div className="w-2 h-2 bg-primary" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <Button className={`w-full !rounded-none border-4 border-base-content shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 ${plan.popular ? 'bg-primary' : ''}`}>
                                    Select Plan
                                </Button>
                            </div>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </section>
    )
}