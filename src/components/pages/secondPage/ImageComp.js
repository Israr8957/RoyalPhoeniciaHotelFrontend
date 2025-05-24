import React from "react";
import "./ImageComp.css";

export default function ImageComp() {
  return (
    <div className=" outer-container">
      <div className="row main-container">
        <div className="col-4 image-block">
          <div
            className="image-inner"
            style={{ backgroundImage: "url('/images/room.jpg')" }}
          ></div>
          <span className="image-text">Rooms</span>
        </div>
        <div className="col-4 image-block">
          <div
            className="image-inner"
            style={{ backgroundImage: "url('/images/pool.jpg')" }}
          ></div>
          <span className="image-text">Pools</span>
        </div>
        <div className="col-4 image-block">
          <div
            className="image-inner"
            style={{ backgroundImage: "url('/images/dining.jpg')" }}
          ></div>
          <span className="image-text">Dining</span>
        </div>
      </div>
      <div className="button-container">
        <button className="button">
          <span>Accomodation</span>
        </button>
      </div>
    </div>
  );
}
