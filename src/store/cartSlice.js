import { createSlice } from "@reduxjs/toolkit";



 const cartSlice = createSlice({
    name:'cart',
    initialState:{
        quantity: 0
    },

    reducer:{
        addToCart(state, payload){
            state.quantity += payload
        },
        removeFromCart(state, payload){
            state.quantity -= payload
        }
    }

});

export default cartSlice;
export const cartActions = cartSlice.actions;

