import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { remove } from '../../redux/actions/cartActions'
import { empty } from '../../redux/actions/cartActions'
export default function Panier() {
    // there was {cart,setCart} above in the ()
    const cart =useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const supprimerProduit=(id)=>{
        dispatch(remove(id))
        
        // const nouveauPanier=cart.filter(
        //     produit=>produit.id!==id
        // )
        // setCart(nouveauPanier)
    }
    const emptyProduct=()=>{
        dispatch(empty())
    }
    const calculerTotal=()=>{
        let total = 0
        for(let i=0;i<cart.length;i++){
            total = total + cart[i].prix
        }
        return total
    }
    let nbr=cart.length
  return (
    <div>
      <h2>Mon panier</h2>
      {cart.length=== 0 ? (
        <p>Mon Panier</p>
      ):(
       <div>
         {cart.map(produit=>(
            <div key={produit.id}>
                <h3>{produit.nom}</h3>
                <p>{produit.prix}DA</p>
                
                <button 
                 onClick={()=>
                    supprimerProduit(produit.id)
                }
                >
                    supprimer
                </button>


            </div>
            
        ))}
                        <button onClick={()=> 
                    emptyProduct()
                }
                >
                    empty
                </button>
                <p>number of products is {nbr}</p>
                
       </div>
      )}
      <h3> total {calculerTotal()}DA</h3>
    </div>
  )
}
