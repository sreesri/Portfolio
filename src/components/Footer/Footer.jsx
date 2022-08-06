import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Shriram
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="footer__cp">
        <small>&copy; Shriram's Portfolio. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
