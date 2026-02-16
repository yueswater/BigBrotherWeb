import api from './api';
import { LoginResponse, User, UserUpdate, PasswordUpdate } from '@/types/auth';

export const AuthService = {
    login: async (formData: any): Promise<LoginResponse> => {
        const response = await api.post<LoginResponse>('/auth/login', formData);
        return response.data;
    },
    register: async (userData: any): Promise<User> => {
        const response = await api.post<User>('/auth/register', userData);
        return response.data;
    },
    updateProfile: async (userData: UserUpdate): Promise<User> => {
        const response = await api.put<User>('/auth/me', userData);
        return response.data;
    },
    changePassword: async (pwData: PasswordUpdate): Promise<any> => {
        const response = await api.put('/auth/me/password', pwData);
        return response.data;
    }
};