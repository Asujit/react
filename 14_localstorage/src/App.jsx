import React from 'react'

const App = () => {

  // localStorage.clear();
  // sessionStorage.clear();

  // localStorage.setItem('name', 'Sujit');
  localStorage.setItem('age', '25');
  localStorage.setItem('city', 'Pune');

  const name = localStorage.getItem('name');
  const age = localStorage.getItem('age');
  const city = localStorage.getItem('city');

  localStorage.removeItem('city')

  // const user = {
  //   username : "Sujit Auti",
  //   age: "25",
  //   city: "Pune"
  // }

  // localStorage.setItem("user", JSON.stringify(user));
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <div>{name} and {age}</div>
      <div>{user.username}</div>
    </div>
  )
}

export default App