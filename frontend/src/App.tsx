import { useState } from "react";

const App = () => {
  const [vercelToken, setVercelToken] = useState("");
  const [deploymentUrl, setDeploymentUrl] = useState("");

  const handleDeploy = async () => {
    if (vercelToken) {
      try {
        const response = await fetch("http://localhost:3000/deploy", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ vercelToken }),
        });

        const data = await response.json();

        if (response.ok) {
          setDeploymentUrl(data.url);
        } else {
          console.error("Deployment failed:", data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Please provide the Vercel token.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Vercel Token"
        value={vercelToken}
        onChange={(e) => setVercelToken(e.target.value)}
      />
      <button onClick={handleDeploy}>Deploy to Vercel</button>
      {deploymentUrl && (
        <p>
          Deployment successful:{" "}
          <a href={deploymentUrl} target="_blank" rel="noopener noreferrer">
            {deploymentUrl}
          </a>
        </p>
      )}
    </div>
  );
};

export default App;
