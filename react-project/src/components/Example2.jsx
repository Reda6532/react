import React, { useEffect, useState } from 'react'

export default function Example2() {
    const [recherche , setRcherche]=useState("")
    const [users ,setUsers]=useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/users/search?q=${recherche}`)
          .then(res=>res.json())
          .then(data=>setUsers(data.users))
    },[recherche])
  return (
    <div>
      <input type="text" value={recherche} onChange={(e)=>setRcherche(e.target.value)} />
      {users.map(user=>(
        <p key={user.id}>
            {user.firstName}
        </p>
      ))}
    </div>
  )
}
