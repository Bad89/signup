import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from '../Cards';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <MessengerCustomerChat pageId="101589709123007" appId="481482256871485" />
    </>
  );
}

export default Home;