import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">
          Hotel
          <br />
          Royal Phoenicia
        </h1>
        <p className="hero-subtitle">Your Favourite Place. Our Family store.</p>
      </div>
      <div className="bg-image home2"></div>
      <div className="bg-image home1"></div>
    </div>
  );
}
