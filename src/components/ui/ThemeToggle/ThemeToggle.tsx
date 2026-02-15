import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const isLight = theme === 'light'

    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 text-secondary hover:text-primary hover:bg-base-200 transition-all rounded-xl bg-transparent"
        >
            {isLight ? (
                <Moon size={20} />
            ) : (
                <Sun size={20} />
            )}
        </button>
    )
}