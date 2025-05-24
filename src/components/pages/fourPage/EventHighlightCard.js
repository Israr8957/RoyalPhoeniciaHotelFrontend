import React from "react";
import "./EventHighlightCard.css";

const EventHighlightCard = () => {
  return (
    <div className="scroll-wrapper">
      <div className="scroll-bg-text">
        <h1>Corporate Events &nbsp;&nbsp; Social Celebrations</h1>
      </div>

      <div
        style={{ backgroundImage: "url('/images/lastpool1.jpg')" }}
        className="card-section"
      >
        <div className="card-container">
          {[
            {
              title: "For companies",
              text: "Host your formal business meetings in a unique and refreshing setting. Enjoy elegant venues, comfortable accommodations.",
            },
            {
              title: "For families",
              text: "Create lasting memories with your loved ones. Spacious suites, kid-friendly activities.",
            },
            {
              title: "For relaxation",
              text: "Rejuvenate your senses with tranquil spa experiences and quiet lounge areas.  unwind in peaceful luxury.",
            },
          ].map((card, index) => (
            <div className="card-wrapper" key={index}>
              <div className="card-border"></div>
              <div className="event-card">
                <div className="inner-border">
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                  <button className="more-button">
                    <span className="default">MORE</span>
                    <span className="hover">&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventHighlightCard;
