import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import Link from "../../components/link/Link";
const Footer = () => (
  <div className="gpt3__footer">
    <div className="gpt3__footer-item">
      <div className="gpt3__footer-text gradient__text">
        <p>Do you want to step in to the</p>
        <p>future before others</p>
      </div>
      <div className="gpt3__footer-button">
        <button type="button">Request Early Access</button>
      </div>
    </div>
    <div className="gpt3__footer-links">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        Links
        <div className="gpt3__footer-links__items">
          <Link title="Overons" />
          <Link title="Social Media" />
          <Link title="Counter" />
          <Link title="Contact" />
        </div>
      </div>
      <div className="company">Company</div>
      <div className="GIT">Get In Touch</div>
    </div>
  </div>
);

export default Footer;
