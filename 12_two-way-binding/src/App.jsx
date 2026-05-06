import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("Form Submitted by", input, "and", city);
    setInput("");
    setCity("");
  };
  return (
    <div>
      <form onSubmit={(e) => submit(e)} className="main">
        <input
          type="text"
          placeholder="Enter your name"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter current city"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
