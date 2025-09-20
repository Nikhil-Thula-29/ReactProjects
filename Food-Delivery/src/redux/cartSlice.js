import { createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddItem:(state,action)=>{
            state.push(action.payload)//always payload name fix and payload always contains the data you dispatch
        },
        RemoveItem:(state,action)=>{
             return state.filter((item)=>{//outer return is for returning new array to store
                return item.id!==action.payload //inner return is for returning true or false to filter function.
            })
        }
        //here 2!=3 true then item will kept in new array 3==3 then wont keep in new array during filter.
        //3==3 equals,skips
    }
})
export const {AddItem,RemoveItem}=cartSlice.actions
export default cartSlice.reducer 