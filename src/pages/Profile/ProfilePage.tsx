import React, { useState, useEffect } from 'react'
import { ProfileInfoCard, AccountTab, SecurityTab, AvatarSelectorModal } from '@/components/profile'
import { AuthService } from '@/services/authService'

export default function ProfilePage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<'account' | 'security'>('account')
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        full_name: '',
        username: '',
        email: '',
        tier: 'PRO PLAN',
        avatar_seed: 'yueswater'
    })
    const [passwordData, setPasswordData] = useState({
        old_password: '',
        new_password: '',
        confirm_password: ''
    })

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await AuthService.updateProfile({})
                setFormData({
                    full_name: response.full_name || '',
                    username: response.username || '',
                    email: response.email || '',
                    tier: 'PRO PLAN',
                    avatar_seed: response.avatar_seed || 'yueswater'
                })
            } catch (error) {
                console.error("Failed to load user data", error)
            }
        }
        fetchUserData()
    }, [])

    const handleUpdateProfile = async (data?: { full_name: string; email: string }) => {
        setLoading(true)
        try {
            const payload = data ? { ...data, avatar_seed: formData.avatar_seed } : formData
            const response = await AuthService.updateProfile(payload)
            setFormData(prev => ({
                ...prev,
                full_name: response.full_name || '',
                email: response.email || '',
                avatar_seed: response.avatar_seed || prev.avatar_seed
            }))
            alert('Profile updated successfully!')
        } catch (error) {
            console.error(error)
            alert('Update failed')
        } finally {
            setLoading(false)
        }
    }

    const handleChangePassword = async () => {
        if (passwordData.new_password !== passwordData.confirm_password) {
            alert('New passwords do not match')
            return
        }
        setLoading(true)
        try {
            await AuthService.changePassword({
                old_password: passwordData.old_password,
                new_password: passwordData.new_password
            })
            alert('Password updated successfully!')
            setPasswordData({ old_password: '', new_password: '', confirm_password: '' })
        } catch (error) {
            alert('Password update failed')
        } finally {
            setLoading(false)
        }
    }

    const currentAvatarUrl = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${formData.avatar_seed}`

    return (
        <div className="flex flex-col md:flex-row gap-12 p-12 bg-base-200 min-h-screen font-pixel">
            <div className="w-full md:w-96">
                <ProfileInfoCard
                    username={formData.username || "USER"}
                    tier={formData.tier}
                    avatarUrl={currentAvatarUrl}
                    onAvatarClick={() => setIsModalOpen(true)}
                />
            </div>

            <div className="flex-1 text-base-content">
                <div className="flex gap-12 border-b-8 border-base-content/20 mb-12">
                    <button
                        onClick={() => setActiveTab('account')}
                        className={`pb-4 text-2xl font-bold uppercase transition-all ${activeTab === 'account' ? 'text-primary border-b-8 border-primary -mb-2' : 'text-base-content/60 hover:text-primary'}`}
                    >
                        Account
                    </button>
                    <button
                        onClick={() => setActiveTab('security')}
                        className={`pb-4 text-2xl font-bold uppercase transition-all ${activeTab === 'security' ? 'text-primary border-b-8 border-primary -mb-2' : 'text-base-content/60 hover:text-primary'}`}
                    >
                        Security
                    </button>
                </div>

                {activeTab === 'account' ? (
                    <AccountTab
                        fullName={formData.full_name}
                        username={formData.username}
                        email={formData.email}
                        tier={formData.tier}
                        loading={loading}
                        onChange={(f, v) => setFormData(prev => ({ ...prev, [f]: v }))}
                        onUpdate={() => handleUpdateProfile()}
                    />
                ) : (
                    <SecurityTab
                        passwordData={passwordData}
                        loading={loading}
                        onChange={(f, v) => setPasswordData(prev => ({ ...prev, [f]: v }))}
                        onUpdate={handleChangePassword}
                    />
                )}
            </div>

            <AvatarSelectorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSelect={(seed: string) => setFormData(prev => ({ ...prev, avatar_seed: seed }))}
                currentSeed={formData.avatar_seed}
            />
        </div>
    )
}