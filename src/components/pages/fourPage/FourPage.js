import React from "react";
import Hero from "./Hero";
import About from "./About";
import InfoBlocks from "./InfoBlocks";
import EventHighlightCard from "./EventHighlightCard";
export default function FourPage() {
  return (
    <div>
      <Hero />
      <About />
      <InfoBlocks />

      <div
        style={{
          background: `linear-gradient(to bottom, white 20%, rgb(20, 92, 129) 100%)`,
        }}
      >
        <EventHighlightCard />
      </div>
    </div>
  );
}
