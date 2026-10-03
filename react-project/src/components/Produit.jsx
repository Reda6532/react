import React from 'react'

export default function Produit({nom="unknown",price=0,disponible=false,image, ajouter}) {


  return (
    <div>

      <h2>this product name is {nom}</h2>
      <h2>the price is {price}</h2>
      {disponible ? <p>Produit disponible</p> : <p>Produit non disponible</p>}
      <img src={image} alt="" />
      <button onClick={ajouter}>clicker</button>
      
     
    </div>
  )
}
