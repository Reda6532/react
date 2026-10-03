import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Technologies() {
  return (
    <div>
      <h1>Technologie page</h1>
      <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus natus praesentium eveniet quasi magnam omnis tenetur, iure vel debitis veniam autem saepe non beatae repellendus at quis voluptatum esse numquam.</h2>
      <Link to="interface">frontend</Link>
      <Link to="serveur">backend</Link>
      <Outlet/>
    </div>
  )
}
