import React from 'react'
import ProductCard from './ProductCard'
// export default function ProductList({cart,setCart}) {
export default function ProductList() {
    const products=[
        {id:1, nom:"Laptop", prix:12000},
        {id:2,nom:"Telephone",prix:65000}
    ]
    console.log("product list rendered")
  return (
    <div>
      {products.map(product=>(
        <ProductCard 
        key={product.id}
        product={product}
        // cart={cart}
        // setCart={setCart}
      
        />
      ))}
    </div>
  )
}
