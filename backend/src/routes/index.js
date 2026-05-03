import express from "express";
const router = express.Router();
// import

router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API running successfully",
  });
});

export default router;