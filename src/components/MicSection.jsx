import React from "react";
import "./styles/micSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

export const MicSection = () => {
  return (
    <div className="mic">
      <button id="clk" className="talk">
        <span>
            <FontAwesomeIcon icon={faMicrophone} />
        </span>
      </button>
      <h3 className="cntnt" style={{ opacity: 0, position: "absolute" }}> </h3>
      <h4 className="press">Press to start conversation with voice assistant</h4>
    </div>
  );
};