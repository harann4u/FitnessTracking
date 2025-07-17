import { configureStore } from "@reduxjs/toolkit";
import  tabSelectionReducer  from "./slice/tabJsonSlice";


export const store = configureStore({
    reducer:{
        tab:tabSelectionReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch