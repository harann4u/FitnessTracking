import {createContext, useContext} from 'react'

export type ToastType = "success" | "error" | "info"

type Toast = {
    id:number;
    message:string;
    type:ToastType
}

type ToastContextType = {
    toasts: Toast[];
    showToast:(message:string,type?:ToastType) => void;
}

export const ToastContext = createContext<ToastContextType | null>(null)

export const useToast = () => {
    const context = useContext(ToastContext)
    if(!context) throw new Error("useToast must be used within Toast Provider")
    return context
}


