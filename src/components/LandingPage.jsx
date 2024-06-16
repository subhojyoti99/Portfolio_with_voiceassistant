import React from "react";
import Contact from "./Contact";
import "./styles/landingPage.css";
import sign from "../images/sign.png";

export const LandingPage = () => {
  return (
    <section id="opening">
      <div className="circlefloat m1">hello</div>
      <div className="circlefloat m2"></div>
      <div className="circlefloat m3"></div>
      <div className="black-box">
        <div className="menu">{/* Menu items are commented out */}</div>
        <div className="content">
          <h2 className="subject">Who am I!?</h2>
          <h1 className="heading">Generative AI Developer.</h1>
          <p className="desc">
            I am a Gen AI Developer as well as a Back-end Developer and a
            Guitarist.
            <br />
            Offering help in your growth with my creativity and your dreams.
            <br />
            <br />
            <p>
              {/* ASE @XenonStack || Gen AI Developer || <br /> */}
              Associate Software Engineer @XenonStack || <br />
              CSE @Sister Nivedita University: 2023 || <br />
              Ex-Intern @Fleapo || Ex-Intern @24x7 Consultancy and Management
              Services
            </p>
          </p>
        </div>
        <div>
          <Contact />
        </div>
      </div>
      <div className="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40%"
          viewBox="0 0 600 700"
        >
          <defs>
            <filter
              id="A"
              x="0"
              y="0"
              width="387"
              height="715"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.49" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Group_1" data-name="Group 1" transform="translate(-613 -169)">
            <g transform="matrix(1, 0, 0, 1, 613, 169)" filter="url(#A)">
              <text
                id="A-2"
                data-name="A"
                transform="translate(9 571)"
                fill="rgba(0,0,0,0.5)"
                font-size="524"
                font-family="SegoeUI-Bold, Segoe UI"
                font-weight="700"
              >
                <tspan x="0" y="0">
                  S
                </tspan>
              </text>
            </g>
            <text
              id="H"
              transform="translate(863 740)"
              fill="rgba(255,255,255,0.5)"
              font-size="524"
              font-family="SegoeUI-Bold, Segoe UI"
              font-weight="700"
            >
              <tspan x="0" y="0">
                S
              </tspan>
            </text>
          </g>
        </svg>
        <img className="sign" width="100%" src={sign} alt="Signature" />
      </div>
    </section>
  );
};
