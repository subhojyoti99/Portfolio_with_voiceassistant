import React from "react";
import "./styles/footer.css";
import sign from "../images/sign_cropped.png";
import Clock from "./Clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div>
          <div className="footer-content">
            <div className="left-column">
              <div className="timezone">
                {/* <h1>You are in my TimeZone</h1> */}
                <Clock />
              </div>
              <div className="achknowledge">
                <p>
                  This page is still under-going upgrades. Work on bug fixing is
                  still going-on.
                </p>
                <h4>
                  <a id="email" href="mailto:www.subhajyotisingha@gmail.com">
                    subhajyotisingha@gmail.com
                  </a>
                </h4>
              </div>

              <div className="handles">
                <ul>
                  <li>
                    <a
                      id="Instagram"
                      href="https://www.instagram.com/radioactive__decay/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      INSTAGRAM
                    </a>
                  </li>
                  <li>
                    <a
                      id="LinkedIn"
                      href="https://www.linkedin.com/in/subhojyoti-singha-27a5b31b1/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LINKEDIN
                    </a>
                  </li>
                  <li>
                    <a
                      id="GitHub"
                      href="https://github.com/subhojyoti99"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GITHUB
                    </a>
                  </li>
                  <li>
                    <a
                      id="Facebook"
                      href="https://www.facebook.com/subhojyotisingha06"
                      target="_blank"
                      rel="noreferrer"
                    >
                      FACEBOOK
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="right-column">
              <div className="footsign">
                <img width="50%" fill="none" src={sign} alt="sign" />
              </div>

              <div className="address">
                <div
                  style={{
                    margin: "16px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <h4>
                    Ballygunge,
                    <br /> KOLKATA-700019
                  </h4>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <FontAwesomeIcon icon={faArrowRight} size="2x" />
                  </span>
                  <p>
                    22°32'19.3"N 88°21'47.3"E <br />
                    22.538704, 88.363126
                  </p>
                </div>
              </div>
              <div className="latestUpdate">
                <p>
                  Latest Update -- February 8<sup>th</sup>, 2025
                </p>
                {/* <Map /> */}
              </div>
            </div>
          </div>
          <div className="back-to-top">
            <a href="#">Back to TOP</a>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; subhojyotisingha || 2024</p>
      </footer>
    </>
  );
}
