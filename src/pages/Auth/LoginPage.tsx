import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '@/services/authService'
import { useAuth } from '@/context/AuthContext'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Stack from '@/components/layout/Stack'

export default function LoginPage() {
    const navigate = useNavigate()
    const { login: authLogin } = useAuth()
    const [formData, setFormData] = useState({ username: '', password: '' })

    const { mutate: login, isPending, isError } = useMutation({
        mutationFn: AuthService.login,
        onSuccess: (data) => {
            authLogin(data.access_token)
            navigate('/dashboard')
        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        login(formData)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <Card className="w-full max-w-md p-8 bg-base-100">
                <form onSubmit={handleSubmit}>
                    <Stack gap="lg">
                        <header className="text-center">
                            <h1 className="text-3xl font-bold text-primary">BigBrother</h1>
                            <p className="text-secondary mt-2">Sign in to monitor your AI agents</p>
                        </header>

                        <Stack gap="md">
                            <Input
                                label="Username"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                placeholder="Enter your username"
                                required
                            />
                            <Input
                                label="Password"
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="••••••••"
                                required
                            />
                        </Stack>

                        {isError && (
                            <div className="text-error text-sm text-center bg-error/10 py-2 rounded">
                                Invalid credentials, please try again.
                            </div>
                        )}

                        <Button type="submit" loading={isPending} className="w-full justify-center">
                            Sign In
                        </Button>

                        <p className="text-center text-sm text-secondary">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-primary hover:underline font-medium">
                                Create one
                            </Link>
                        </p>
                    </Stack>
                </form>
            </Card>
        </div>
    )
}