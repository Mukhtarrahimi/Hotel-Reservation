import express from "express";
const router = express.Router();
// import
import hotelRoutes from "./hotel.routes.js";

router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API running successfully",
  });
});

router.use("/hotels", hotelRoutes);

export default router;
