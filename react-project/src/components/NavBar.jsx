import React from 'react'
import { Link } from 'react-router-dom'
import Panier from './Panier'
// export default function NavBar({cart,setCart}) {
export default function NavBar() {
  return (
    <nav>
      {/* <h2>logo</h2>
      <ul>
        <a href="/">home</a>
        <a href='/produits'>produit</a>
        <Link to="/home"><li>home</li></Link>
        <Link to="/Produits"><li>Produits</li></Link>
      </ul>
       */}
       <h2>Mon Shop</h2>
       <Panier 
      //  cart={cart}
      //  setCart={setCart}
       />
    </nav>
  )
}
