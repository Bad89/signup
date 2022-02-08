import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check what you need</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/dog-beach-essentials.jpg"
              text="Explore item for your pet on store"
              label="Pet Food, Item, Medicine"
              path="/Store"
            />
             <CardItem
              src="images/img-petNews.jpeg"
              text="Explore all about pet on Article"
              label="Article"
              path="/Article"
            />
             <CardItem
              src="images/Wishbone-Adopt-homepg-2.jpg"
              text="Explore all adoption on Adoption Pet"
              label="Adoption"
              path="/Adoption-Pet"
            />
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default Cards;
