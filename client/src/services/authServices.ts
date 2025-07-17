import axios from "../api/axios"

type FormValues = {
    email: string,
    password: string,
    confirmPassword: string
}

type LoginFormValue = {
    email: string,
    password: string
}

export const signupService = async(formData:FormValues)=> { 
        const response = await axios.post('/api/auth/signup',formData)
        return response.data
}

export const loginService = async (formData:LoginFormValue) => {
    const response = await axios.post('/api/auth/login',formData)
    return response.data
}

export const refershTokenService = async () => {
    const response = await axios.get('api/auth/refresh-token',{
        withCredentials : true
    })
    return response
}