import React,{useState} from 'react'

const App = () => {

  const [num, setNum] = useState(0);


  return (
    <div>
      <h1>Current count is {num}</h1>
      <button onClick={() => setNum(num+1)}>Add</button>
      <button onClick={() => setNum(num-1)}>Dec</button>
    </div>
  )
}

export default App