import React from "react";
import "./aIAnalytics.css";
import surveillanceImg from "../../../images/surveillance.avif";
import deepSortImg from "../../../images/deepsort.jpg";
import legalAnalystImg from "../../../images/legal.jpg";
import medicalImg from "../../../images/med_1.png";
import testOpsImg from "../../../images/test_1.jpg";
import translateImg from "../../../images/translate.jpg";

const AIAnalytics = () => {
  // **Computer Vision (CV) Projects**
  const cvProjects = [
    {
      title: "Office Surveillance System",
      subtitle: "Real-time monitoring with AI",
      details:
        "Developed an AI-powered surveillance system that tracks employee canteen breaks, gathering insights on attendance tracking, pose estimation, fire detection, unauthorized access, and movement mapping using computer vision models.",
      image: surveillanceImg,
      colorCode: "Azure",
      paddingTopValue: "220px",
      paddingBottomValue: "0px",
    },
    {
      title: "DeepSORT Object & Employee Tracking",
      subtitle: "Advanced tracking in videos",
      details:
        "Integrated Deep SORT for tracking multiple moving objects also integrated with employees in video feeds, improving accuracy and reducing occlusions.",
      image: deepSortImg,
      colorCode: "Black",
      paddingTopValue: "0px",
      paddingBottomValue: "240px",
    },
  ];

  // **Generative AI (Gen AI) Projects**
  const genAIProjects = [
    {
      title: "Legal Analyst Agent",
      subtitle: "AI-driven legal document analysis",
      details:
        "Built an AI-powered legal analysis tool using AWS Bedrock for embeddings and Qdrant for data retrieval.",
      image: legalAnalystImg,
      colorCode: "Navy",
      paddingTopValue: "0px",
      paddingBottomValue: "240px",
    },
    {
      title: "Medical Multi Agent",
      subtitle: "AI for healthcare insights",
      details:
        "Developed a RAG system to analyze multilingual medical documents and provide location-based assistance & agent-calling functionalities.",
      image: medicalImg,
      colorCode: "Black",
      paddingTopValue: "300px",
      paddingBottomValue: "0",
    },
    {
      title: "Unit Test Generation",
      subtitle: "Automated test creation",
      details:
        "Designed an AI-powered system to generate unit test cases using OpenAI’s LLM, Groq, and PostgreSQL.",
      image: testOpsImg,
      colorCode: "Azure",
      paddingTopValue: "0px",
      paddingBottomValue: "240px",
    },
    {
      title: "Agent for Document Management",
      subtitle: "Translation & insights",
      details:
        "Implemented an AI system that translates documents into multiple languages and extracts key insights using Azure AI & Qdrant.",
      image: translateImg,
      colorCode: "Navy",
      paddingTopValue: "240px",
      paddingBottomValue: "0",
    },
    {
      title: "LangGraph & SQL Agents",
      subtitle: "Intelligent agent decision-making",
      details:
        "Developed SQL and Visual Agents using LangGraph, enabling AI-driven data interactions and decision-making.",
    },
  ];

  return (
    <div className="dashboard-aianalytics">
      {/* Header */}
      <header className="dashboard-header-aianalytics">
        <h1>AI & Analytics Chapter</h1>
      </header>

      {/* Computer Vision Section */}
      <div className="project-category-aianalytics">
        <h2 className="category-title-aianalytics">Computer Vision (CV)</h2>
        <div className="flip-card-holder-aianalytics">
          {cvProjects.map((project, index) => (
            <div key={index} className="flip-card-aianalytics">
              <div className="flip-card-inner-aianalytics">
                <div
                  className="flip-card-front-aianalytics"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: project.colorCode,
                    paddingTop: project.paddingTopValue,
                    paddingBottom: project.paddingBottomValue,
                  }}
                >
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
                <div className="flip-card-back-aianalytics">
                  <h1>{project.title}</h1>
                  <p>{project.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Generative AI Section */}
      <div className="project-category-aianalytics">
        <h2 className="category-title-aianalytics">Generative AI (Gen AI)</h2>
        <div className="flip-card-holder-aianalytics">
          {genAIProjects.map((project, index) => (
            <div key={index} className="flip-card-aianalytics">
              <div className="flip-card-inner-aianalytics">
                <div
                  className="flip-card-front-aianalytics"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: project.colorCode,
                    paddingTop: project.paddingTopValue,
                    paddingBottom: project.paddingBottomValue,
                  }}
                >
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
                <div className="flip-card-back-aianalytics">
                  <h1>{project.title}</h1>
                  <p>{project.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;
