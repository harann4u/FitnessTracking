import { createSlice } from "@reduxjs/toolkit";


export type LoginInfoType = {
    accessToken: string,
    isLogin: boolean,
    authType: string,
}

export type InitialState = {
    loginInfo: LoginInfoType
}

const initialState: InitialState = {
    loginInfo: {
        accessToken: '',
        isLogin: false,
        authType: '',
    }
}

const loginInfoSlice = createSlice({
    name: "loginInfoDetails",
    initialState,
    reducers: {
        saveLogindetails: (state, action) => {
            state.loginInfo = action.payload
        },
        resetLoginDetails: (state) => {
            state.loginInfo = {
                accessToken: '',
                isLogin: false,
                authType: '',
            }
        }
    }
})

export const { saveLogindetails, resetLoginDetails } = loginInfoSlice.actions
export default loginInfoSlice.reducer