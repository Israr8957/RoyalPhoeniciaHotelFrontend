import React from "react";
import "./SlideImage.css";

const cardData = [
  {
    img: "/images/familyfun.jpg",
    season: "All season",
    title: "Royal Weekend Escape Package",
    desc: "From BHD 250 / Per person / 3 Night",
  },
  {
    img: "/images/familyfun1.jpg",
    season: "All season",
    title: "Family Fun Staycation",
    desc: "From BHD 150 / 4 person / 2 Night",
  },
  {
    img: "/images/familyfun2.jpg",
    season: "All season",
    title: "Luxury Relaxing Holidays",
    desc: "From BHD 300 / Per person / 4 Night",
  },
  {
    img: "/images/familyfun.jpg",
    season: "All season",
    title: "Royal Weekend Escape Package",
    desc: "From BHD 250 / Per person / 3 Night",
  },
];

export default function SlideImage() {
  return (
    <div className="fivepage-wrapper">
      <h2 className="fivepage-heading">Stay packages</h2>
      <div className="fivepage-slider">
        {cardData.map((item, index) => (
          <div className="fivepage-card" key={index}>
            <div className="fivepage-image-wrapper">
              <img src={item.img} alt={item.title} className="fivepage-img" />
              <div className="fivepage-overlay">
                <span className="fivepage-season">{item.season}</span>
                <h3 className="fivepage-title">{item.title}</h3>
                <p className="fivepage-desc">{item.desc}</p>
                <div className="fivepage-buttons">
                  <button className="fivepage-more-btn">MORE</button>
                  <button className="fivepage-icon-btn">
                    <i className="fa fa-lock"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="custom-hr" />
    </div>
  );
}
