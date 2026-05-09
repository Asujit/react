import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')
  return (

    // reverse prop drilling from child to parent
    <div>
      <h1>Theme is {theme}</h1>

      <Navbar Theme={theme}/>
    </div>
  )
}

export default App