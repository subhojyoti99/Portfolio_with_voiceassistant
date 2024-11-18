import React, { useEffect, useRef } from "react";
import "./styles/micSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import Groq from "groq-sdk";

// Initialize the Groq instance with your API key
const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export const MicSection = () => {
  const btnRef = useRef(null);
  const contentRef = useRef(null);

  const getGroqChatCompletion = async (message) => {
    try {
      const response = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
        model: "llama-3.2-90b-text-preview",
      });
      // Extract the content from the response
      return (
        response.choices[0]?.message?.content ||
        "I'm sorry, I couldn't generate a response."
      );
    } catch (error) {
      console.error("Error fetching chat completion from Groq:", error);
      return "An error occurred while generating the response.";
    }
  };

  useEffect(() => {
    const btn = btnRef.current;
    const content = contentRef.current;

    if (!btn || !content) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("SpeechRecognition API is not supported in this browser.");
      alert("SpeechRecognition API is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    const handleRecognitionResult = async (event) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;

      console.log("Transcript received:", transcript);

      // Display transcript in the UI
      if (content) {
        content.textContent = transcript;
      }

      // Generate and read out the response
      const response = await getGroqChatCompletion(transcript);
      console.log("Generated response:", response);

      const speech = new SpeechSynthesisUtterance();
      speech.text = response;
      speech.volume = 0.6;
      speech.rate = 0.8;
      speech.pitch = 0;

      window.speechSynthesis.speak(speech);
    };

    recognition.onstart = () => {
      console.log("Microphone is active. Start speaking...");
    };

    recognition.onresult = (event) => {
      handleRecognitionResult(event);
    };

    recognition.onerror = (event) => {
      console.error("Recognition error:", event.error);
    };

    btn.addEventListener("click", () => {
      recognition.start();
    });

    return () => {
      btn.removeEventListener("click", () => recognition.start());
      recognition.stop();
    };
  }, []);

  return (
    <div className="mic">
      <button id="clk" ref={btnRef} className="talk">
        <span>
          <FontAwesomeIcon icon={faMicrophone} />
        </span>
      </button>
      <h3
        ref={contentRef}
        className="cntnt"
        style={{ opacity: 0, position: "absolute" }}
      >
        {" "}
      </h3>
      <h4 className="press">
        Press to start conversation with the voice assistant
      </h4>
    </div>
  );
};
