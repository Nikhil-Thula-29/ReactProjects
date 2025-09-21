import { createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddItem:(state,action)=>{
            const existingItem=state.find((ele)=>{
                return ele.id===action.payload.id;
            })
            //find() goes through the array from start to end.
            //The moment it finds the first element where the condition is true, it stops immediately and returns that element.
            //It will not continue checking the rest of the elements.
            //console.log("Existing item found: ",JSON.stringify(existingItem));
            if(existingItem){
                existingItem.qty+=1;    //If alredy added ele then it will return true and store that in existingitem and return directly from loop wont loop remaining items.
            }else{
                state.push(action.payload);
            } 
            //console.log("cart after update: ",JSON.stringify(state));
        },
        RemoveItem:(state,action)=>{
             return state.filter((item)=>{//outer return is for returning new array to store
                return item.id!==action.payload //inner return is for returning true or false to filter function.
            })
        },
        //here 2!=3 "true then item will kept in new array" 3==3 then wont keep in new array during filter.
        //3==3 equals,skips
        IncrementQty:(state,action)=>{
            const item=state.find((ite)=>{
                return ite.id===action.payload.id; //or else we can use action.payload if we are using direct id onclick dispatch(IncrementQty(id)); without {id} then directly it will compare.
            })
            if(item){
                item.qty=item.qty+1;
            }
        },
        DecrementQty:(state,action)=>{
            const item=state.find((ite)=>{
                return ite.id===action.payload.id; //or else we can use action.payload if we are using direct id onclick dispatch(IncrementQty(id)); without {id} then directly it will compare.
            })
            if(item){
                if(item.qty>1){
                    item.qty=item.qty-1;
                }    
            }
        }
    }
})
export const {AddItem,RemoveItem,IncrementQty,DecrementQty}=cartSlice.actions
export default cartSlice.reducer 