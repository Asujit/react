import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(1000);

  useEffect(() => {
    console.log("useEffect is running...");
    },[num]);
  // }, []);

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>

      <button
        // onClick={() => {
        //   setNum(num + 1);
        //   setNum2(num2 + 100);
        // }}

        onMouseEnter={() =>{
          setNum(num + 1)
        }}

        onMouseLeave={() =>{
          setNum2(num2 + 100)
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;
