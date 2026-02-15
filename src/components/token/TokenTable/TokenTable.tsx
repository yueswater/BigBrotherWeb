import TokenRow, { TokenRowProps } from '../TokenRow/TokenRow'
import Card from '@/components/ui/Card'

export interface TokenTableProps {
    tokens: TokenRowProps[]
}

export default function TokenTable({ tokens }: TokenTableProps) {
    return (
        <Card className="overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-left border-b border-base-300">
                            <th className="py-3 text-[10px] uppercase tracking-widest text-secondary font-bold">
                                Token Instance
                            </th>
                            <th className="py-3 text-[10px] uppercase tracking-widest text-secondary font-bold">
                                Usage / Balance
                            </th>
                            <th className="py-3 text-[10px] uppercase tracking-widest text-secondary font-bold">
                                Status
                            </th>
                            <th className="py-3 text-[10px] uppercase tracking-widest text-secondary font-bold">
                                Last Sync
                            </th>
                            <th className="py-3 text-[10px] uppercase tracking-widest text-secondary font-bold">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-base-300/50">
                        {tokens.map((token, index) => (
                            <TokenRow key={token.symbol || index} {...token} />
                        ))}
                        {tokens.length === 0 && (
                            <tr>
                                <td colSpan={5} className="py-10 text-center text-secondary text-sm italic">
                                    No AI agents found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}