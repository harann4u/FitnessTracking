import axios from "axios";
import { store, type RootState } from "../store/store";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use((request) => {
    const excludeEndpoints = ['/login', '/logout']

    const shouldExclude = excludeEndpoints.some((endpoint) =>
        request.url?.includes(endpoint)
    )
    if (!shouldExclude) {
        const token = localStorage.getItem('loginInfo')
        console.log("Token++",token)
        if (token) {
            const loginInfo = JSON.parse(token)
            request.headers.Authorization = `Bearer ${loginInfo?.accessToken}`
        }
    }

    return request
},
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance