export type AIModelProvider = 'openai' | 'anthropic' | 'google' | 'meta' | 'mistral';

export type TokenStatus = 'active' | 'stopped' | 'error';

export interface AIToken {
    id: string;
    name: string;
    symbol: string;
    provider: AIModelProvider;
    status: TokenStatus;
    balance: number;
    limit: number;
    lastUpdated: string;
}

export interface CreateProxyRequest {
    name: string;
    provider: AIModelProvider;
    model_name: string;
    api_key: string;
    limit: number;
}

export interface MonitorSystemState {
    isRunning: boolean;
    systemLatency: number;
    activeAgents: number;
    totalUsage24h: number;
}