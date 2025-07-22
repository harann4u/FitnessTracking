import type { LoginInfoType } from "./store/slice/loginInfo/loginInfoSlice"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


const AppInitializer = ({children}:{children:React.ReactNode}) => {
    const navigate = useNavigate();
    const [isChildLoad, setIsChildLoad] = useState<boolean>(false);

    const initalCheckOfLogin = () => {
        const localStorageLoginInfo = localStorage.getItem('loginInfo')
        if (localStorageLoginInfo) {
            const loginInfo: LoginInfoType = JSON.parse(localStorageLoginInfo)
            if (loginInfo.isLogin) {
                setIsChildLoad(true)
                navigate('/admin')
            }
        } else {
            setIsChildLoad(true)
            navigate('/login')
        }
    }

    useEffect(() => {
        initalCheckOfLogin()
       
    }, [])

    
    return (
       <>{isChildLoad && children}</>
    )
}

export default AppInitializer