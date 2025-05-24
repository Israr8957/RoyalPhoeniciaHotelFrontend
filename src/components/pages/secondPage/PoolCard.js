import React from "react";
import "./PoolCard.css";

const PoolCard = () => {
  return (
    <div className="pool-container">
      <div className="background-wrapper">
        <div className="bg-pool"></div>
        <div className="bg-room"></div>
        <div className="pool-text">
          <div className="card-wrapper">
            <div className="card-border"></div>
            <div className="card">
              <div className="card-content">
                <p>Favorite hotel</p>
                <p>Business and Event Spaces</p>
                <p>Diverse Dining Options</p>
                <p>Multiple Swimming Pools</p>
                <p>Family-Friendly Amenities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolCard;

// public/
