import { product } from "../../Data/produit"

const initialState={
    cart:[],
}
export const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
        return{
            cart:[...state.cart,action.payload]
            
        }
        case"REMOVE":
        return{
            cart:state.cart.filter(product=>product.id !== action.payload)
        }
        case "EMPTY":
            return{
                cart:[]
            }
        default:
        return state
    }
}
