import { product } from "../../Data/produit"

export const addToCart=(product)=>({
    type:"ADD_TO_CART",
    payload:product,
})
export const remove=(id)=>({
    type:"REMOVE",
    payload:id
})
export const empty=()=>({
    type:"EMPTY"
})

// the output of the function will be like this

// addToCart({
//     id:1,
//     name:"pc",
//     price:1900
// })
// {
//     type:"ADD_TO:CART"
//     payload:{
//         id:1,
//         name:"pc",
//         price:1900
//     }
// }