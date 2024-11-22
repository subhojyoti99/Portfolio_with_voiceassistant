import React, { useState } from "react";
import "../../styles/genAIDashboard.css";

const GenAIDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailedScoreOpen, setDetailedScoreOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleDetailedScore = () => {
    setDetailedScoreOpen(!detailedScoreOpen);
  };

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [detailedScoreOpen1, setDetailedScoreOpen1] = useState(false);

  const toggleModal1 = () => {
    setIsModalOpen1(!isModalOpen1);
  };

  const toggleDetailedScore1 = () => {
    setDetailedScoreOpen1(!detailedScoreOpen1);
  };

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [detailedScoreOpen2, setDetailedScoreOpen2] = useState(false);

  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };

  const toggleDetailedScore2 = () => {
    setDetailedScoreOpen2(!detailedScoreOpen2);
  };

  const res1 = {
    score: 8,
    param_score: `
      Naming conventions : 10 
      Code formatting : 10 
      Comments documentation : 7 
      Error handling : 8 
      Folder structure : 10
    `,
    comment:
      "The code is well-structured and generally well-written. It follows common C# conventions and best practices. However, it lacks comments explaining the code's purpose and functionality, especially in the HomeController and Startup classes. Adding more detailed comments would improve readability and maintainability. Additionally, while the error handling is decent, it could be enhanced by logging specific error details or providing more user-friendly error messages.",
    Positive_Observations: `

- **Standard ASP.NET Core Structure:** The file organization within 'dotnet-project-example12' aligns with the conventions of ASP.NET Core MVC projects, including folders for Controllers, Models, Views, and wwwroot.
- **Configuration and Settings:** The presence of 'appsettings.json' and its development variant suggests a suitable setup for managing application configurations.
- **CI/CD Integration:** Files like '.gitlab-ci.yml' and 'azure-pipelines.yml' indicate a focus on continuous integration and deployment, which is commendable.
- **Docker Support:** The inclusion of a 'Dockerfile' within 'dotnet-project-example12' implies the project is containerized, promoting portability and scalability.
`,
    Areas_for_Potential_Improvement: `

- **README.md Enhancement:** While a 'README.md' is present, consider enriching it with more comprehensive information about the project's purpose, how to run it locally, and any dependencies. For example:
  \`\`\`
  # Dotnet Project Example 12

  ## Description
  This project demonstrates...

  ## Getting Started
  1. **Prerequisites:** Ensure you have the following installed:
     * .NET SDK
  2. **Build:** Navigate to the project directory and run:
     \`\`\`bash
     dotnet build
     \`\`\`
  3. **Run:** Execute the following command:
     \`\`\`bash
     dotnet run
     \`\`\`

  ## Dependencies
  * [List any external libraries or packages]
  \`\`\`
- **Code Style Consistency:** Without access to the code within the '.cs' and '.cshtml' files, it's impossible to comment on code style and potential improvements. However, maintaining consistency in code style, naming conventions, and adhering to best practices is crucial for maintainability.
- **Testing:** The absence of a dedicated test project or directory raises a flag. Incorporating unit tests or integration tests is highly recommended to ensure the reliability and correctness of the application's components.

**Overall:**
The file structure demonstrates a solid foundation for an ASP.NET Core MVC project. Enhancing the 'README.md', ensuring code quality and consistency, and adding a testing strategy would elevate this project to an even higher standard.`,
    recommendations: `
      dotnet-project-example12/Controllers/HomeController.cs:
      Add comments for better clarity and readability.

      dotnet-project-example12/Startup.cs:
      Ensure detailed documentation of pipeline configuration.
    `,
  };

  const res2 = {
    score: 9,
    keyObservations: `
      The system accurately detected employee activities such as in/out time and break durations, ensuring compliance with office protocols. 
      It successfully identified unauthorized access attempts and flagged them in real time. However, some challenges were observed in detecting 
      subtle movements in low-light conditions. Implementing advanced noise filtering techniques and enhanced night-vision support is recommended.
    `,
    detailedRecommendations: `
      1. **Lighting Enhancements:** Improve visibility in low-light environments.
      2. **AI Model Upgrades:** Fine-tune models for more robust detection of subtle behaviors.
      3. **Custom Notifications:** Enable personalized alerts for different user roles.
    `,
  };

  const outputExample = [
    {
      timestamp: "10:15:23",
      event: "Unauthorized Access",
      confidence: "95%",
      details: "Unknown individual detected near restricted area.",
    },
    {
      timestamp: "10:45:10",
      event: "Break Time",
      confidence: "88%",
      details: "Employee left desk for 15 minutes.",
    },
    {
      timestamp: "11:30:45",
      event: "In-Time Recorded",
      confidence: "99%",
      details: "Employee logged in at workstation.",
    },
  ];

  const audioProcessingSolution = {
    score: 9,
    param_score:
      "Audio Pre-processing: 10\n" +
      "Segmentation: 9\n" +
      "Transcription Accuracy: 9\n" +
      "Error Handling: 8",
    comment:
      "This audio processing solution leverages advanced segmentation and pre-processing to enhance transcription accuracy. The integration with machine learning models ensures high performance, though error handling for edge cases like background noise could be improved.",
    Positive_Observations:
      "- **Optimized Segmentation:** Efficiently processes variable-length audio.\n" +
      "- **Advanced Pre-processing:** Cleaned and trimmed audio for improved transcriptions.",
    Areas_for_Potential_Improvement:
      "- **Error Handling:** More robustness needed in noise-heavy environments.\n" +
      "- **Documentation:** Adding comments for code clarity.",
    recommendations:
      "Add more robust handling for noise-rich environments and edge cases like very short or very long audios.\n" +
      "Improve comments and documentation for better maintainability.",
  };

  return (
    <div className="dashboard">
      {/* Header Section */}
      <header className="dashboard-header">
        <h1>Generative AI Dashboard</h1>
        <p>Track and Monitor your TestOps Processes</p>
      </header>

      {/* TestOps Overview Section */}
      <div className="project-details">
        <div className="projects-header">
          <h2>TestOps</h2>
          <div className="button-group">
            <button
              className="detailed-score-btn"
              onClick={toggleDetailedScore}
            >
              Example Output
            </button>
            <button
              className="bar-chart-icon"
              title="View Project Durations"
              onClick={toggleModal}
            >
              📊
            </button>
          </div>
        </div>

        <p>
          TestOps is an automated testing framework that integrates seamlessly
          with on-premise environments to streamline the development and testing
          lifecycle. It supports efficient and concurrent processes such as
          folder structure review, codebase testing, and generating
          recommendations.
        </p>
        <h3 className="bullet">Key Features</h3>
        <ul className="keyFeature">
          <li>
            Efficient <strong>Folder Structure Testing</strong> with up to 50
            concurrent tests.
          </li>
          <li>
            Comprehensive <strong>Codebase Reviews</strong> for structural and
            logical analysis.
          </li>
          <li>
            <strong>Unit Test Generation</strong> with detailed explanations and
            dry-run execution.
          </li>
          <li>
            Automated notifications for failed tests with developer
            contactability.
          </li>
          <li>
            Final score calculation and <strong>recommendation snippets</strong>{" "}
            for improvements.
          </li>
        </ul>
        <h3 className="bullet">Usage Flow</h3>
        <p>
          TestOps starts by uploading a `.zip` file to the local server,
          followed by extraction, folder structure analysis, and codebase
          review. It proceeds with unit test generation and dry-run execution.
          Notifications are sent for failures, and overall scores are
          calculated, followed by actionable recommendations.
        </p>
        <h3 className="bullet">Summary of Recent Analysis</h3>
        <p>
          <strong>Score:</strong> {res1.score}/10
        </p>
        <p>
          <strong>Key Observations:</strong> {res1.comment}
        </p>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Project Durations</h2>
            <button className="close-modal" onClick={toggleModal}>
              ✖
            </button>
            <ul>
              <li>Start to Upload: 10 minutes</li>
              <li>Upload to Extract: 15 minutes</li>
              <li>Extraction to Folder Review: 20 minutes</li>
              <li>Codebase Review: 25 minutes</li>
              <li>Unit Test Generation: 30 minutes</li>
              <li>Notifications and Contact: 10 minutes</li>
              <li>Score Calculation: 5 minutes</li>
              <li>Recommendation: 10 minutes</li>
            </ul>
          </div>
        </div>
      )}

      {/* Detailed Score Modal */}
      {detailedScoreOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Detailed Score and Recommendations</h2>
            <button className="close-modal" onClick={toggleDetailedScore}>
              ✖
            </button>
            <pre style={{ textAlign: "left" }}>
              <strong>Parametric Scores:</strong>
              {res1.param_score}
            </pre>
            <pre style={{ textAlign: "left" }}>
              <strong>Positive Observations:</strong>
              {res1.Positive_Observations}
            </pre>
            <pre style={{ textAlign: "left" }}>
              <strong>Areas for Potential Improvement:</strong>
              {res1.Areas_for_Potential_Improvement}
            </pre>
            <pre style={{ textAlign: "left" }}>
              <strong>Recommendations:</strong>
              {res1.recommendations}
            </pre>
          </div>
        </div>
      )}

      {/* Video Analytics Overview Section */}
      <div className="project-details">
        <div className="projects-header">
          <h2>Video Analytics</h2>
          <div className="button-group">
            <button
              className="detailed-score-btn"
              onClick={toggleDetailedScore1}
            >
              Example Output
            </button>
            <button
              className="bar-chart-icon"
              title="View Output Example"
              onClick={toggleModal1}
            >
              📊
            </button>
          </div>
        </div>

        <p>
          Video Analytics Solution is a Generative AI-powered system that
          transforms raw video data into actionable insights. It provides
          real-time monitoring, scene understanding, and event detection, making
          it ideal for use cases like surveillance, retail analytics, traffic
          management, and personalized content delivery.
        </p>

        <h3 className="bullet">Key Features</h3>
        <ul className="keyFeature">
          <li>
            <strong>Real-Time Scene Understanding:</strong> Processes live video
            feeds to identify objects, behaviors, and anomalies.
          </li>
          <li>
            <strong>Event Detection and Notifications:</strong> Detects key
            events (e.g., unauthorized access, crowding) and sends instant
            alerts.
          </li>
          <li>
            <strong>Emotion and Sentiment Analysis:</strong> Analyzes facial
            expressions and tone to derive emotional cues.
          </li>
          <li>
            <strong>Integration with Existing Systems:</strong> Compatible with
            RTSP, webcam feeds, and video files for easy deployment.
          </li>
          <li>
            <strong>Scalable Processing:</strong> Supports distributed
            processing for handling high-resolution videos or multiple streams
            simultaneously.
          </li>
          <li>
            <strong>Insights Dashboard:</strong> Provides visual summaries,
            heatmaps, and detailed analytics via an interactive dashboard.
          </li>
        </ul>

        <h3 className="bullet">Usage Flow</h3>
        <p>
          <strong>Data Ingestion:</strong> Upload video files or connect live
          streams using RTSP or webcam feeds.
        </p>
        <p>
          <strong>Pre-Processing:</strong> Frames extracted and divided into
          5-minute segments for efficient processing. Filters applied for noise
          reduction and scene optimization.
        </p>
        <p>
          <strong>Analysis Pipeline:</strong> Object detection, tracking, and
          event classification using AI models. Emotional and behavioral
          insights derived for human interactions.
        </p>
        <p>
          <strong>Alerts and Visualization:</strong> Generates real-time alerts
          for critical events. Interactive dashboard displays insights with
          timestamps.
        </p>
        <p>
          <strong>Actionable Recommendations:</strong> Provides recommendations
          based on observed trends, such as optimizing store layouts or
          enhancing safety protocols.
        </p>

        <h3 className="bullet">Summary of Recent Analysis</h3>
        <p>
          <strong>Scenario:</strong> Employee Surveillance in Office
        </p>
        <p>
          <strong>Score:</strong> {res2.score}/10
        </p>
        <p>
          <strong>Key Observations:</strong> {res2.keyObservations}
        </p>
      </div>

      {/* Modal Section */}
      {isModalOpen1 && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Output Example</h2>
            <button className="close-modal" onClick={toggleModal1}>
              ✖
            </button>
            <table>
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Event</th>
                  <th>Confidence</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {outputExample.map((item, index) => (
                  <tr key={index}>
                    <td>{item.timestamp}</td>
                    <td>{item.event}</td>
                    <td>{item.confidence}</td>
                    <td>{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detailed Score Modal */}
      {detailedScoreOpen1 && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Detailed Recommendations</h2>
            <button className="close-modal" onClick={toggleDetailedScore1}>
              ✖
            </button>
            <pre style={{ textAlign: "left" }}>
              {res2.detailedRecommendations}
            </pre>
          </div>
        </div>
      )}

      {/* Audio Processing Solution Overview Section */}
      <div className="project-details">
        <div className="projects-header">
          <h2>Audio Processing and Transcription</h2>
          <div className="button-group">
            <button
              className="detailed-score-btn"
              onClick={toggleDetailedScore2}
            >
              Example Output
            </button>
            <button
              className="bar-chart-icon"
              title="View Project Details"
              onClick={toggleModal2}
            >
              📊
            </button>
          </div>
        </div>

        <p>
          This solution processes and transcribes audio files by leveraging
          advanced segmentation, pre-processing, and transcription pipelines.
          It's designed to handle variable-length audio and improve accuracy by
          removing unnecessary silence and optimizing data for transcription.
        </p>
        <h3 className="bullet">Key Features</h3>
        <ul className="keyFeature">
          <li>
            Efficient <strong>Audio Pre-processing</strong> to trim silence and
            enhance quality.
          </li>
          <li>
            Advanced <strong>Segmentation</strong> using chroma-based techniques
            for precise audio snippet extraction.
          </li>
          <li>
            Integration with powerful <strong>Transcription Models</strong> for
            high-accuracy text generation.
          </li>
          <li>
            Handling diverse audio lengths with dynamic{" "}
            <strong>Chunking</strong> logic.
          </li>
        </ul>
        <h3 className="bullet">Usage Flow</h3>
        <p>
          The solution processes audio files by first removing silent sections,
          then segmenting the audio based on features like pitch and chroma.
          Each segment is transcribed using a dedicated transcription model.
          Results are returned in real-time or as batches for larger files.
        </p>
        <h3 className="bullet">Summary of Recent Analysis</h3>
        <p>
          <strong>Score:</strong> {audioProcessingSolution.score}/10
        </p>
        <p>
          <strong>Key Observations:</strong> {audioProcessingSolution.comment}
        </p>
      </div>

      {/* Modal Section */}
      {isModalOpen2 && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Project Details</h2>
            <button className="close-modal" onClick={toggleModal2}>
              ✖
            </button>
            <ul>
              <li>Audio Pre-processing: 15 minutes</li>
              <li>Segmentation and Chunking: 25 minutes</li>
              <li>Transcription: 30 minutes</li>
              <li>Result Output: 5 minutes</li>
            </ul>
          </div>
        </div>
      )}

      {/* Detailed Score Modal */}
      {detailedScoreOpen2 && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Detailed Score and Recommendations</h2>
            <button className="close-modal" onClick={toggleDetailedScore2}>
              ✖
            </button>
            <pre style={{ textAlign: "left" }}>
              <strong>Parametric Scores:</strong>
              {audioProcessingSolution.param_score}
            </pre>
            <pre style={{ textAlign: "left" }}>
              <strong>Positive Observations:</strong>
              {audioProcessingSolution.Positive_Observations}
            </pre>
            <pre style={{ textAlign: "left" }}>
              <strong>Areas for Potential Improvement:</strong>
              {audioProcessingSolution.Areas_for_Potential_Improvement}
            </pre>
            <pre style={{ textAlign: "left" }}>
              <strong>Recommendations:</strong>
              {audioProcessingSolution.recommendations}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenAIDashboard;
