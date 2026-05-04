import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
        <Navbar/>
      <div className="card">
        <h1>Sujit Auti</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, libero.</p>
      </div>
      <Card/>
      {/* {Card()} */}
    </div>
  )
}

export default App