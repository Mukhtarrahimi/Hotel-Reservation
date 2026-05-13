import express from "express";
const route = express.Router();

import { userController } from "../controllers/userController.js";

route.post("/", userController);

export default router;
