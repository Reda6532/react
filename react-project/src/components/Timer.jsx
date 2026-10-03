import React, { useEffect } from 'react'
import { useState } from 'react'
export default function Timer() {
    const[sec,setSec]=useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSec(prev=>prev+1)
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
      <p>timer :{sec}</p>
    </div>
  )
}
