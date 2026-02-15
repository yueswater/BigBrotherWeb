import api from './api';
import { LoginResponse, User } from '@/types/auth';

export const AuthService = {
    login: async (formData: any): Promise<LoginResponse> => {
        const response = await api.post<LoginResponse>('/auth/login', formData);
        return response.data;
    },
    register: async (userData: any): Promise<User> => {
        const response = await api.post<User>('/auth/register', userData);
        return response.data;
    }
};