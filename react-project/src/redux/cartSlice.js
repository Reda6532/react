import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    cart: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,   
    reducers: { 
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        }   ,
        remove: (state, action) => {    
            state.cart = state.cart.filter(product => product.id !== action.payload);   
        },
        empty: (state) => {
            state.cart = [];
        }
    }
});
export const { addToCart, remove, empty } = cartSlice.actions;
export default cartSlice.reducer;