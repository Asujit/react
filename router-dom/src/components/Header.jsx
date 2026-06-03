import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink
        // className={({ isActive, isPending, isTransitioning }) =>
        //   [
        //     isPending ? "pending" : "",
        //     isActive ? "active" : "",
        //     isTransitioning ? "transitioning" : "",
        //   ].join(" ")
        // }
        to="/"
      >
        Home
      </NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </header>
  );
};

export default Header;
