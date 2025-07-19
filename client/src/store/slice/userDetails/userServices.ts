import axios from "../../../api/axios"


export const userDetailsPostService = async (data:any) => {
    const response = await axios.post('api/user-details',data)
    return response.data
}