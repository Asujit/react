import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h3>Navbar</h3>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/help'>Help</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
