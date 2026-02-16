import languages from 'pixelarticons/svg/languages.svg'

export interface LanguageSelectorProps {
    onLanguageChange?: (lang: string) => void
    currentLang?: string
}

export default function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
    return (
        <button
            onClick={() => onLanguageChange?.('zh-TW')}
            className="p-2.5 text-base-content hover:bg-base-200 transition-all rounded-none bg-transparent flex items-center justify-center border-2 border-transparent hover:border-base-content active:translate-y-0.5 group"
        >
            <img
                src={languages}
                width={20}
                height={20}
                style={{
                    imageRendering: 'pixelated',
                    filter: 'brightness(0) invert(1)'
                }}
                className="opacity-70 group-hover:opacity-100 transition-opacity"
                alt="Language"
            />
        </button>
    )
}