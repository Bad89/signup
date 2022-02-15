import React from "react";
import { Button } from "../Button";
import "../Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Activity Payment with Shopee
        </p>
        <p className="footer-subscription-text">enjoi on this web</p>
        <div>
          {/* <form>
            <input
              type="email"
              name="email"
              placeholder="your Email"
              className="footer-input"
            >
              <Button buttonStyle="btn--outline">Subscribe</Button>
            </input>
          </form> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
