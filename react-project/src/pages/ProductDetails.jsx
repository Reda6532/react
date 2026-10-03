import React from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../Data/produit'
export default function ProductDetails() {
    const {id}=useParams()
    const produit=product.find(produit=>produit.id===Number(id))
  return (
    <div>
      <h1>Product details </h1>
      <h2>{produit.nom}</h2>
      <h3>{produit.prix}</h3>
      <h3>{produit.categorie}</h3>
      <h3>{produit.disponible ?"disponible":"non disponible"}</h3>


    </div>
  )
}
