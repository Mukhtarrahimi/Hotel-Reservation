import Reservation from "../models/reservationModel.js";

// Create Reservation
export const createReservation = async (req, res) => {
  try {
    const { name, email, phone, roomName, roomId, guests, checkin, checkout } =
      req.body;
    if (
      !name ||
      !email ||
      !phone ||
      !roomName ||
      !guests ||
      !checkin ||
      !checkout
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required",
      });
    }
    const reservation = await Reservation.create({
      name,
      phone,
      email,
      roomName,
      roomId,
      guests,
      checkin,
      checkout,
    });
    res.status(201).json({
      success: true,
      message: "reservation created successfully",
      data: reservation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Reservation
export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    if (reservations.length === 0) {
      return res.status(404).json({
        success: true,
        message: "reservation not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "reservations fetched successfully",
      data: reservations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get Reservation By ID
export const getReservation = async (req, res) => {
  try {
    const {id} = req.params;
    if()
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Update Reservation
export const updateReservation = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Delete Reservation
export const deleteReservation = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
