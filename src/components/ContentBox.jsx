import React from "react";
import "./styles/contentBox.css";

export const ContentBox = ({ icon, text }) => {
  return (
    <div className="cbox">
      <i className={`${icon}`}></i>
      <p>{text}</p>
    </div>
  );
};