import TokenStatusBadge from '../TokenStatusBadge/TokenStatusBadge'
import Button from '@/components/ui/Button'

export type TokenStatus = 'active' | 'stopped' | 'error'

export interface TokenRowProps {
    name: string
    symbol: string
    balance: number
    limit: number
    status: TokenStatus
    lastUpdated?: string
    onStart?: () => void
    onStop?: () => void
}

export default function TokenRow({
    name,
    symbol,
    balance = 0,
    limit = 1,
    status,
    lastUpdated,
    onStart,
    onStop,
}: TokenRowProps) {
    const usagePercentage = Math.min(Math.round((balance / limit) * 100), 100)
    const isLowBalance = usagePercentage > 90

    return (
        <tr className="border-b border-base-300 hover:bg-base-200/30 transition-colors">
            <td className="py-4">
                <div className="font-semibold text-base-content leading-none mb-1">{name}</div>
                <div className="text-[10px] font-mono text-secondary opacity-70 uppercase tracking-tighter">{symbol}</div>
            </td>

            <td className="py-4">
                <div className="flex flex-col w-32 gap-1.5">
                    <div className="flex justify-between text-[10px] font-mono">
                        <span className={isLowBalance ? 'text-error font-bold' : 'text-primary font-bold'}>
                            {usagePercentage}%
                        </span>
                        <span className="text-secondary/80">
                            {typeof balance === 'number' ? balance.toLocaleString() : '0'}
                        </span>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-1.5 overflow-hidden">
                        <div
                            className={`h-full transition-all duration-700 ${isLowBalance ? 'bg-error' : 'bg-primary'}`}
                            style={{ width: `${usagePercentage}%` }}
                        />
                    </div>
                </div>
            </td>

            <td className="py-4">
                <TokenStatusBadge status={status} />
            </td>

            <td className="py-4 text-xs font-mono text-secondary">
                {lastUpdated ? new Date(lastUpdated).toLocaleString() : 'N/A'}
            </td>

            <td className="py-4">
                {status === 'active' ? (
                    <Button variant="danger" size="xs" onClick={onStop} className="px-4">Stop</Button>
                ) : (
                    <Button variant="primary" size="xs" onClick={onStart} className="px-4">Start</Button>
                )}
            </td>
        </tr>
    )
}