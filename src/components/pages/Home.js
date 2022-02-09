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
      <MessengerCustomerChat pageId="100077654544538" appId="481482256871485" />
    </>
  );
}

export default Home;