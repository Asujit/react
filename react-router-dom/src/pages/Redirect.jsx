import React from 'react'
import { Navigate } from 'react-router'

const Redirect = () => {
  return (
    <div>
        <Navigate to="/" replace/>
    </div>
  )
}

export default Redirect