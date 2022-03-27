import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/header.sass";

function Header() {
  return (
    <div className="container">
      <div className="navbar">
        <nav>
          {/* Left Part */}
          <div className="left-navbar">
            <div className="navbar-item">Home</div>
            <div className="navbar-item">Stock</div>
            <div className="navbar-item">About It</div>
          </div>
          {/*Logo */}
          <div>
            <FontAwesomeIcon icon="fa-solid fa-seedling"></FontAwesomeIcon>
          </div>
          {/* Right Part */}
          <div className="right-navbar">
            <div className="navbar-item">Reviews</div>
            <div className="navbar-item">Payment and Delivery</div>
            <div className="navbar-item">Contacts</div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
