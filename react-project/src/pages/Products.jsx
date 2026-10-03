import React from 'react'
import ProductList from '../components/ProductList'
export default function Products({cart,setCart}) {
    console.log("product page rendered")
  return (
    <div>
      <ProductList 
    //   cart={cart}
    //   setCart={setCart}
      />
    </div>
  )
}
