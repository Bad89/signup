import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MessengerCustomerChat pageId="100077654544538" appId="481482256871485" />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        
      </Router>
      
    </>
  );
}

export default App;
