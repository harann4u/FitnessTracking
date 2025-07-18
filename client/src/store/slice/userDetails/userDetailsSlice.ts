import { createSlice } from "@reduxjs/toolkit";
import type  {FormData}  from "../../../pages/profileSetting/personalDetails/FormData";



interface InitialState{
    user:FormData | null
}

const initialState : InitialState = {
    user:null
}

const userDetailsSlice = createSlice({
    name:'userDetails',
    initialState,
    reducers:{
        setUserDetails:(state,action)=>{
            state.user = action.payload
        },
        clearUser:(state)=>{
            state.user = null;
        }
    }
}) 

export const {setUserDetails, clearUser} = userDetailsSlice.actions
export default userDetailsSlice.reducer