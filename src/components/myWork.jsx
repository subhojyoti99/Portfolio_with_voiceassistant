import React from "react";
import "./styles/myWork.css";
import IOTImage from "../images/IOT1.jpg";
import GuitarImage from "../images/guitar.jpg";
import WebDevImage from "../images/mac.jpg";

const MyWork = () => {
  return (
    <section id="work">
      <h1 className="heading">- MY WORK</h1>
      <div className="flip-card-holder">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.767)" }}
            >
              <img src={IOTImage} alt="IoT Project" />
              <h3>As a GenAI Developer</h3>
            </div>
            <div className="flip-card-back">
              <h1>IoT Project</h1>
              <p>
                “If you think that the internet has changed your life, think
                again. The Internet of Things is about to change it all over
                again!”
              </p>
              <a href="#">
                <button type="button" className="card-button">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{ backgroundColor: "rgba(10, 9, 7, 0.589)" }}
            >
              <img src={GuitarImage} alt="Guitarist" />
              <h3>As a Guitarist</h3>
            </div>
            <div className="flip-card-back">
              <h1>Guitarist</h1>
              <p>“You beat but I play.”</p>
              <a href="#">
                <button type="button" className="card-button">
                  Listen to Melodies
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{ backgroundColor: "rgb(0, 0, 0)" }}
            >
              <img src={WebDevImage} alt="Web Developer" />
              <h3>As a Web Developer</h3>
            </div>
            <div className="flip-card-back">
              <h1>Web Designer and Developer</h1>
              <p>“Websites promote you 24/7: No employee will do that.”</p>
              <a href="#">
                <button type="button" className="card-button">
                  View Designs
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
