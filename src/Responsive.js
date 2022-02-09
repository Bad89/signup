import React from 'react';
import { useMediaQuery } from 'react-responsive'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";

const Responsive = () => {
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    })
    const BigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const TabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const Portrait = useMediaQuery({ query: '(orientation: portrait)' })
    const Retina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  
    return <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  }

  export default Responsive;