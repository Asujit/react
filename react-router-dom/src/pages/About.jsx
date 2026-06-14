import React from 'react'
import { NavLink } from 'react-router'
import { Outlet } from 'react-router'

const About = () => {

  const activeTab = ({isActive}) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "red" : "black"
  }) 
  
  return (
    <div>
      <h1>This is About Page</h1>
      <nav className='navbar'>
        <NavLink to="profile" style={activeTab}>Profile</NavLink>
        <NavLink to="setting" style={activeTab}>Settings</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default About