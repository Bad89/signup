import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Adoption from './components/pages/Adoption';

function App() {
  return (
    
    
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/adoption-Pet' component={Adoption} />
        </Switch>
        
        
        <MessengerCustomerChat pageId="101589709123007" appId="481482256871485" />

      </Router>

      
    

    
  );
}



export default App;
