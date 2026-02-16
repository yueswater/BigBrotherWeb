import React from 'react'
import Modal from '@/components/ui/Modal/Modal'

const PRESET_SEEDS = [
    'Aidan', 'Bayer', 'Caleb', 'Dante', 'Elias', 'Felix', 'Gideon', 'Hugo', 'Isaac', 'Jude',
    'Kaleb', 'Leo', 'Milo', 'Nico', 'Owen', 'Phoebe', 'Quinn', 'Remy', 'Silas', 'Theo',
    'Uma', 'Veda', 'Wyatt', 'Xander', 'Yara', 'Zane', 'Coco', 'Pepper', 'Cookie', 'Mochi'
]

export interface AvatarSelectorModalProps {
    isOpen: boolean
    onClose: () => void
    onSelect: (seed: string) => void
    currentSeed?: string
}

export default function AvatarSelectorModal({
    isOpen,
    onClose,
    onSelect,
    currentSeed
}: AvatarSelectorModalProps) {
    return (
        <Modal open={isOpen} onClose={onClose} title="選擇像素頭像">
            <div className="grid grid-cols-5 gap-4 p-4 max-h-[400px] overflow-y-auto custom-scrollbar bg-base-100 border-4 border-base-content">
                {PRESET_SEEDS.map((seed) => (
                    <button
                        key={seed}
                        onClick={() => {
                            onSelect(seed)
                            onClose()
                        }}
                        className={`border-4 p-1 transition-all hover:scale-110 active:scale-95 ${currentSeed === seed ? 'border-primary bg-primary/10' : 'border-base-content/20 hover:border-primary/50'
                            }`}
                    >
                        <img
                            src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`}
                            alt={seed}
                            className="w-full h-full aspect-square"
                            style={{ imageRendering: 'pixelated' }}
                        />
                    </button>
                ))}
            </div>
        </Modal>
    )
}