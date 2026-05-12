import Reservation from "../models/reservationModel.js";
import mongoose from "mongoose";
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
        success: false,
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
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid reservation id",
      });
    }
    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Not found reservation",
      });
    }
    res.status(200).json({
      success: true,
      message: "reservation fetched successfully",
      data: reservation,
    });
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
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid reservation id",
      });
    }
    const reservation = await Reservation.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Not found reservation",
      });
    }
    res.status(200).json({
      success: true,
      message: "reservation update successfully",
      data: reservation,
    });
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
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "invalid reservation id",
      });
    }
    const reservation = await Reservation.findByIdAndDelete(id);
    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "reservation not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "reservation delete successfully",
      data: reservation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
