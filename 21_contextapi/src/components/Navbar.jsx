import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { themeDataContext } from '../context/ThemeContext'

const Navbar = () => {
    const [theme,setTheme] = useContext(themeDataContext)
    
  return (
    <div className={theme}>
        <h2>Navbar</h2>
        <Navbar2/>
    </div>
  )
}

export default Navbar