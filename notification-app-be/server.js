const express = require("express");
const cors = require("cors");
const Log = require("../logging-middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", async (req, res) => {
  await Log(
    "backend",
    "info",
    "route",
    "Health endpoint called"
  );

  res.json({
    status: "OK"
  });
});

app.listen(5000, async () => {
  await Log(
    "backend",
    "info",
    "service",
    "Backend server started"
  );

  console.log("Server running on port 5000");
});