import Badge from '@/components/ui/Badge'

export type TokenStatus =
    | 'active'
    | 'stopped'
    | 'error'
    | 'pending'

export interface TokenStatusBadgeProps {
    status: TokenStatus
}

export default function TokenStatusBadge({
    status,
}: TokenStatusBadgeProps) {

    const variantMap = {
        active: 'success',
        stopped: 'secondary',
        error: 'error',
        pending: 'warning',
    } as const

    const labelMap = {
        active: 'ACTIVE',
        stopped: 'STOPPED',
        error: 'ERROR',
        pending: 'PENDING',
    }

    return (
        <Badge variant={variantMap[status]}>
            {labelMap[status]}
        </Badge>
    )
}
