import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'  
export default function Produiiits() {
    const [produits,setProduits]=useState([])   
    useEffect(()=>{ 
        axios.get("https://dummyjson.com/products")
         .then(response=>{   
            console.log(response)
            setProduits(response.data.products)
         })
    },[])       
  return (
    <div>
        <h1>produiiits</h1>
        {produits.map(produit=>(
            <div key={produit.id}>
                <h3>{produit.title} DA</h3>    
            </div>
        ))}
    </div>
  )
}
