import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/home/Hero'
import Example from '../components/home/Example'
import student1 from "../assets/student.jpg"
import Compteur from '../components/home/Compteur'
import Timer from '../components/Timer'
import Example2 from '../components/Example2'
import Form from '../components/Form'
import Accessories from '../components/accessories/accessories'

export default function Home() {
  const students=[
    {
    nom:"hady",
    year:2024,
    isStudent:true,
    picture:student1
  },
    {
    nom:"razane",
    year:2025,
    isStudent:true,
    picture:student1
  },
  {
    nom:"nyhel",
    year:2026,
    isStudent:true,
    picture:student1
  },
  {
    nom:"ilissa",
    year:2024,
    isStudent:true,
    picture:student1
  }
]
  return (
    <div>
      <NavBar/>
      
      <Hero/>
      {/* {students.length===0 ? <p>your table is empty</p>: (students.map(student =>(
        <Example 
        key={student.nom}
        nom={student.nom}
        year={student.year}
        isStudent={student.year}
        picture={student.picture}
        /> 
      )))} */}
      {/* <Example nom='diaba' year={2025} isStudent={true} picture={student1}/> */}
      {/* <Example nom="reda" year='2026'/> */}
      {/* <Compteur/>
      <Timer/> */}
      <Example2/>
      <Form/>
      <Accessories/>
      <NavBar/>
    </div>
  )
}
