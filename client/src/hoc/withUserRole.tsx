import type { ComponentType } from "react"
import type { LoginInfoType } from "../store/slice/loginInfo/loginInfoSlice"
import { USER_ROLES } from "../constants/authType.enums"



const WithUserRole = <P extends object>(Component:ComponentType) => {
    return (props:P) => {
        const localStorageLoginINfo = localStorage.getItem('loginInfo')
        if(localStorageLoginINfo){
            const loginInfo:LoginInfoType = JSON.parse(localStorageLoginINfo)
            if(loginInfo.authType !== USER_ROLES.ADMIN){
                return(
                    <>You ARE NOT ALLOWED TO SHOW THIS IMAGE</>
                )
            }else{
                return(
                    <Component {...props}/>
                )
            }     
        }
    }

}

export default WithUserRole