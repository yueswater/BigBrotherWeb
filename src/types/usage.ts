export interface MonthlyUsage {
    date: string
    total_cost: number
    total_tokens: number
}

export interface DashboardStats {
    total_cost: number
    total_tokens: number
    total_requests: number
    provider_distribution: Record<string, number>
    daily_usage: MonthlyUsage[]
}