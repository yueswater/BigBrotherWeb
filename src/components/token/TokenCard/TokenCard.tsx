import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import TokenStatusBadge from '../TokenStatusBadge/TokenStatusBadge'

export type TokenStatus = 'active' | 'stopped' | 'error'

export interface TokenCardProps {
    id: string | number
    name: string
    symbol: string
    status: TokenStatus
    balance: number
    limit: number
    lastUpdated?: string
    onStart?: () => void
    onStop?: () => void
}

export default function TokenCard({
    name,
    symbol,
    status,
    balance = 0,
    limit = 1,
    lastUpdated,
    onStart,
    onStop,
}: TokenCardProps) {
    const rawPercentage = (balance / limit) * 100
    const usagePercentage = Math.min(rawPercentage, 100)
    const displayPercentage = rawPercentage.toFixed(2)
    const isLowBalance = usagePercentage > 90

    return (
        <Card className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div>
                    <div className="text-lg font-semibold text-base-content">{name}</div>
                    <div className="text-xs text-secondary font-mono opacity-70">{symbol}</div>
                </div>
                <TokenStatusBadge status={status === 'active' ? 'active' : 'stopped'} />
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-end">
                    <span className="text-[10px] text-secondary uppercase font-bold tracking-widest">Token Usage</span>
                    <span className={`text-sm font-mono font-bold ${isLowBalance ? 'text-error' : 'text-primary'}`}>
                        {displayPercentage}%
                    </span>
                </div>
                <div className="w-full bg-base-300 rounded-full h-2.5 overflow-hidden">
                    <div
                        className={`h-full transition-all duration-700 ease-out ${isLowBalance ? 'bg-error' : 'bg-primary'}`}
                        style={{ width: `${usagePercentage}%` }}
                    />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-secondary">
                    <span>{typeof balance === 'number' ? balance.toLocaleString() : '0'}</span>
                    <span>{typeof limit === 'number' ? limit.toLocaleString() : '0'} MAX</span>
                </div>
            </div>

            <div className="pt-2">
                <div className="flex justify-between items-center bg-base-200/50 p-2 rounded-lg">
                    <span className="text-[10px] uppercase text-secondary font-medium">Last Sync</span>
                    <span className="text-xs text-base-content font-mono">
                        {lastUpdated ? new Date(lastUpdated).toLocaleString() : 'Never'}
                    </span>
                </div>
            </div>

            <div className="flex gap-2 pt-1">
                {status !== 'active' ? (
                    <Button variant="primary" size="sm" onClick={onStart} className="flex-1 justify-center">
                        Start Agent
                    </Button>
                ) : (
                    <Button variant="danger" size="sm" onClick={onStop} className="flex-1 justify-center">
                        Stop Agent
                    </Button>
                )}
            </div>
        </Card>
    )
}