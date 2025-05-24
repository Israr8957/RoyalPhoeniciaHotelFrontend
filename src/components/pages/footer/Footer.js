import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      {/* Left Section */}
      <div className="footer-section left-section">
        <div className="left-inner">
          <div className="nav-items">
            <div>I &nbsp;&nbsp;&nbsp; Rooms</div>
            <div>II &nbsp;&nbsp;&nbsp; Wellness</div>
            <div>III &nbsp;&nbsp;&nbsp; Gastro</div>
            <div>IV &nbsp;&nbsp;&nbsp; Hotel</div>
            <div>V &nbsp;&nbsp; &nbsp;Events</div>
          </div>
          <div className="more-info">
            <h3>More about rooms</h3>
            <p>120 comfortable rooms</p>
            <p>Dinings</p>
            <p>Packages</p>
            <p>Pools</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="footer-section right-section">
        <div className="hotel-logo">ROYAL</div>
        <h2>
          Wellness & Pools
          <br />
          Hotel Royal Phoenicia
        </h2>
        <p>
          Building 1288
          <br />
          Road 3931, Block 339
          <br />
          Umm Al Hasam – Manama
          <br />
          Bahrain
        </p>
        <p>+973 1730 7307</p>
        <p>info@royalphoenicahotel.com</p>
        <p>Contacts →</p>
        <div className="social-icons">
          <i className="fa-brands fa-instagram"></i>

          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
