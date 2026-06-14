import React from 'react'
import { NavLink, Outlet } from 'react-router'

const App = () => {

  const tabs = ({isActive}) =>({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "blue" : "black"
  })
  return (
    <div>
      <h1>This is React Router Dom</h1>
      <nav className='navbar'>
        <NavLink to="/" style={tabs}>Home</NavLink>
        <NavLink to="contact" style={tabs}>Contact Us</NavLink>
        <NavLink to="about" style={tabs}>About</NavLink>
        <NavLink to="login" style={tabs}>Login</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default App