import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus, ShieldCheck, HardDrive } from 'lucide-react'
import Container from '@/components/layout/Container'
import Stack from '@/components/layout/Stack'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Modal from '@/components/ui/Modal'
import TokenTable from '@/components/token/TokenTable'
import { TokenService } from '@/services/tokenService'
import { AIModelProvider, CreateProxyRequest } from '@/types'

export default function ProxiesPage() {
    const queryClient = useQueryClient()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState<CreateProxyRequest>({
        name: '',
        provider: 'openai',
        model_name: '',
        api_key: '',
        limit: 1000000
    })

    const { data: tokens = [] } = useQuery({
        queryKey: ['tokens'],
        queryFn: TokenService.getTokens
    })

    const { mutate: createProxy, isPending } = useMutation({
        mutationFn: (data: CreateProxyRequest) => TokenService.createProxy(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tokens'] })
            setIsModalOpen(false)
            setFormData({ name: '', provider: 'openai', model_name: '', api_key: '', limit: 1000000 })
        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        createProxy(formData)
    }

    return (
        <div className="py-8 px-4">
            <Container size="xl">
                <Stack gap="lg">
                    <header className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-base-content">API Proxies</h1>
                            <p className="text-secondary text-sm">Manage your AI provider credentials and routing</p>
                        </div>
                        <Button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2">
                            <Plus size={18} />
                            Add New Proxy
                        </Button>
                    </header>

                    <Card className="bg-base-100/50 border-dashed border-2 flex flex-col items-center py-12 px-4 text-center border-base-300">
                        <div className="p-4 bg-primary/10  mb-4">
                            <ShieldCheck size={32} className="text-primary" />
                        </div>
                        <h3 className="text-lg font-bold">Secure API Management</h3>
                        <p className="text-secondary text-sm max-w-md mx-auto mt-2 leading-relaxed">
                            Keys are encrypted at rest. BigBrother acts as a pass-through proxy to track usage without exposing your primary credentials.
                        </p>
                    </Card>

                    <section>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-base-content">
                            <HardDrive size={20} className="text-primary" />
                            Active Instances
                        </h2>
                        <TokenTable tokens={tokens} />
                    </section>
                </Stack>
            </Container>

            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Create New Proxy Instance"
            >
                <form onSubmit={handleSubmit}>
                    <Stack gap="md">
                        <Input
                            label="Instance Name"
                            placeholder="e.g. Production GPT-4o"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            required
                        />

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-base-content">Provider</span>
                            </label>
                            <select
                                className="select select-bordered w-full bg-base-100 border-base-300 focus:outline-primary"
                                value={formData.provider}
                                onChange={e => setFormData({ ...formData, provider: e.target.value as AIModelProvider })}
                            >
                                <option value="openai">OpenAI</option>
                                <option value="anthropic">Anthropic</option>
                                <option value="google">Google Gemini</option>
                                <option value="mistral">Mistral</option>
                                <option value="meta">Meta Llama</option>
                                <option value="cohere">Cohere</option>
                            </select>
                        </div>

                        <Input
                            label="Model Identifier"
                            placeholder="e.g. gpt-4o or claude-3-5-sonnet"
                            value={formData.model_name}
                            onChange={e => setFormData({ ...formData, model_name: e.target.value })}
                            required
                        />

                        <Input
                            label="API Key"
                            type="password"
                            placeholder="sk-..."
                            value={formData.api_key}
                            onChange={e => setFormData({ ...formData, api_key: e.target.value })}
                            required
                        />

                        <Input
                            label="Monthly Token Limit"
                            type="number"
                            value={formData.limit.toString()}
                            onChange={e => setFormData({ ...formData, limit: parseInt(e.target.value) || 0 })}
                            required
                        />

                        <div className="flex justify-end gap-3 mt-6">
                            <Button variant="ghost" onClick={() => setIsModalOpen(false)} type="button">
                                Cancel
                            </Button>
                            <Button type="submit" loading={isPending}>
                                Create Instance
                            </Button>
                        </div>
                    </Stack>
                </form>
            </Modal>
        </div>
    )
}