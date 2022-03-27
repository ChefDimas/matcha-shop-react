import React from "react";
import "../style/header.sass";

function Header() {
  return (
    <div className="container">
      <div className="navbar">
        <nav>
          {/* Left Part */}
          <div className="left-navbar">
            <div className="navbar-item"></div>
            <div className="navbar-item"></div>
            <div className="navbar-item"></div>
          </div>
          {/* IMG Logo */}
          <img src="" alt="" className="logo" />
          {/* Right Part */}
          <div className="right-navbar">
            <div className="navbar-item"></div>
            <div className="navbar-item"></div>
            <div className="navbar-item"></div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
