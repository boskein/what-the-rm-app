import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/navbar.css";
import rick from "../images/rick.png";

export default function Navbar() {
  return (
    <div className="Navbar">
      <img className="Navbar__rickFace" src={rick} alt="Rick face!" />
      <div className="Navbar__links">
        <NavLink exact to="/" activeClassName="activeLink">
          Home
        </NavLink>
        <NavLink exact to="/about" activeClassName="activeLink">
          About
        </NavLink>
      </div>
    </div>
  );
}
