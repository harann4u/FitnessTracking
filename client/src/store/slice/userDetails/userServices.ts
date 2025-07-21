import axiosInstance from "../../../api/axios"


export const userDetailsPostService = async (data:any) => {
    const response = await axiosInstance.post('api/user-details',data)
    return response.data
}