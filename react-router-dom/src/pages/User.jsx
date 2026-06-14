import React from 'react'
import { useParams } from 'react-router'

const User = () => {

    const {id} = useParams();
  return (
    <div>
        <h1>This is User Information page</h1>
        <p>User ID : {id}</p>
    </div>
  )
}

export default User