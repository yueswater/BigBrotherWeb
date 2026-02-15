import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '@/services/authService'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Stack from '@/components/layout/Stack'

export default function RegisterPage() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ username: '', email: '', password: '' })

    const { mutate: register, isPending, isError } = useMutation({
        mutationFn: AuthService.register,
        onSuccess: () => navigate('/login')
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        register(formData)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <Card className="w-full max-w-md p-8 bg-base-100">
                <form onSubmit={handleSubmit}>
                    <Stack gap="lg">
                        <header className="text-center">
                            <h1 className="text-3xl font-bold text-primary">Join BigBrother</h1>
                            <p className="text-secondary mt-2">Start tracking your LLM usage today</p>
                        </header>

                        <Stack gap="md">
                            <Input
                                label="Username"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                placeholder="johndoe"
                                required
                            />
                            <Input
                                label="Email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="john@example.com"
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
                                Registration failed. User might already exist.
                            </div>
                        )}

                        <Button type="submit" loading={isPending} className="w-full justify-center">
                            Create Account
                        </Button>

                        <p className="text-center text-sm text-secondary">
                            Already have an account?{' '}
                            <Link to="/login" className="text-primary hover:underline font-medium">
                                Sign in
                            </Link>
                        </p>
                    </Stack>
                </form>
            </Card>
        </div>
    )
}