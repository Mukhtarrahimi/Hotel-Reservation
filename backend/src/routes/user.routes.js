import express from "express";
const router = express.Router();

import { adminController } from "../controllers/userController.js";

router.post("/admin", adminController);

export default router;
