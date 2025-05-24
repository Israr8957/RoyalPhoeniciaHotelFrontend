import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-center-logo">
        <div className="left-btn">
          <button type="button" className="btn btn-outline-light">
            ☰ Menu
          </button>
        </div>

        <div className="middle-container text-center">
          <div className="logo">2022</div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="100"
              cy="100"
              r="95"
              stroke="white"
              stroke-width="5"
              fill="none"
            />
            <text
              x="50%"
              y="50%"
              text-anchor="middle"
              dominant-baseline="middle"
              font-family="Georgia, serif"
              font-size="40"
              fill="white"
            >
              Royal
            </text>
          </svg>

          <div className="stars">★ ★ ★ ★</div>
        </div>

        <div className="right-btn">
          <button type="button" className="btn btn-outline-light">
            Booking 🔒
          </button>
        </div>
      </div>

      <div className="navbar-bottom">
        <div className="underline top-line" />
        <ul className="nav-links">
          <li>Rooms</li>
          <li>Wellness</li>
          <li>Gastro</li>
          <li>Hotel</li>
          <li>Events</li>
          <li>Contact</li>
        </ul>
        <div className="underline bottom-line" />
      </div>
    </div>
  );
}

export default Navbar;
