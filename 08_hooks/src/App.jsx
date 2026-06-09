// import React, {useState} from "react";

// const App = () =>{

//   const [count, setCount] = useState(0);
//   return(
//       <div className="container">
//         <p className="text">{count}</p>
//         <button onClick={() => setCount(count+1)} className="btn">Increase</button>
//       </div>
//   )
// }

// export default App;

// import React, {useState} from 'react'

// const App = () => {

//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <div className="container">
//       <input type="text" value={name} onChange={e => setName(e.target.value)} />
//       <input type="text" value={age} onChange={e => setAge(e.target.value)} />
//       <button onClick={() => setIsActive(!isActive)} className="btn">{isActive ? 'Deactivate' : 'Activate'}</button>
//     </div>
//   )
// }

// export default App

// import { useEffect, useState } from "react"
// import React from 'react'

// const App = () => {

//   const [seconds, setSeconds] = useState(0);
//   const [start, setStart] = useState(false);

//   useEffect(() =>{
//     if(!start) return;

//     const id = setInterval(() =>{
//       setSeconds(prev => prev + 1);
//     }, 1000);
//     // return () => clearInterval(id);
//   }, [start])

//   function timer(){
//     setStart(true);
//   }

//   return (
//     <div>
//       <p>{seconds}</p>
//       <button onClick={timer}>Timer</button>
//     </div>
//   )
// }

// export default App

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [size, setSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     function handleSize() {
//       setSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }

//     window.addEventListener('resize', handleSize);

//     return () => removeEventListener('resize', handleSize);
//   }, []);
//   return(
//     <div>
//       <p>{size.height} X {size.width}</p>
//     </div>
//   )
// };

// export default App;



import React, { useMemo, useState } from "react";

function ProductList({ products, filterText }) {
  const [darkMode, setDarkMode] = useState(false);

  const filtered = useMemo(() => {
    console.log("Filtering Products...");

    return products
      .filter((p) =>
        p.name.toLowerCase().includes(filterText.toLowerCase())
      )
      .sort((a, b) => a.price - b.price);
  }, [products, filterText]);

  return (
    <div
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>

      <h3>Products</h3>

      {filtered.map((p) => (
        <p key={p.id}>
          {p.name} - ₹{p.price}
        </p>
      ))}
    </div>
  );
}

export default function App() {
  const [filterText, setFilterText] = useState("");

  const products = [
    { id: 1, name: "iPhone", price: 80000 },
    { id: 2, name: "Samsung", price: 70000 },
    { id: 3, name: "OnePlus", price: 50000 },
    { id: 4, name: "Pixel", price: 75000 },
  ];

  return (
    <div>
      <input
        type="text"
        placeholder="Search Product"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ProductList
        products={products}
        filterText={filterText}
      />
    </div>
  );
}