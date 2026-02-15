export const colors = {
    primary: {
        DEFAULT: '#2C3E50',
        content: '#FFFFFF',
    },

    secondary: {
        DEFAULT: '#7F8C8D',
        content: '#FFFFFF',
    },

    accent: {
        DEFAULT: '#C0392B',
        content: '#FFFFFF',
    },

    base: {
        100: '#FFFFFF',
        200: '#ECF0F1',
        300: '#DCDDE1',
        content: '#2C3E50',
    },

    status: {
        info: '#3498DB',
        success: '#27AE60',
        warning: '#F1C40F',
        error: '#E74C3C',
    },
} as const

export type ColorToken = typeof colors
