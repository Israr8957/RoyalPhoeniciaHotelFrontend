import React from "react";
import "./InfoBlocks.css";
import { ConciergeBell, Waves, DoorOpen } from "lucide-react";

const InfoBlocks = () => {
  return (
    <div className="info-container">
      {/* Restaurant */}
      <div className="info-box">
        <ConciergeBell className="info-icon" />
        <h3 className="info-title">Restaurant</h3>
        <p className="info-desc">
          Royal Phoenicia Hotel offers an array of top-tier facilities designed
          to enhance the comfort and convenience of every guest.
        </p>
      </div>

      {/* Pool */}
      <div className="info-box">
        <Waves className="info-icon" />
        <h3 className="info-title">POOL</h3>
        <p className="info-desc">
          Royal Phoenicia Hotel features multiple outdoor swimming pools,
          including a dedicated children’s pool, offering relaxation for all
          guests.
        </p>
      </div>

      {/* Room */}
      <div className="info-box">
        <DoorOpen className="info-icon" />
        <h3 className="info-title">ROOM</h3>
        <p className="info-desc">
          Royal Phoenicia Hotel in Manama, Bahrain, offers a variety of spacious
          and well-equipped rooms to suit diverse guest preferences.
        </p>
      </div>
    </div>
  );
};

export default InfoBlocks;
