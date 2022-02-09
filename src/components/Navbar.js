import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
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

  useEffect(() => {
      showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick= {closeMobileMenu}>
          <i class="fas fa-paw" /> PET klinik 
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/Store" className="nav-links" onClick={closeMobileMenu}>
                STORE upComing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Adoption-Pet"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ADOPTION PET upComing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Article"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ARTICLE upComing
              </Link>
            </li>
            
          </ul>
          {button && <Button buttonStyle="btn--outline">HOME upComing</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
