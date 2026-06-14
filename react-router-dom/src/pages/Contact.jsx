import React from 'react'
import { Link, NavLink } from 'react-router'

const Contact = () => {

  const tab = ({isActive}) =>({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "green" : "black"
  })
  
  return (
    <div>
      <h1>Contact Us</h1>
      <nav className='navbar'>
        <NavLink to="advance" style={tab}>Advance</NavLink>
        <NavLink to="location" style={tab}>Location</NavLink>
      </nav>
    </div>
  )
}

export default Contact