import React from 'react'
import { useDispatch } from 'react-redux'
// import { addToCart } from '../redux/actions/cartActions'
import { addToCart } from '../redux/cartSlice'      

export default function ProductCard({product,cart,setCart}) {
    const dispatch=useDispatch()
    const ajouterAupanier=()=>{
        dispatch(addToCart(product))
        // setCart([...cart,product])
    }
    
  return (
    <div>
        <h3>{product.nom}</h3>
        <p>{product.prix}DA</p>
        <button onClick={ajouterAupanier}>
            ajouter au panier
        </button>
    </div>
  )
}
