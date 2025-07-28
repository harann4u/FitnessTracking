import { configureStore } from "@reduxjs/toolkit";
import tabSelectionReducer from "./slice/tabJsonSlice";
import loginInfoReducer from "./slice/loginInfo/loginInfoSlice";
import userDeatailsReducer from "./slice/userDetails/userDetailsSlice"
import { createLogger } from "redux-logger";


const customLogger = createLogger({
    collapsed: true,
    diff: true,
    duration: true,
})

export const store = configureStore({
    reducer: {
        tab: tabSelectionReducer,
        loginInfo: loginInfoReducer,
        userDetails: userDeatailsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customLogger)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch