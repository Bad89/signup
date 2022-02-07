import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            VET PET <i class="fas fa-paw" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/Home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Adopted-Pet"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Adopted Pet
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Article"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Article
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="/sign-In"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
            
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
