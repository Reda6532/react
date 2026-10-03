import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div>   
        <h1>not Found</h1>
        <Link to="/home">back to home</Link>
      
    </div>
  )
}
