import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

const Home = () => {

  
  return (
    <div>
      <h1>This is Home Page</h1>
      <ul>
        <li><Link to="user/101"> User 1</Link></li>
        <li><Link to="user/102"> User 2</Link></li>
        <li><Link to="user/103"> User 3</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Home