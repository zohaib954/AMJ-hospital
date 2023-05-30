import React from "react";
import "./topNav.css";

export default function TopNav() {
  return (
    <div className="topNav">

      <div className="topnav-container">

      <div className="left">
        <span className="logo">LOGO</span>
      </div>

      <div className="right">
        <ul className="menu">
          <li className="menuList">Home</li>
          <li className="menuList">About us</li>
          <li className="menuList">Academics</li>
          <li className="menuList">Admission</li>
          <li className="menuList">Hospital Stats</li>
          <li className="menuList">Hospital</li>
          <li className="menuList">CME</li>
          <li className="menuList">Gallery</li>
          <li className="menuList">Contact Us</li>
          <li className="menuList loginBtn">Log in</li>
        </ul>
      </div>

      </div>

    </div>
  )
}