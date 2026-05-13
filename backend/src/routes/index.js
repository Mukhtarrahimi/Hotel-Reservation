import express from "express";
const router = express.Router();
// import
import hotelRoute from "./hotel.routes.js";
import reservationRoute from "./reservation.routes.js";
import userRoute from "./user.routes.js";

router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API running successfully",
  });
});

router.use("/hotels", hotelRoute);
router.use("/reservations", reservationRoute);
router.use("/users", userRoute);

export default router;
