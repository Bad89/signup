import React from "react";
import { Button } from "../Button";
import "../Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading, btn--outline">
          Activity Payment with Shopee
        </p>
        <p className="footer-subscription-text, btn--outline">enjoi on this web</p>
        <div>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
              <Button buttonStyle="btn--outline">EXPLORE</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;
