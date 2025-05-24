import React from "react";
import "./About.css";

const images = ["room.jpg", "dining.jpg", "fitnes.jpg"];

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-image-slider">
          <div className="about-slider-track">
            {images.map((img, index) => (
              <div className="image-wrapper" key={index}>
                <img
                  src={`/images/${img}`}
                  alt={`Slide ${index}`}
                  className="about-slider-image"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Royal Phoenicia Hotel offers an array of top-tier facilities
            designed to enhance the comfort and convenience of every guest. The
            hotel features a luxurious spa and wellness center, where guests can
            indulge in soothing treatments and rejuvenating massages. For those
            seeking to maintain their fitness routine, the fully equipped gym
            provides a space for exercise, while the outdoor pool offers a
            relaxing environment to unwind. Dining at the hotel is a pleasure,
            with an on-site restaurant offering a diverse selection of cuisines
            in an elegant atmosphere. Additionally, the hotel provides business
            facilities, including meeting rooms and event spaces, ideal for
            corporate travelers.
          </p>
        </div>
      </div>
      <div className="custom-hr" />
    </div>
  );
};

export default About;
