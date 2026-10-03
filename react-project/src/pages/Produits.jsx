import React, { use, useMemo, useState } from 'react'
import Produit from '../components/Produit'
import pen from "../assets/pen.webp"
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { product } from '../Data/produit'
export default function Produits({LogOut}) {
    function LoggedOut(){
      LogOut(false)
    }


   
    // const [categorie,setCategorie]=useState("")
    const [categorie,setCategorie]=useState("tous")
    const produitFilter=useMemo(()=>{
      
      console.log("hello")
      return  product.filter((produit)=>{
       // if(categotie.trim()==="")
      //  console.log(produit)
       if(categorie.trim()==="tous"){
         return true;
       }
        return produit.categorie===categorie.trim()
     })
    },[categorie])
    
    function ajouterpanier(nomProduit){
      alert(`votre panier contien ${nomProduit}`)
    }
    

    
    
  return (
    <div>
      <h1>nos produit</h1>
      {/* <input type="text" onChange={(e)=>setCategorie(e.target.value)} /> */}
      {produitFilter.map(produit =>(
        <div key={Produits.id}>
            <Produit 
            key={produit.id}
            nom={produit.nom}
            price={produit.price}
            disponible={produit.disponible}
            // image={produit.image}
            ajouter={ajouterpanier}
            />
            <Link to={`/products/${produit.id}`}>voir les details</Link>
          </div>

            
      ))
    }
    <select name="" id="" onChange={(e)=>setCategorie(e.target.value)} value={categorie}>
      <option value="tous" selected>Tous</option>
      <option value="info">Info</option>
      <option value="audio">Audio</option>
    </select>
      <button onClick={LoggedOut}>log out</button>
     
      
    </div>
  )

}