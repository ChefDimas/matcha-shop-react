import React from "react";
import "../style/header.sass";
import logo from "../img/logo.png";

function Header() {
  return (
    <div className="nav-container">
      <nav>
        {/* Left Part */}
        <div className="left-navbar">
          <div className="navbar-item">Home</div>
          <div className="navbar-item">Stock</div>
          <div className="navbar-item">About It</div>
        </div>
        {/*Logo */}
        <div className="logo-container">
          <img
            src={logo}
            alt="logo-img"
            className="logo"
            height={80}
            width={100}
          />
        </div>
        {/* Right Part */}
        <div className="right-navbar">
          <div className="navbar-item">Reviews</div>
          <div className="navbar-item">Payment and Delivery</div>
          <div className="navbar-item">Contacts</div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
