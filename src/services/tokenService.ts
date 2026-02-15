import api from './api'
import { AIToken, DashboardStats, CreateProxyRequest } from '@/types'

export const TokenService = {
    getDashboardStats: async (): Promise<DashboardStats> => {
        const response = await api.get<DashboardStats>('/stats/dashboard')
        return response.data
    },

    getTokens: async (): Promise<AIToken[]> => {
        const response = await api.get<any[]>('/proxy/instances')
        return response.data.map(token => ({
            ...token,
            balance: token.total_used_tokens || 0,
            lastUpdated: token.updated_at || null,
            symbol: token.provider || 'AI'
        }))
    },

    createProxy: async (data: CreateProxyRequest): Promise<AIToken> => {
        const response = await api.post<AIToken>('/proxy/instances', data)
        return response.data
    },

    startAgent: async (id: string | number) => {
        const response = await api.post(`/proxy/instances/${id}/start`)
        return response.data
    },

    stopAgent: async (id: string | number) => {
        const response = await api.post(`/proxy/instances/${id}/stop`)
        return response.data
    },

    chatOpenAI: async (payload: any) => {
        const response = await api.post('/proxy/openai', payload)
        return response.data
    },

    chatAnthropic: async (payload: any) => {
        const response = await api.post('/proxy/anthropic', payload)
        return response.data
    },

    chatGemini: async (payload: any) => {
        const response = await api.post('/proxy/gemini', payload)
        return response.data
    }
}