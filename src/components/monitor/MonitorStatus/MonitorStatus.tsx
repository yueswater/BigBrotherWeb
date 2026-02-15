import Badge from '@/components/ui/Badge'

export type MonitorStatusType =
    | 'running'
    | 'stopped'
    | 'error'

export interface MonitorStatusProps {
    status: MonitorStatusType
}

export default function MonitorStatus({
    status,
}: MonitorStatusProps) {

    const config = {
        running: {
            label: 'Running',
            variant: 'success' as const,
        },
        stopped: {
            label: 'Stopped',
            variant: 'neutral' as const,
        },
        error: {
            label: 'Error',
            variant: 'error' as const,
        },
    }[status]

    return (
        <Badge variant={config.variant}>
            {config.label}
        </Badge>
    )
}
