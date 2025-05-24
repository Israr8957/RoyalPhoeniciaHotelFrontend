import React from "react";
import "./ThreeImageZoom.css";

const cardData = [
  {
    title: "Fitness",
    subtitle: "Center",
    image: "/images/fitnes.jpg",
    description:
      "The hotel features an on-site restaurant serving a variety of cuisines/diverse dining experiences without leaving the premises.",
    showButton: false,
  },
  {
    title: "On-Site",
    subtitle: "Dining",
    image: "/images/dining.jpg",
    description:
      "The hotel features an on-site restaurant serving a variety of cuisines/diverse dining experiences without leaving the premises.",
    showButton: true,
  },
  {
    title: "Wellness Center",
    subtitle: "& Spa",
    image: "/images/wellnessAndSpa.jpg",
    description:
      "The hotel features an on-site restaurant serving a variety of cuisines/diverse dining experiences without leaving the premises.",
    showButton: false,
  },
];

const ThreeImageZoom = () => {
  return (
    <div className="zoom-page-container">
      {cardData.map((card, index) => (
        <div className="zoom-card" key={index}>
          <img src={card.image} alt={card.subtitle} className="zoom-img" />
          <div className="zoom-overlay">
            <h4 className="zoom-title">{card.title}</h4>
            <h2 className="zoom-subtitle">{card.subtitle}</h2>
            <p className="zoom-desc">{card.description}</p>
            {card.showButton && (
              <button className="zoom-btn">Spa & Wellness</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeImageZoom;
