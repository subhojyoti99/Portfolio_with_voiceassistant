import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <p className="head">Contact</p>
      <div className="contact-info">
        <a href="mailto:subhajyotisingha@gmail.com" className="contact-link">
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          <span className="contact-text">Gmail</span>
        </a>
        <a
          href="https://www.linkedin.com/in/subhojyoti-singha-27a5b31b1/"
          className="contact-link"
          target="_blank"
          rel="noreferrer"
        >
          {/* <FontAwesomeIcon icon={faLinkedin} /> */}
          <span className="contact-text">LinkedIn</span>
        </a>
        <span className="contact-text">Phone No: 9830305582</span>
      </div>
    </div>
  );
};

export default Contact;
