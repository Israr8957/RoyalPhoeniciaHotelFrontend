import React from "react";
import Navbar from "../../navbar/Navbar";
import Hero from "./Hero";
import "./Hero.css";
export default function HeroPage() {
  return (
    <div className="hero-container">
      <Navbar />
      <Hero />
    </div>
  );
}
