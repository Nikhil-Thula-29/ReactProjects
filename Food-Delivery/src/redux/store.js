import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'

export const store=configureStore({
    reducer:{
        cart:cartSlice  //this cart will be used in useSelector((state)=>state.cart);
    }
})
