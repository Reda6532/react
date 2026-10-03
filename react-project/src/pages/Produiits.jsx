
import React,{useEffect,useState} from 'react'

export default function Produiits() {
    const [produits,setProduits]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(response=>{
            console.log(response)   
            return response.json()  
        })
        .then(data=>{   
            console.log(data)
            setProduits(data.products)
        })  
    },[])
  return (
    <div>
        <h1>produits</h1>
        {produits.map(produit=>(
            <div key={produit.id}>
                <h3>{produit.title} DA</h3>    
            </div>
        ))}
    </div>
  )
}
