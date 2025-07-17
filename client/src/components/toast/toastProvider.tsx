import React, { useState } from "react"
import { ToastContext, type ToastType } from "./toastContext";
import ToastContainer from "./ToastContainer";

let idCounter = 0

const ToastProvider = ({children}:{children:React.ReactNode})=> {
    const [toasts, setToasts] = useState<{ id: number; message: string; type:ToastType}[]>([])

    const showToast = (message: string, type: ToastType = "info") => {    
        const id = idCounter++;
        setToasts((prev) => [...prev, {id,message,type}])

        setTimeout(()=>{
            setToasts((prev) => prev.filter((toast) => toast.id !== id ))
        },3000)
    };
    
    return(
        <ToastContext.Provider value = {{toasts, showToast}}>
            {children}
             <ToastContainer toasts={toasts} />
        </ToastContext.Provider>
    )
}

export default ToastProvider