import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigation = useNavigate();

  return (
    <div className="py-2 px-5 bg-cyan-500">
      <button
        onClick={() => navigation("/")}
        className="bg-amber-500 px-5 py-2 rounded-2xl m-2 cursor-pointer active:scale-95"
      >
        Return to Home page
      </button>
      <button
        onClick={() => navigation(-1)}
        className="bg-amber-500 px-5 py-2 rounded-2xl m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => navigation(+1)}
        className="bg-amber-500 px-5 py-2 rounded-2xl m-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
