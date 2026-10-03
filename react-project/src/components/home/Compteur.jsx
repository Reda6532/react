import React from 'react'
import { useState } from 'react'
export default function Compteur() {
    // let count=0
    // function increment(){
    //     count+=1
    //     console.log(count)
    // }
    const[ count,setCount]=useState(0)
    // const[x,setX] =useState()
    const [texte,setTexte]=useState("")
    function increment(){
        setCount(count+1)
    }
  return (
    <div>
      <button onClick={increment}>increment</button>
      <p>{count}</p>
      <input type="text" name="" id="" value={texte} placeholder='tapez quelque chose...' 
      onChange={(e)=>setTexte(e.target.value)}/>
      <p>vous aves tape : {texte}</p>
    </div>
  )
}
