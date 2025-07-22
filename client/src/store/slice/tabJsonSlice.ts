import { createSlice } from "@reduxjs/toolkit";

export type tabJsonState = {
    name:string,
    id:number,
    isIn: boolean,
}

const initialState:tabJsonState[] = [
    {
        name:'Dashboard',
        id:0,
        isIn:true
    },
    {
        name:'Profile Setting',
        id:1,
        isIn:false
    },
     {
        name:'Workout Tracking',
        id:2,
        isIn:false
    },
     {
        name:'Goal Setting',
        id:3,
        isIn:false
    },
    {
        name:'Blogging',
        id:4,
        isIn:false
    },
     {
        name:'User Details',
        id:5,
        isIn:false
    }
]

const tabSelectionSlice = createSlice({
    name:"tabSlectionJson",
    initialState,
    reducers:{
        tabSelectionChange:(state, action)=>{
            const retData = state.map((item:tabJsonState)=>{
                if(item.id == action.payload.id){
                   return {...item,isIn:true}
                }else{
                    return {...item,isIn:false}
                }
            })
            return [...retData]
        }
    }
})

export const {tabSelectionChange} = tabSelectionSlice.actions
export default tabSelectionSlice.reducer