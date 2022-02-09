import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import MessengerCustomerChat from "react-messenger-customer-chat";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <>
      <Carousel>
        {/* responsive view */}

        <Router>
          <Navbar />
          <MessengerCustomerChat
            pageId="101589709123007"
            appId="481482256871485"
          />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </Carousel>
    </>
  );
}

export default App;
