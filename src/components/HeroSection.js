import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


function HeroSection() {
  return (

<Carousel>

    <div className="hero-container">
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}

      <h1>EXPLORE YOUR PET</h1>
      <h2>Free consultation with Veterinarian</h2>
      <h3> until 2022 April!</h3>
      
      

      <p> </p>
      <p> </p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Trailer <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>

    </Carousel>

    
  );
}

export default HeroSection;
