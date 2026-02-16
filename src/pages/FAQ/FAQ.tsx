import { useState } from 'react'
import Container from '@/components/layout/Container'
import Stack from '@/components/layout/Stack'
import plus from 'pixelarticons/svg/plus.svg'
import minus from 'pixelarticons/svg/minus.svg'

const FAQ_DATA = [
    { q: "Is BigBrother secure?", a: "Yes. We use industry-standard encryption and never store your actual LLM responses unless you enable debugging." },
    { q: "Can I use it with custom models?", a: "Absolutely. Our proxy layer supports any OpenAI-compatible API endpoint." },
    { q: "What happens if I exceed my token limit?", a: "On the free plan, requests will be throttled. Pro users have unlimited throughput." },
    { q: "Do you support self-hosting?", a: "Yes, our Enterprise plan includes a Docker-ready version for internal deployment." }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-24 bg-base-200 font-pixel">
            <Container size="md">
                <Stack gap="xl">
                    <h1 className="text-5xl font-black uppercase text-center mb-8">Common Questions</h1>
                    <div className="space-y-6">
                        {FAQ_DATA.map((item, i) => (
                            <div key={i} className="border-4 border-base-content bg-base-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full p-6 flex justify-between items-center hover:bg-base-content/5 transition-all text-left"
                                >
                                    <span className="text-lg font-black uppercase tracking-tight">{item.q}</span>
                                    <img src={openIndex === i ? minus : plus} width={24} height={24} style={{ imageRendering: 'pixelated' }} alt="toggle" />
                                </button>
                                {openIndex === i && (
                                    <div className="p-6 border-t-4 border-base-content bg-base-200/50 text-base-content/80 uppercase text-sm leading-relaxed">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </Stack>
            </Container>
        </section>
    )
}