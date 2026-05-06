import React from 'react'

const App = () => {

  const submit = (e) =>{
    e.preventDefault()
    console.log("Form Submitted")
  }
  return (
    <div>
      <form onSubmit={(e) => submit(e)} className='main'>
        <input type="text" placeholder='Enter your name'/>
        <input type="text" placeholder='Enter current city'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App