import express from "express";
import cors from "cors";
const app = express();
// Import
import { errorHandler } from "./middlewares/errorHandler.js";

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Home page",
  });
});

// error handler
app.use(errorHandler);
export default app;
