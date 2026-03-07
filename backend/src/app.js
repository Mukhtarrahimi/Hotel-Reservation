import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();
// Import
import { errorHandler } from "./middlewares/errorHandler.js";
import { API } from "./constants/index.js";
import routes from "./routes/index.js";

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(API.BASE, routes);

// error handler
app.use(errorHandler);
export default app;
