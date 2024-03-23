import fetch from "node-fetch";

interface DeploymentData {
  name: string;
  projectId: string;
}

interface DeploymentResponse {
  url: string;
  error?: {
    message: string;
  };
}

const deployToVercel = async (vercelToken: string, vercelProjectId: string) => {
  try {
    console.log("Build successful, deploying to Vercel...");

    // Deploy to Vercel
    const deploymentData: DeploymentData = {
      name: "YOUR_DEPLOYMENT_NAME",
      projectId: vercelProjectId,
    };

    const response = await fetch("https://api.vercel.com/v13/deployments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${vercelToken}`,
      },
      body: JSON.stringify(deploymentData),
    });

    const data: any = await response.json();

    if (response.ok) {
      console.log("Deployment successful:", data.url);
    } else {
      console.error("Deployment failed:", data.error?.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default deployToVercel;
