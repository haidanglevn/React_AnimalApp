import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <Link to="/">
            ANIMAL APP <span class="material-symbols-outlined">pets </span>
        </Link>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/animals">Animals</NavLink>
        <NavLink to="/birds">Birds</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
