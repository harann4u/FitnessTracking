import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../../api/axios"
import type { UserDetailsType } from "./userDetailsSlice"




export const postUserDetails = createAsyncThunk(
    'user/postUserDetails',
    async(userDetails:UserDetailsType, {rejectWithValue })=>{
        try{
            const response = await axiosInstance.post('api/user-details',userDetails)
            return response.data
        }catch (err){
            return rejectWithValue(err)
        }
    }
) 