import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Help from './pages/Help'
import Navbar from './components/Navbar'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </div>
  )
}

export default App