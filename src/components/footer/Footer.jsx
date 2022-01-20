import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer({ visible, setVisible }) {
  const showMe = () => {
    setVisible(!visible);
  };

  const today = new Date();
  return (
    <div className="footer">
      <div className="footer-navigation">
        <ul>
          <li className="footer-list">
            <a
              href="https://fr-fr.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="icon">
                <i className="fab fa-facebook"></i>
              </span>
            </a>
          </li>
          <li className="footer-list">
            <a
              href="https://twitter.com/?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
            </a>
          </li>
          <li className="footer-list">
            <NavLink to="/utilisateur">
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
            </NavLink>
          </li>
          <li className="footer-list">
            <NavLink to="/apropos">
              <span className="icon">
                <i className="fa fa-info-circle"></i>
              </span>
            </NavLink>
          </li>
        </ul>
        <button className="footer-button" onClick={() => showMe()}>
          <i class="fas fa-bullseye"></i>
        </button>
        <p className="footer-copyright">&copy; {today.getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
