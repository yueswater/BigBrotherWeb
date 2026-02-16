import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'

export interface MonitorToggleProps {
    running: boolean
    loading?: boolean
    onToggle?: () => void
}

export default function MonitorToggle({
    running,
    loading = false,
    onToggle,
}: MonitorToggleProps) {
    return (
        <Button
            variant={running ? 'danger' : 'primary'}
            size="lg"
            disabled={loading}
            onClick={onToggle}
            className=" px-8 font-bold flex items-center gap-2"
        >
            {loading && <Spinner size="sm" />}
            {running ? 'Stop Monitoring' : 'Start Monitoring'}
        </Button>
    )
}