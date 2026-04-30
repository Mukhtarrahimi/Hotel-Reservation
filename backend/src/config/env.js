import dotenv from "dotenv/config";

export const env = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: Number(process.env.NODE_ENV) || "development",
  MONGO_URI: process.env.MONGO_URI,
};
