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
router.post("/hotels", createHotel);
router.get("/hotels", getHotels);
router.get("/hotels/:id", getHotel);
router.put("/hotels/:id", updateHotel);
router.delete("/hotels/:id", deleteHotel);

export default router;