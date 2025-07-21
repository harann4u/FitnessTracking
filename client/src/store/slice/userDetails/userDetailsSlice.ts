import {  createSlice } from "@reduxjs/toolkit";
import {postUserDetails} from './userServices'


export interface UserDetailsType {
    fullName: string,
    email: string,
    password: string,
    phoneNumber: string,
    gender: string, // Gender is Pending
    experienceLevel: string, // Experience Leve is Pending
    age: number ,
    height: number ,
    currentWeight: number ,
    goalWeight: number ,
    activitylevel: string,
    perferredWorkoutTime: string,
    perferredworkoutType: string,
    primaryFitnessGoal: string,
}

interface InitialState {
    user: UserDetailsType | null,
    loading:boolean,
    error:string|null
}

const initialState: InitialState = {
    user: {
        fullName: "",
        email: "",
        password: "",
        phoneNumber: '',
        gender: "",
        experienceLevel: "",
        age: 0,
        height: 0,
        currentWeight: 0,
        goalWeight: 0,
        activitylevel: "",
        perferredWorkoutTime: "",
        perferredworkoutType: "",
        primaryFitnessGoal: ''
    },
     loading:false,
    error:''
}

const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {},
    extraReducers :(builder) => {
        builder
            .addCase(postUserDetails.pending,(state)=>{
                state.loading = true,
                state.error = null
            })
            .addCase(postUserDetails.fulfilled,(state, action)=>{
                state.loading = false,
                state.user = action.payload 
            })
    }
})




export default userDetailsSlice.reducer