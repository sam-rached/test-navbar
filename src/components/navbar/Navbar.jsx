import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ visible, setVisible }) {
  const hideMe = () => {
    setVisible(!visible);
  };

  let style = {};
  if (!visible) style.display = "none";

  // const list = document.querySelectorAll(".navbar-list");

  // function activeLink() {
  //   list.forEach((item) => item.classList.remove("active"));
  //   this.classList.add("active");
  // }
  // list.forEach((item) => item.addEventListener("click", activeLink));

  return (
    <div className="navbar" style={style}>
      <div className="navbar-navigation">
        <ul>
          <li className="active">
            <NavLink to="/">
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="text">Home</span>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/utilisateur">
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
              <span className="text">Utilisateur</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/apropos">
              <span className="icon">
                <i className="fa fa-info-circle"></i>
              </span>
              <span className="text">A propos</span>
            </NavLink>
          </li>
          <div className="indicator"></div>
        </ul>
        <button className="navbar-button" onClick={() => hideMe()}>
          <i class="fas fa-bullseye"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
