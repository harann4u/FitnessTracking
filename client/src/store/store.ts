import { configureStore } from "@reduxjs/toolkit";
import  tabSelectionReducer  from "./slice/tabJsonSlice";
import loginInfoReducer from "./slice/loginInfo/loginInfoSlice";
import userDeatailsReducer from "./slice/userDetails/userDetailsSlice"

export const store = configureStore({
    reducer:{
        tab:tabSelectionReducer,
        loginInfo:loginInfoReducer,
        userDetails:userDeatailsReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch