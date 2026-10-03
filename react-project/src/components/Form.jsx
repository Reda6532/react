  import React, { useState } from 'react'

  export default function Form() {
      // const[nom,setName]=useState("")
      // const [email,setEmail]=useState("")
      // const [age,setAge]=useState(0)
      const [form,setForm]=useState({
          nom:"",
          email:"",
          age:0

      })
      function handleChange(e){
          const {name,value}=e.target
          // const name =e.target.name 
          // const value =this.target.value 
          setForm({...form,[name]:value})
          
      }
      function handleSubmit(e){
          e.preventDefault()
          console.log(form)
      }
    return (
      <div>
        <form action="" onSubmit={handleSubmit}>
          {/* <input value={nom} onChange={(e)=>setName(e.target.value)} type="text" /> */}
          <input type="text" name="nom" value={form.nom} placeholder='enter your name' onChange={handleChange} />
          <input type="email" value={form.email} name='email' placeholder='enter your email' onChange={handleChange} />
          <input type="number" name='age' value={form.age} placeholder='enter your age' onChange={handleChange} />
          <button type='submit'>envoyer</button>

        </form>
      </div>
    )
  }
