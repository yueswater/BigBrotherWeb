export interface User {
    id: number;
    username: string;
    email: string;
    is_active: boolean;
}

export interface LoginResponse {
    access_token: string;
    token_type: string;
}