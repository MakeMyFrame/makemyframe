import express from "express";
import fetch from "node-fetch";
import spawn from "child_process";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Allow requests from http://localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.post("/deploy", async (req, res) => {
  try {
    const { vercelToken, vercelProjectId } = req.body;

    if (!vercelToken || !vercelProjectId) {
      return res
        .status(400)
        .json({ error: "Please provide both Vercel token and project ID." });
    }

    // Run the Next.js build command
    const nextAppDir = path.join(
      __dirname,
      "..",
      "frontend",
      "Template",
      "nft-mint"
    );
    const buildProcess = spawn("npm", ["run", "build"], { cwd: nextAppDir });

    buildProcess.stdout.on("data", (data) => {
      console.log(`Build Output: ${data}`);
    });

    buildProcess.stderr.on("data", (data) => {
      console.error(`Build Error: ${data}`);
    });

    buildProcess.on("close", async (code) => {
      if (code !== 0) {
        console.error("Build failed");
        return res.status(500).json({ error: "Build failed" });
      }

      console.log("Build successful, deploying to Vercel...");

      // Deploy to Vercel
      const deploymentData = {
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

      const data = await response.json();

      if (response.ok) {
        console.log("Deployment successful:", data.url);
        res.json({ url: data.url });
      } else {
        console.error("Deployment failed:", data.error.message);
        res.status(500).json({ error: data.error.message });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
