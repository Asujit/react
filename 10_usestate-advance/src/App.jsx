import React,{useState} from 'react'

const App = () => {

  const [user, setUser] = useState({name:"Sujit", age:25})

  const btnclick = () =>{
    const newUser = {...user};
    newUser.name = "Auti"
    newUser.age = 26
    setUser(newUser);
  }
  return (
    <div>
      <h1>{user.name} & {user.age}</h1>
      <button onClick={btnclick}> Click</button>
    </div>
  )
}

export default App