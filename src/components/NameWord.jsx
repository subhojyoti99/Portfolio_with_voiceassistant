import React from "react";
import MyPic from "../images/myPic.jpg";
import "./styles/nameWord.css";

export const NameWord = () => {
  return (
    <>
      <section id="myword">
        <div className="poster">
          <p className="myFriend">- My friends</p>
          <p>
            call me <span className="myName">Subhojyoti</span>.
          </p>
        </div>
        <div className="">
          <img className="myimg" src={MyPic} alt="Subhojyoti" />
        </div>
        <div className="wordpara">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;I like to learn from every moment of my
            life, as life comes with great uncertainty and a tight time limit.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Running behind those dreams and making them
            true is the real success, and the journey to the end is the real
            story.
          </p>
          <p className="quote">- I stand with my belief</p>
          <button type="button" className="holo-button wordbutton">
            View More
          </button>
        </div>
        <div className="boxfloat m4"></div>
        <div className="boxfloat m5"></div>
        <div className="boxfloat m6"></div>
      </section>
    </>
  );
};
