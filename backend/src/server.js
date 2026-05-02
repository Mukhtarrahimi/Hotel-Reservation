import dotenv from "dotenv/config";
import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(env.PORT, () => {
      console.log(
        `Server running on http://localhost:${PORT} in ${env.NODE_ENV} mode`,
      );
    });
  } catch (error) {
    console.error("Failed to start server: ", error.message);
    process.exit(1);
  }
};

startServer();
