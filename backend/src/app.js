import express from "express";
import cors from "cors";
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Home page",
  });
});

export default app;
