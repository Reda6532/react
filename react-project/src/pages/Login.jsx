import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({changementDEtat}) {
    const navigate=useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        changementDEtat(true)
        navigate("/products")
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='enter your email'required />
        <input type="password" placeholder='enter your password'required />
        <button type='submit'>login</button>
      </form>
    </div>
  )
}
