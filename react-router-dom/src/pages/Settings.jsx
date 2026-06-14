import React from 'react'
import { useParams } from 'react-router'

const Settings = () => {

  const {id} = useParams();
  return (
    <div>
      <h1>This is Setting Page</h1>
    </div>
  )
}

export default Settings