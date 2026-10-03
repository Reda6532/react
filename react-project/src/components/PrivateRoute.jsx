import React from 'react'
import { Navigate } from 'react-router-dom'
export default function PrivateRoute({children , isConnected}) {
    // const isConnected=true
    if(isConnected){
        return children
    }
  return (
    <div>
      <Navigate to="/"/>
    </div>
  )
}
