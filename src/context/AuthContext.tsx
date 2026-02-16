import React, { createContext, useContext, useState, useEffect } from 'react'
import { User } from '@/types/auth'
import { AuthService } from '@/services/authService'

interface AuthContextType {
    isAuthenticated: boolean
    user: User | null
    login: (token: string) => void
    logout: () => void
    updateUser: (userData: Partial<User>) => void
    isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const fetchMe = async () => {
        try {
            const data = await AuthService.updateProfile({})
            setUser(data)
            setIsAuthenticated(true)
        } catch (error) {
            localStorage.removeItem('auth_token')
            setIsAuthenticated(false)
            setUser(null)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('auth_token')
        if (token) {
            fetchMe()
        } else {
            setIsLoading(false)
        }
    }, [])

    const login = (token: string) => {
        localStorage.setItem('auth_token', token)
        fetchMe()
    }

    const logout = () => {
        localStorage.removeItem('auth_token')
        setIsAuthenticated(false)
        setUser(null)
    }

    const updateUser = (userData: Partial<User>) => {
        if (user) {
            setUser({ ...user, ...userData })
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, updateUser, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within AuthProvider')
    return context
}