import express from "express";
const router = express.Router();

import {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
} from "../controllers/hotelController.js";

// RESTful routes
router.post("/", createHotel);
router.get("/", getHotels);
router.get("/:id", getHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);

export default router;
