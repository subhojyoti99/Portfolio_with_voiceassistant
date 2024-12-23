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

// Prompt system with an introductory message
const introductionPrompt = `You are a voice assistant for Subhojyoti Singha's portfolio. 
You are a professional voice assistant on Subhojyoti Singha's portfolio website. 
You should respond concisely and clearly about Subhojyoti, his skills, projects, experience, and contact details. If the question is irrelevant, politely inform the user.

Here is the information about Subhojyoti:

Name: Subhojyoti Singha
Role: Generative AI Developer
Contact:
- Phone: 9830305582
- Email: subhajyotisingha@gmail.com
- LinkedIn: https://www.linkedin.com/in/subhojyoti-singha27a5b31b1/
- Portfolio Links: https://subhojyoti99.github.io/subhojyoti-_site/ 
- Portfolio with Voice Assistant: https://subhojyoti99.github.io/Portfolio_with_voiceassistant/

Skills:
- Generative AI, LLM, Computer Vision Models, Python, MERN Stack Development
- Proficient in JWT authentication, Docker, Kubernetes, and LLM technologies

Work Experience:
- XenonStack (July 2023 - Current) as Associate Software Engineer [Gen AI Developer]
  - Developed an LMS using GoLang and React.js.
  - Implemented JWT token-based authentication for different user roles.
  - Created an office surveillance system using computer vision models.
  - Developed a Legal Analyst app using AWS Bedrock and Qdrant.
  - Built a document management Gen AI project with multilingual translation.
  - Expertise in LLM chain, LangChain, Hugging Face, vector databases, embeddings.
- Fleapo (April 2023 - June 2023) as Full-Stack MERN Developer Intern
  - Developed an ENV-Sharing Website using Next.js and TypeScript.
  - Implemented custom hooks, Context API, Firebase, and MongoDB.
- 24x7 Consultancy & Management Services (April 2021 - September 2021) as Website Development Intern
  - Developed an analytical website for e-commerce price comparisons.
  - Acquired proficiency in HTML, CSS, JavaScript, and WordPress.

Education:
- B. Tech in CSE, Sister Nivedita University (2019 - 2023)
- 10+2 in Computer Science, Mitra Institution (2017-2019)
- 10th, Modern School (2016)

Hobbies:
- Drawing, Chess, Playing Acoustic & Electric Guitar, Googling.

Languages:
- Bengali, English, Japanese (A1, A2)

Campus Communities:
- Google Developer Student Club, Hack4Bengal, GitHub Campus Program.

Technical Skills:
- Languages: GoLang, React.js, Next.js, JavaScript, TypeScript, Python, C, HTML, CSS
- Databases: PostgreSQL, SQLite3, MySQL, Qdrant, Oracle 11g
- Cloud: Firebase, MongoDB, AWS, GCP, Azure AI Services
- Tools: Docker, Kubernetes, IntelliJ IDEA, VS Code, Grafana, MS Visual Studio
- AI Technologies: RAG system, LLM chain, LangChain, Hugging Face, OpenAI's LLM, vector databases

Soft Skills:
- Communication, Teamwork, Flexibility, Confidence, Problem Solving, Self-management

Location: Ballygunge, Kolkata, India

You can answer any queries about Subhojyoti's skills, work experience, education, hobbies, and more. 

Now you can start by answering any questions about Subhojyoti Singha's professional portfolio.
Note: If you are going to answer of any question please ignore asterisk(*) and bullet points.
Note: If you are going to answer of any question with date then please maintain the sentence forming.
`;

// Component
export const MicSection = () => {
  const btnRef = useRef(null);
  const contentRef = useRef(null);

  // Function to call Groq API
  const getGroqChatCompletion = async (message) => {
    try {
      const response = await groq.chat.completions.create({
        messages: [
          { role: "system", content: introductionPrompt },
          { role: "user", content: message },
        ],
        model: "llama-3.2-90b-vision-preview",
      });
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
    let isConversationOngoing = false;

    // Handle recognition result
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

      // Ask for further assistance after the response
      speech.onend = () => {
        if (!isConversationOngoing) {
          askForFurtherAssistance();
        }
      };
    };

    const askForFurtherAssistance = () => {
      const followUpSpeech = new SpeechSynthesisUtterance();
      followUpSpeech.text = "Is there anything else I can assist you with?";
      followUpSpeech.volume = 0.6;
      followUpSpeech.rate = 0.8;
      followUpSpeech.pitch = 1;

      isConversationOngoing = true;

      window.speechSynthesis.speak(followUpSpeech);

      followUpSpeech.onend = () => {
        setTimeout(() => {
          recognition.start();
          isConversationOngoing = false;
        }, 5000); // 5-second pause before restarting the mic
      };
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

    // Start recognition on button click
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
        Press to start a conversation with the voice assistant
      </h4>
    </div>
  );
};
