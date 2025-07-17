import { createSlice } from "@reduxjs/toolkit";

type tabState = {
    value:number;
}

const initialState:tabState = {
    value:0,
}

const tabSlice = createSlice({
    name:"tab",
    initialState,
    reducers:{
        tabChange:(state,action) => {
            state.value = action.payload
        }
    }
})


export const {tabChange} = tabSlice.actions
export default tabSlice.reducer;