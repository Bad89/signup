import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import MessengerCustomerChat from "react-messenger-customer-chat";



function App() {
  return (
    
    
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        
        
        <MessengerCustomerChat pageId="0x5c6532866dbf;" appId="0x1b5e7d2e2f03d;" />

      </Router>

      
    

    
  );
}



export default App;
