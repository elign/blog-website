import React from "react";
import HeroImage from "../images/flight.png"
const Hero = () => {
  return (
    <div className="hero">
        <section className="hero-text">
            <h2>Travel Traver</h2>
            <p>Travel is my therapy... So is yours!</p>
        </section>
        <section className="hero-image">
            <img src={HeroImage} />
        </section>
    </div>
  );
};

export default Hero;
