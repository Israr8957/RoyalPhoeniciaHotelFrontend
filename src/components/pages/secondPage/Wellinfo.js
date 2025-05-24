import React from "react";
import "./Wellinfo.css";

const Wellinfo = () => {
  return (
    <section className="main">
      <div className="logo-outer-box">
        <div className="logo-inner-box">I</div>
      </div>
      <div className="container">
        <p>The stay at Wellness & pool Hotel</p>
        <p>RoyalPhoenicia means enjoying every moment.</p>
        <p className="opt">Relax. Find inspiration. Be fascinated.</p>
      </div>

      <button className="more-button">
        <span className="default">Hotel</span>
        <span className="hover">&gt;</span>
      </button>
    </section>
  );
};

export default Wellinfo;
