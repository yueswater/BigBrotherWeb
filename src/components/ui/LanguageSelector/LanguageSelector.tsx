import { Languages } from 'lucide-react'

export interface LanguageSelectorProps {
    onLanguageChange?: (lang: string) => void
    currentLang?: string
}

export default function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
    return (
        <button
            onClick={() => onLanguageChange?.('zh-TW')}
            className="p-2 text-[#64748b] hover:text-primary transition-colors rounded-lg hover:bg-base-200"
        >
            <Languages size={20} />
        </button>
    )
}