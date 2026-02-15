import { Moon, Sun } from 'lucide-react'

export interface ThemeToggleProps {
    theme?: 'light' | 'dark'
    onThemeChange?: (theme: 'light' | 'dark') => void
}

export default function ThemeToggle({ theme = 'light', onThemeChange }: ThemeToggleProps) {
    const isLight = theme === 'light'

    const toggleTheme = () => {
        onThemeChange?.(isLight ? 'dark' : 'light')
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 text-[#64748b] hover:text-primary hover:bg-base-200 transition-all rounded-xl bg-transparent"
        >
            {isLight ? (
                <Moon size={20} />
            ) : (
                <Sun size={20} />
            )}
        </button>
    )
}