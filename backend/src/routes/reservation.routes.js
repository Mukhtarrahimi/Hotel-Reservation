import express from "express";
const router = express.Router();

import {
  createReservation,
  getReservations,
  getReservation,
  updateReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

// RESTfull routes
router.post("/", createReservation);
router.get("/", getReservations);
router.get("/:id", getReservation);
router.put("/:id", updateReservation);
router.delete("/:id", deleteReservation);

export default router;
