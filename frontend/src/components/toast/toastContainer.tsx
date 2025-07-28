 import ToastItem from "./toastItem"

const ToastContainer = ({ toasts }: { toasts: any[] }) => {
    return(
        <div style = {{
            position : 'fixed',
            top:20,
            right:20,
            zIndex:9999,
            display:'flex',
            flexDirection:'column',
            gap:"10px",
            backgroundColor:"yellow"
        }}>
            {toasts.map((toast:any)=>(
                <ToastItem key = {toast.id} toast={toast}/>
            ))}
        </div>
    )
}

export default ToastContainer