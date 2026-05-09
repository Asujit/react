import React from 'react'

const Navbar = (theme) => {
  return (
    <div>
        <p>{theme.Theme}</p>
        <button>Change Theme</button>
    </div>
  )
}

export default Navbar