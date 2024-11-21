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

  const res2 = {
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

  return (
    <div className="dashboard">
      {/* Header Section */}
      <header className="dashboard-header">
        <h1>Generative AI Dashboard</h1>
        <p>Track and Monitor your TestOps Processes</p>
      </header>

      {/* TestOps Overview Section */}
      <div className="project-details">
        <div className="testops-header">
          <h2>TestOps Overview</h2>
          <button
            className="bar-chart-icon"
            title="View Project Durations"
            onClick={toggleModal}
          >
            📊
          </button>
        </div>

        <p>
          TestOps is an automated testing framework that integrates seamlessly
          with on-premise environments to streamline the development and testing
          lifecycle. It supports efficient and concurrent processes such as
          folder structure review, codebase testing, and generating
          recommendations.
        </p>
        <h3>Key Features</h3>
        <ul>
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
        <h3>Usage Flow</h3>
        <p>
          TestOps starts by uploading a `.zip` file to the local server,
          followed by extraction, folder structure analysis, and codebase
          review. It proceeds with unit test generation and dry-run execution.
          Notifications are sent for failures, and overall scores are
          calculated, followed by actionable recommendations.
        </p>
        <h3>Summary of Recent Analysis</h3>
        <p>
          <strong>Score:</strong> {res2.score}/10
        </p>
        <p>
          <strong>Key Observations:</strong> {res2.comment}
        </p>
        <button className="detailed-score-btn" onClick={toggleDetailedScore}>
          View Detailed Score and Recommendations
        </button>
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
              {res2.param_score}
            </pre>
            <pre style={{ textAlign: "left" }}>
              <strong>Positive Observations:</strong>
              {res2.Positive_Observations}
            </pre>
            <pre style={{ textAlign: "left" }}>
              <strong>Areas for Potential Improvement:</strong>
              {res2.Areas_for_Potential_Improvement}
            </pre>
            <pre style={{ textAlign: "left" }}>
              <strong>Recommendations:</strong>
              {res2.recommendations}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenAIDashboard;
