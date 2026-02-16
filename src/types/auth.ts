export interface User {
    id: number;
    username: string;
    email: string;
    full_name?: string;
    is_active: boolean;
    avatar_seed?: string
}

export interface LoginResponse {
    access_token: string;
    token_type: string;
}

export interface UserUpdate {
    full_name?: string;
    email?: string;
}

export interface PasswordUpdate {
    old_password: string;
    new_password: string;
}