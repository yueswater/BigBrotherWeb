import React from 'react'
import { CheckCircle, AlertCircle, XCircle, Info, X } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastProps {
    message: string
    type?: ToastType
    onClose: () => void
}

export default function Toast({ message, type = 'info', onClose }: ToastProps) {
    const icons = {
        success: <CheckCircle className="text-success" size={20} />,
        error: <XCircle className="text-error" size={20} />,
        warning: <AlertCircle className="text-warning" size={20} />,
        info: <Info className="text-info" size={20} />,
    }

    const alertClasses = {
        success: 'alert-success',
        error: 'alert-error',
        warning: 'alert-warning',
        info: 'alert-info',
    }

    return (
        <div className={`alert ${alertClasses[type]} shadow-lg border border-base-300 min-w-[300px] flex items-center justify-between animate-in fade-in slide-in-from-top-4 duration-300`}>
            <div className="flex items-center gap-3">
                {icons[type]}
                <span className="text-sm font-medium">{message}</span>
            </div>
            <button onClick={onClose} className="btn btn-ghost btn-xs btn-circle">
                <X size={14} />
            </button>
        </div>
    )
}