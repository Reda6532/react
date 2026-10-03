import React, { useEffect, useState } from 'react'

export default function Accessories() {
    const [access ,setAccess]=useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products`)
         .then(res=>res.json())
         .then(data=>setAccess(data.products))

    },[])
  return (
    <div>
        {access.length===0?<p>there's no data</p>:
        (access.map(item=>(
            <div key={item.id}>

                <p>
                    {item.title}
                    {item.price}
    
                 </p>
                 <img src={item.images} alt="" />
                 <button >add</button>
            </div>
        )))
        }

      
    </div>
  )
}
