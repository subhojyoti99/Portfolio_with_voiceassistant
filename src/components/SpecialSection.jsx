import React from "react";
import { ContentBox } from "./ContentBox";
import { MicSection } from "./MicSection";
import "./styles/specialSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHandsHelping,
  faComments,
  faGlassCheers,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const SpecialSection = () => {
  return (
    <section id="special">
      <div className="clipy"></div>
      <div className="what-special">
        <p>What's special about this website?</p>
        <div className="answer">
          <p>
            - Well, <br /> you can ask the voice assistant about myself.
          </p>
        </div>
      </div>
      <div className="conbox">
        {/* <ContentBox
          icon={faCode}
          text="A voice assistant is integrated in this website which is coded in JavaScript"
        /> */}
        <div className="cbox">
          <span>
            <FontAwesomeIcon icon={faCode} />
          </span>
          <p>
            A voice assistant is integrated in this website which is coded in
            javascript
          </p>
        </div>
        <div className="cbox">
          <span>
            <FontAwesomeIcon icon={faHandsHelping} />
          </span>
          <p>
            The voice assistant is been attached to help visitors with more
            information
          </p>
        </div>
        <div className="cbox">
          <span>
            <FontAwesomeIcon icon={faComments} />
          </span>
          <p>
            To start the conversation with the assistant click the microphone
            button
          </p>
        </div>
        <div className="cbox">
          <span>
            <FontAwesomeIcon icon={faClock} />
          </span>
          <p>
            {" "}
            After 5 seconds, the assistant will ask for further assistance. You
            can continue the conversation after it says "Is there anything else
            I can assist you with?"
          </p>
        </div>
        <div className="cbox">
          <span>
            <FontAwesomeIcon icon={faGlassCheers} />
          </span>
          <p>
            Have your fun with the assistant. For more information about the
            assistant command the assistant as "Go to info"
          </p>
        </div>
        {/* <ContentBox
          icon="fa-hands-helping"
          text="The voice assistant is here to help visitors with more information"
        /> */}
        {/* <ContentBox
          icon="fa-comments"
          text="To start the conversation with the assistant, click the microphone button"
        /> */}
        {/* <ContentBox
          icon="fa-glass-cheers"
          text='Have fun with the assistant. For more information, command the assistant with "Go to info"'
        /> */}
      </div>

      <MicSection />
    </section>
  );
};
