import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { TokenService } from '@/services/tokenService'

export function useTokens() {
    return useQuery({
        queryKey: ['tokens'],
        queryFn: TokenService.getTokens,
        refetchInterval: 5000,
    })
}

export function useDashboardStats() {
    return useQuery({
        queryKey: ['dashboard-stats'],
        queryFn: TokenService.getDashboardStats
    })
}

export function useAgentAction() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, action }: { id: string | number, action: 'start' | 'stop' }) =>
            action === 'start' ? TokenService.startAgent(id) : TokenService.stopAgent(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tokens'] })
        }
    })
}