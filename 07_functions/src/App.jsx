import React from 'react'

const App = () => {

  const scroll = () =>{
    console.log("Scrolling....")
  }
  return (
    <div onWheel={scroll}>
      <div className="one">Page1</div>
      <div className="two">Page2</div>
      <div className="three">Page3</div>
    </div>
  )
}

export default App