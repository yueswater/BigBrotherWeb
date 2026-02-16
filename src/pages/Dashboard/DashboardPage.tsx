import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import Container from '@/components/layout/Container'
import Stack from '@/components/layout/Stack'
import Grid from '@/components/layout/Grid'
import TokenTable from '@/components/token/TokenTable'
import TokenCard from '@/components/token/TokenCard'
import MonitorStatus from '@/components/monitor/MonitorStatus'
import MonitorToggle from '@/components/monitor/MonitorToggle'
import Card from '@/components/ui/Card'
import Spinner from '@/components/ui/Spinner'
import { TokenService } from '@/services/tokenService'

export default function DashboardPage() {
    const queryClient = useQueryClient()

    const { data: tokens = [], isLoading: isTokensLoading } = useQuery({
        queryKey: ['tokens'],
        queryFn: TokenService.getTokens,
        refetchInterval: 3000,
    })

    const { data: stats } = useQuery({
        queryKey: ['dashboard-stats'],
        queryFn: TokenService.getDashboardStats,
        refetchInterval: 3000,
    })

    const { mutate: toggleAgent, isPending: isActionPending } = useMutation({
        mutationFn: ({ id, action }: { id: string | number; action: 'start' | 'stop' }) =>
            action === 'start' ? TokenService.startAgent(id) : TokenService.stopAgent(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tokens'] })
            queryClient.invalidateQueries({ queryKey: ['dashboard-stats'] })
        },
    })

    const handleGlobalToggle = () => {
        const isRunning = tokens.some(t => t.status === 'active')
        const action = isRunning ? 'stop' : 'start'

        tokens.forEach(token => {
            if ((action === 'stop' && token.status === 'active') ||
                (action === 'start' && token.status !== 'active')) {
                toggleAgent({ id: token.id, action })
            }
        })
    }

    if (isTokensLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-transparent">
                <Stack align="center" gap="sm">
                    <Spinner size="lg" />
                    <p className="text-secondary animate-pulse">Initializing BigBrother Monitoring...</p>
                </Stack>
            </div>
        )
    }

    const activeCount = tokens.filter(t => t.status === 'active').length

    return (
        <div className="min-h-screen bg-transparent py-8">
            <Container size="xl">
                <Stack gap="lg">
                    <header className="flex justify-between items-end">
                        <div>
                            <h1 className="text-3xl font-bold text-base-content tracking-tight">BigBrother Dashboard</h1>
                            <p className="text-secondary text-sm">Real-time AI Token Consumption & Agent Monitoring</p>
                        </div>
                        <Card className="p-2 bg-transparent ">
                            <Stack direction="row" gap="md" align="center" className="px-2">
                                <MonitorStatus status={activeCount > 0 ? 'running' : 'stopped'} />
                                <div className="h-8 w-px bg-base-300 mx-2"></div>
                                <MonitorToggle
                                    running={activeCount > 0}
                                    loading={isActionPending}
                                    onToggle={handleGlobalToggle}
                                />
                            </Stack>
                        </Card>
                    </header>

                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-base-content/80">Quota Overview</h2>
                            <span className="text-xs font-mono text-secondary">
                                Total Active Agents: {activeCount} / {tokens.length}
                            </span>
                        </div>
                        <Grid cols={3} gap="lg">
                            {tokens.map((token) => (
                                <TokenCard
                                    key={token.id}
                                    {...token}
                                    onStart={() => toggleAgent({ id: token.id, action: 'start' })}
                                    onStop={() => toggleAgent({ id: token.id, action: 'stop' })}
                                />
                            ))}
                        </Grid>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-base-content/80 mb-4">API Instance Inventory</h2>
                        <TokenTable
                            tokens={tokens.map(t => ({
                                ...t,
                                onStart: () => toggleAgent({ id: t.id, action: 'start' }),
                                onStop: () => toggleAgent({ id: t.id, action: 'stop' })
                            }))}
                        />
                    </section>
                </Stack>
            </Container>
        </div>
    )
}