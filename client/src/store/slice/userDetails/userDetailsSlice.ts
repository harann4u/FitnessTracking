import { createSlice } from "@reduxjs/toolkit";


interface UserDetailsType {
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
    user: UserDetailsType | null
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
    }
}

const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = {
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
            }
        }
    }
})

export const { setUserDetails, clearUser } = userDetailsSlice.actions
export default userDetailsSlice.reducer